import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,

} from "react-native";
import { useState} from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
 
  const router = useRouter();

  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onChangeEmail = (text) => {
    setUsers({ ...users, email: text });
  };

  const onChangePassword = (text) => {
    setUsers({ ...users, password: text });
  };

  const onSubmit =  async () => {
    const { email, password } = users;

    if (email.trim() === "" || password.trim() === "") {
      setError("이메일 또는 비밀번호를 입력해주세요");
      return;
    }

    let response ; 
    // API 연동
     try {
       response = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
        headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ email, password }),
       }); 

       const re =  await response.json();

       console.log("response :" , re) ; 

       if (!response.ok) {
         throw new Error("이메일 또는 비밀번호가 맞지않습니다.");
       }
     } catch (error) {
       console.error(error);
       setError(error.message);
     }
   router.push({
    pathname: '/(tabs)/home',
    params: {nickname: "태용짱" } // mock data 
  });
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>EzTalk - 로그인</Text>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText1}>
          Sign in or continume as a guest to
        </Text>
        <Text style={styles.subTitleText2}>place your order</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label1}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email을 입력해주세요"
          onChangeText={(text) => onChangeEmail(text)}
        />
        <Text style={styles.label2}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password를 입력해주세요"
          onChangeText={(text) => onChangePassword(text)}
        />
        <Text style={[styles.error, { opacity: error ? 1 : 0 }]}>
          {error || " "}
        </Text>

        <TouchableOpacity style={styles.Button}>
          <Text>구글 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={onSubmit}>
          <Text>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text>게스트 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={()=> router.push("/sign")}>
          <Text>계정 생성</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    position: "relative",
    top: -100,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    position: "relative",
    top: -80,
  },
  label1: {
    fontSize: 16,
    fontWeight: "bold",
    position: "relative",
    left: -155,
    top: -70,
    marginBottom: 10,
  },
  label2: {
    fontSize: 16,
    fontWeight: "bold",
    position: "relative",
    left: -140,
    top: -80,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  subTitle: {
    flexDirection: "column",
    alignItems: "center",
  },
  subTitleText1: {
    fontSize: 16,
    fontWeight: "bold",
    position: "relative",
    top: -90,
    marginBottom: 10,
  },
  subTitleText2: {
    fontSize: 16,
    top: -90,
    fontWeight: "bold",

    marginBottom: 10,
  },
  Button: {
    width: "90%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 3,
    marginBottom: 10,
    position: "relative",
    top: -70,
  },
  error: {
    color: "red",
    fontSize: 14,
    position: "relative",
    top: -80,
    left: -75,
  },
});
