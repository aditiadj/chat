import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

import messages from './messages'
import users from './users'
import App from './App'
import chat from './reducers'
import * as types from '../constants/ActionTypes'

let nextMessageId = 0
const nextUserId = 0

const chat = combineReducers({
  messages,
  users
});

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUserList = users => ({
  type: types.USERS_LIST,
  users
})

const store = createStore(chat)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)

export default chat
