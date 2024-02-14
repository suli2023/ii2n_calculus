import { View, Text, StyleSheet } from "react-native";

export default function SquareScreen() {
    return (
      <View style={styles.container}>
        <Text>Négyzet</Text>
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