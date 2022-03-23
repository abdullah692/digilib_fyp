import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../store/auth/authSlice';
import Icons from 'react-native-vector-icons/FontAwesome';

export default function CustomDrawer(props) {
    const dispatch = useDispatch()
    const userToken = useSelector((state) => state.auth.userToken)
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>


                <Image style={{ width: 275, height: 100 }}
                    source={
                        require('../assets/abdulkalam.png')} resizeMode="contain" />
                <DrawerItemList {...props} />

                <View >
                    {
                        userToken &&
                        <View style={styles.logout}>
                            <Icons name='sign-out' size={30} />
                            <Text onPress={() => dispatch(signOut())} style={{ fontSize: 22 }}> Logout</Text>
                        </View>
                    }

                </View>


            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    logout:
    {
        flexDirection: 'row',
        marginTop: '100%',
        marginHorizontal: 20
    }
})