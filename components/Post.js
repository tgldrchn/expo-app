import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useState } from "react";

export default function Post({ value }) {
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const deletePost = async (id) => {
    try {
      fetch(`http://192.168.4.72:3000/api/delete-posts?_id=${id}`);
      alert("succesfully deleted");
    } catch (error) {
      alert(error);
    }
  };

  const uptadePost = async (id, text) => {
    try {
      fetch(`http://192.168.4.72:3000/api/uptade-posts?_id=${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      }).then((res) => res.json());
      alert("succesfully edited");
    } catch (error) {
      alert(error);
    }
  };
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
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setToggle(!toggle)}
        >
          <View style={styles.miniButton}></View>
          <View style={styles.miniButton}></View>
          <View style={styles.miniButton}></View>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text>{value.text}</Text>
      </View>
      <View
        style={{
          display: toggle ? "flex" : "none",
          position: "absolute",
          top: 10,
          right: 30,
          width: 100,
          height: 70,
          backgroundColor: "#00B3FF",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "white",
          shadowColor: "#00B3FF",
          shadowOffset: { width: -1, height: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
        }}
      >
        <Pressable
          title="delete"
          style={styles.button}
          onPress={() => {
            deletePost(value._id);
          }}
        >
          <Text style={styles.text}>Delete</Text>
        </Pressable>
        <Pressable
          title="edit"
          style={styles.button}
          onPress={() => setEdit(!edit)}
        >
          <Text style={styles.text}>Edit</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          display: edit ? "flex" : "none",
        }}
      >
        <TextInput
          placeholder="edit text !!!!"
          style={styles.input}
          onChangeText={(e) => setEditText(e)}
        />
        <Pressable
          title="enter"
          style={styles.pressabel}
          onPress={() => uptadePost(value._id, editText)}
        >
          <Text style={{ color: "white" }}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  miniContainer: {
    width: 350,
    minHeight: 150,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00B3FF",
    shadowColor: "white",
    shadowOffset: { width: -2, height: 2 },
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
    backgroundColor: "#00B3FF",
    marginVertical: 1,
  },
  button: {
    width: 60,
    height: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#00B3FF",
    shadowColor: "white",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  text: {
    color: "grey",
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#00B3FF",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    color: "#00B3FF",
    shadowColor: "#00B3FF",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    marginRight: 10,
  },
  pressabel: {
    width: 70,
    height: 40,
    backgroundColor: "#00B3FF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#00B3FF",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});
