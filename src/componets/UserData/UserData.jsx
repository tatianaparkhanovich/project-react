import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./User.Data.css";
import { Person } from "../Person";
import img from "../../assets/arrow-narrow-down.svg";
import Pagination from "../Pagination/Pagination";
import { SET_SORT_TOKENS } from "../../store/userReducer";

const UserData = ({ orderBy }) => {
  const persons = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const totalPages = useSelector((state) => state.users.totalPages);

  if (!persons || persons.length === 0) return <p>нет данных.</p>;

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Имя</th>
            <th className="t">Poль</th>
            <th className="t">Подписка</th>
            <th
              className="t"
              onClick={() =>
                dispatch({
                  type: SET_SORT_TOKENS,
                  payload: !orderBy,
                })
              }
            >
              Токены <img className="th" src={img} />
            </th>
            <th className="t">Действия</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <Person person={person} key={person.id} index={index} />
          ))}
        </tbody>
      </table>
      <Pagination pages={totalPages} />
    </div>
  );
};
export default UserData;
