import { ScrollView, StyleSheet, Text, View } from "react-native";
import Carrossel from "../components/carrossel";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { Image } from 'expo-image';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';

const AnimatedView = Animated.View;

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
        />
      }>
    <ScrollView
      style={styles.body}
      contentContainerStyle={styles.scrollContent}>
      <Text style={styles.titleHero}>Em Destaque:</Text>
      <View style={styles.titleContainer}>
        <Carrossel/>
        <Carrossel/>
        <Carrossel/>
      </View>
      <Text style={styles.titleHero}>Perto de voce:</Text>
      <View style={styles.titleContainer}>
        <Carrossel/>
        <Carrossel/>
        <Carrossel/>
      </View>
      <Text style={styles.titleHero}>Em Destaque:</Text>
      <View style={styles.titleContainer}>
        <Carrossel/>
        <Carrossel/>
        <Carrossel/>
      </View>
    </ScrollView>
  </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  titleHero: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 30,
    paddingHorizontal: 16,
    color: '#fff',
  },
  scrollContent: {
    paddingBottom: 32 // extra space at bottom if needed
  },
  headerImage: {
    width: '100%',
    height: '100%',
  }
});

