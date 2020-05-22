import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './WelcomeScreen';

it('App correctlyt renders after restart', () => {
  const tree = renderer.create(<WelcomeScreen mistakesCount={0} time={0} onClick={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
});