import { expectSaga } from 'redux-saga-test-plan';
import rootSaga from '../index';

describe('saga index', () => {
  it('should listen sagas and export them', () =>
    expectSaga(rootSaga)
      .run()
      .then(() => {}));
});
