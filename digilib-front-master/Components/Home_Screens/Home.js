import React,{useState,useEffect} from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
var { width } = Dimensions.get("window")


function Home({navigation}) {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        setBanner(["https://library.neduet.edu.pk/sites/default/files/library%20campus.png",
            "https://library.neduet.edu.pk/sites/default/files/bbank.png",
            "https://library.neduet.edu.pk/sites/default/files/CIR%201.png"])
        return () => {
            setBanner([])
        }
    }, [])

    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Lending')}>
                        <Text style={styles.txt}>Lending</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('Reference')}>
                        <Text style={styles.txt}>Reference</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('Digital Library')}>
                        <Text style={styles.txt}>Digital Library</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.swiper}>
                    <Swiper
                        style={{ height:width / 2 }}
                        showButton={false}
                        autoplay={true}
                        autoplayTimeout={3}
                    >
                        {banner.map((item) => {
                            return (
                                <Image
                                    key={item}
                                    style={styles.imageBanner}
                                   resizeMode="cover"
                               source={{ uri: item }} />
                            )
                        })}
                    </Swiper>
                </View>
           <View>
           <Image style={{ width:360, height:120 ,marginHorizontal:15}} source={
                        require('../../assets/abdulkalam.png') } resizeMode="contain" />
           </View>
          
                <View >
                    <Image style={{ width:300, height:200,marginHorizontal:45}} source={
                        require('../../assets/library.jpg') } resizeMode="contain" />
                </View>

                <View style={styles.content}>
                    <Text style={styles.heading}>Welcome Message</Text>
                    <Text style={styles.text}>It gives me immense pleasure to welcome you all to Engr. Abul Kalam Library. The NED University is proud to possess a well-equipped and fully computerized library.
                        It is the locus for imparting in depth and up to date knowledge in related technical and research fields.
                        The Engr. Abul Kalam library devotes considerable efforts and resources to the development of a comfortable educational environment.
                        It is deeply committed to its students and is pledged to excellence in education.</Text>

                    <Text style={styles.text}>The library collection includes general circulation books, reference books, encyclopedias, handbooks, periodicals, research journals, government and archive documents.
                        The library provides specialized services in the university campus utilizing computerized retrieval of bibliographic databases containing references to thousands of articles, books, proceedings, technical reports and statistics. </Text>

                    <Text style={styles.text}>The university library has a global presence and continually works for further development of its services. We aim to provide the best services possible.
                        As Chief Librarian, I take this opportunity to welcome our vibrant students to become partners in this journey of innovation. I hope you find this beautiful journey leading towards a promising and successful future.</Text>

                    <Text style={styles.name}>Mrs. Huma Sardar (Ag. Librarian)</Text>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    swiper:
    {
        width: width,
        alignItems: 'center',
        marginTop: 10
    },
    imageBanner:
    {
        height: width / 2,
        width:"100%",
        padding:2,
    },
   
    btns:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical:15
    },
    txt:
    {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#74b1e0'
    },
    content:
    {
        marginVertical:10,
        marginHorizontal: 15,
    },
    heading:
    {
        fontSize: 28,
        marginBottom: 20,
        color: "#000",
    },
    text:
    {
        fontSize: 18,
        color: "#000",
        marginVertical: 10
    },
    img:
    {
        width: 100,
        height: 250
    },
    name:
    {
        fontSize: 17,
        color: '#000',
        marginTop: 15

    }

})
