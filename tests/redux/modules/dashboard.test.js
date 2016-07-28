import reducer, { defaultState } from 'redux/modules/dashboard';
import deepFreeze from 'deep-freeze';

describe('(Redux) dashboard', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
