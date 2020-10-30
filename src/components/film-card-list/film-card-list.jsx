import React from "react";
import {FilmTypeProps} from "../../prop-types-validations";
import FilmCard from "../film-card/film-card";
import withVideoPlayer from "../../hocs/with-video-player";

const FilmCardWrapped = withVideoPlayer(FilmCard);

const FilmCardList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <FilmCardWrapped
          key={`film-${i}`}
          film={film}
        />
      ))}
    </div>
  );
};

FilmCardList.propTypes = FilmTypeProps.films;

export default FilmCardList;
