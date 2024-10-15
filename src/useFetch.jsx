import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(
              "could not fetch data from the end point check the url and try again "
            );
          }
          const result = await response.json();
          setDatas(result);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          console.log(error.message);

          setLoading(false);
        }
      };
      fetchData();
    }, 1000);
  }, [url]);

  return { datas, error, loading };
};

export default useFetch;
