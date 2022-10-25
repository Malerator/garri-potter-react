import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  console.log(name);
  const [school, setSchool] = useState("All school");

  return (
    <>
      <Header setName={setName} setSchool={setSchool} />
      <Main name={name} school={school} />
    </>
  );
}

export default App;
