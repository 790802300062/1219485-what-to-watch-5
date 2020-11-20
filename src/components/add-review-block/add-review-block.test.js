import React from "react";
import renderer from "react-test-renderer";
import {AddReviewBlock} from "./add-review-block";
import {noop} from "../../test-data";

describe(`AddReviewBlock render`, () => {
  it(`renders AddReviewBlock component with 5 stars and without text`, () => {
    const tree = renderer
      .create(
          <AddReviewBlock
            ratingStars={5}
            reviewText={``}
            filmId={0}
            onRatingChange={noop}
            onReviewChange={noop}
            onSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders AddReviewBlock component with no stars and with text`, () => {
    const tree = renderer
      .create(
          <AddReviewBlock
            ratingStars={0}
            reviewText={`great movie`}
            filmId={0}
            onRatingChange={noop}
            onReviewChange={noop}
            onSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
