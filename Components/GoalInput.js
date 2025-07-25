import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ addGoal, isVisible, setModalVisible }) => {
  const [goalTextInput, setGoalTextInput] = useState("");

  return (
    <Modal visible={isVisible} animationType="fade">
        <View style={styles.inputContainer}>
            <Image source={require(`../assets/Images/goal.png`)} style={styles.image}/>
            <TextInput
                placeholder="Enter a Your Goal"
                style={styles.textInput}
                onChangeText={(e) => setGoalTextInput(e)}
                value={goalTextInput}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add" onPress={()=>{addGoal(goalTextInput); setGoalTextInput(""); setModalVisible(false)}} />
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={()=>{setModalVisible(false)}}/>
                </View>
            </View>
        </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    flex: 1,
    backgroundColor: "#311b6b",
    padding:6
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    width: "75%",
    padding: 10,
    backgroundColor: '#e4d0ff',
  },
  image:{
    width: 100,
    height: 100,
    margin: 20, 
  },
  buttonContainer: {
    marginVertical: 16,
    flexDirection: "row"
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});
