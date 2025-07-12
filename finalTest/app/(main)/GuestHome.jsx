import { View , Text , TouchableOpacity ,  StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
  

export const options = { headerShown: false };
export default function GuestHome(){

    const router = useRouter(); 

    return (
        <View style={styles.container}>
          <Text style={styles.title}>EzTalk</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => router.push('/sign')}>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
            <Text style={styles.buttonText}>로그인</Text> 
       
          </TouchableOpacity>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',  
        marginBottom: 20,       
    },

    button: {
        width: '90%',
        borderColor: 'black',
        borderWidth: 3,
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },

    buttonText: { 
        padding: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
