import { USER_GET } from '../action-types/user.action-types';

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_GET: {
      return Object.assign({}, state, {
        user: { id: 1 },
      });
    }
    default: {
      return state;
    }
  }
};
