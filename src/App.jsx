import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import UserData from "./componets/UserData/UserData";
import { useDispatch } from "react-redux";
import { SET_USERS } from "./store/userReducer";
import { Form } from './componets/Form';
import { Header } from './componets/Header/Header';
import { useSelector } from "react-redux";
import { SET_TOTAL_PAGES } from "./store/userReducer";
import  TemporaryDrawer  from "./componets/Drawer/Drawer";


function App() {
  const dispatch = useDispatch();

  const [appState, setAppState] = useState(false);
  const currentPage = useSelector((state) => state.users.currentPage);
  const setSearch = useSelector((state) => state.users.search);
  const orderBy = useSelector((state) => state.users.orderBy);
  
useEffect(() => {
    setAppState(true);
  let apiUrl = `https://test.gefara.xyz/api/v1/user/list?page=${currentPage}`;
  if (orderBy == true) {
    apiUrl += `&orderBy=tokens:asc`;
  } else {
    apiUrl += `&orderBy=tokens:desc`;
  } 
    if (setSearch != "" && setSearch != undefined) {
    apiUrl += `&search=${setSearch}`;
    }
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data.data;
      const pages = resp.data.pages;
      setAppState(false);
      dispatch({ type: SET_USERS, payload: allPersons });
      dispatch({ type: SET_TOTAL_PAGES, payload: pages });
    });
}, [setSearch, currentPage, orderBy]
);

  return (
    <>
      <TemporaryDrawer />
      <div className="app">
        <Header />
        <div className="container">
          <Form />
          {appState ? <h1>Подождите, данные загружаються</h1> : <UserData />}
        </div>
      </div>
    </>
  );
}

export default App;
