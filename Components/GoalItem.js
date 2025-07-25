import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({item, deleteGoalHandler}) => {

    return (
        <Pressable 
            onPress={()=>deleteGoalHandler(item.id)} 
            android_ripple={{color: "#210644"}} 
            style={({pressed})=> pressed && {opacity: 0.5}}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item.title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
