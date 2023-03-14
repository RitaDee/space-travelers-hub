import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  list: [],
  isFetching: false,
};

export const fetchMissions = createAsyncThunk('missions/fetch',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => ({
      ...state,
      isFetching: false,
      list: action.payload,
    }));
  },
});

export default missionsSlice.reducer;
export const selectMissions = (state) => state.missions.lists;
