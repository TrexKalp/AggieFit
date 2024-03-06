import { StyleSheet, Button, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function WorkoutTrackerHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Tracker</Text>
      <Text style={styles.body}>Quick Start</Text>
      <View>
        <TouchableOpacity
          onPress={() => console.log("Start A Workout")}
          style={[styles.button, styles.firstButton]}
        >
          <Text style={styles.buttonText}>Start A New Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log("Start Another Workout")}
          style={[styles.button, styles.secondButton]}
        >
          <Text style={styles.buttonText}>Log A New Meal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.templatesHeader}>
        <Text style={styles.subheading}>Templates</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => console.log("Add Template")}>
            <AntDesign name="plussquare" size={28} color={Colors.light.tint} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Another Action")}>
            <AntDesign name="addfolder" size={28} color={Colors.light.tint} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 65,
  },
  templatesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20, // Adjust as needed
  },
  addButton: {
    backgroundColor: "#007bff",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold", // This makes the text bold
  },
  firstButton: {
    backgroundColor: Colors.light.tint, // Blue color for the first button
  },
  secondButton: {
    backgroundColor: Colors.light.tint,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 35,
    marginVertical: 10,
    fontWeight: "bold",
  },
  body: {
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: "bold",
  },
  welcomeMessage: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  card: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
});
