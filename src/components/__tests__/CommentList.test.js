import React from 'react';
import {mount} from 'enzyme'
import Root from 'Root'
import CommentList from 'components/CommentList'

//SHALLOW RENDER WILL NOT WORK WITH REDUX STORE -------------------------------------------
//-------------------------THUS NEED TO USE mount-----------------------------------------

let component;

beforeEach(()=>{
  //=================INITIAL STATE SET UP ===============
  const initialState = {
    comments: ['Comment1', 'Comment2']
  }
  //===========REDUX STORE ACCESS via Root==============
  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})
afterEach(()=>{
  component.unmount()
})

it('creates one <li> elem per comment', ()=>{
  expect(component.find('li').length).toEqual(2)
})
it('shows the text for each comment', ()=>{
  expect(component.render().text()).toContain('Comment1Comment2')
  expect(component.render().text()).toContain('Comment2')
})
