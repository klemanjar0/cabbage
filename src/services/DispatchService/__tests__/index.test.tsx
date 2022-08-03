import DispatchService, { initDispatch } from '../index';

describe('src/services/DispatchService.ts', () => {
  const mockDispatch = jest.fn();
  initDispatch(mockDispatch);

  it('returns dispatch', () => {
    const result = DispatchService.dispatch();
    expect(result).toEqual(mockDispatch);
  });

  it('calls dispatch', () => {
    const mockAction = (payload: string) => ({ type: 'MOCK_ACTION_TYPE', payload });
    const mockPayload = 'mock_payload';
    DispatchService.send(mockAction, mockPayload);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction(mockPayload));
  });
});
