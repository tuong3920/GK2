import { StyleSheet } from "react-native";
import color from "../../Color/Color";
const styles=StyleSheet.create({
    item:{
        flexDirection:'row',
        width:'95%',
        height:40,
        marginTop:5,
        backgroundColor:'#fff',
        borderRadius:8,
        paddingHorizontal:10,
        alignItems:'center',
        justifyContent:'space-between'
      },
      control:{
        width:'15%',
        height:'80%',
        
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
      },
      chan:{
        backgroundColor:'#C7F4F6',
      },
      le:{
        backgroundColor:'#55f253',
      },
      controltext:{
        fontWeight:'700'
      },
     
      contenttext:{
        width:'80%',
        fontSize:16
      }
})
export default styles;