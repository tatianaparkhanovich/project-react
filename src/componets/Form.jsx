import "../App.css";
import imges from "../assets/search-circle.svg";
import { useDispatch } from "react-redux";
import { SET_SEARCH } from "../store/userReducer";

export const Form = () => {
  const dispatch = useDispatch();

  const addSearchValue = (e) => {
    dispatch({ type: SET_SEARCH, payload: e.target.value });
  };

  return (
    <div className="input-wrapper">
      <img className="input-imges" src={imges} />
      <input
        className="input"
        type="search"
        placeholder="поиск"
        onChange={addSearchValue}
      />
    </div>
  );
};
