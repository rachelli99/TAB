import React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import People from '@material-ui/icons/People';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const CONTACTS_ROUTE = { label: 'Contacts', path: './ContactPage.js', icon: People }
const PROFILE_ROUTE = { label: 'Profile', path: './ProfilePage.js', icon: AccountCircle }
const HISTORY_ROUTE = { label: 'History', path: './historyPage.js', icon: FormatListBulletedIcon }
const TASK_ROUTE = { label: 'Task', path: './TaskPage.js', icon: AssignmentTurnedInIcon }

const Tab = createBottomTabNavigator();
const routes = [
    CONTACTS_ROUTE,
    PROFILE_ROUTE,
    HISTORY_ROUTE,
    TASK_ROUTE,
]

export default function NavBar() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              return <route.icon/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
            {routes.map(route => {
                return (
                    <Tab.Screen
                        name={route.label}
                        component={route.path}
                    />
                )
            })}
        </Tab.Navigator>
    )
}