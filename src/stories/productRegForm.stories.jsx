import React from 'react';
import ProductRegForm from '../components/prod-reg-form/component';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { globalBoxStyle } from '../config/constants';
const client = new ApolloClient({ uri: 'http://localhost:9000/graphql' });

export default {
    title: "Product Registration Form",
    component: ProductRegForm,
    argTypes: {
        product: {
            itemKey: String,
            price: String,
            desc: String,
            image: String,
            variants: [String]
        },
        boxStyle:{
            
        }
    }
}
const Template = (args) => <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}><ProductRegForm {...args}></ProductRegForm>  </ApolloHooksProvider>
</ApolloProvider>
export const ProductRegFormStory = Template.bind({});
ProductRegFormStory.args = {
    product: {
        itemKey: 334475, "desc": "Pallet Jack Truck 21*42 ", "price": "$1426.95", "variants": ['red', 'blue', 'yellow', 'green']
    },
    boxStyle:globalBoxStyle
}