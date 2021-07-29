import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "./store";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated);
  
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
