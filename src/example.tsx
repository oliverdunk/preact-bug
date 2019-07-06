import { h } from "preact";
import { useContext } from "preact/hooks/src";
import { AppContext } from ".";

export const Example = () => {
  const context = useContext(AppContext);

  return (
    <h1>The number is: {context}</h1>
  );
};