import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {mockedStore} from "../../test-data/store";
import {filmListMock, movieCard, noop} from "../../test-data/test-data";
import {MainPage} from "./main-page";

describe(`MainPage render`, () => {
  it(`renders MainPage component with active genre Drama`, () => {
    const tree = renderer
      .create(
          <Provider store={mockedStore}>
            <BrowserRouter>
              <MainPage
                movieCard={movieCard}
                activeGenre={`Drama`}
                films={filmListMock}
                shownFilmsCount={8}
                onPlayButtonClick={noop}
                onGenreChange={noop}
                onShowMoreButtonClick={noop}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders MainPage component with All genres and shownFilms = 16`, () => {
    const tree = renderer
      .create(
          <Provider store={mockedStore}>
            <BrowserRouter>
              <MainPage
                movieCard={movieCard}
                activeGenre={`All genres`}
                films={filmListMock}
                shownFilmsCount={16}
                onPlayButtonClick={noop}
                onGenreChange={noop}
                onShowMoreButtonClick={noop}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});