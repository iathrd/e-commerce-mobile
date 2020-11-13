import React, {useEffect} from 'react'
import {Provider} from 'react-redux';

import store from './src/redux/store';

import Main from './src/screens/Main';
import RNBootSplash from "react-native-bootsplash";

export default function App () {
  let init = async () => {
    // …do multiple async tasks
  };
  useEffect(()=>{
    init().finally(()=>{
      RNBootSplash.hide({duration:200})
    })
  },[])
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
}
