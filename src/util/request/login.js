/**
 * 登录接口
 */

import CONFIG from '@/util/config';
import * as https from '@/util/request';

const INTF = CONFIG.adminLogin;

export const adminLogin = (params = {}) => {
  return https.post(INTF.adminLogin, params).then(res => {
    return res;
  })
}