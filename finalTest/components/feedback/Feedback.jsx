import { useState, useEffect } from 'react';

export default function Feedback() {
    
    const [history, setHistory] = useState('');

    // useEffect(() => {
    //     const fetchHistory = async () => {
    //         const response = await fetch('http://localhost:8080/users/feedbackList');
    //         const data = await response.json();
    //         setHistory(data);
    //     };
    //     fetchHistory();
    // }, []);
    

    return (
        <>
        
        </>
    );
}