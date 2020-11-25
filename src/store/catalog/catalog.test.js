
import {ALL_GENRES_FILTER, SHOWN_FILMS_INITIAL_AMOUNT} from "../../constants";
import {ActionType, catalogReducer, changeCurrentGenre, increaseShownFilmsAmount, resetShownFilmsAmount} from "./catalog";

describe(`Catalog action creators returns correct actions`, () => {
  it(`change current genre`, () => {
    expect(changeCurrentGenre(`genre`)).toEqual({
      type: ActionType.CHANGE_CURRENT_GENRE,
      payload: `genre`,
    });
  });

  it(`increase shown films`, () => {
    expect(increaseShownFilmsAmount(1)).toEqual({
      type: ActionType.INCREASE_SHOWN_FILMS_AMOUNT,
      payload: 1,
    });
  });

  it(`reset shown films`, () => {
    expect(resetShownFilmsAmount()).toEqual({
      type: ActionType.RESET_SHOWN_FILMS_AMOUNT,
      payload: {},
    });
  });


});

describe(`User reducer works correctly`, () => {
  it(`should return initial state`, () => {
    expect(catalogReducer(void 0, {})).toEqual({
      currentGenre: ALL_GENRES_FILTER,
      shownFilmsAmount: SHOWN_FILMS_INITIAL_AMOUNT,
    });
  });

  it(`should change current genre`, () => {
    expect(catalogReducer({
      currentGenre: ALL_GENRES_FILTER,
    }, {
      type: ActionType.CHANGE_CURRENT_GENRE,
      payload: `genre`
    })).toEqual({
      currentGenre: `genre`
    });
  });

  it(`should increase shown films`, () => {
    expect(catalogReducer({
      shownFilmsAmount: 8,
    }, {
      type: ActionType.INCREASE_SHOWN_FILMS_AMOUNT,
      payload: 8
    })).toEqual({
      shownFilmsAmount: 16
    });
  });

  it(`should reser shown films count`, () => {
    expect(catalogReducer({
      shownFilmsAmount: 8,
    }, {
      type: ActionType.RESET_SHOWN_FILMS_AMOUNT,
      payload: {}
    })).toEqual({
      shownFilmsAmount: SHOWN_FILMS_INITIAL_AMOUNT
    });
  });

});
