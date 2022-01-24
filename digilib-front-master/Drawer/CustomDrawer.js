import { View, Image } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>

                <Image style={{ width: 275, height: 100 }}
                    source={
                        require('../assets/abdulkalam.png')} resizeMode="contain" />

                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}
