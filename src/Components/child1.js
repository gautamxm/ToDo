import { useMemo } from "react";
import React from "react";
import Child2 from "./child2";

const Child1 = () => {
  console.log("child 1 ");
  return <Child2 />;
};
export default React.memo(Child1);
