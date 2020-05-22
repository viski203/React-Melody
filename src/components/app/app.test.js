import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";

it('App correctlyt renders after restart', () => {
    const tree = renderer.create(<App mistakesCount={0} time={0} onClick={() => {}}/>).toJSON();
    expect(tree).toMatchSnapshot();
});