import { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoggedInHome({ accessToken }) {
  const router = useRouter();

  useEffect(() => {
    console.log(accessToken);
    if (accessToken) {
      router.replace("/(tabs)/home"); // 탭 페이지로 이동
    } else {
      router.replace("/GuestHome");
    }
  }, [accessToken]);

}