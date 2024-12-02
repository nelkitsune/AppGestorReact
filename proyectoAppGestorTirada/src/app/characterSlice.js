import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    characters: [],
};

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacter: (state, action) => {
            state.characters.push(action.payload);
        },
        updateCharacter: (state, action) => {
            const index = state.characters.findIndex(character => character.id === action.payload.id);
            if (index !== -1) {
                state.characters[index] = action.payload;
            }
        },
        deleteCharacter: (state, action) => {
            state.characters = state.characters.filter(character => character.id !== action.payload);
        },
    },
});

export const { addCharacter, updateCharacter, deleteCharacter } = characterSlice.actions;
export default characterSlice.reducer;