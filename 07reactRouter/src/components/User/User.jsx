import React from "react";
import { useParams } from "react-router";

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1>User: {userid} </h1>
    </>
  );
}

export default User;
