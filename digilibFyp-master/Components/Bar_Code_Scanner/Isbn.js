import { View, Text, StyleSheet, ScrollView, Image, Linking, ActivityIndicator, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

const Isbn = ({ navigation, route }) => {

  const { isbn } = route.params;
  const [status, setStatus] = useState(null);
  const [datas, setData] = useState([]);
  const [isloaded, setLoaded] = useState(true);


  let isbn_value;
  let Link_value;

  const handleApi = async () => {
    const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${isbn}`);
    const bookisbn = await data.json();
    setLoaded(false);
    // console.log(bookisbn);

    // console.log(bookisbn.items[0].volumeInfo.industryIdentifiers);
    // const values = bookisbn.items;
    // console.log(values);

    setData(bookisbn.items)
    console.log('Value Data', datas);
    Link_value = bookisbn.items[0].volumeInfo.previewLink.includes(`${isbn}`);
    console.log("Link Value isbn :", Link_value);

    bookisbn.items.forEach(element => {
      console.log(element);
      for (let i in element.volumeInfo.industryIdentifiers) {
        console.log(element.volumeInfo.industryIdentifiers[i])
        let obj = element.volumeInfo.industryIdentifiers.find(o => o.type === 'ISBN_13');
        isbn_value = obj.identifier;
        console.log("Identifier Value :", isbn_value);
      }
      const check = () => {
        if (isbn_value === isbn || Link_value == true) {
          console.log("The book is available in NED Library")
          setStatus(true);

        }
        else {
          console.log('Sorry!! This book is not available');
        }

      }
      check();

    });


  }
  const check = () => {
    if (isbn_value === isbn || Link_value == true) {
      console.log("The book is available in NED Library")
      setStatus(true);
    }
    else {
      console.log('Sorry!! This book is not available');
      setStatus(false);
    }

  }
  useEffect(() => {
    handleApi();
  }, [isbn])

  if (status == null) {
    return (
      <View style={styles.container}>
        {
          isloaded ? (
            <View>
              <ActivityIndicator size={50} color='#74b1e0' />
            </View >
          ) : (
            <View>
              <View>

                <Text style={{ fontSize: 25 }}>No Data is Available</Text>
                <Text>No ISBN is Scanned</Text>
              </View>
            </View>

          )}
      </View>
    )
  }

  if (status == true) {

    return (
      <View style={styles.container}>
        {
          isloaded ? (
            <View>
              <ActivityIndicator size={50} color='#74b1e0' />
            </View >
          ) : (
            <View>
              <View>
                <ScrollView>
                  <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#000' }}>Isbn:  {isbn}</Text>
                  <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#000' }}>Status: <Text style={{ color: '#3ED443' }}>Book is Available </Text></Text>
                  {datas.slice(0, 1).map((item, index) => (

                    <View style={styles.content}>
                      <Text style={{ marginVertical: 10, marginHorizontal: 10, fontSize: 30, fontFamily: 'fantasy', color: '#000' }}>
                        Title: {item.volumeInfo.title}</Text>
                      <Image source={{ uri: item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : '	https://al-ameenacademy.org/wp-content/themes/eikra/assets/img/noimage-420x273.jpg' }}
                        style={{ height: 200, width: 200, marginHorizontal: 80, marginVertical: 15 }}
                        key={index} resizeMode='contain' />
                      <Text style={{ marginHorizontal: 10, fontSize: 18, color: '#000' }}>Authors: {item.volumeInfo.authors}</Text>
                      <Text style={{ marginHorizontal: 10, fontSize: 18, color: '#000' }}>Publisher: {item.volumeInfo.publisher}</Text>
                      <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#000' }}>Publish Date: {item.volumeInfo.publishedDate}</Text>
                      <Text style={styles.link} onPress={() => Linking.openURL(item.volumeInfo.previewLink)}>
                        More Details
                      </Text>
                      <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#000', fontSize: 17 }}>Description: </Text>
                      <Text style={{ color: '#6E6E6E', marginHorizontal: 9 }}> {item.volumeInfo.description ? item.volumeInfo.description : 'No Description Available ...'}</Text>
                    </View>
                  ))}

                </ScrollView>
              </View>
            </View>

          )}
      </View>
    )
  }
  if (status === false) {

    return (
      <View style={styles.container}>
        {isloaded ? (
          <View>
            <ActivityIndicator size={50} color='#74b1e0' />
          </View>
        ) : (
          <View >
            <ScrollView>
              <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#000' }}>Isbn:  {isbn}</Text>
              <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#000' }}>Status: <Text style={{ color: 'red' }}>Book is not Available </Text></Text>
              {datas.slice(0, 1).map((item, index) => (
                <View style={styles.content}>
                  <Text style={{ marginVertical: 10, marginHorizontal: 10, fontSize: 30, fontFamily: 'fantasy', color: '#000' }}>
                    Title: {item.volumeInfo.title}</Text>
                  <Image source={{ uri: item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : '	https://al-ameenacademy.org/wp-content/themes/eikra/assets/img/noimage-420x273.jpg' }}
                    style={{ height: 200, width: 200, marginHorizontal: 80, marginVertical: 15 }}
                    key={index} resizeMode='contain' />
                  <Text style={{ marginHorizontal: 10, fontSize: 18, color: '#000' }}>Authors: {item.volumeInfo.authors}</Text>
                  <Text style={{ marginHorizontal: 10, fontSize: 18, color: '#000' }}>Publisher: {item.volumeInfo.publisher}</Text>
                  <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#000' }}>Publish Date: {item.volumeInfo.publishedDate}</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL(item.volumeInfo.previewLink)}>
                    More Details
                  </Text>
                  <Text style={{ marginHorizontal: 10, fontSize: 15, color: '#000', fontSize: 17 }}>Description: </Text>
                  <Text style={{ color: '#6E6E6E', marginHorizontal: 9 }}> {item.volumeInfo.description ? item.volumeInfo.description : 'No Description Available ...'}</Text>
                </View>
              ))}

            </ScrollView>
          </View>

        )}
      </View>
    )

  }

}

export default Isbn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text:
  {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#000'
  },
  link: {
    marginHorizontal: 10,
    fontSize: 15,
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 10
  }
})
