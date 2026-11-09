import CustomButton from '@/components/CustomButton';
import { Href, Link, router } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const menuItems = [
        { id: 1, label: 'Products', path: '/products' as Href },
        { id: 2, label: 'Perfil', path: '/profile' as Href },
        { id: 3, label: 'Ajustes', path: '/settings' as Href }

    ];


    return (
        <SafeAreaView>
            <View className="px-10">
                <Text className="text-5xl text-primary">Home</Text>

                <Link href="/profile" asChild>
                    <CustomButton className="mb-10" color='primary'>Perfil</CustomButton>
                </Link>

                <Link href="/settings" asChild>
                    <CustomButton className="mb-10" color='secondary'>Ajustes</CustomButton>
                </Link>

                <CustomButton className="mb-10"
                    onPress={() => router.push('/products')}
                    color='tertiary'>

                    Products

                </CustomButton>


                <Link href="/settings" asChild>
                    <CustomButton className="mb-10" variant='text-only' color='primary'>
                        Ajustes variante
                    </CustomButton>
                </Link>
            </View>
        </SafeAreaView>




    )
}

export default HomeScreen