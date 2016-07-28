import reducer, { defaultState } from 'redux/modules/inbox';
import deepFreeze from 'deep-freeze';

describe('(Redux) inbox', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
