import React from "react";
import {FilmTypeProps} from "../../prop-types-validations";
import FilmCardList from "../film-card-list/film-card-list";
import LogoBlock from "../logo-block/logo-block";
import UserBlock from "../user-block/user-block";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import {connect} from "react-redux";
import {getFilms} from "../../store/selectors";

const FilmCardListWithActivePlayer = withActivePlayer(FilmCardList);

const MyListScreen = (props) => {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoBlock />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardListWithActivePlayer
          films={films}
        />
      </section>

      <footer className="page-footer">
        <LogoBlock isFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyListScreen.propTypes = FilmTypeProps.films;

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export {MyListScreen};
export default connect(mapStateToProps)(MyListScreen);
