import React, { useEffect, useState } from "react";
import Axios from "axios";

const NestedData = ({ url }) => {
  const [nestedData, setNestedData] = useState(null);

  useEffect(() => {
    console.log(url);
    const fetchData = async () => {
      const response = await Axios.get(url);
      setNestedData(response.data.name);
    };

    if (url) {
      fetchData();
    }
  }, [url]); // Run fetchData only when item.nestedDataId changes

  return (
    <>
    {nestedData ? nestedData + ",  " : "No data found"}
    </>
  )
};

export default NestedData;



