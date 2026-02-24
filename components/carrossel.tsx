import { Text, View } from "react-native";
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

export default function Carrossel() {
  return (
    <View style={styles.carrosselContainer}>
      <View style={styles.carrosselItem}>
        <View style={styles.bannerEventoBody}>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.bannerEventoImage}
          />
          <Text>Evento de Lançamento do PedalHub</Text>
        </View>
      </View>
    </View>

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
    flexDirection: 'row', 
    padding: 16
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

