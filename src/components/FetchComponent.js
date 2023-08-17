import React, { useEffect, useState } from "react";

const FetchComponent = () => {
  const [data, setData] = useState([]);
  console.log("data:", data);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response.results);
        // console.log(response.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Url</th>
      </tr>
      {data.map((pokenmon, key) => {
        return (
          <tr>
            <td>{pokenmon.name}</td>
            <td>{pokenmon.url}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default FetchComponent;
