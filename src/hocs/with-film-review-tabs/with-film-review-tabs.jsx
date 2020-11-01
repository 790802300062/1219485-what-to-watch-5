import React, {PureComponent} from "react";
import {Tab} from "../../constants";

const withFilmReviewTabs = (Component) => {
  class WithFilmReviewTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: Tab.OVERVIEW,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(evt) {
      evt.preventDefault();
      const tabType = evt.currentTarget.dataset.tabType;

      this.setState({
        currentTab: tabType,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          currentTab={this.state.currentTab}
          onTabClick={this._handleTabClick}
        />
      );
    }
  }

  return WithFilmReviewTabs;
};

export default withFilmReviewTabs;
