/* eslint-disable prettier/prettier */
import {Form} from 'native-base';
import {default as axios} from 'axios';

import {REACT_APP_BACKEND_URL} from '../../.env';

const http = (token = null) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    headers,
  });
};

export default http;
