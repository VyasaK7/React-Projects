import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch(createCustomer("Vyasa Krishna", "24343434"));
// store.dispatch(deposit(250));
// console.log(store.getState());

export default store;
