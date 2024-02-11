import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/userReducer";
import imgLeft from "../../assets/arrow-narrow-left.svg";
import imgRight from "../../assets/arrow-narrow-right.svg";

export const Pagination = ({ pages }) => {
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
          className={setCurrentPage == page ? "current-page" : "page"}
          onClick={() => dispatch(setCurrentPage(page))}
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
