import { ScrollView, StyleSheet, Text, View } from "react-native";
import Carrossel from "../components/carrossel";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ImageBackground, Image } from "expo-image";
import { Stack, router } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#0B1215", dark: "#0B1215" }}
      headerImage={
        <ImageBackground
          source={require("@/assets/images/BannerVelocity.png")}
          style={styles.headerImage}
        >
          <View style={styles.overlay} />

          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>
              Pedale em Grupo,{'\n'}Sem Complicação
            </Text>

            <Text style={styles.bannerSubtitle}>
              Encontre ciclistas, descubra eventos e participe de
              pedaladas incríveis.
            </Text>

            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push("/profile")}
            >
              <Text style={styles.ctaText}>Explorar Eventos</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      }
    >
      <Stack.Screen
        options={{
          title: "PedalHub",
          headerStyle: { backgroundColor: "#0F2027" },
          headerTintColor: "#fff",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 22,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/profile")}
              style={{ marginRight: 15 }}
            >
              <Image
                source={{ uri: "https://i.pravatar.cc/100" }}
                style={styles.avatar}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView style={styles.body} contentContainerStyle={styles.scrollContent}>
        <Section title="Em Destaque" />
        <Section title="Perto de você" />
        <Section title="Eventos populares" />
      </ScrollView>
    </ParallaxScrollView>
  );
}

function Section({ title }: { title: string }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <View style={styles.cardsRow}>
        <Carrossel />
        <Carrossel />
        <Carrossel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#0B1215",
  },

  scrollContent: {
    paddingBottom: 40,
  },

  section: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
  },

  cardsRow: {
    flexDirection: "row",
    gap: 16,
  },

  headerImage: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  bannerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 68,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 86,
  },

  bannerSubtitle: {
    color: "#ddd",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 34,
    maxWidth: 600,
  },

  ctaButton: {
    marginTop: 30,
    backgroundColor: "#204455",
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 10,
  },

  ctaText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ffffff2b",
  },
});