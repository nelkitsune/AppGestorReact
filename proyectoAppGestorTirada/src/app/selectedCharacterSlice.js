import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCharacter: null,
};

const selectedCharacterSlice = createSlice({
    name: 'selectedCharacter',
    initialState,
    reducers: {
        selectCharacter: (state, action) => {
            state.selectedCharacter = action.payload;
        },
        clearSelectedCharacter: (state) => {
            state.selectedCharacter = null;
        },
    },
});

export const { selectCharacter, clearSelectedCharacter } = selectedCharacterSlice.actions;
export default selectedCharacterSlice.reducer;