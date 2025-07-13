import { View, FlatList, Text, TextInput, StyleSheet } from 'react-native';


export default function ChatHome() {
  return (
    <View style={styles.container}>
      <Text>채팅페이지</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container : {
    flex : 1 , 
    justifyContent :  "center" , 
    alignItems : "center" ,  
 
    
  }
});