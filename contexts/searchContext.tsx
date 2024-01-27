"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

type ContextProps = {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
}

export const SearchContext = createContext<ContextProps>({
  search: "",
  setSearch: (): string => "",
});

export const SearchContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{
      search, 
      setSearch
    }}>
      {children}
    </SearchContext.Provider>
  )
}