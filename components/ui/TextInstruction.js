import {StyleSheet, Text} from 'react-native';
import Color from '../../constants/Color'


function TextInstruction({children, style}){
return <Text style={[styles.textinstruction, style]}>{children}</Text>
}
export default TextInstruction;

const styles=StyleSheet.create({
       
    textinstruction:{
        color:Color.accent500,
        fontSize:24
    },
});