import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
export default function Donation({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>


                <View style={styles.btns}>
                    <TouchableOpacity onPress={() => navigation.navigate('Donation')}>
                        <Text style={styles.txt}>Donation Policy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Staff Directory')}>
                        <Text style={styles.txt}>Staff Directory</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.heading}>Donation Policy</Text>
                <Text style={styles.text}>
                    •	The Engr.Abul Kalam library selectively accepts print and electronic materials according to its subject profile. It accepts gifts and donations in the subject area of engineering, technology and allied sciences.{"\n"}{"\n"}
                    •	The donor should present the typed list of materials he/she wants to donate in advance (in person, by mail, via e-mail, or fax ){"\n"}{"\n"}
                    •	The library does not usually accept duplicates of materials already in collection and the material in poor physical condition.{"\n"}{"\n"}
                    •	The library has a right to accept or reject presented or donated materials at the point of an offer or, if accepted initially for a review, --- after the review process.{"\n"}{"\n"}
                    •	Materials, which the library decides to decline after the review process, might be discarded or given back to the donor, or gives to other needy user.{"\n"}{"\n"}
                    •	The donor is responsible to arrange the delivery or transfer of a donation / gift.{"\n"}{"\n"}
                    •	No special restrictions and requirements should be imposed by a donor as to the location and utilization of donated items.{"\n"}{"\n"}
                    •	Once offered and accepted, donations become the property of the library and cannot be returned to the donor.{"\n"}{"\n"}
                    •	Acknowledgement letters are sent to a donor, as the library appreciates the donor’s generosity in presenting a gift to the library. In this regard kindly share your name and e-mail address with library.{"\n"}{"\n"}
                    {"\n"}
                </Text>
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
    text:
   {
      fontSize: 15,
      color: "#000",
      marginVertical: 10,
      marginHorizontal: 15,

   },
   heading:
   {
      fontSize: 32,
      color: '#000',
      textAlign: 'center',
      marginTop: 20,
   },


}
)