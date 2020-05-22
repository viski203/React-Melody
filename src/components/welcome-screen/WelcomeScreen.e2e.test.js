import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './WelcomeScreen';
configure({ adapter: new Adapter() });
it('Welcome screen click is correct', () => {
    const clickHandler = jest.fn();
    const ws = shallow(<WelcomeScreen mistakesCount={0} time={0} onClick={clickHandler} />);

    const startButton = ws.find('button');
    startButton.simulate('click');
    expect(clickHandler).toHaveBeenCalledTimes(1);
});