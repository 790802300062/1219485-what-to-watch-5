import {
  changeGenre,
  ActionType,
  increaseShownFilmCards,
  resetShownFilmCards,
  loadFilms,
  loadReviewsForFilm,
  requireAuthorization,
  redirectToRoute,
} from "./actions";
import {filmListMock, mockReviews} from "../test-data/test-data";
import {AuthorizationStatus} from "../constants";

describe(`Action creators work correctly`, () => {
  it(`changeGenre works correctly`, () => {
    expect(changeGenre(`Action`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Action`,
    });
  });

  it(`increaseShownFilmCards works correctly`, () => {
    expect(increaseShownFilmCards()).toEqual({
      type: ActionType.INCREASE_SHOWN_FILMS_AMOUNT,
    });
  });

  it(`resetShownFilmCards works correctly`, () => {
    expect(resetShownFilmCards()).toEqual({
      type: ActionType.RESET_SHOWN_FILMS_AMOUNT,
    });
  });

  it(`loadFilms works correctly`, () => {
    expect(loadFilms(filmListMock)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: filmListMock,
    });
  });

  it(`loadReviewsForFilm works correctly`, () => {
    expect(loadReviewsForFilm(mockReviews, 1)).toEqual({
      type: ActionType.LOAD_REVIEWS_FOR_FILM,
      payload: {
        reviews: mockReviews,
        filmId: 1,
      },
    });
  });

  it(`requireAuthorization works correctly`, () => {
    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`redirectToRoute works correctly`, () => {
    expect(redirectToRoute(`/test-path`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/test-path`,
    });
  });
});
