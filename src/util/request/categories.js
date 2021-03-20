/**
 * 分类相关接口
 */
import CONFIG from '@/util/config';
import * as https from '@/util/request';

const INTF = CONFIG.categories;

// 获取分类数据
export const getCategoriesList = (params = {}) => {
  return https.get(INTF.getCategories, params).then(res => {
    return res;
  })
}