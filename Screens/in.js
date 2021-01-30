import React from 'react';
import {Text,View} from 'react-native'
import AppHeader from '../AppHeader'
export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,
                alignItems:'center',
                justifyContent:'center',
                }}>
                    <AppHeader></AppHeader>
                    <Text>Instagram</Text>
                </View>
        )
    }
}
