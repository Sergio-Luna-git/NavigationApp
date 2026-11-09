import { Redirect } from 'expo-router'

const App = () => {

    return <Redirect href={'/(stack)/home'} />

    /*return (
        <SafeAreaView className='mt-10 ml-10'>
            <Text style={{ fontFamily: 'WorkSans-Black' }} className='text-4xl text-secondary-100'>Texto 1</Text>
            <Text className='font-work-medium text-3xl text-blue-500'>Texto 2</Text>
            <Text className='font-work-light text-2xl'>Texto 3</Text>
            <StatusBar barStyle="dark-content" />
        </SafeAreaView>
    )*/
}

export default App