import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import About from '../screens/about';
const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: ' A propos du Developpeur',

        }
    },

}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee', height: 60
        }
    }
});
export default AboutStack;