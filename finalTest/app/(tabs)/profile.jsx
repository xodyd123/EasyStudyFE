import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const { userId, nickname } = useLocalSearchParams();
  console.log(userId, nickname); 


  const onLogout = () => {
    console.log("로그아웃")
    AsyncStorage.removeItem("accessToken");
    router.replace("/GuestHome")
  } ;  

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.content}>
          <Text>이미지 보여주는 칸</Text>
        </View>
        <View style={styles.content1}>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>닉네임</Text>
          </View>
          <View style={styles.detailContent}>
            <View >
              <Text style={styles.text}>유저 데이터 </Text>
            </View>
            <View style={{marginRight : 10}}>
              <Pressable>
                <Text style={styles.text}>{">"}</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.content1}>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>비밀번호</Text>
          </View>
          <View style={styles.detailContent}>
            <View >
              <Text style={styles.text}>유저 데이터 * 표시해서 보여주기?</Text>
            </View>
            <View style={{marginRight : 10}}>
              <Pressable>
                <Text style={styles.text}>{">"}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable onPress={onLogout} >
          <Text>로그아웃</Text>
        </Pressable>
        <Text>|</Text>
        <Pressable>
          <Text>회원탈퇴</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%", // 추가
    height: "100%", // 추가
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-evenly",
    borderColor: "blue",
    borderWidth: 1,
    width: "100%",
  },

  footer: {
    marginTop: -250,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  content: {
    borderColor: "red",
    borderWidth: 1,
    width: "100%",
    justifyContent: "center", 
    alignItems: "center",
  },

  content1: {
    borderColor: "red",
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
  },

  detailContent :{
    borderColor : "blue" ,
    borderWidth: 1,   
    flexDirection: "row",
    gap : 10   
  } ,
  text : {
    fontSize : "16", 
    fontFamily: "Spoqa Han Sans Neo"
  }
});
