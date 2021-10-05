import React from 'react';
import {ProductTileStoryCard} from './productTile';
 
export default {
    title: "Product Tile Card",
    component: ProductTileStoryCard,
    argTypes: {
        product: {
            itemKey: String,
            price: String
        }
    }
}
const Template = (args) =>  <ProductTileStoryCard {...args}></ProductTileStoryCard>
export const ProductTile = Template.bind({});
ProductTile.args = {
    product: {
        itemKey: 334475, "desc": "Pallet Jack Truck 21*42 ", "price": "$1426.95", "variants": ['red', 'blue', 'yellow', 'green']
    }
}