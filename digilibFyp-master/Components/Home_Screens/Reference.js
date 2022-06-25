import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'


export default function Reference({navigation}) {
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
                <View style={styles.content}>
                    <Text style={styles.heading}>Reference Section</Text>
                    <Image style={{ width: 350, height: 200 ,marginHorizontal:5 }} source={
                        require('../../assets/reference.png') } resizeMode="contain" />
                    
                    <Text style={styles.text}>The primary objective of the Reference section is to provide information and services to support the academic and research needs of NED University students, faculty, and staff.{"\n"}{"\n"}
                        The Reference section of the Library houses the Library's reference books, which are those materials that are meant to aid research by providing quick and accessible information on any particular topic. These materials are usually used to find facts or provide broad overviews of topics.
                        Dictionaries, encyclopedias, bibliographies, handbooks, standards, indexes and guides are some of the most common reference materials found in the Library’s Reference Collection. Latest editions of textbooks on engineering and allied sciences are also available.{"\n"}{"\n"}
                    </Text>

                    <Text style={styles.subheading}>Issue/Return Policy</Text>
                    <Text style={styles.text}>
                        •	 Library Members can borrow books from reference on presentation of their University I.D. card as well as Portal I.D. through automated system.{"\n"}{"\n"}
                        •  The use of the reference material is only restricted for study inside the library.{"\n"}
                    </Text>
                    <Text style={styles.heading}>Government Documents and Archives</Text>
                    <Image style={{ width: 350, height: 200 ,marginHorizontal:5 }} source={
                        require('../../assets/govntdoc.png') } resizeMode="contain" />
                  
                    <Text style={styles.text}>
                        Government Documents and Archives Section contains publications of federal and provincial government’s acts, codes and ordinance, statistical yearbooks, bulletins and economic survey reports, annual report of banks, universities and so on.
                        This specialized collection proves to be a great asset, essentially fulfilling the research related queries of the library users/researchers. The section provides reference based reader services to its users.{"\n"}{"\n"}
                    </Text>
                    <Text style={styles.subheading}>Services</Text>
                    <Text style={styles.text}>
                        •	The information related to required material can be accessed through Online Public Access Catalogue (OPAC) search.{"\n"}{"\n"}
                        •	 Books are issued only for reading or photocopying within the premises of the library on submission of University ID Card{"\n"}
                    </Text>

                    <Text style={styles.heading}>Non Book Material Section {"\n"}</Text>
                    <Image style={{ width: 350, height: 200 ,marginHorizontal:5 }} source={
                        require('../../assets/nonbookmaterial.png') } resizeMode="contain" />
                  
                    <Text style={styles.text}>
                    {"\n"}
                        Engr. Abul Kalam Library holdings are also enriched with a growing collection of over 3000 Non-Book/Audio-Visual materials.
                        The Non-Book material Section is providing reference based services equipped with up-to-date Electronic Resources like CDs and DVDs accompanied with books and journals.
                        The section provides an advance support for research based activities especially for scholars, teachers, graduate and undergraduate students.
                        The collection deals with almost all engineering fields, also medical, history, geography, arts and social sciences subjects.{"\n"}{"\n"}
                        Software such as MATLAB, LabView, Visual Studio, Engineering Index (a searchable collection of journals, articles, proceedings, etc.) and Geotechnique 50 (collection of Full Text articles of this magazine) are some of the salient resources.
                        Microform, Audio/Video cassettes and Cartographic materials like maps, charts are also part of this section. The information in the material is processed, arranged and disseminated according to Dewey Decimal Classification scheme.{"\n"}{"\n"}
                    </Text>
                    <Text style={styles.heading}>PERIODICALS</Text>
                    <Image style={{ width: 350, height: 200 ,marginHorizontal:5 }} source={
                        require('../../assets/periodicals.png') } resizeMode="contain" />
                  
                    <Text style={styles.text}>

                        The periodical section supports the teaching and research mission of the NED University .
                        The section is working on making all its acquisition available to readers after maintenance, management and arranging periodicals on the shelves.
                        Back issues of the periodicals underwent the process of binding for archiving and preservation to prevent them from tearing apart and then putting them on the shelves.Inter library loan service is also provide to users.{"\n"}{"\n"}

                    </Text>

                </View>

            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
    },
    btns:
    {
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
    text:
    {
        fontSize: 15,
        color: "#000",
        marginVertical: 10
    },
    subheading:
    {
        fontSize:22,
        color:'#000',
    },
    heading:
    {
        fontSize: 32,
        color: '#000',
        textAlign: 'center',
        marginTop:20,
    },
})
