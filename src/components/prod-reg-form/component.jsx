import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { isEmpty } from '../../util/utils';
import Typography from "@material-ui/core/Typography";
import { UPDATE_PRODUCT } from "../../config/queryConstants";
import { useMutation } from '@apollo/client';
export default function ProductRegFrom(props) {

    const [createProduct] = useMutation(UPDATE_PRODUCT, {
        onCompleted(data) {
            setSaveStatus(true); setSaveResponse(data)
        }
    });
    const [saveResponse, setSaveResponse] = useState({});
    const { boxStyle } = props;
    const [saveStatus, setSaveStatus] = useState(false);
    const [product, setProduct] = useState(props.product || {})

    const [selectedVariants, setSelectedVariants] = useState(!isEmpty(props) && !isEmpty(props.product) && !isEmpty(props.product.variants) ? props.product.variants : []);

    const variantsMap = [{ name: 'red', label: 'Red' }, { name: 'green', label: 'Green' }, { name: 'yellow', label: 'Yellow' }, { name: 'blue', label: 'Blue' }]
    const handleChange = (e) => {
        let prd = { ...product };
        prd[e.target.name] = e.target.value;
        setProduct({ ...prd });
    }

    useEffect(()=>{
        setProduct(props.product||{});
        setSelectedVariants(!isEmpty(props) && !isEmpty(props.product) && !isEmpty(props.product.variants) ? props.product.variants : [])
    },[props.product])

    const handleVariantSelection = (e) => {
        let { name, checked } = e.target;
        let temp = [...selectedVariants]
        let index = temp.indexOf(name);
        if (checked == true) {
            if (index == -1) {
                temp.push(name);
                setSelectedVariants(temp);
            }
        } else {
            if (index != -1) {
                temp.splice(index, 1);
                setSelectedVariants(temp);
            }
        }
    }
    const getVariantState = (name) => {
        return selectedVariants.includes(name);
    }
    const handleClose = (e) => {
        if (props.handleClose != undefined) { props.handleClose(e) }
    }
    const handleSave = (e) => {

        let data = { ...product };
        if (selectedVariants != undefined && selectedVariants.length > 0) {
            data.variants = [...selectedVariants];
        }
        setSaveStatus(false);
        createProduct({ variables: data })
    }
    console.log("product::",product)
    const renderForm = () => {
        return <Card style={{ border: "none", boxShadow: "none" }}>
            <CardContent style={{ padding: "0px" }}>
                <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom>
                    {"Product Registraion Form"}
                </Typography>
                <div>
                    <TextField
                        name="desc"
                        required
                        fullWidth
                        id="outlined-required"
                        label="Product Desc"
                        value={!isEmpty(product.desc) ? product.desc : ""}
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <TextField
                        name="itemKey"
                        required
                        id="filled-required"
                        fullWidth
                        label="Product SKU"
                        value={!isEmpty(product.itemKey) ? product.itemKey : ""}
                        onChange={(e) => { handleChange(e) }}
                    />
                    <TextField
                        name="price"
                        required
                        id="filled-required"
                        fullWidth
                        label="Price"
                        value={!isEmpty(product.price) ? product.price : ""}
                        onChange={(e) => { handleChange(e) }}/>
                    <TextField
                        name="image"
                        required
                        id="filled-required"
                        fullWidth
                        label="Image Url"
                        value={!isEmpty(product.image) ? product.image : ""}
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <FormGroup>
                        <Typography className={"MuiTypography--heading"} variant={"h6"} gutterBottom>
                            {"Choose Variants"}
                        </Typography>
                        {variantsMap.map(obj => <FormControlLabel control={<Checkbox name={obj.name} checked={getVariantState(obj.name)} onChange={(e) => handleVariantSelection(e)} />} label={obj.label} />)}
                    </FormGroup>
                </div>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={(e) => handleClose(e)}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={(e) => handleSave(e)}>Save</Button>
            </CardActions>
        </Card>
    }
    const renderMsg = () => {
        if (!isEmpty(saveResponse) && !isEmpty(saveResponse.updateProduct)) {
            return <Card style={{ border: "none", boxShadow: "none" }}>
                <CardContent style={{ padding: "0px" }}>
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom>
                        {"Product Created Successfully"}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" onClick={(e) => handleClose(e)}>Close</Button>
                </CardActions>
            </Card>
        }
    }
    return (
        <Box
            component="form"
            sx={boxStyle || {}}
            noValidate
            autoComplete="off"
        >
            {saveStatus == true ? renderMsg() : renderForm()}
        </Box>
    );
}
