import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userId: null,
  email: null,
  userName: null,
  userToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      const result = action.payload;
      state.email = action.payload.result.email;
      state.userId = action.payload.result.userId;
      state.userToken = action.payload.result.token;
      console.log('Action palyLoad', action.payload);
      // if (
      //   action.payload.portal === '4103149' &&
      //   action.payload.password === 'pass12345'
      // ) {
      //   state.userToken = 'aasd';
      //   AsyncStorage.setItem('token', state.userToken);
      // } else {
      //   alert('Credentials are not Correct');
      // }
    },
    signOut: state => {
      state.userToken = null;
      AsyncStorage.removeItem('token');
    },
    //   signUp:()=>{
    //     setUserToken('aassd');
    //     setLoading(false);
    //   },
  },
});

// Action creators are generated for each case reducer function
export const {signIn, signOut} = authSlice.actions;

export default authSlice.reducer;
