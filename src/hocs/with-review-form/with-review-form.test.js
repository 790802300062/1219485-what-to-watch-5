import React from "react";
import renderer from "react-test-renderer";
import withReviewForm from "./with-review-form";
import {MockComponentWithChildren} from "../../test-data/components";

const MockComponentWrapped = withReviewForm(MockComponentWithChildren);

it(`renders withReviewForm`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped filmId={1}>
          <React.Fragment />
        </MockComponentWrapped>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
