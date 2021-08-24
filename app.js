app.js >
importReactfromreact;
import{styleSheet,text,view,image} from 'react-native';
import{createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import writeStoryScreen from/screens/writeStoryScreen
import readStoryScreen from /screens/readStoryScreen
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function writeStoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>write!</Text>
    </View>
  );
}

function readStoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>read!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="writeStoryScreen" component={writeStoryScreen} />
        <Tab.Screen name="readStoryScreen" component={readStoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}