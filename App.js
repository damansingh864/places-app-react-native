import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { StyleSheet, Text, View } from 'react-native';

import PlacesNavigator from './navigation/PlacesNavigation'
import placesReducer from './store/places-reducers'
import { init } from './helpers/db'

init().then(() => {
  console.log('Initialized database')
}).catch(err => {
  console.log('Initializing db failed.')
  console.log(err);
})

const rootReducers = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducers, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
