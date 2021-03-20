/**
 * 商品相关接口
 */
import CONFIG from '@/util/config';
import * as https from '@/util/request';

const INTF = CONFIG.product;

// 获取商品列表
export const getProductList = (params = {}) => {
  return https.get(INTF.getProducts, params).then(res => {
    return res;
  })
}

// 获取商品列表
export const addProduct = (params = {}) => {
  return https.post(INTF.addProduct, params).then(res => {
    return res;
  })
}