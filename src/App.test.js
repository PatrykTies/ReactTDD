import React from 'react';
import {shallow} from 'enzyme'
import App from 'App';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let component;

beforeEach(()=>{
  component = shallow(<App />)
})

it('renders without crashing', () => {
  shallow(<App />)
});

it('shows a CommentBox', ()=>{
  expect(component.find(CommentBox).length).toEqual(1)
})

it('shows a CommentList', ()=>{
  expect(component.find(CommentList).length).toEqual(1)
})
