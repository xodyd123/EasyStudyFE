import { useAuth } from '@/context/AuthContext';
import GuestHome from '../app/(main)/GuestHome';
import LoggedInHome from './(main)/LoggedInHome';

export default function Main() {
  const { accessToken } = useAuth();
  console.log("main" , accessToken); 

  return (
    accessToken ? <LoggedInHome accessToken={accessToken}/> : <GuestHome />
  );
}