import { useState, useEffect } from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import { auth } from "./firebase";
import "./App.css";
function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth.uid,
        email: userAuth.email,
      };
      if (userAuth) {
        console.log("userAuth", userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  const [user, setUser] = useState(null);
  return <div className="App">{user ? <Home /> : <SignIn />}</div>;
}
export default App;
