import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/preetravalgit")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <>
      <div className="text-white bg-gray-600 my-10 mx-auto p-6 text-center text-3xl">
        Github Followers: {data.followers}
        <h1 className="text-2xl ">Github Username: {data.login} </h1>
        <img src={data.avatar_url} alt="Github Profile Picture" width={300} />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/preetravalgit");
    return res.json();
}