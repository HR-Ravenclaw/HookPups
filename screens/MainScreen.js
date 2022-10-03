import EventMain from '../events/EventMain.js';
import Requests from '../components/Requests/requests.js';
import CardSwipe from '../components/Home/cardSwipe.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainScreen = () => {

  function renderHome () {
    return <Entypo name="home" size={24} color="black" />;
  }

  function renderMap () {
    return <FontAwesome name="map-marker" size={24} color="black" />;
  }

  function renderEvents () {
    return <MaterialIcons name="event-note" size={24} color="black" />;
  }

  function renderMatches () {
    return <MaterialCommunityIcons name="heart-multiple" size={24} color="black" />;
  }

  function renderProfile () {
    return <MaterialIcons name="account-box" size={24} color="black" />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Map"
          component={CardSwipe}
          options={{ headerShown: false, tabBarIcon: renderMap, tabBarActiveTintColor: 'black', tabBarActiveBackgroundColor: '#CDB4DB' }}
        />
        <Tab.Screen
          name="Events"
          component={EventMain}
          options={{ headerShown: false, tabBarIcon: renderEvents, tabBarActiveTintColor: 'black', tabBarActiveBackgroundColor: '#CDB4DB' }}
        />
        <Tab.Screen
          name="Home"
          component={CardSwipe}
          options={{ headerShown: false, tabBarIcon: renderHome, tabBarActiveTintColor: 'black', tabBarActiveBackgroundColor: '#CDB4DB' }}
        />
        <Tab.Screen
          name="Matches"
          component={Requests}
          options={{ headerShown: false, tabBarIcon: renderMatches, tabBarActiveTintColor: 'black', tabBarActiveBackgroundColor: '#CDB4DB' }}
        />
        <Tab.Screen
          name="Profile"
          component={CardSwipe}
          options={{ headerShown: false, tabBarIcon: renderProfile, tabBarActiveTintColor: 'black', tabBarActiveBackgroundColor: '#CDB4DB' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;