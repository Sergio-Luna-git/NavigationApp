import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'


const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'purple',
            headerShown: false,
        }}>
            <Tabs.Screen
                name='home/index'
                options={{
                    headerStyle: {
                        backgroundColor: 'pink'
                    },
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }} />
            <Tabs.Screen
                name='favorites/index'
                options={{
                    headerStyle: {
                        backgroundColor: 'pink'
                    },
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
                }} />

            <Tabs.Screen
                name='(stack)'
                options={{
                    headerStyle: {
                        backgroundColor: 'pink'
                    },
                    title: 'Stack',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="file-excel-o" color={color} />
                }}
            >


            </Tabs.Screen>
        </Tabs>
    )
}

export default TabsLayout