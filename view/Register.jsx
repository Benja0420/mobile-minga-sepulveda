import { useState } from 'react';
import axios from 'axios';
import { Alert, Text, View, StyleSheet, ImageBackground, TextInput, Pressable } from "react-native";
import OnePiece from '../assets/OnePiece.jpg';

export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpClick = async () => {
        const data = {
            email,
            password,
            photo
        };
        console.log(data);
        try {
            const response = await axios.post('https://fcb03jwb-8080.brs.devtunnels.ms/auth/register', data);
            Alert.alert(
                'Notification',
                response.data.message,
                [
                    { text: "OK", onPress: () => navigation.navigate('Login') }
                ],
                { cancelable: false }
            );
            console.log('Solicitud exitosa:', response);
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            Alert.alert('Error', error.response.data.message);
        }
    };

    return (
        <ImageBackground source={OnePiece} style={styles.container}>
            <View style={styles.Register}>
                <View style={styles.content}>
                    <Text style={styles.Title}>Sign up</Text>
                    <Text style={styles.require}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="DragonballZ@Krowl.com"
                        placeholderTextColor="gray"
                    />
                    <Text style={styles.require}>Photo(Url)</Text>
                    <TextInput
                        style={styles.input}
                        value={photo}
                        onChangeText={setPhoto}
                        placeholder="Url"
                        placeholderTextColor="gray"
                    />
                    <Text style={styles.require}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="●●●●●●●●●●●●●"
                        placeholderTextColor="gray"
                        secureTextEntry={true} // Oculta la contraseña
                    />
                    <Pressable style={styles.buttonRegister} onPress={handleSignUpClick}>
                        <Text>Register</Text>
                    </Pressable>
                    <Text style={styles.containerText}>
                        <Text style={styles.TextXd}>or </Text>
                        <Text onPress={() => navigation.navigate('Login')} style={styles.TextButton}>Sign in</Text>
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
        color: 'white',
        borderColor: '#4B3FD5',
        borderWidth: 3,
        borderRadius: 10,
        marginBottom: 5,
        paddingHorizontal: 7,
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