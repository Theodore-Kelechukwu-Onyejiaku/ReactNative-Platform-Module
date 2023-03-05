import 'react-native-gesture-handler';
import { Platform } from "react-native"
import DrawerNavigation from "./navigations/DrawerNavigation";
import BottomTabNavigation from "./navigations/BottomTabNavigation";

const App = Platform.select({
  ios: () => <BottomTabNavigation />,
  android: () => <DrawerNavigation />
})
export default App;