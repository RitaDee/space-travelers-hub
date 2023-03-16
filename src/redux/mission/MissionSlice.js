import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetch', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    list: [],
    isFetching: false,
  },
  reducers: {
    missionUpdated: (state, action) => ({
      ...state,
      list: state.list.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        isFetching: false,
        list: action.payload,
      }))
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isFetching: true,
      }));
  },
});

export const { missionUpdated } = missionsSlice.actions;
export default missionsSlice.reducer;
export const selectMissions = (state) => state.missions.list;
