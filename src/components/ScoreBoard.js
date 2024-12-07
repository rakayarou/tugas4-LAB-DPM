import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TeamControls from './TeamControls';

const ScoreBoard = ({ teamA, teamB, scoreA, scoreB, onAdjustScore }) => {
  return (
    <View style={styles.container}>
      {/* Team A Section */}
      <View style={styles.teamSection}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <TeamControls team="A" onAdjustScore={onAdjustScore} />
      </View>

      {/* Team B Section */}
      <View style={styles.teamSection}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <TeamControls team="B" onAdjustScore={onAdjustScore} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  teamSection: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ScoreBoard;
