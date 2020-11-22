import React from "react";
import renderer from "react-test-renderer";
import {filmListMock} from "../../test-data/test-data";
import FilmCardDetailsTab from "./film-card-details-tab";

describe(`FilmCardDetailsTab render`, () => {
  it(`renders FilmCardDetailsTab component with the first mock movie data`, () => {
    const tree = renderer
      .create(
          <FilmCardDetailsTab
            film={filmListMock[0]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmCardDetailsTab component with another movie data`, () => {
    const tree = renderer
      .create(
          <FilmCardDetailsTab
            film={filmListMock[2]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
