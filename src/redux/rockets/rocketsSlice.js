/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocket = createAsyncThunk('rockets/fetch', async () => {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  return data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    isFetching: false,
  },
  reducers: {
    reserveRocket: (state, action) => {
      state.list.map((element) => {
        if (element.rocket_id === action.payload) {
          element.reserved = true;
          return element;
        }

        return { ...element, reserved: true };
      });
    },
    cancelRocket: (state, action) => {
      state.list.map((element) => {
        if (element.rocket_id === action.payload) {
          element.reserved = false;
          return element;
        }
        return { ...element, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocket.fulfilled, (state, action) => {
        const data = action.payload.map((x) => ({ ...x, reserved: false }));
        return { ...state, isFetching: false, list: data };
      })
      .addCase(fetchRocket.pending, (state) => ({
        ...state,
        isFetching: true,
      }));
  },
});

export default rocketsSlice.reducer;

export const selectRocket = (state) => state.rockets.list;
