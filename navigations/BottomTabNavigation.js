import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import About from "../screens/About"
import History from "../screens/History"

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigation() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator useLegacyImplementation={true} initialRouteName="Home">
                <BottomTab.Screen name="Home" component={Home} />
                <BottomTab.Screen name="About" component={About} />
                <BottomTab.Screen name="History" component={History} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}
{/* <Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator> */}