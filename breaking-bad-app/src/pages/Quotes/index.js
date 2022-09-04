import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Item from "./Item";
import "./style.css";

const Quotes = () => {
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") dispatch(fetchQuotes());
  }, [dispatch]);
  
  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="container-it">
      <h1>Quotes</h1>
      {status === "loading" && <Loading />}
      {data && data.map((item) => <Item item={item} />)}
      {data && <div className="quotesInfo"> {data.length} quotes</div>}
    </div>
  );
};

export default Quotes;
