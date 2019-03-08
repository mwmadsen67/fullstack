import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import { likesReducer, dislikesReducer } from './likes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  likes: likesReducer,
  dislikes: dislikesReducer
});

export default entitiesReducer;