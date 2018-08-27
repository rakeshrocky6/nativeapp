import React from 'react';
import {Text, View, StyleSheet, Image, Linking} from 'react-native';
import Card from "./Card";
import CardSection from './CardSection';
import Button from "./Button";

const AlbumsDetails = ({album}) => {
    const {thumbnail_image, title, artist, image,url} = album;
    const {thumbnailImage, containerStyles, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailImage}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={containerStyles}>
                    <Text style={headerTextStyle}> {title}</Text>
                    <Text> {artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    BUY NOW
                </Button>
            </CardSection>
        </Card>
    );
};
const styles = StyleSheet.create({
    containerStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailImage: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});
export default AlbumsDetails;