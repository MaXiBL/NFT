import axios, { AxiosInstance } from "axios";
import { store } from '@/store' // store打印为空
import { baseUrl } from "../utils/config";


const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    Accept: "application/json",
  }
})
api.interceptors.request.use((function (config: any) {
  config.headers.common['x-wallet-addr'] = store.state.ConnectWalletID;
  config.headers.common['x-sign'] = store.state.signature;
  config.headers.common['x-hash'] = store.state.hash;
  return config
}))




// 我的应用
export const getNftList = async (): Promise<any> => {
  const response = await api.get(`/api/list/tokens`);
  const result = response.data;
  return result;
};

// 我的topseller
export const topseller = async (): Promise<any> => {
  const response = await api.get(`/api/sales/topseller`);
  const result = response.data;
  return result;
};
// 我的topseller
export const popolar = async (): Promise<any> => {
  const response = await api.get(`/api/sales/popular`);
  const result = response.data;
  return result;
};

// 出售列表
export const getNftHomeList = async (): Promise<any> => {
  const response = await api.get(`/api/sales/list/allsales`);
  const result = response.data;
  return result;
};
// 正在出售
export const getSellList = async (): Promise<any> => {
  const response = await api.get(`/api/sales/list/mysales`);
  const result = response.data;
  return result;
};
// 搜索
export const searchExplore = async (keyword) => {
  let res = await api.get('/api/sales/search', {
    params: keyword
  });
  return res.data
}



export const userinfoGet = async (params) => {
  console.log('params', params)
  let res = await api.get('/api/userinfo', {

    params: params
  });
  return res.data
}
// /api/userinfo/update
export const userinfoUpdate = async (res): Promise<any> => {
  const response = await api.post(`/api/userinfo/update`, res);
  const result = response.data;
  return result;
};

// 别人的

export const getOther = async (params) => {
  let res = await api.get('/api/sales/user', {
    params: params
  });
  return res.data
}

//分类列表
export const getCate = async (): Promise<any> => {
  const response = await api.get(`/media/config.json`);
  const result = response.data;
  return result;
};

// 点击分类搜索
export const getSearchCateList = async (name): Promise<any> => {
  const response = await api.get(`/api/sales/list/allsales?category2=${name}`);
  const result = response.data;
  return result;
};

export const getUserInfos = async (userAddr) => {
  const response = await api.get(`/api/userinfo?addr=${userAddr}`)
  const result = response.data;
  return result;
}

// afant 首页 --------------------

// 首页热门集合
export const getPopularCollections = async () => {
    const response = await api.get(`/api/collection/popular`)
    const result = response.data;
    return result;
}

// 创建集合
export const createCollection = async (res) => {
    const response = await api.post(`/api/collection/new`, res);
    const result = response.data;
    return result;
}

// 查询用户所有集合列表
export const selUserCollectionList = async (res) => {
    const response = await api.get(`/api/collection/list`, {
        params: res
    })
    const result = response.data;
    return result;
}

// 查询集合信息
export const selCollectionInfo = async (keyword) => {
    let res = await api.get('/api/collection/info', {
      params: keyword
    });
    return res.data
}
// 查询权限
export const selSetPermissions = async (keyword) => {
    let res = await api.get('/api/collection/check', {
      params: keyword
    });
    return res.data
}
// 提交城建集合申请
export const submitApplication = async (res) => {
    const response = await api.post(`/api/collection/request`, res)
    return response.data
}
