import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';

const AnimatedView = Animated.View;

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Em Destaque:</ThemedText>
        <AnimatedView style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8, flexDirection: 'row' }}>
          
          <ThemedView style={styles.carrosselContainer}>
            <AnimatedView style={styles.carrosselItem}>
              <AnimatedView style={styles.bannerEventoBody}>
                <Image
                  source={require('@/assets/images/partial-react-logo.png')}
                  style={styles.bannerEventoImage}
                />
                <ThemedText type="subtitle">Evento de Lançamento do PedalHub</ThemedText>
              </AnimatedView>
            </AnimatedView>
          </ThemedView>
        
          <ThemedView style={styles.carrosselContainer}>
            <AnimatedView style={styles.carrosselItem}>
              <AnimatedView style={styles.bannerEventoBody}>'
              <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.bannerEventoImage}
              />
              <ThemedText type="subtitle" >Evento de Lançamento do PedalHub</ThemedText>
              </AnimatedView>
            </AnimatedView>
          </ThemedView> 
          <ThemedView style={styles.carrosselContainer}>
            <AnimatedView style={styles.carrosselItem}>
              <AnimatedView style={styles.bannerEventoBody}>'
              <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.bannerEventoImage}
              />
              <ThemedText type="subtitle" >Evento de Lançamento do PedalHub</ThemedText>
              </AnimatedView>
            </AnimatedView>
          </ThemedView> 
        </AnimatedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  carrosselContainer: {
    width: 320,
    overflow: 'hidden',
    borderRadius: 12,
  },
  carrosselItem: {
    display: 'flex',
  },
  bannerEventoBody: {
    width: 300,
    height: 380,
    borderRadius: 20,
    borderColor: '#fff',
    backgroundColor: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bannerEventoImage: {
    width: '100%',
    height: '50%'
  }
});
