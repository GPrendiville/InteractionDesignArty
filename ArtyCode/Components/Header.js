import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default function Header(){
    return (
        <View style={{
            height: 70, 
            backgroundColor:"black"
        }}>
            <View tyle={{width: 200, flexDirection: 'row',alignItems: 'center'}}>
                <Text  style={{width: '100%', textAlign: 'center', color:'white'}}>
                         Arty</Text>
            </View>
        </View>
    )
}