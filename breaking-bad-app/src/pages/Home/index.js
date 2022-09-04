import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import "./style.css";
import CharacterCard from "../../components/CharactersCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Home = () => {
  const data = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const nextPage = useSelector((state) => state.characters.page);
  const error = useSelector((state) => state.characters.error);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(fetchCharacters());
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error error={error} />;
  }
  return (
    <div className="container">
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <CharacterCard item={item} />
        ))}
      </Masonry>
      {status === "loading" && <Loading />}
      {hasNextPage && status !== "loading" && (
        <button
          onClick={() => dispatch(fetchCharacters(nextPage))}
          className="load_button"
        >
          Load More ({nextPage})
        </button>
      )}
      {!hasNextPage && <div>There is nothing else to be shown.</div>}
    </div>
  );
};

export default Home;
