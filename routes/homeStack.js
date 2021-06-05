import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Developpeur',
            // headerStyle: {
            //     backgroundColor: '#333'
            // }
        },
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ReviewDetails',
            // headerStyle: {
            //     backgroundColor: '#eee'
            // }
        }
    }

}
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{
            backgroundColor: '#eee',height:60
        }
    }
});
export default HomeStack;