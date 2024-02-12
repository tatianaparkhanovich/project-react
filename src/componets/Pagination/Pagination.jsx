import { useDispatch,useSelector } from "react-redux";
import { SET_CURRENT_PAGE } from "../../store/userReducer";
import imgLeft from "../../assets/arrow-narrow-left.svg";
import imgRight from "../../assets/arrow-narrow-right.svg";


export const Pagination = ({ pages }) => {
  const currentPage = useSelector((state) => state.users.currentPage);
  const dispatch = useDispatch();

  const newPages = [];
  for (let i = 1; i <= pages; i++) {
    newPages.push(i);
  }

  return (
    <div className="pages">
      <button>
        <img className="img-left" src={imgLeft} />
      </button>
      {newPages.map((page, index) => (
        <button
          key={index}
          className={currentPage == page ? "current-page" : "page"}
          onClick={() =>
            dispatch({
              type: SET_CURRENT_PAGE,
              payload: page,
            })
          }
        >
          {page}
        </button>
      ))}
      <button>
        <img className="img-right" src={imgRight} />
      </button>
    </div>
  );
};

export default Pagination;
