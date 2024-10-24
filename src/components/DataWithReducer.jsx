import { useEffect, useReducer } from "react";
import axios from "axios";

const initialValues = {
    loading: true,
    data: {},
    error: null
}

const reducerFn = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA': return {
            loading: false,
            data: action.payload,
            error: null,
        }
        case 'ERROR': return {
            loading: false,
            data: {},
            error: 'Something went wrong'
        }
            
          
        default:
            return state
    }
}

const DataWithReducer = () => {
    const [state, dispatch] = useReducer(reducerFn, initialValues)

    useEffect(() => {
        axios
          .get("https://api.github.com/users")
          .then((response) => {
          dispatch({type: "FETCH_DATA", payload: response.data})
              console.log(response.data)
          })
          .catch((error) => {
              dispatch({ type: "ERROR" })
          });
    }, []);
    
  return (
    <div>
           {state.loading ? <h1>Loading...</h1> : <h1>{state.data[0].login}</h1>}
    </div>
  )
}

export default DataWithReducer
