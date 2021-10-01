import gql from 'graphql-tag';
export const GET_PRODUCTS = gql(`query getProducts{products{itemKey,price,desc,customCut,variants,image}}`)
export const GET_USERS = gql(`
  query getUsers {
    users {
      name
    }
  }
`);
export const PRODUCT_BY_ITEM_KEY = gql(`query productsByItemKey($itemKey:String) {
  productsByItemKey(itemKey:$itemKey){
      itemKey,desc,price
   }}`);
export const UPDATE_PRODUCT = gql`
  mutation updateProduct($itemKey: String!,$desc:String,$price:String,$image:String,$variants:[String]) {
    updateProduct(itemKey: $itemKey,desc:$desc,price:$price,image:$image,variants:$variants) {
      itemKey,desc,price,customCut,variants
    }
  }
`;
export const DELETE_PRODUCT = gql`
  mutation deleteProductByItemKey($itemKey: String!) {
    deleteProductByItemKey(itemKey: $itemKey) {
      status,
      products{
        itemKey,desc,price,customCut
      }
    }
  }
`;