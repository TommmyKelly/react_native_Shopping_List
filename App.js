import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState([]);
  const onPress = () => {
    setCount((preCount) => preCount + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <TextInput style={styles.input} placeholder='Add Task' />
        <View style={styles.items}>
          <Task text={"one"} />
          <Task text={"Two"} />
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  btn: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    color: "#fff",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  items: {
    marginTop: 30,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
