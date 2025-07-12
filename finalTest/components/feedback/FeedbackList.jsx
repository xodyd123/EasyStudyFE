import { FlatList, Text, Pressable  } from 'react-native';
import { styles } from './Feedback.styles';

const data = [
  
]

for(let i  = 1 ; i<=100 ; i++){
    data.push({id : i , title : "제목" + i})
}


export default function FeedbackList(){

    return (
        <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}  
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.border} onPress={() => console.log("출력")}>
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        )}
      />
      
    )
}

