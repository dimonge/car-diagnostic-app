import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    // github: require('./GithubRedux').reducer,
    todos: require('./TodosRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
