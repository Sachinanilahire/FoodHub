import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return <div>404 Not Found</div>;
};

export default Error;
("404 Not Found");
