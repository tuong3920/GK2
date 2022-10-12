import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './style'
const Task = (data) => {
  const {number}= data;
  const numberText=number<10?`0${number}`:number;
  const itembg=number%2===0? styles.chan:styles.le;
  return (
    <TouchableOpacity onPress={data.onDeleteTask}>
            <View style={styles.item}>
              <View style={[styles.control,itembg]}>
              <Text style={styles.controltext}>{numberText}</Text>
              </View>
              <Text style={styles.contenttext}>{data.content}</Text>
            </View>
    </TouchableOpacity>
  )
}

export default Task;