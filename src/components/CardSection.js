import React from 'react';
import {View, StyleSheet} from 'react-native';

const cardSection = (props) => {
    return(
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
};
const styles =StyleSheet.create({
   containerStyles: {
       borderBottomWidth: 1,
       padding: 5,
       backgroundColor:'#fff',
       justifyContent: 'flex-start',
       flexDirection: 'row',
       borderColor:'#ddd',
       position: 'relative'
   }
});
export default cardSection;