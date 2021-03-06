import {saveComment} from 'actions'
import {SAVE_COMMENT} from 'actions/types'

describe('saveComment action', ()=>{
  it('has the correct type', ()=>{
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)
  })
  it('has the correct payload', ()=>{
    const action = saveComment('Test Comment')
    expect(action.payload).toEqual('Test Comment')
  })

})
