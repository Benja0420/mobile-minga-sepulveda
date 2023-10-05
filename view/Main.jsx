import { Text, View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native'

import Logo from '../assets/Logo.png'
import Naruto from '../assets/Naruto.jpg'


function Main() {
    return (
        <ImageBackground source={Naruto} style={styles.container}>
            <View style={styles.Hero}>
                <Image style={styles.Logo} source={Logo} />
                <Text style={styles.Welcome}>Welcome!</Text>
                <Text style={styles.Text}>all your favorite mangas in one place.</Text>
                <Pressable style={styles.ButtonMangas}>
                    <Text >Explore our mangas!</Text>
                </Pressable>
                <Pressable style={styles.Button}>
                    <Text style={styles.TextButton}>SIGN IN!</Text>
                </Pressable>
                <Text style={styles.containerText}>
                    <Text style={styles.TextXd}>or </Text>
                    <Text style={styles.TextButton}>Sign up</Text>
                </Text>
            </View>
        </ImageBackground>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    Hero: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
    Logo: {
        marginBottom: 15,
        width: 230,
        height: 50
    },
    Welcome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    Text: {
        fontSize: 20,
        marginBottom: 20,
        color: 'white',
        textAlign: 'center'
    },
    ButtonMangas: {
        backgroundColor: '#4B3FD5',
        width: 290,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    Button: {
        borderColor: '#4B3FD5',
        borderWidth: 3,
        width: 290,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        marginTop: 10,
        marginBottom: 10,
    },
    TextXd: {
        color: 'white'
    },
    TextButton: {
        color: '#4B3FD5',
        fontWeight: 'bold'
    }
})