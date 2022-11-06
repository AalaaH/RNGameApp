import {View,StyleSheet} from 'react-native';
import Color from '../../constants/Color'

function Card({children}){
    return  <View style={styles.cardcontainer}>{children}</View>

}
export default Card;
const styles= StyleSheet.create({
    cardcontainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:36,
            marginHorizontal:24,
            padding: 16,
            backgroundColor: Color.Primary800,
            borderRadius:8,
            elevation:4,
            shadowColor:'black',
            shadowOffset:{width:0, height: 2},
            shadowRadius:6,
            textAlign:'center',
            marginVertical:8,
            fontWeight:'bold',
            color:Color.accent500

    }
});