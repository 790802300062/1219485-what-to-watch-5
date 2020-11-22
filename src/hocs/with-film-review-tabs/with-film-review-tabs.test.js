import React from "react";
import renderer from "react-test-renderer";
import {MockComponentWithChildren} from "../../test-data/components";
import withFilmReviewTabs from "./with-film-review-tabs";

const MockComponentWrapped = withFilmReviewTabs(MockComponentWithChildren);
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
