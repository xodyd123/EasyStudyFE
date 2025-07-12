import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Sign() {

    const [user, setUser] = useState({
        email: '',
        nickname: '',
        password: '',
        verifyPassword: '', 
        viewPassword : '' , 
        verifyViewPassword : '' , 
    }); 

    useEffect(() => {
     
    }, []);
    
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emptyError , setEmptyError] = useState('') ; 
    const router = useRouter();
   

    function changeEmail(text) {
        
        setUser({...user, email: text.trim()}); 
    
       //  검사 후 오류 메시지 처리
    if (!validateEmail(text.trim())) {
        console.log(text);
         setEmailError('이메일 형식이 올바르지 않습니다.');
     } else {
       
         setEmailError('');
     }
    }

    const validateEmail = (email) => {
        
        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        console.log(regex.test(email));

        return regex.test(email);
    };

    const changeNickName = (text) => {
        setUser({...user, nickname: text.trim()});
    } 

    const changePassword = (text) => {
   
      const changePassword =  replace(text) ;
     
      setUser({...user, viewPassword: changePassword , password : text.trim()}); // 이게 바껴서 넣으니 안됨  
    }

    const changeVerifyPassword = (text) => { 

       const changePassword =  replace(text) ;
        setUser({...user, verifyPassword: text.trim() , verifyViewPassword : changePassword , });
        checkPassword(text);
    }

    const checkPassword = (text) => { 
        if(user.password !== text) {
            setPasswordError('비밀번호가 일치하지 않습니다.');
        }
        else{
            setPasswordError('');
            console.log('비밀번호가 일치합니다.');
        }
    }

    const onSubmit =  async () => {
         
        try{
           const response = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: user.email,
                nickname: user.nickname,
                password: user.password,
            }),
        } )
        if(!response.ok){ 
          const errorData = await response.json() ;
          throw new Error(errorData.message ) ;  
        }

        router.push('/login');  

        } catch(error){
          setEmptyError(error.message) ; 
          
        }


      
      
    }   

    const replace = (text) => {

      let changePassword = "" ; 

      for(let i = 0 ; i<text.length ; i++){
        changePassword += "*"
      } ;

      return changePassword ; 

    }

    return (
        <View style={styles.container}>
          <Text style={styles.title}>EzTalk - 회원가입</Text>
          <View style={styles.inputContainer}>

          <Text style={styles.label1}>Email</Text>
        
            <TextInput 
                style={styles.input} 
                placeholder="Email을 입력해주세요" 
                value={user.email}
                onChangeText={(text) => changeEmail(text)}
            />
            {user.email && emailError && <Text style={styles.emailError}>{emailError}</Text>}
            <Text style={styles.label2}>nickName</Text> 
            <TextInput style={styles.input} placeholder="닉네임을을 입력해주세요" value={user.nickname} onChangeText={(text) => changeNickName(text)} />
            
            <Text style={styles.label2}>Password</Text>
                <TextInput style={styles.input} placeholder="Password를 입력해주세요" value={user.viewPassword} onChangeText={(text) => changePassword(text)} /> 

            <Text style={styles.label3}>Verify Password</Text>
            <TextInput style={styles.input} placeholder="Password를 한번 더 입력해주세요" value={user.verifyViewPassword} onChangeText={(text) => changeVerifyPassword(text)} />
            {user.verifyPassword && passwordError && <Text style={styles.passwordError}>{passwordError}</Text>}
            {emptyError && <Text style={{ color: "red" }}>{emptyError}</Text>}
            <TouchableOpacity style={styles.Button} onPress={onSubmit}>
            <Text>계정 생성</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
    },  
  
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      position: 'relative',
      top: -110
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
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
      position: 'absolute',
    },
    input: {
      width: '90%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      position: 'relative',
      top: -80,
    },
    label1: {  
      fontSize: 16,
      fontWeight: 'bold',
      position: 'relative',
      left: -155,
      top: -70,
      marginBottom: 10,
    },  
    label2: {  
      fontSize: 16,
      fontWeight: 'bold',
      position: 'relative',
      left: -140,
      top: -80,
    }, 
    label3: {  
      fontSize: 16,
      fontWeight: 'bold',
      position: 'relative',
      left: -110,
      top: -80,
    }, 
    inputContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      width: '100%',
    },
    subTitle: {
      flexDirection: 'column',
      alignItems: 'center',
   
    },
    subTitleText1: {
      fontSize: 16,
      fontWeight: 'bold',
      position: 'relative',
      top: -90,
      marginBottom: 10,
    },  
    subTitleText2: {
      fontSize: 16,
      top: -90,
      fontWeight: 'bold',
     
      marginBottom: 10,
    },
    Button: {
      width: '90%',
      height: 40,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "black",
      borderWidth: 3,
      marginBottom: 10,
      position: 'relative',
      top: -70,
    },
    emailError: {
      color: 'red',
      fontSize: 12,
      position: 'relative',
      left: -95,
      top: -80,
    },
    passwordError: {
      color: 'red',
      fontSize: 12,
      position: 'relative',
      left: -102,
      top: -80,
    },
  });

