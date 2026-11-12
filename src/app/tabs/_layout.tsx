import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'


const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'purple' }}>
            <Tabs.Screen
                name='home/index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }} />
            <Tabs.Screen
                name='favorites/index'
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
                }} />
        </Tabs>
    )
}

export default TabsLayout