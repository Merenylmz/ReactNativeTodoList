import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleAddButton = (enteredText) =>{
    setGoals((previousGoals)=>[...previousGoals, {id: Math.random().toString(), title: enteredText}]);
  }

  const startAddGoalHandler = ()=>{
    setModalVisible(true);
  }

  const deleteGoalHandler = (id) => {
    setGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal)=>goal.id != id);
    });
  }

  return (
    <View style={styles.container} >
      <Button title='Add New Goal' color={"#5e0acc"} onPress={startAddGoalHandler}/>
      <GoalInput addGoal={handleAddButton} isVisible={modalVisible} setModalVisible={setModalVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(goal)=>{
          return <GoalItem item={goal.item} deleteGoalHandler={deleteGoalHandler}/>
        }} keyExtractor={(item)=>{return item.id}}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#311b6b"
  },
  goalsContainer: {
    flex: 10,
    borderTopWidth: 1,
    paddingTop:15
  }
});
