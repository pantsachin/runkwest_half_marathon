import { createContext, useContext, useState } from "react";
import { videosDataBase } from "../videosDataBase.js";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [ data, setData ] = useState(videosDataBase);
  const [ dataDefault, setDataDefault ] = useState(videosDataBase);
  const [ searchBar, setSearchBar ] = useState("");

  return <SearchContext.Provider value={{data, setData, dataDefault, setDataDefault, searchBar, setSearchBar}}>{children}</SearchContext.Provider>;
}

export function useSearchContext() {
  return useContext(SearchContext);
}
