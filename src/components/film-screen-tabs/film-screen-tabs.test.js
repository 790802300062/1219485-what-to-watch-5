import React from "react";
import renderer from "react-test-renderer";
import {Tab} from "../../constants";
import {filmListMock, mockReviews, noop} from "../../test-data/test-data";
import FilmScreenTabs from "./film-screen-tabs";

describe(`FilmScreenTabs render`, () => {
  it(`renders FilmScreenTabs component with Details Tab`, () => {
    const tree = renderer
      .create(
          <FilmScreenTabs
            currentTab={Tab.DETAILS}
            film={filmListMock[0]}
            reviews={mockReviews}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmScreenTabs component with Overview Tab`, () => {
    const tree = renderer
      .create(
          <FilmScreenTabs
            currentTab={Tab.OVERVIEW}
            film={filmListMock[0]}
            reviews={mockReviews}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmScreenTabs component with Review Tab`, () => {
    const tree = renderer
      .create(
          <FilmScreenTabs
            currentTab={Tab.REVIEWS}
            film={filmListMock[0]}
            reviews={mockReviews}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
