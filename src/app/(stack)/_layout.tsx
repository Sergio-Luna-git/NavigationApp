import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: 'pink'
            },
            contentStyle: {
                backgroundColor: 'pink'
            },
        }}>
            <Stack.Screen
                name="home/index"
            />
            <Stack.Screen
                name="products/index"
                options={{ 'title': 'Products' }} />
            <Stack.Screen
                name="profile/index"
                options={{ 'title': 'Profile' }} />
            <Stack.Screen
                name="settings/index"
                options={{ 'title': 'Settings' }} />

        </Stack>

    )
}

export default StackLayout