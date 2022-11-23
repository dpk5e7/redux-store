// Remove createContext and useContext
//import React, { createContext, useContext } from "react";
import React from "react";

// Add react-redux
import { Provider } from "react-redux";

// Remove this reducer since it's pulled in with the store
//import { useProductReducer } from './reducers'

// import store from /utils/store.js
import store from "./store";

// Remove the context objects
//const StoreContext = createContext();
//const { Provider } = StoreContext;

export default function StoreProvider(props) {
  return <Provider store={store} {...props} />
};

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
