import { StyleSheet } from "react-native";
import color from './../../Color/Color';

const styles=StyleSheet.create({
    addInput:{
        flex:1,
        paddingHorizontal:20,
        flexDirection:'row'
      },
    Input:{
        width:'83%',
        height:50,
        borderColor:'#21a3d0',
        borderWidth:2,
        borderRadius:30,
        paddingHorizontal:14,
        
    },
    
    button:{
        width:50,
        height:50,
        backgroundColor:color.xanhbuton,
        borderRadius:140,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center'
    },
    buttontext:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    }
})
export default styles;