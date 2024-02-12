import { useDispatch } from "react-redux";
import { DELETE_USER } from "../store/userReducer";
import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import { useState } from "react";
import { CURRENT_ID } from "../../src/store/userReducer";

export const Person = ({ person, index }) => {
  const [isEdit, setIsEdit] = useState(false);
  
  const dispatch = useDispatch();
  
  const handleTextСhange = () => {
    setIsEdit(!isEdit);
  };
  const handleDeleteUser = (id) => {
    dispatch({ type: DELETE_USER, payload: id });
  };
  const handleCurentId = (id) => {
    dispatch({ type: CURRENT_ID, payload: id });
  };
  return (
    <>
      <tr onClick={() => handleCurentId(person.id)} key={person.id}>
        <td contentEditable={isEdit}>{person.email}</td>
        <td contentEditable={isEdit}>{person.name}</td>
        <td  className="t" contentEditable={isEdit}>{person.role}</td>
        <td className="t" contentEditable={isEdit}>{person.subscription.plan.type}</td>
        <td className="t" contentEditable={isEdit}>{person.subscription.tokens} TKN </td>
        <td className="t">
          {person.actions}
          <button onClick={() => handleTextСhange()}>
            <img src={editImg} />
          </button>
          <button onClick={() => handleDeleteUser(person.id)}>
            <img src={deleteImg} />
          </button>
        </td>
      </tr>
    </>
  );
};