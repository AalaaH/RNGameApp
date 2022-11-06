
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Color from'../../constants/Color'

function PrimaryButton({children, onPress}){
   
    return (
    <View style={Styles.buttonOuterContainer}>
        <Pressable 
        style={({pressed}) => pressed ? [Styles.buttonInnerContainer, Styles.pressed]: Styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{color: Color.Primary800}}>
        <Text style={Styles.buttonText}>{children}</Text>
        </Pressable>
    </View> 
    )
}

export default PrimaryButton;
const Styles=StyleSheet.create({
buttonOuterContainer:{
    borderRadius:28,
    margin:4,
    overflow:'hidden',
},
buttonInnerContainer:{
    backgroundColor: Color.Primary500,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2
},
buttonText:{
    color:'white',
    textAlign:'center'
},
pressed:{
    opacity:0.75
}
});