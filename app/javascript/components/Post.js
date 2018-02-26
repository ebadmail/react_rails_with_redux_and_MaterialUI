import React from "react"
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

function post(state = null, action) {
  return state;
}

const reducer = combineReducers({ post });

function PostComponent(props) {
  const { id, body } = props;

  return (
    <div>
      <h1>Post</h1>
      <div>{id}</div>
      <div>{body}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return state.post;
}

const PostContainer = connect(mapStateToProps)(PostComponent);

export default function Post(props) {
  const store = createStore(reducer, props);

  return (
    <Provider store={store}>
      <PostContainer />
    </Provider>
  );
}
