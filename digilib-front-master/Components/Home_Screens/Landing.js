import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Landing({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.btns}>
                <TouchableOpacity onPress={()=>navigation.navigate('Landing')}>
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
                    <Text style={styles.heading}>Book Bank</Text>
                    <Image style={{ width: 300, height: 180 ,marginHorizontal:30 }} source={
                        require('../../assets/bookbank.png')} resizeMode='contain' />
                    <Text style={styles.text}> Book Bank has been mainly designed to facilitate undergraduate students of NED University only. The collection of Book Bank comprises of text books which are updated regularly.{"\n"}{"\n"}</Text>
                    <Text style={styles.subheading}>Membership </Text>
                    <Text style={styles.text}>
                        •	Students are required to submit one (01) recent passport size photograph and a photocopy of their University ID Card on notified dates which are communicated through departmental Notice Board.{"\n"}{"\n"}
                        •In case the borrower card is lost or damaged, the borrower must inform the concerned library personnel immediately in writing, so that lost library card will not be misused by any other person and a duplicate card can be issued at prescribed fee.{"\n"} </Text>


                    <Text style={styles.subheading}>Issue/Return Policy</Text>
                    <Text style={styles.text}>
                        •	Users must present their university identity card and borrower card at the time of borrowing books.{"\n"}{"\n"}
                        •	Book Bank issues up to 6 books to every member, for a semester on rent, which is 10% of cost of the book.{"\n"}{"\n"}
                        •	Books are issued on first-come-first serve basis on notified dates which are announced on departmental notice board at the beginning of semester.{"\n"}{"\n"}
                        •	Members must sign corresponding book card at the time of issuance of book(s) and submit it to the dealing staff.{"\n"}{"\n"}
                        •	Students are required to return the borrowed books within seven days after completion of semester examination, which is notified.{"\n"}</Text>
                    <Text style={styles.subheading}>Fine Policy</Text>
                    <Text style={styles.text}>
                        •	If book is not returned by the due date then late return fine will be charged @ Rs. 10.00 per book per day.{"\n"}{"\n"}
                        •	If the book(s) are damaged mutilated or lost, the defaulter shall be required to replace the books with the new one or to pay as per library policy.{"\n"}

                    </Text>

                    <Text style={styles.heading}>Circulation Section</Text>
                    <Image style={{ width: 300, height: 180 ,marginHorizontal:30 }} source={
                        require('../../assets/Ciculation.png')} resizeMode="contain" />

                    <Text style={styles.text}>
                        Circulation section is generally known as one of the key department of any library and is committed to serve library patrons by performing or assisting with various functions related to the accessibility and circulation of library materials.
                        The core function of this section is to provide books to its users for specified period depending upon the category of their membership.{"\n"}
                    </Text>
                    <Text style={styles.subheading}>Membership</Text>
                    <Text style={styles.text}>
                        •	Undergraduate students are required to submit one (01) recent passport size photograph and a photocopy of their University ID Card on notified dates which are communicated through departmental Notice Board.{"\n"}{"\n"}
                        •	Postgraduate students are required to submit one (01) recent passport size photograph along with a copy of their University ID Card.{"\n"}{"\n"}
                        •	Faculty members and employees desiring membership are required to fill up the membership form and submit photocopy of their university ID card along with two passport size photographs.
                        After completion of this process, they are issued a library membership borrower card. {"\n"}{"\n"}
                        •	Faculty members and employees must renew their membership and borrower card in case of promotion, change of designation or change of department etc.{"\n"}
                    </Text>

                    <Text style={styles.subheading}>Issue/Return Policy</Text>
                    <Text style={styles.text}>
                        •	Borrower card is non-transferable and users must present University ID card and library borrower card at the time of borrowing books.{"\n"}{"\n"}
                        •	Faculty members and employees must present thier library borrower card only at the time of borrowing books.{"\n"}{"\n"}
                        •	The circulation section issues books for a specified period of time, after which the borrower must either return the book or re-issue the book. {"\n"}{"\n"}
                        •	Members must sign corresponding book card at the time of issuance of book(s) and submit it to the dealing staff. While returning the book(s), members must ensure removal of the book card(s) from his/her Library Borrower Card.{"\n"}{"\n"}
                        •	Books are re-issued online to faculty members for one time basis.{"\n"}{"\n"}
                        •	In case the borrower card is lost or damaged, the borrower must inform the concerned library personnel immediately in writing, so that the duplicate card can be issued at prescribed fee.{"\n"}{"\n"}
                        •	In case the borrower card is lost or damaged, the borrower must inform the concerned library personnel immediately in writing, so that lost library card will not be misused by any other person and a duplicate card can be issued at prescribed fee.{"\n"}{"\n"}
                        •	Duplicate borrower card will only be issued to the applicant, if the library dues are cleared.{"\n"}
                    </Text>

                    <Text style={styles.subheading}>Loan Period</Text>
                    <Image style={{ width:350, height: 450,marginHorizontal:2 }} source={
                        require('../../assets/loan.png')} resizeMode="contain" />


                    <Text style={styles.subheading}>Fine Policy</Text>
                    <Text style={styles.text}>
                        •	If book is not returned by the due date then late return fine will be charged @ Rs. 10.00 per book per day.{"\n"}{"\n"}
                        •	If the book(s) are damaged mutilated or lost, the defaulter shall be required to replace the books with the new one or to pay as per library policy.{"\n"}

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
    heading:
    {
        fontSize: 35,
        color: '#000',
        textAlign: 'center',
        marginTop:20,
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

    }

})
