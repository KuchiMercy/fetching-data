import { useEffect, useState } from "react";
import axios from "axios";

const DataWithState = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setLoading(false);
        setData(response.data);
          setError(null);
          console.log(response.data)
      })
      .catch((error) => {
        setLoading(false);
        setData([]);
        setError("Something went wrong");
      });
  }, []);
    return <div>
     {loading ? <h1>Loading...</h1> : <h1>{data[0].login}</h1>}
  </div>;
};

export default DataWithState;
