import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductSCreen = () => {

    const { id } = useLocalSearchParams();

    const product = products.find(p => p.id === id)
    if (!product) {
        return <Redirect href={'/(stack)/products'} />
    }

    return (
        <SafeAreaView className='px-5 mt-2'>
            <Text className="font-work-black text-2xl">{product.title}</Text>
            <Text>{product.description}</Text>
            <Text className="font-work-black text-2xl">{product.price}€</Text>
        </SafeAreaView>
    )
}

export default ProductSCreen