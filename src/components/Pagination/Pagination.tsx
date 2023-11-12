import { useNavigate, Link } from "react-router-dom";
import "./pagination.css"

interface PropsType {
  search: string;
  countPage: number;
}

export default function Pagination(props: PropsType) {
  const navigate = useNavigate();
  const count = Number(new URLSearchParams(location.search).get('count')) || 5;
  const pagCount = 5;
  const currentPage = Number(new URLSearchParams(location.search).get('page'));

  const getNavigationRange = () => {
    const spread = Math.floor(pagCount / 2);
    const start = Math.max(currentPage - spread, 0);
    const end = Math.min(currentPage + spread, props.countPage);
    return new Array(Math.abs(end - start)).fill(null).map((_, i) => start + i)
  }

  const setCountInPage = (count: number) => {
    navigate(`/${props.search}?page=0&count=${count}`);
  }

  return (
    <div className="button-pagination-wrapper">
      <div className="pagination-wrapper">
        {
          currentPage !== 0 && (
            <button
              className="button-pagination-back"
              onClick={() => navigate(`/${props.search}?page=0&count=${count}`)}
            >
              &#8249;
            </button>
          )
        }
        {
          getNavigationRange().map((i) => {
            const link = `/${props.search}?page=${i}&count=${count}`;
            return (
              <Link
                key={"paginationButto" + i}
                className="pagination-item"
                to={link}
              >
                {i + 1}
              </Link>
            )
          })
        }
        {
          currentPage !== (props.countPage - 1) && (
            <button
              className="button-pagination-next"
              onClick={() => navigate(`/${props.search}?page=${props.countPage - 1}&count=${count}`)}
            >
              &#8250;
            </button>
          )
        }
      </div>
      <div className="pagination-count">
        <button 
          style={{"width": 32}} 
          className="button-pagination-set"
          onClick={() => setCountInPage(5)}
        >
          5
        </button>
        <button 
          style={{"width": 32}}
          className="button-pagination-set"
          onClick={() => setCountInPage(10)}
        >
          10
        </button>
        <button 
          style={{"width": 32}} 
          className="button-pagination-set"
          onClick={() => setCountInPage(15)}
        >
          15
        </button>
      </div>
    </div>
  )
}