import { View,Keyboard, Text ,TextInput, TouchableOpacity,KeyboardAvoidingView, Alert} from 'react-native'

import React,{useState} from 'react'
import styles from './style'

const Form = (add) => {
    const [text, settext] = useState('')
    const addTask=()=>{
        if(text.length===0){
            alert('Vui long nhap cong viec')
            return
        }
        add.addText(text)
        settext('')
        Keyboard.dismiss()
    }

  return (
    <KeyboardAvoidingView  style={styles.addInput}
    behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <TextInput style={styles.Input} placeholder='Your task'
        onChangeText={settext}
        value={text}
        />
        <TouchableOpacity onPress={addTask}>
            <View style={styles.button}>
                <Text style={styles.buttontext}>+</Text>
            </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
  )
}

export default Form;