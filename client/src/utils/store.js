// Create a redux store, have to use legacy since we're using old redux and not the Redux Toolkit
import { legacy_createStore as createStore } from "redux";

// Import the reducers file
import reducers from "./reducers";

// export the redux store
export default createStore(reducers);
