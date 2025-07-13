import { useAuth } from '@/context/AuthContext';
import GuestHome from '../app/(main)/GuestHome';
import LoggedInHome from './(main)/LoggedInHome';

export default function Main() {
  const { accessToken } = useAuth();

  return (
    accessToken ? <LoggedInHome accessToken={accessToken}/> : <GuestHome />
  );
}