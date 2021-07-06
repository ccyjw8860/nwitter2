import { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../myBase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
        const newUser = {
          email: user.email,
          displayName: user.displayName,
          id: user.uid,
        };
        dispatch(addUser(newUser));
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializeing..."}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}
export default App;
