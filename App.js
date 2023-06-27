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
    try {
      fetch("http://192.168.4.136:3000/api/get-posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data.documents);
        });
    } catch (error) {
      alert(error.message);
    }
  }, [posts]);

  const createPost = async () => {
    try {
      fetch("http://192.168.4.136:3000/api/create-posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          name: name,
        }),
      }).then((res) => res.json());
      alert("succesfully posted");
      setName("");
      setText("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.bigContainer}>
      <View
        style={{
          marginVertical: 20,
          padding: 10,
          width: 350,
          height: 150,
          backgroundColor: "white",
          alignSelf: "center",
          justifyContent: "center",
          zIndex: 1,
          borderRadius: 10,
          display: toggle ? "flex" : "none",
          borderWidth: 1,
          borderColor: "#004C99",
          shadowColor: "white",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 3,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={name}
            placeholder="write your name"
            style={styles.input}
            onChangeText={(e) => setName(e)}
          />
          <Pressable
            title="enter"
            style={{ width: 70, height: 40 }}
          ></Pressable>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={text}
            placeholder="write text !!!!"
            style={styles.input}
            onChangeText={(e) => setText(e)}
          />
          <Pressable
            title="enter"
            style={styles.pressabel}
            onPress={createPost}
          >
            <Text style={{ color: "white" }}>Enter</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {posts &&
            posts.map((e) => {
              return <Post value={e} key={e._id} />;
            })}
        </View>
      </ScrollView>

      <Pressable
        style={styles.button}
        onPress={() => {
          setToggle(!toggle);
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    zIndex: 0,
  },
  buttonContainer: {
    width: 350,
    height: 70,
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#004C99",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#004C99",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    position: "absolute",
    bottom: 40,
    right: 10,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#004C99",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    color: "#004C99",
    shadowColor: "#004C99",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    marginRight: 10,
  },
  pressabel: {
    width: 70,
    height: 40,
    backgroundColor: "#004C99",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#004C99",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});
