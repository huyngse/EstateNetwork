import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface propertyState {
  propertyDetail: any;
}

const initialState: propertyState = {
    propertyDetail: null,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setPropertyDetail: (state, action: PayloadAction) => {
      state.propertyDetail = action.payload;
    },
  },
});

export const { setPropertyDetail } = roleSlice.actions;

export default roleSlice.reducer;
