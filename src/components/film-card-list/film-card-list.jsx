import React, {PureComponent} from "react";
import {FilmTypes} from "../../prop-types-validations";
import FilmCard from "../film-card/film-card";
import withVideoPlayer from "../../hocs/with-video-player";
import ShowMoreButton from "../show-more-button/show-more-button";

const FILMS_AMOUNT_PER_STEP = 8;

const FilmCardWrapped = withVideoPlayer(FilmCard);

class FilmCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shownCards: Math.min(FILMS_AMOUNT_PER_STEP, this.props.films.length),
    };
  }

  render() {
    const {films} = this.props;
    const {shownCards} = this.state;
    const shownFilms = films.slice(0, shownCards);

    return (
      <>
        <div className="catalog__movies-list">
          {shownFilms.map((film, i) => (
            <FilmCardWrapped
              key={`film-${i}`}
              film={film}
            />
          ))}
        </div>
        {shownFilms.length < films.length ? <ShowMoreButton /> : null}
      </>
    );
  }
}

FilmCardList.propTypes = FilmTypes.films;

export default FilmCardList;
