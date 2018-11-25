import React from 'react';
import {shallow,mount} from 'enzyme'
import Root from 'Root'
import CommentBox from 'components/CommentBox'

//SHALLOW RENDER WILL THROW AN ERROR ON - event.preventDefault() inside CommentBox onSubmit
//-------------------------THUS NEED TO USE mount-----------------------------------------

let component;

beforeEach(()=>{
  //===========REDUX STORE ACCESS via Root==============
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})
afterEach(()=>{
  component.unmount()
})

// it('renders CommentBox without crashing', () => {
//   mount(<CommentBox />)
// });

it('shows a text area and two buttons', ()=>{
  expect(component.find('textarea').length).toEqual(1)
  expect(component.find('button').length).toEqual(2)

})

describe('the text area', ()=>{
  beforeEach(()=>{
    component.find('textarea').simulate('change', {
      target: { value: 'test comment'}
    })
    component.update()
  })

  it('has a text area that user can type in', ()=>{
    expect(component.find('textarea').prop('value')).toEqual('test comment')
  })

  it('when form is submitted, text area gets emptied', ()=>{
    component.find('form').simulate('submit')
    component.update()
    expect(component.find('textarea').prop('value')).toEqual('')
  })

})
