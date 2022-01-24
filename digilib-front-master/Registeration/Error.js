import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
function Error(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{props.message}</Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    container:
    {
        width: '100%',
        alignItems: 'center',
        margin: 10
    },

    error:
    {
        fontSize: 20,
        marginBottom: 10,
        color: 'red',
    }
})
