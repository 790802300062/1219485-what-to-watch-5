import React from "react";
import renderer from "react-test-renderer";
import {filmListMock, noop} from "../../test-data";
import GenresList from "./genres-list";

describe(`GenresList render`, () => {
  it(`renders GenresList component with All genres`, () => {
    const tree = renderer
      .create(
          <GenresList
            activeGenre={`All genres`}
            films={filmListMock}
            onGenreChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders GenresList component with Drama`, () => {
    const tree = renderer
      .create(
          <GenresList
            activeGenre={`Drama`}
            films={filmListMock}
            onGenreChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders GenresList component with Fantasy`, () => {
    const tree = renderer
      .create(
          <GenresList
            activeGenre={`Fantasy`}
            films={filmListMock}
            onGenreChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
