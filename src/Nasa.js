import React, { useState, useEffect } from "react";
import Map from "./Map";

const Nasa = () => {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const data = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await data.json();
      setArray(events);
      setLoading(false);
    };
    fetchApi();
  }, []);
  return (
    <>{!loading ? <Map array={array} /> : <h1>Data is fetching....</h1>}</>
  );
};

export default Nasa;
