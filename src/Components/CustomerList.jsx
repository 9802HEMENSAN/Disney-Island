import React from "react";
import { useEffect, useState } from "react";
import CustomerCard from "./CustomerCard";
import "./CustomerList.css";
import Pagination from "./Pagination";
import FiltersCard from "./FiltersCard";
import { Link } from "react-router-dom";
const CustomerList = () => {
  const [Data, setData] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [gender, setgender] = useState("");
  const [status, setStatus] = useState("");
  const [info, setInfo] = useState({ count: 826, pages: 42 });

  const fetchData = async ({ page = 1, gender, status }) => {
    setLoading(true);
    const URL =
      gender && status
        ? `https://rickandmortyapi.com/api/character/?gender=${gender}&status=${status}&page=${page}`
        : gender
        ? `https://rickandmortyapi.com/api/character/?gender=${gender}&page=${page}`
        : status
        ? `https://rickandmortyapi.com/api/character/?status=${status}&page=${page}`
        : `https://rickandmortyapi.com/api/character/?page=${page}`;

    try {
      const fetchedData = await fetch(URL);
      const JSONData = await fetchedData.json();
      console.log(JSONData.info);
      setInfo(JSONData.info);
      setData(JSONData.results);
      setLoading(false);
      setisError(false);
    } catch (error) {
      alert("Failed to get Data from API !");
      setisError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ page, gender, status });
  }, [page, gender, status]);

  return loading ? (
    <div className="loading-card">
      <img
        src="https://media2.giphy.com/media/ZO9b1ntYVJmjZlsWlm/200.webp?cid=ecf05e477w52odbvy3ya0hxmgs27x6ngz1j2eb6jcjr33eql&ep=v1_gifs_search&rid=200.webp&ct=g"
        alt=""
      />
    </div>
  ) : isError ? (
    <div>Failed to get Data from API !</div>
  ) : (
    
    <div style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "30px",
        }}
      >
        CustomerList
      </h1>

      {/* filters  : - The user should be able to **filter the character** by the following criteria
    - Filter By Status ( Select tag with “Alive”, “Dead” or “Unknown” as options)
    - Filter By Gender ( Select tag with “Male” or “Female” as options)  */}

     <FiltersCard setgender={setgender} setStatus={setStatus}/>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {Data?.map((item) => {
          return <CustomerCard key={item.id} item={item} />;
        })}
      </div>
      {/*  Pagination */}
       <Pagination page={page} setPage={setPage} info={info} />
    </div>
     
  );
};

export default CustomerList;
