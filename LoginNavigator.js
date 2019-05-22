import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/components/home';
import Login from './src/components/login';
import Signup from './src/components/signup';
import Main from './src/components/main';

const LoginNavigator = createStackNavigator({
    Home: {screen: Home},
    Login: {screen: Login},
    Signup: {screen: Signup},
    Main: {screen: Main},
})

export default createAppContainer(LoginNavigator);