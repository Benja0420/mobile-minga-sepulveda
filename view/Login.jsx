import { Text, View, StyleSheet, ImageBackground, TextInput, Pressable, Alert } from "react-native";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HunterX from '../assets/HunterX.jpg';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import saveAuthors from '../redux/actions/me_authors';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.me_authorsReducer);

    const enviarData = async () => {
        const userData = {
            email: email,
            password: password,
        };

        try {
            const credenciales = await axios.post("https://fcb03jwb-8080.brs.devtunnels.ms/auth/signin", userData);
            console.log(credenciales.data.response)
            navigation.navigate("Mangas");
        } catch (error) {
            console.log("errorcito", error);
            setToken("");
            Alert.alert('Login Failed', 'Please check your email and password.');
        }
    }

    return (
        <ImageBackground source={HunterX} style={styles.container}>
            <View style={styles.Register}>
                <View style={styles.content}>
                    <Text style={styles.Title}>Login</Text>
                    <Text style={styles.require}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="example@company.com"
                        placeholderTextColor="gray"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    ></TextInput>
                    <Text style={styles.require}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="●●●●●●●●"
                        placeholderTextColor="gray"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    ></TextInput>
                    <Pressable style={styles.buttonRegister} onPress={async () => {
                        await enviarData();
                    }}>
                        <Text>Sign In!</Text>
                    </Pressable>
                    <Text style={styles.containerText}>
                        <Text style={styles.TextXd}>or </Text>
                        <Text onPress={() => navigation.navigate('Register')} style={styles.TextButton}>Sign up</Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Register: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.55)',
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