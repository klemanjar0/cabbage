import { RootState } from '../redux';

const migrations = {
  0: (state: RootState) => ({
    ...state,
  }),
};

export default migrations;
