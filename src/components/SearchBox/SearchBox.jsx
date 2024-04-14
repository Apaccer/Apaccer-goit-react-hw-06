import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <p>Find contact by name</p>
      <input className={css.input} type="text" onChange={onChangeFilter} />
    </div>
  );
};

export default SearchBox;
