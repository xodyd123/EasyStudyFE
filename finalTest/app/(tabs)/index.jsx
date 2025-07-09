import {View, Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// 로그인 유저 정보를 가져 와야됨 
export default function HomeScreen() {
  
  const { userId, nickname } = useLocalSearchParams(); 
  console.log(userId, nickname);

  return (
    <>
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{userId}</Text>
      <Text>{nickname}</Text>
     </View> 
    </>
  );
}
                                               