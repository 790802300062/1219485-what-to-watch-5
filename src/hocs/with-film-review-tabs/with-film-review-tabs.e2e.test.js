import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFilmReviewTabs from "./with-film-review-tabs";
import {Tab} from "../../constants";
import {noop} from "../../test-data/test-data";
import {MockComponent} from "../../test-data/components";

configure({adapter: new Adapter()});

const MockComponentWrapped = withFilmReviewTabs(MockComponent);

describe(`interactions with withFilmReviewTabs`, () => {
  it(`withFilmReviewTabs has default state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    expect(wrapper.state().currentTab).toEqual(Tab.OVERVIEW);
  });

  it(`change tabs`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    const mockedEvent = {
      currentTarget: {
        dataset: {
          tabType: Tab.DETAILS,
        }
      },
      preventDefault: noop,
    };

    wrapper.props().onTabClick(mockedEvent);
    expect(wrapper.state().currentTab).toEqual(Tab.DETAILS);

    mockedEvent.currentTarget.dataset.tabType = Tab.REVIEWS;
    wrapper.props().onTabClick(mockedEvent);
    expect(wrapper.state().currentTab).toEqual(Tab.REVIEWS);
  });
});
