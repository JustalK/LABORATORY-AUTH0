import { Route, Routes, Link } from 'react-router-dom';
import Home from './views/Home';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './views/Profile';

export function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
