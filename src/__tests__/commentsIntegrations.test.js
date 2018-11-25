import React from 'react'
import moxios from 'moxios'
import {mount} from 'enzyme'
import Root from 'Root'
import App from 'App'

beforeEach(()=>{
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
  })
})
afterEach(()=>{
  moxios.uninstall()
})

it('can fetch a list of comments and display them', (done)=>{
  const component = mount(
    <Root>
      <App />
    </Root>
  )
  component.find('.fetch-comments-button').simulate('click')

  //DELAYED AS MOXIOS FETCHING DATA - SIMULATE FETCH
  moxios.wait(()=>{
    component.update()
    expect(component.find('li').length).toEqual(2)
    done()

    component.unmount()
  })

})
