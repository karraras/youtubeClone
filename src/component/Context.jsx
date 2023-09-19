import { createContext, useContext, useReducer } from "react";
const AppContext = createContext();
import Reduce from "./Reduce";
const url = "https://youtube-v2.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f498e99142msh758c6c192d1643ep10bfb6jsnc3195b367a36",
    "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
  },
};

function AppProvider(prop) {
  const { children } = prop;

  const initValue = {
    clicked: 0,
    openSide: false,
    results: [],
    searchTerm: "breaking bad",
    loading: false,
  };
  const [state, dispatch] = useReducer(Reduce, initValue);

  function handleClicked(id) {
    return dispatch({ type: "active", payload: id });
  }
  function handleOpenSide() {
    return dispatch({ type: "openSide" });
  }
  function handleSearch(id) {
    return dispatch({ type: "Search", payload: id });
  }

  async function getResults(id) {
    dispatch({ type: "LoadingTrue" });
    const res = await fetch(`${url}${id}`, options);
    const data = await res.json();
    dispatch({ type: "getData", payload: data });
    dispatch({ type: "LoadingFalse" });
  }
  const values = {
    ...state,
    handleClicked,
    handleOpenSide,
    getResults,
    handleSearch,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
