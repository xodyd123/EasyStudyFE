import {View, Text , StyleSheet, Pressable} from 'react-native';
import {  useRouter } from 'expo-router';



export default function HomeScreen() {
  
  
  const router = useRouter();  


  

  return (
    <View style={styles.container}> 
      <View style= {styles.head}>
       <Text style = {styles.text}>챗봇(헤더)</Text>
      </View>
      <View>
        <Text>이미지 넣는 칸</Text>
      </View>
      <Pressable style={styles.button} onPress={()=> router.push("(tabs)/home/chat")}>
        <Text style = {styles.text} >대화 테스트</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style = {styles.text} >카카오톡 기반 대화 판단하기</Text>
      </Pressable> 
      <Pressable style={styles.button}>
        <Text style = {styles.text}>누르고 음성으로 말하기</Text>
      </Pressable> 
      <Pressable style={styles.button}>
        <Text style = {styles.text}>채팅 내용</Text>
      </Pressable>
    </View>
  );
} 

const styles = StyleSheet.create({
  container : { 
    flex : 1 , 
    justifyContent :  "center" , 
    alignItems : "center" ,  
    
  }, 
  head : {
    position : "relative" ,
    top : -150
    
  } 
  , 
  button : {
    borderColor: "black",
    borderWidth: 3,  
    width : "90%" ,
    marginBottom : 5 ,
    borderRadius : 15 ,
    position : "relative" ,
    bottom : -150
    
  } , 
  
  text : {
    textAlign : "center",
    fontSize : "18" ,
    padding : "8" ,
    
  }



  }
)
                                               