import {createStackNavigator} from '@react-navigation/stack'
import {createAppContainer} from 'react-navigation'
import Home from '../Components/Home'
import Login from './Login'
import Otp from './Otp'
import Password from './Password'

const Stack=createStackNavigator({
    Home:
    {
        screen:Home
    },
    Login:
    {
        screen:Login
    },
    Otp:
    {
        screen:Otp
    },
    Password:
    {
        screen:Password
    }
})

export default createAppContainer(Stack)
