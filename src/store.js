import { configureStore } from "@reduxjs/toolkit";
import PositionSlice from "./components/Hero/heroSlice";

export default configureStore({
  reducer: {
    position: PositionSlice.reducer,
  },
});
