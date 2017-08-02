import { CALL_API } from '../middleware/api';
import * as ACTION from '../constants/weixin';

const wx = require('weixin-js-sdk');

const headers = new Headers({
  "Content-Type": "application/json",
});

export const getsignature = () => {
  return {
    [CALL_API]: {
      endpoint: '/weixin/getsignature',
      init: {
        method: 'PUT',
        body: JSON.stringify({
          url: window.location.href.split('#')[0]
        }),
        headers,
      },
      types: [
        ACTION.GET_SIGNATURE_REQUEST,
        ACTION.GET_SIGNATURE_SUCCESS,
        ACTION.GET_SIGNATURE_FAILURE
      ],
    }
  };
};

export const scanQRCode = () => dispatch => {
  dispatch({
    type: ACTION.SCAN_QRCODE_REQUEST,
  });
  wx.scanQRCode({
    needResult: 1,
    desc: 'scanQRCode desc',
    success: function (res) {
      if (res && res.resultStr) {
        const hash = res.resultStr.substring(res.resultStr.lastIndexOf(',') + 1);
        dispatch({
          type: ACTION.SCAN_QRCODE_SUCCESS,
          hash,
        });
      } else {
        dispatch({
          type: ACTION.SCAN_QRCODE_FAILURE,
          error: 'scan error',
        });
      }
    }
  });
};
