import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Card = props => {
  return (
    <View style={[styles.cardContainer, props.cStyle]}>{props.children}</View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card />
        <Card cStyle={{borderStyle: 'dashed'}} />
        <Card cStyle={styles.card3} />
        <Card cStyle={styles.card4} />
        <Card>
          <Text numberOfLines={1}>
            Here we go, how it's goin. There we go my little friend
          </Text>
        </Card>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderColor: 'yellowgreen',
    borderWidth: 2,
    marginVertical: 20,
    width: '100%',
    height: 50,
  },
  card3: {
    borderColor: 'red',
    borderWidth: 5,
  },
  card4: {
    borderColor: 'aqua',
    borderStyle: 'dotted',
  },
});

export default App;
