import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./SingleCustomer.css"
const SigleCustomer = () => {
    const { id }= useParams();
    const [Item , setData] = useState({});
   const fetchSingleData = async (id) => {
    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    try {
      const fetchedData = await fetch(URL);
      const JSONData = await fetchedData.json();
      console.log(JSONData);
      setData(JSONData)
    } catch (error) {
      alert("Failed to get Data from API !");
    }
   }

   useEffect(() => {
    fetchSingleData(id);
   },[id])
  return (
    <div className='single-customer'> 
        <h1 >Customer ID no . {id}</h1>

         <Link to='/'> 
         <button className="btn-back">-- Back --</button></Link>
        <div className="character-card" >
        <img className ="character-image" src={Item.image} alt="Character Image"/>
        <div className ="character-info">
            <p><strong>Name:</strong>{Item.name}</p>
            <p><strong>Status:</strong> Alive</p>
            <p><strong>Species:</strong> Human</p>
            <p><strong>Type:</strong> Cyborg</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Origin:</strong> Earth (C-137)</p>
            <p><strong>Location:</strong> Citadel of Ricks</p>
        </div>
    </div>
    </div>
  )
}

export default SigleCustomer