import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.default.baseURL = 'https://goit-phonebook-api.herokuapp.com';
const useToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async dataRegister => {
    try {
      const { data } = await axios.post('/users/signup', dataRegister);
      useToken.set(data.token);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const login = createAsyncThunk('auth/login', async dataLogin => {
  try {
    const { data } = await axios.post('/users/login', dataLogin);
    useToken.set(data.token);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    useToken.unset();
  } catch (error) {
    throw new Error(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunckAPI) => {
    const state = thunckAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunckAPI.rejectWithValue();
    }
    try {
      useToken.set(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

// export default { register, login, logOut };
