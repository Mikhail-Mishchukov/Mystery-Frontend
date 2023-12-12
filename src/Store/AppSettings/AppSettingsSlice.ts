import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppSettingsState, UserData } from './Entities';

const initialState: AppSettingsState = {
    userData: {
        username: '',
        isAuthorized: false,
    },
};

export const counterSlice = createSlice({
    name: 'AppSettings',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
        },
    },
});

export const { setUserData } = counterSlice.actions;

export const appSettingsReducer = counterSlice.reducer;
