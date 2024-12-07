import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TeamControls = ({ team, onAdjustScore }) => {
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onAdjustScore(team, 'increment')}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onAdjustScore(team, 'decrement')}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TeamControls;
