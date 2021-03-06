import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
                headerTitleAlign: 'center'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github',
                headerTitleAlign: 'center'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#7159c1'
            }
        }
    })
)

export default Routes;