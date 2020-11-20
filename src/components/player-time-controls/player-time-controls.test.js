import React from "react";
import renderer from "react-test-renderer";
import PlayerTimeControls from "./player-time-controls";

describe(`PlayerTimeControls render`, () => {
  it(`renders PlayerTimeControls component with runtime 180 and currentTimeInSeconds 100`, () => {
    const tree = renderer
      .create(
          <PlayerTimeControls
            runtime={180}
            currentTimeInSeconds={100}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders PlayerTimeControls component with runtime 180 and currentTimeInSeconds 1000`, () => {
    const tree = renderer
      .create(
          <PlayerTimeControls
            runtime={180}
            currentTimeInSeconds={1000}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
