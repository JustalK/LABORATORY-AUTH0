import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../../components/Loading';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div>
      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
