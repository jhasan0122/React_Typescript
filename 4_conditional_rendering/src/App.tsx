import UserGreetings from "./UserGreetings.tsx";

function App() {
  return (
    <>
      <UserGreetings isLoggedIn ={true} username = {"Jehan"} />
      <UserGreetings isLoggedIn ={false} username = {"Hasan"} />
    </>
  )
}

export default App
