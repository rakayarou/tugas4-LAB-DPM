import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ScoreBoard from '../components/ScoreBoard';
import globalStyles from '../styles/globalStyles';

const HomeScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = "Team A";
  const teamB = "Team B";

  const adjustScore = (team, action) => {
    if (team === "A") {
      const newScore = action === 'increment' ? scoreA + 1 : Math.max(scoreA - 1, 0);
      setScoreA(newScore);
      if (newScore === 10) alert(`${teamA} menang!`);
    } else if (team === "B") {
      const newScore = action === 'increment' ? scoreB + 1 : Math.max(scoreB - 1, 0);
      setScoreB(newScore);
      if (newScore === 10) alert(`${teamB} menang!`);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={globalStyles.container}>
      <ScoreBoard
        teamA={teamA}
        teamB={teamB}
        scoreA={scoreA}
        scoreB={scoreB}
        onAdjustScore={adjustScore}
      />

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetText}>Reset Skor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    marginTop: 20,
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  resetText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
