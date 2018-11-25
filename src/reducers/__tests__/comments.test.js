import commentsReducer from 'reducers/commentsReducer'
import {SAVE_COMMENT} from 'actions/types'

it('handles action with unknown type, via default case in reducer', ()=>{
  const newState = commentsReducer([], 'DSFS_DSFE')
  expect(newState).toEqual([])
})

it('handles actions of type SAVE_COMMENT', ()=>{
  const dummy_action = {
    type: SAVE_COMMENT,
    payload: 'Test Comment'
  }

  const newState = commentsReducer([], dummy_action)
  expect(newState).toEqual(['Test Comment'])
})
