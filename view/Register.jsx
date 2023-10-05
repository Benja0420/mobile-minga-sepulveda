import { Text, View, StyleSheet, ImageBackground, TextInput, Pressable } from "react-native"
import OnePiece from '../assets/OnePiece.jpg'

export default function Register() {
    return (
        <ImageBackground source={OnePiece} style={styles.container}>
            <View style={styles.Register}>
                <View style={styles.content}>
                    <Text style={styles.Title}>Sign up</Text>
                    <Text style={styles.require}>Email</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.require}>Photo(Url)</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.require}>Password</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Pressable style={styles.buttonRegister}>
                        <Text >Register</Text>
                    </Pressable>
                    <Text style={styles.containerText}>
                        <Text style={styles.TextXd}>or </Text>
                        <Text style={styles.TextButton}>Sign in</Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Register: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
    content: {
        width: "80%",
        height: 500,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 10,
        borderColor: '#4B3FD5',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4B3FD5'
    },
    require: {
        fontSize: 20,
        marginBottom: 20,
        color: '#4B3FD5',
        textAlign: 'center'
    },
    input: {
        width: 200,
        height: 30,
        borderColor: '#4B3FD5',
        color: 'white',
        borderWidth: 3,
        borderRadius: 10,
        marginBottom: 5
    },
    buttonRegister: {
        backgroundColor: '#4B3FD5',
        width: 200,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
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