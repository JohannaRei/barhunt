// @flow
import { types } from 'mobx-state-tree';

export const User = types
  .model('User', {
    id: types.string,
    username: types.string,
    level: types.number
  })
  .actions(self => ({
    raiseLevel() {
      self.level += 1;
    }
  }));

export const Friends = types
  .model('Friends', {
    friends: types.array(User)
  })
  .views(self => ({
    get friendCount() {
      return self.friends.length;
    }
  }))
  .actions(self => ({
    addFriend(friend) {
      self.friends.push(friend);
    },
    removeFriend(id) {
      self.friends = self.friends.filter(f => f.id !== id);
    }
  }));
