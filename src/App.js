import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

function App() {
  const [name, setName] = React.useState('')

  const CREATE_USER = gql(`
  mutation createUser($name: String) {
    createUser(name: $name) {
      name
    }
  }
`);
  const GET_USERS = gql(`
  query getUsers {
    users {
      name
    }
  }
`);
  const GET_PRODUCTS = gql(`query getProducts{products{itemKey,price,desc,customCut}}`)
  const createUserHandler = (cache, { data: { createUser } }) => {
    const { users } = cache.readQuery({ query: GET_USERS });
    cache.writeQuery({
      query: GET_USERS,
      data: { users: users.concat([createUser]) },
    });
  };

  const renderSubmitButton = createUser => (
    <button
      onClick={() => createUser({ variables: { "name": name } })}
    >
      Create
    </button>
  );

  const renderContent = (obj) => {
    console.log("obj",obj)
    let{ loading, error, data } = obj;
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error</h2>;
    return (
      <div>
        <h2>User List</h2>
        <input
          onChange={ev => setName(ev.target.value)}
          placeholder="New username..."
          value={name}
        />
        <Mutation mutation={CREATE_USER} update={createUserHandler}>
          {renderSubmitButton}
        </Mutation>
        <Mutation mutation={CREATE_USER} update={createUserHandler}>
          {updateSubmitButton}
        </Mutation>
        <ul>
          {data.users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  const renderProducts = (obj) => {
    let { loading, error, data } = obj;
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error</h2>;
    return (
      <div><h2>Product List</h2>
        <ul>
          {data?.products.map((product, index) => (
            <li key={index}>{JSON.stringify(product)}</li>
          ))}
        </ul>
      </div>)
  }
  const render = () => {
    return <>
    <Query query={GET_USERS}>{renderContent}</Query>
    <Query query={GET_PRODUCTS}>{renderProducts}</Query>
    </>;
  }
  return render()
}

export default App;
