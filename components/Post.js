import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function Post({ value }) {
  return (
    <View style={styles.miniContainer}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.image}
          source="https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg"
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{value.name}</Text>
          <Text style={styles.ago}>6 minutes ago</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.miniButton}></View>
          <View style={styles.miniButton}></View>
          <View style={styles.miniButton}></View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text>{value.text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  miniContainer: {
    width: 350,
    height: 150,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#00B3FF",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    borderRadius: 50,
  },
  profileContainer: {
    height: 50,
    flexDirection: "row",
  },
  nameContainer: {
    width: 250,
    height: 50,
    marginHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  ago: {
    color: "grey",
    fontWeight: 300,
  },
  name: {
    fontWeight: 500,
  },
  buttonContainer: {
    height: 50,
    width: 50,
    flexDirection: "column",
    justifyContent: "center",
  },
  miniButton: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: "grey",
    marginVertical: 1,
  },
});
