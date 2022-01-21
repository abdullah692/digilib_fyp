import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
function Contact() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Contact Us</Text>
            </View>
            <View style={styles.contact}>
                <Text style={styles.head}>Phone:</Text>
                <Text style={styles.txt}>92(21)99261261-8{"\n"} PABX: 2229,2327,2428,2358</Text>
            </View>
            <View style={styles.contact}>
            <Text style={styles.head1}>Fax:</Text>
            <Text style={styles.txt1}>92(21)99261255</Text>
            </View>
            <View style={styles.contact}>
            <Text style={styles.head1}>Email:</Text>
            <Text style={styles.txt1}>libadmin@neduet.edu.pk</Text>
            </View>
            <View style={styles.contact}>
            <Text style={styles.head2}>Postal Address:</Text>
            <Text style={styles.txt2}>Engr. Abul Kalam Library,{"\n"}
            NED University of Eng. & Tech.{"\n"}
            University Road, Karachi 75270,{"\n"} Pakistan.</Text>
            </View>
            <View style={styles.contact}>
                <Text style={styles.line}>For queries regarding  E Resources contact Ms. Naveen Ali. </Text>
            </View>
            
            <View style={styles.contact}>
            <Text style={styles.head}>Phone:</Text>
            <Text style={styles.txt}>92(21)99261261-8{"\n"}PABX: 2428</Text>
            </View>
            
            <View style={styles.contact}>
            <Text style={styles.head1}>Email:</Text>
            <Text style={styles.txt1}>naveen@neduet.edu.pk</Text>
            </View>
            
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        justifyContent:'center',
       
    },
    heading:
    {
        fontSize:45,
       textAlign:'center',
        borderColor:'#36B5E4',
        color:'#000',
        borderBottomWidth:3,
        marginHorizontal:70,
        marginVertical:20

    },
    txt:
    {
        fontSize:18,
        color: "black",
        marginTop:10
        
    },
    head:
    {
        fontSize:20,
        color: "black", 
        marginTop:18,
        borderBottomWidth:3 ,
        borderColor:'#36B5E4',
        marginHorizontal:30
    },
    head1:
    {
        fontSize:20,
        color: "black", 
        borderBottomWidth:3 ,
        borderColor:'#36B5E4',
        marginHorizontal:30
    },
    txt1:
    {
        fontSize:20,
        color: "black",
    },
    head2:
    {
        fontSize:18,
        color: "black", 
        borderBottomWidth:3 ,
        borderColor:'#36B5E4',
        marginHorizontal:15,
        marginBottom:40
    },
    txt2:
    {
        fontSize:16,
        color: "black",
        textAlign:'left'
    },
    contact:
    {
        flexDirection:'row',
        marginVertical:10
    },
    line:
    {
        padding:10,
        fontSize:22,
        textAlign:'center',
        color:'black'

    }
})
