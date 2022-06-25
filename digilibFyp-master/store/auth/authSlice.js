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
<<<<<<< HEAD:digilib-front-master/store/auth/authSlice.js
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
=======
    signIn:(state,action)=>{
        // setUserToken('aassd');
        // setLoading(false);
       console.log('In signIn reducer', action.payload ,state)
        if(action.payload.portal==='4103149' && action.payload.password==='pass12345')
        {
          state.userToken='aasd'
          AsyncStorage.setItem('token',state.userToken)
        } 
        else
        {
          
          alert("Credentials are not Correct");
        }
      },
      signOut:(state)=>{
        state.userToken=null
        AsyncStorage.removeItem('token')
        
      },
>>>>>>> 0c51cf98cd13a0bade8a7b99bb01cf32168719a7:digilibFyp-master/store/auth/authSlice.js
    //   signUp:()=>{
    //     setUserToken('aassd');
    //     setLoading(false);
    //   },
  },
});

// Action creators are generated for each case reducer function
export const {signIn, signOut} = authSlice.actions;

export default authSlice.reducer;
