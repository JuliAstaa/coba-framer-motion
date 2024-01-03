import { createSlice } from "@reduxjs/toolkit";

export const PositionSlice = createSlice({
  name: "position",
  initialState: {
    position: {
      x: 0,
    },
    source: "/blackhole.webm",
  },
  reducers: {
    setPosition: (state, actions) => {
      state.position = actions.payload;
    },
  },
});

export default PositionSlice;
export const { setPosition } = PositionSlice.actions;

export const positionValue = (state) => state.position.position;
export const videoSource = (state) => state.position.source;
