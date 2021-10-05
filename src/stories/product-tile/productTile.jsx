import React from 'react';
import ProductTileCard from '../../components/productTile';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import PropTypes from 'prop-types';
const client = new ApolloClient({ uri: 'http://localhost:9000/graphql' });
export const ProductTileStoryCard = (props) =>{
    return <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}><ProductTileCard {...props}></ProductTileCard>  </ApolloHooksProvider>
</ApolloProvider>
}
ProductTileStoryCard.propTypes = {
    product :PropTypes.object
}
ProductTileStoryCard.defaultProps = {
    product: {
        itemKey: 334475, "desc": "Pallet Jack Truck 21*42 ", "price": "$1426.95", "variants": ['red', 'blue', 'yellow', 'green']
    }
}
 