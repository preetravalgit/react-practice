import Login from "./components/login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Chai Aur React and Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
