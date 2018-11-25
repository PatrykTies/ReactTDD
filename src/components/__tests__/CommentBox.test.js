import React from 'react';
import {mount} from 'enzyme'
import CommentBox from 'components/CommentBox'

//SHALLOW RENDER WILL THROW AN ERROR ON - event.preventDefault() inside CommentBox onSubmit
//-------------------------THUS NEED TO USE mount-----------------------------------------

let component;

beforeEach(()=>{
  component = mount(<CommentBox />)
})
afterEach(()=>{
  component.unmount()
})

it('renders CommentBox without crashing', () => {
  shallow(<CommentBox />)
});

it('shows a text area and a button', ()=>{
  expect(component.find('textarea').length).toEqual(1)
  expect(component.find('button').length).toEqual(1)

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
