import { View, FlatList, Text, TextInput, StyleSheet } from 'react-native';

const arr = Array.from({ length: 100 }, (_, i) => ({
  id: i.toString(),
  text: '대화 ' + (i + 1),
}));

export default function ChatHome() {
  return (
    <View style={styles.container}>
      <FlatList
        data={arr}
        keyExtractor={(item) => item.id}
        style = {styles.contentList}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.text}</Text>
        )}
      />
     <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="입력하세요" />
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor : "blue" ,
    borderWidth : 1 
  },
  content: {
    
    borderColor : "red" ,
    borderWidth : 1 
  },
  contentList :{
    borderColor : "pink" ,
    borderWidth : 1 
  } ,
  item: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign:"center"
  },
  inputContainer: {
    position : "absolute" , 
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
  },
});

