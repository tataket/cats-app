import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catData: null,
  username: '',
  email: '',
  message: ''
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCatData: (state, action) => {
      state.catData = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearForm: (state) => {
      return {
        ...state,
        username: '',
        email: '',
        menssage: ''
      };
    }
  }
});

export const { setCatData, setUserName, setEmail, setMessage, clearForm } = formSlice.actions;
export default formSlice.reducer;
