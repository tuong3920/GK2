import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView} from 'react-native';
import Task from './components/Task';
import styles from './App.style';
import Form from './components/Form';

export default function App() {
  const [ltask, setltask] = useState([])
  const addTask=(text)=>{
    //Add Task
    setltask([...ltask,text]);
  }
  const deleteTask=(index)=>{
    Alert.alert(
      "Thông báo",
      "Bạn có chắc muốn xóa",
      [
        { text: "OK", onPress: () => {
          let ltaskTmp=[...ltask]
          ltaskTmp.splice(index,1)
          setltask(ltaskTmp);
          
        } },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel")
        }
      ]
    );
  }
  return (
    <View style={styles.container}>
     <Text style={styles.headtext}>Todo List</Text>
      <View style={styles.body}>
      <View style={styles.items}>
        <ScrollView>
          {
            ltask.map((item,index)=>{
              return <Task key={index} content={item} number={index+1} onDeleteTask={()=>deleteTask(index)}/>
            })
          }
        </ScrollView>
       </View>
      </View>
      <Form addText={addTask}/>
    </View>
  );
}

;

