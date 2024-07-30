import Student from "./Student.tsx";
function App() {

  return (
    <>
      <Student name = {"Jehan"} age={24} isStudent = {true} />
      <Student name = {"Hasan"} age={29} isStudent = {false} />
      <Student name = {"Juthi"} age={18} isStudent = {true} />
      <Student name = {"Kamal"}/>
      <Student name = {"Jamal"} isStudent={true}/>
    </>
  )
}

export default App
