import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  hasCompletedOnboarding: boolean;
}

const initialState: AppState = {
  hasCompletedOnboarding: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.hasCompletedOnboarding = true;
    },
  },
});

export const { completeOnboarding } = appSlice.actions;
export default appSlice.reducer;
