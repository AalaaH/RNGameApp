import {Text, StyleSheet} from 'react-native'
import Color from '../../constants/Color';

function Title({children}){

    return <Text style={styles.title}>{children}</Text>
}

export default Title;
const styles=StyleSheet.create({
title:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
    borderColor: 'white',
    borderWidth:2,
    padding:12
}
});