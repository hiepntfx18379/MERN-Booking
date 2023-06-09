import { createContext, useReducer } from "react";

const initState = {
  city: undefined,
  date: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(initState);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "getInfoSearch":
      return action.payload;
    default:
      return state;
  }
};

export const SeacrchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initState);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.date,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
