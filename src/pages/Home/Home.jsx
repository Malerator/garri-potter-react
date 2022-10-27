import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { useState} from "react";

function Home({like, dislike, liked, urlGp, isLoading, error}) {

  const [name, setName] = useState("");
  const [school, setSchool] = useState("All school");

  return (
    <>
      <Header setName={setName} setSchool={setSchool} />
      <Main urlGp={urlGp} isLoading={isLoading} error={error} name={name} school={school} liked={liked} like={like} dislike={dislike}/>
    </>
  );
}

export default Home;

