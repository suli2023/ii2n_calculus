import { View, Text, StyleSheet } from "react-native";

export default function TriangleScreen() {
    return (
      <View style={styles.container}>
        <Text>Háromszög</Text>
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