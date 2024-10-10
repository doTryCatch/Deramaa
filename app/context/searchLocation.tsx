import React, { createContext, useContext, useState } from "react";
interface Location {
  latitude: string;
  longitude: string;
}
interface SearchContextType {
  searchLocation: Location | null;
  setSearchLocation: React.Dispatch<React.SetStateAction<Location | null>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchLocation, setSearchLocation] = useState<Location | null>(null);

  return (
    <SearchContext.Provider value={{ searchLocation, setSearchLocation }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
