import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../constants";
import {UserBlock} from "./user-block";

describe(`UserBlock render`, () => {
  it(`renders UserBlock component - user is authorized`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders UserBlock component - user is not authorized`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
