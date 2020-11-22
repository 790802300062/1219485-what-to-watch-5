import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {filmListMock, movieCard, noop} from "../../test-data/test-data";
import App, {App as AppWithoutStore} from "./app";
import {NameSpace} from "../../store/reducers/root-reducer";
import {AuthorizationStatus} from "../../constants";

describe(`App render without store`, () => {
  it(`renders App component's preloader (without store)`, () => {
    const tree = renderer
      .create(
          <AppWithoutStore
            movieCard={movieCard}
            films={[]}
            isLoading={true}
            loadFilmList={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


describe(`App render`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let appComponent = null;

  beforeEach(() => {
    store = mockStore({
      [NameSpace.DATA]: {
        activeGenre: `All genres`,
        films: filmListMock,
        shownFilmsCount: 8,
        isLoading: false,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      }
    });
  });

  it(`renders App component`, () => {
    store.dispatch = jest.fn();

    appComponent = renderer.create(
        <Provider store={store}>
          <App
            movieCard={movieCard}
            isLoading={false}
            films={[]}
            loadFilmList={noop}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(appComponent.toJSON()).toMatchSnapshot();
  });
});
