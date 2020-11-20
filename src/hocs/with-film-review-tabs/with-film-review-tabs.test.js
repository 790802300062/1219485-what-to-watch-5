import React from "react";
import renderer from "react-test-renderer";
import {MockComponent} from "../../test-data/test-data";
import withFilmReviewTabs from "./with-film-review-tabs";

const MockComponentWrapped = withFilmReviewTabs(MockComponent);
it(`renders withFilmReviewTabs`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
