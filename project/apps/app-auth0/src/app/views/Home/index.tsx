import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogoutButton';

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <div>{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</div>;
};

export default Home;
