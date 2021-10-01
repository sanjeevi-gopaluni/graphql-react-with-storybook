import React from 'react';
import ProductTileCard from '../components/productTile';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
const client = new ApolloClient({ uri: 'http://localhost:9000/graphql' });

export default {
    title: "Product Tile Card",
    component: ProductTileCard,
    argTypes: {
        product: {
            itemKey: String,
            price: String
        }
    }
}
const Template = (args) => <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}><ProductTileCard {...args}></ProductTileCard>  </ApolloHooksProvider>
</ApolloProvider>
export const ProductTile = Template.bind({});
ProductTile.args = {
    product: {
        itemKey: 334475, "desc": "Pallet Jack Truck 21*42 ", "price": "$1426.95", "variants": ['red', 'blue', 'yellow', 'green']
    }
}