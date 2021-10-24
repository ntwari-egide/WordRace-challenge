
/**
 * @author: ntwari egide
 * @description: All app tests
 */

import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("Renders instructions when game is started!", () => {
  const AppComponent = shallow(<App />);

  const instructionmodal = <p>By clicking <strong>START GAME</strong> you're going to see word to type</p>

  expect(AppComponent.contains(instructionmodal)).toEqual(true);
});


// it("Checking start game button clicked!", () => {
//   const component = mount(<App />);

//   component
//     .simulate('keydown',{which: 300})

//   expect().toHaveBeenCalled()
// })