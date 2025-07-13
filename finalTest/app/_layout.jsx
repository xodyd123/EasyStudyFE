
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { AuthContext } from '@/context/AuthContext'; // 제대로 import 했는지 확인
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Slot } from 'expo-router';

export default function RootLayout() {

  const [accessToken, setAccessToken] = useState('');
  //const [refreshToken, setRefreshToken] = useState('');

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const getTokens = async () => {
      const AccessToken = await AsyncStorage.getItem('accessToken') || ''; 
     // const re = await AsyncStorage.getItem("refreshToken") || ''; 
      setAccessToken(AccessToken);
     // setRefreshToken(re);  
      console.log("rAccessToken : " + AccessToken) ;
    };
    getTokens();
  }, []); // 의존성 배열을 비워두어 컴포넌트가 마운트될 때만 실행

  if (!loaded) {
    return null; // 폰트가 로드되기 전까지는 아무 것도 렌더링하지 않음
  }

  return (
    <AuthContext.Provider value={{ accessToken}}>
      <Slot />   
    </AuthContext.Provider>
  );
}
