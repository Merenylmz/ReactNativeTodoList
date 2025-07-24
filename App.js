import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [goalTextInput, setGoalTextInput] = useState("");
  const [goals, setGoals] = useState([]);

  const handleButton = () =>{
    setGoals((previousGoals)=>[...previousGoals, {id: Math.random().toString(), title: goalTextInput}]);
    setGoalTextInput("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter a Your Goal' style={styles.textInput} onChangeText={(e)=>setGoalTextInput(e)} value={goalTextInput}/>
        <Button title='Add' onPress={()=>handleButton()} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(goal)=>{
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{goal.item.title}</Text>
            </View>
          )
        }} keyExtractor={(item)=>{return item.id}}/>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    width: "80%",
    padding: 8,
  },
  goalsContainer: {
    flex: 10,
    borderTopWidth: 1,
    paddingTop:15
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },  
  goalText:{
    color: "#fff"
  }

});
