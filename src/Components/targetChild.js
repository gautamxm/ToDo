import { useContext } from "react";
import { useSelector } from "react-redux";
import { IdContext } from "./learnContext";

const TargetChild = () => {
  const state = useSelector((state) => state);
  console.log(" this is the state", state);
  return (
    <>
      {state.id} in state title is {state.title}
    </>
  );
  // return <>{id} <button onClick={()  => setId(prevID => prevID+2)}>click here to increase id by 2</button></>
};

export default TargetChild;
