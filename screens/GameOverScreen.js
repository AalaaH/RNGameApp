import {Text,View, Image, StyleSheet} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Color from '../constants/Color';
import Title from '../components/ui/Title';

function GameOverScreen({userNumber, roundNumber, onStartNewGame}){
    return (
    <View style={styles.rootcontainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
           <Image 
           style={styles.Image} 
           source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.highlightedtext}>Your Phone needed 
            <Text style={styles.highlighted}>{userNumber} </Text> 
             rounds to guess the number 
            <Text style={styles.highlighted}>{roundNumber} </Text>
            </Text>
         <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
         </View>
    )
};

export default GameOverScreen;
const styles= StyleSheet.create({
    rootcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24
    },
    imageContainer:{
        height:300,
        width:300,
        borderRadius:150,
        borderColor:Color.Primary800,
        borderWidth:3,
        overflow:'hidden',
        margin:36
    },
    Image:{
        width:'100%',
        height:'100%'
    },
    highlightedtext:{
        fontSize:22,
        paddingBottom:12
    },
    highlighted:{
        fontWeight:'bold',
        fontSize:20,
        color:Color.Primary500,
        textAlign:'center',
        marginBottom:24
        

    },
   
});