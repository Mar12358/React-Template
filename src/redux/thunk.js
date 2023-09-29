import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
const url = 'http://127.0.0.1:3001/api/v1/messages';

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    return 'error';
  }
});

export default fetchGreeting;
