import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import {filmListMock} from "../../test-data/test-data";
import withActivePlayer from "./with-active-player";

const {previewImage, videoPreview} = filmListMock[0];

const mockVideoPlayerSettings = {
  previewImage,
  videoPreview,
  width: 280,
  height: 175,
  filmId: 1,
};

const MockComponent = (props) => {
  return (
    <div>
      {props.renderPlayer(mockVideoPlayerSettings)}
    </div>
  );
};

const MockComponentWrapped = withActivePlayer(MockComponent);

it(`renders withActivePlayer`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
};

