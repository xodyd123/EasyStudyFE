import { View , StyleSheet } from 'react-native';
import React from 'react';
import FeedbackList from '../../../components/feedback/FeedbackList';


export default function History() {

  return (
    <View style={styles.container}>
     <FeedbackList/>
    </View>
   
  );
} 

const styles = StyleSheet.create({

    container : {
        flex : 1 , 
        justifyContent :  "center" , 
        alignItems : "center" ,  
        borderColor: "red",
        borderWidth: 3,  
        
    }

}); 

