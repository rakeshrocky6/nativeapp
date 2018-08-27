import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
};
const styles  = StyleSheet.create({
   containerStyles:{
       borderWidth: 1,
       borderRadius:2,
       borderColor:'#ddd',
       borderBottomWidth: 0,
       shadowColor: '#000',
       shadowOffset: {width:0, height:20},
       shadowOpacity: 0.1,
       shadowRadius: 2,
       elevation: 1,
       marginTop: 10,
       marginLeft: 5,
       marginRight: 5
   }
});
export default Card;