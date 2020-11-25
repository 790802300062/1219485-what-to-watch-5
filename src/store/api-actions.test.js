import MockAdapter from "axios-mock-adapter";
import {ApiURL, AuthorizationStatus, Path} from "../constants";
import {createAPI} from "../services/api";
import {fetchFavoriteFilms, fetchFilmById, fetchFilms, fetchPromoFilm, fetchReviewsByFilmId, logIn, postReview} from "./api-actions";
import {ActionType as RedirectActionType} from "./middlewares/redirect";
import {ActionType as UserActionType} from "./user/user";
import {ActionType as FilmsActionType} from "./films/films";
import {ActionType as ReviewsActionType} from "./reviews/reviews";
import {adaptFilmToClient, adaptReviewToClient} from "../utils/data-adapter";

let api;
let mockApi;
let dispatch;

beforeEach(() => {
  api = createAPI(() => {});
  mockApi = new MockAdapter(api);
  dispatch = jest.fn();
});

describe(`Fetch user async operation works correctly`, () => {
  it(`with correct fake data`, () => {

    const mockAuthInfo = {email: `test@test.ru`, password: `123456`};
    const mockUser = {id: `123`};

    const loader = logIn(mockAuthInfo);

    mockApi
        .onPost(ApiURL.LOGIN)
        .reply(200, mockUser);

    return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(4);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.LOAD_USER,
        payload: mockUser,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.USER_RECEIVED,
        payload: {},
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: UserActionType.SET_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.AUTH,
      });

      expect(dispatch).toHaveBeenNthCalledWith(4, {
        type: RedirectActionType.REDIRECT_TO_ROUTE,
        payload: Path.MAIN_PAGE,
      });
    });
  });

  it(`with status 500`, () => {

    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loader = logIn(fakeUser);

    mockApi
        .onPost(ApiURL.LOGIN)
        .reply(500, {fake: `fake`});

    return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.USER_REQUEST_FAILED,
        payload: 500,
      });
    });
  });

});

it(`Fetch films async operation works correctly`, () => {
  const fakeFilms = [{id: 1, genre: ``}, {id: 2, genre: ``}];

  const loader = fetchFilms();

  mockApi
        .onGet(ApiURL.FILMS)
        .reply(200, fakeFilms);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_FILMS,
        payload: fakeFilms.map(adaptFilmToClient),
      });

    });
});

it(`Fetch film by id async operation works correctly`, () => {
  const fakeId = `1`;
  const fakeFilm = {id: 1, genre: ``};

  const loader = fetchFilmById(fakeId);

  mockApi
        .onGet(`${ApiURL.FILM_BY_ID}${fakeId}`)
        .reply(200, fakeFilm);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_FILM,
        payload: adaptFilmToClient(fakeFilm),
      });

    });
});

it(`Fetch promo film async operation works correctly`, () => {
  const fakeFilm = {id: 1, genre: ``};

  const loader = fetchPromoFilm();

  mockApi
        .onGet(ApiURL.PROMO_FILM)
        .reply(200, fakeFilm);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_PROMO_FILM,
        payload: adaptFilmToClient(fakeFilm),
      });

    });
});

it(`Fetch reviews by film id async operation works correctly`, () => {

  const fakeId = `1`;
  const fakeReviews = [
    {id: 1, date: `2020-10-26T13:38:44.769Z`, user: {name: `name`}},
    {id: 2, date: `2020-11-26T13:38:44.769Z`, user: {name: `name`}},
  ];

  const loader = fetchReviewsByFilmId(fakeId);

  mockApi
        .onGet(`${ApiURL.REVIEWS_BY_FILM_ID}${fakeId}`)
        .reply(200, fakeReviews);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ReviewsActionType.LOAD_REVIEWS,
        payload: fakeReviews.map(adaptReviewToClient),
      });

    });
});

it(`Fetch favorite films async operation works correctly`, () => {
  const fakeFilms = [{id: 1, genre: ``}, {id: 2, genre: ``}];

  const loader = fetchFavoriteFilms();

  mockApi
        .onGet(ApiURL.FAVORITE)
        .reply(200, fakeFilms);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_FAVORITE_FILMS,
        payload: fakeFilms.map(adaptFilmToClient),
      });

    });
});

it(`Update is film favorite async operation works correctly`, () => {
  const fakeFilms = [{id: 1, genre: ``}, {id: 2, genre: ``}];

  const loader = fetchFavoriteFilms();

  mockApi
        .onGet(ApiURL.FAVORITE)
        .reply(200, fakeFilms);

  return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FilmsActionType.LOAD_FAVORITE_FILMS,
        payload: fakeFilms.map(adaptFilmToClient),
      });

    });
});

describe(`Fetch user async operation works correctly`, () => {

  let mockReview;
  let mockFilmId;
  let loader;
  let url;

  beforeEach(() => {
    mockReview = {rating: 5, comment: `comment`};
    mockFilmId = `1`;
    loader = postReview(mockFilmId, mockReview.rating, mockReview.comment);
    url = `${ApiURL.REVIEWS_BY_FILM_ID}${mockFilmId}`;
  });

  it(`with request succeeded`, () => {

    mockApi
        .onPost(url)
        .reply(200, mockReview);

    return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ReviewsActionType.SET_POSTED_REVIEW,
        payload: mockReview,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ReviewsActionType.REVIEW_POST_RECIEVED,
        payload: {},
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: RedirectActionType.REDIRECT_TO_ROUTE,
        payload: Path.filmScreen(mockFilmId),
      });

    });
  });

  it(`with request failed`, () => {
    const errorCode = 500;

    mockApi
        .onPost(url)
        .reply(errorCode, {});

    return loader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ReviewsActionType.REVIEW_POST_FAILED,
        payload: errorCode,
      });

    });
  });

});
