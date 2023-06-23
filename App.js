import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import Post from "./components/Post";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("http://192.168.4.72:3000/api/get-posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.documents);
      });
  }, [posts]);

  const createPost = async () => {
    console.log(name, text);
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ opacity: toggle ? "0.1" : "1", zIndex: 0 }}>
        <View style={styles.container}>
          {posts &&
            posts.map((e) => {
              return <Post value={e} key={e._id} />;
            })}
        </View>
      </ScrollView>
      <View
        style={{
          width: 350,
          height: 250,
          backgroundColor: "white",
          position: "absolute",
          top: 200,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          borderRadius: 10,
          display: toggle ? "flex" : "none",
          opacity: toggle ? "1" : "0.5",
          borderWidth: 1,
          borderColor: "white",
          shadowColor: "#00B3FF",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 3,
        }}
      >
        <TextInput
          placeholder="write your name"
          style={styles.input}
          onChangeText={(e) => setName(e)}
        />
        <TextInput
          placeholder="write text !!!!"
          style={styles.input}
          onChangeText={(e) => setText(e)}
        />
        <Pressable title="enter" style={styles.pressabel} onPress={createPost}>
          <Text style={{ color: "white" }}>Enter</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          setToggle(!toggle);
        }}
      >
        <Text style={{ fontSize: "30", color: "white" }}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B3FF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    zIndex: 0,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#00B3FF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 10,
    top: 54,
    right: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#00B3FF",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#00B3FF",
    width: 300,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    color: "#00B3FF",
    shadowColor: "#00B3FF",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  pressabel: {
    width: 100,
    height: 50,
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
