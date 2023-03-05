import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import About from '../screens/About';
import History from '../screens/History';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="History" component={History} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}