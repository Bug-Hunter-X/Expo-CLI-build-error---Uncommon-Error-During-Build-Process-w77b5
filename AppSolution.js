import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>You clicked {count} times</Text>
        <Button title="Click Me" onPress={() => setCount(count + 1)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});