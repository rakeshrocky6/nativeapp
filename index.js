import React from 'react';
import {View,AppRegistry,} from 'react-native';
import Header from "./src/components/Header";
import AlbumsList from "./src/components/AlbumsLists";



const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'ALBUMS'}/>
        <AlbumsList/>
    </View>
);
AppRegistry.registerComponent('nativeapp', () => App);

