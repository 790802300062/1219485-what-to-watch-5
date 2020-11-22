import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewForm from "./with-review-form";
import {MockComponent} from "../../test-data/components";

configure({adapter: new Adapter()});

const MockComponentWrapped = withReviewForm(MockComponent);

describe(`interactions with withReviewForm`, () => {
  it(`withReviewForm has default state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped filmId={1}/>
    );

    expect(wrapper.state().ratingStars).toEqual(1);
    expect(wrapper.state().reviewText).toEqual(``);
  });

  it(`change rating stars`, () => {
    const wrapper = shallow(
        <MockComponentWrapped filmId={1}/>
    );

    wrapper.props().onRatingChange({target: {value: 3}});
    expect(wrapper.state().ratingStars).toEqual(3);

    wrapper.props().onRatingChange({target: {value: 5}});
    expect(wrapper.state().ratingStars).toEqual(5);

    wrapper.props().onRatingChange({target: {value: 1}});
    expect(wrapper.state().ratingStars).toEqual(1);
  });

  it(`change review text`, () => {
    const wrapper = shallow(
        <MockComponentWrapped filmId={1}/>
    );

    wrapper.props().onReviewChange({target: {value: `great movie`}});
    expect(wrapper.state().reviewText).toEqual(`great movie`);

    wrapper.props().onReviewChange({target: {value: `99999`}});
    expect(wrapper.state().reviewText).toEqual(`99999`);
  });
});
