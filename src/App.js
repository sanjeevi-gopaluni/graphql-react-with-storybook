import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import ProductTileCard from './components/productTile';
import { useQuery,useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { PRODUCT_BY_ITEM_KEY, GET_PRODUCTS,PRODUCT_UPSERT_SUBS } from './config/queryConstants';
import { isEmpty } from './util/utils';
import ProductRegFrom from './components/prod-reg-form/component';
import Modal from "@material-ui/core/Modal";
import { globalBoxStyle } from './config/constants';
import { Button } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
function App() {
  const [name, setName] = useState('')
  const { status, data, error, refetch } = useQuery(GET_PRODUCTS)
  const subres = useSubscription(PRODUCT_UPSERT_SUBS ,{
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      console.log("PRODUCT_UPSERT_SUBS",data)
    }
  }, )
  console.log("PRODUCT_UPSERT_SUBS>>",subres)
  const [showModal, setShowModal] = useState(false);
  const renderRefreshButton = () => {
    return <Button color="secondary" variant="contained" onClick={(e) => { refetch() }}>Refresh</Button>
  }
  const renderModalElement=()=>{
    return <Modal
    open={showModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  ><ProductRegFrom boxStyle={globalBoxStyle} handleClose={(e) => { refetch(); setShowModal(false); }}></ProductRegFrom></Modal>;
  }
  const renderModal = () => {
    return (showModal == true ? <>{renderRefreshButton()}{renderModalElement()}</> : <>{renderRefreshButton()}<Button color="primary" variant="contained" onClick={(e) => { setShowModal(true) }}>Register Product</Button></>)
  }
  const renderCard = () => {
    if (!isEmpty(data) && !isEmpty(data.products)) {
      return <section className={"paddingTop2"}>
        {renderModal()}
        <div className={"displayFlex"}>
          <Grid container spacing={2}>
            {data.products.map(prd => <Grid item xs={6} sm={3}><ProductTileCard product={prd} refresh={() => { refetch() }} /></Grid>)}
          </Grid>
        </div>

      </section>
    } else {
      return "No Products to Display"
    }
  }
  return renderCard()
}

export default App;
