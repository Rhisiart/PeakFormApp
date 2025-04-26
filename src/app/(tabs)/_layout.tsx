import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}>
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          //header: () => (<></>)
          tabBarIcon: () => <FontAwesome name="calendar" size={24} color="black" />,
        }}
      />
      {/*  <Tabs.Screen 
        name="plan"
        options={{
          title: "Plan",
          tabBarIcon: () => <FontAwesome name="calendar" size={24} color="black" />
        }}
      />
      <Tabs.Screen 
        name="library"
      />
      <Tabs.Screen 
        name="conversation"
      />
      <Tabs.Screen 
        name="progress"
      />
      <Tabs.Screen 
        name="settings"
      />*/}
    </Tabs>
  );
}
