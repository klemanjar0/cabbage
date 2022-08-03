import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('lodash/debounce', () => jest.fn((fn) => fn));

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

global.fetch = jest.fn();

global.WebSocket = jest.fn();
