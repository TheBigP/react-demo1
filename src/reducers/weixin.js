import * as ACTION from '../constants/weixin';

const wx = require('weixin-js-sdk');

const weixin = (state = {
  isFetching: false,
  err: null,
}, action) => {
  switch (action.type) {
  case ACTION.GET_SIGNATURE_REQUEST:
    return {
      ...state,
      isFetching: true,
    }
  case ACTION.GET_SIGNATURE_SUCCESS:
    const r = action.response;
    console.log(r);
    wx.config({
      debug: true,
      appId: r.appId,
      timestamp: r.timestamp,
      nonceStr: r.nonceStr,
      signature: r.signature,
      jsApiList: [
        'scanQRCode',
        'chooseWXPay',
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'openLocation',
       ],
    });

    return {
      ...state,
      isFetching: false,
    }
  case ACTION.GET_SIGNATURE_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error
    }
  default:
    return state;
  }
};
export default weixin;
