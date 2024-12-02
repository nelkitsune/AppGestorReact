import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import selectedCharacterReducer from './selectedCharacterSlice';

export default configureStore({
    reducer: {
        characters: characterReducer,
        selectedCharacter: selectedCharacterReducer,
    },
});