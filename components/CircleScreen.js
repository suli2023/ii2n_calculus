import { View, Text, StyleSheet } from "react-native";

export default function CircleScreen() {
    return (
      <View style={styles.container}>
        <Text>Kör</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});