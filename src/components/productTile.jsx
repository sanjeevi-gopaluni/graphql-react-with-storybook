import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { globalImg } from '../config/constants'
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { gql, useMutation } from '@apollo/client';
import "./styles.css";
import { UPDATE_PRODUCT, PRODUCT_BY_ITEM_KEY, DELETE_PRODUCT } from "../config/queryConstants";



const styles = muiBaseTheme => ({
  card: {
    minWidth: 250,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 2
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 2}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    width: "32px",
    height: "32px",

  }
});

function ProductTileCard(props) {
  let { classes, product } = props;
  const [desc, setDesc] = React.useState(product != undefined ? product.desc || '' : "");
  const [price, setPrice] = React.useState(product != undefined ? product.price || '' : "");
  const [editFlag, setEditFlag] = React.useState(false);
  const [saveData, { data }] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct, { deleteResdata }] = useMutation(DELETE_PRODUCT);
   
  const renderDesc = () => {
    if (editFlag == true) {
      return <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        onChange={(e) => { setDesc(e.currentTarget.value) }}
        value={desc}
      />
    } else {
      return <Typography
        className={"MuiTypography--heading"}
        variant={"subTitle1"}
        gutterBottom>
        {desc}
      </Typography>
    }
  }
  const renderPrice = () => {
    if (editFlag == true) {
      return <TextField
        id="outlined-multiline-static"
        label="Price"
        onChange={(e) => { setPrice(e.currentTarget.value) }}
        value={price}
      />
    } else {
      return<Typography
      className={"MuiTypography--subheading "}
      variant={"subTitle2"}
      display={"block"}>
      {price}
    </Typography>
    }
  }
  const getProdObjToSave = () => {
    let temp = { ...product };
    temp.desc = desc;
    temp.price = price;
    return temp;
  }
  const render = () => {
    return <>
      <div className={props.className || "productTileSection"}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={product?.image || globalImg}
          />
          <CardContent className={classes.content}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"subTitle1"}
              display={"block"}
              gutterBottom>
              {`SKU#:${product.itemKey || ''}`}
            </Typography>
            {renderDesc()}
            {renderPrice()}
            
            <Divider className={classes.divider} light />
            {product != undefined && product.variants != undefined && Array.isArray(product.variants) && product.variants.map(color => (
              <Avatar className={classes.avatar} key={"var-" + color} style={{ "background-color": color }} />
            ))}
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="delete">
              <DeleteIcon onClick={(e)=>{
                deleteProduct({ variables: {"itemKey":product.itemKey} });
                if(props.refresh!=undefined){
                  props.refresh();
                }
              }}/>
            </IconButton>
            <IconButton aria-label="edit">
              {editFlag == true ? <SaveIcon onClick={(e) => {
                saveData({ variables: getProdObjToSave() });
                setEditFlag(!editFlag);
              }} /> : <EditIcon onClick={() => { setEditFlag(!editFlag); }} />}
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </>
  }
  return render();
}

export default withStyles(styles)(ProductTileCard);