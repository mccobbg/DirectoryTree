import { Text, SafeAreaView, StyleSheet, View } from "react-native";

// You can import supported modules from npm
import { Card } from "react-native-paper";

// or any files within the Snack
import Directory from "./components/Directory";

import dirTree from "./root";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Directory Tree</Text>
      <Card>
        <Directory directory={dirTree} />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
