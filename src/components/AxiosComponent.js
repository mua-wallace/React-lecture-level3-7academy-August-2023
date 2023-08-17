import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosComponent = () => {
    const [data, setData] = useState([])

    useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response ) =>{
        setData(response.data.results)
    })
    .then((error) => console.log(error))
    }, [])
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Url</th>
      </tr>
      {data.map((pokenmon, key) => {
        return (
          <tr key={key}>
            <td>{pokenmon.name}</td>
            <td>{pokenmon.url}</td>
          </tr>
        );
      })}
    </table>
  )
}

export default AxiosComponent