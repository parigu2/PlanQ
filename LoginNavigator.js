import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/components/home';
import Login from './src/components/login';
import Signup from './src/components/signup';

const LoginNavigator = createStackNavigator({
    Home: {screen: Home},
    Login: {screen: Login},
    Signup: {screen: Signup},
})

export default createAppContainer(LoginNavigator);