import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductsScreen = () => {
  return (
    //  flex: tipo display que ocupe todo,flex-1: que ocupe toda la pantalla
    // ( auto para ocupar elo que ocupa el contenido de la pantalla) px: pading horizontal
    <SafeAreaView className='flex flex-1 px-4'>
    //crea automaticamente un map de la lista por eso la variable item
      //se va a pedir en el examen!!
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No hay productos</Text>}
        renderItem={({ item }) => (
          <View className='mt-1'>
            <Text className='text2xl font-work-black'>{item.title}</Text>
            <Text className=''>{item.description}</Text>
            <View>
              <Text className='font-work-black'> {item.price}€</Text>
              <Link href={`/drawer/tabs/products/${item.id}`} className='text-primary'>
                Ver detalles
              </Link>
            </View>




          </View>
        )
        }
      />
    </SafeAreaView >






  )
}

export default ProductsScreen