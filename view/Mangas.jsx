import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, StatusBar, Image, FlatList, ImageBackground, Text, ScrollView, Pressable, TextInput } from 'react-native';
import Mangasxd from '../assets/Mangas.jpg';
import FlipCard from 'react-native-flip-card';

function Mangas() {
    const [mangas, setMangas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchMangas = async () => {
            try {
                const urls = [
                    "https://fcb03jwb-8080.brs.devtunnels.ms/mangas/?page=1",
                    "https://fcb03jwb-8080.brs.devtunnels.ms/mangas/?page=2",
                    "https://fcb03jwb-8080.brs.devtunnels.ms/mangas/?page=3",
                    "https://fcb03jwb-8080.brs.devtunnels.ms/mangas/?page=4"
                ];
                const requests = urls.map(url => axios.get(url));
                const responses = await Promise.all(requests);
                const allMangas = responses.flatMap(response => response.data.mangas);
                console.log(allMangas);
                setMangas(allMangas);
            } catch (error) {
                console.error("Failed to fetch mangas:", error);
            }
        };

        fetchMangas();
    }, []);

    const filteredMangas = mangas.filter(manga => manga.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <ImageBackground source={Mangasxd} style={styles.container}>
            <View style={styles.container}>
                <StatusBar hidden />
                <TextInput
                    value={search}
                    onChangeText={text => setSearch(text)}
                    placeholder="Find your favorite Manga..."
                    placeholderTextColor="white"
                    style={styles.input}
                />
                <StatusBar hidden />
                <FlatList
                    data={filteredMangas}
                    horizontal
                    keyExtractor={(item) => String(item._id)}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.imageWrapper} >
                                <FlipCard
                                    style={styles.card}
                                    friction={6}
                                    perspective={1000}
                                    flipHorizontal={true}
                                    flipVertical={false}
                                    flip={false}
                                    clickable={true}
                                >
                                    <View style={styles.face}>
                                        <Image source={{ uri: item.cover_photo }} style={styles.Image} />
                                    </View>
                                    <View style={{
                                        width: 200,
                                        height: 350,
                                        borderRadius: 16,
                                        borderColor: `${item.category_id.color}`,
                                        borderWidth: 3,
                                        resizeMode: 'cover',
                                        padding: 10,
                                    }}>
                                        <ScrollView>
                                            <Text style={{
                                                color: `${item.category_id.color}`,
                                                fontSize: 18,
                                            }}>{item.category_id.name}</Text>
                                            <Text style={styles.Text}>{item.description}</Text>
                                            <Pressable style={styles.Button}>
                                                <Text>Read</Text>
                                            </Pressable>
                                        </ScrollView>
                                    </View>
                                </FlipCard>
                            </View>
                        );
                    }}
                />
            </View >
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.90)',
    },
    Image: {
        width: 200,
        height: 350,
        borderRadius: 16,
        borderColor: '#4B3FD5',
        borderWidth: 3,
        resizeMode: 'cover',
    },
    imageWrapper: {
        width: 220,
        marginVertical: 200,
        shadowOffset: {
            width: 0,
            height: 8,
        },
    },
    back: {

    },
    ImageBack: {
        width: 200,
        height: 350,
        borderRadius: 16,
        borderColor: '#4B3FD5',
        borderWidth: 3,
        resizeMode: 'cover',
    },
    Text: {
        color: 'white',
    },
    Button: {
        backgroundColor: '#4B3FD5',
        width: "90%",
        height: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 8,
    },
    input: {
        height: 40,
        width: "95%",
        padding: 10,
        color: 'white',
        borderColor: '#4B3FD5',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 30,
        marginHorizontal: 10,
    },
}
);

export default Mangas;
