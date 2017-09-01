
export const scan = (options: any) => (dispatch: any) => {
  dispatch({
    type: 'SCAN_RECEIVED',
    payload: options
  });
};
