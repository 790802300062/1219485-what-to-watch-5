import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {noop, movieCard} from "../../test-data";

describe(`App render`, () => {
  it(`renders App component`, () => {
    const tree = renderer
      .create(
          <App
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
