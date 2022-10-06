import { createContext, useState } from "react";
import Child1 from "./child1";
import { store } from "./Store";
import { Provider, useDispatch, useSelector } from "react-redux";

export const IdContext = createContext();
//   id: 1,
//   setId: () => {}
const LearnContext = () => {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state);
  const [title1, setTitle] = useState(title);

  return (
    <>
      <Child1 />
      <button
        onClick={() => {
          dispatch({
            type: "Addby",
            value: 2,
          });
        }}
      >
        click me to increase by 2
      </button>
      <input value={title1} onChange={(e) => setTitle(e.target.value)} />
      in component title is {title1} and in store is {title}
      <button
        onClick={() => {
          dispatch({
            type: "ChangeTitle",
            newTitle: title1,
          });
        }}
      >
        change Title
      </button>
    </>
  );
};

export default LearnContext;
