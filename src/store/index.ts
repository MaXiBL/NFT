import { InjectionKey } from '@vue/runtime-core';
import { createStore } from 'vuex';
import { getNftHomeList, getNftList } from "../utils/api";

export default interface permissionStateTypes {
  ConnectWalletID: String,
  WalletName: String,
  AllNftList: any,
  signature: string,
  hash: String
}


// 新建store 实例
export const store = createStore({
  state: {
    ConnectWalletID: localStorage.getItem('ConnectWalletID') || '',
    WalletName: localStorage.getItem('WalletName') || '',
    AllNftList: localStorage.getItem('AllNftList') || '',
    signature: localStorage.getItem('signature') || '',
    hash:localStorage.getItem('hash') || '',
  },
  mutations: {
    setConnectWallet: (state: permissionStateTypes, info) => {
      state.ConnectWalletID = info.address;
      state.WalletName = info.name;
      localStorage.setItem('ConnectWalletID', info.address);
      localStorage.setItem('WalletName', info.name);
    },
    setHashValue: (state: permissionStateTypes, info) => {
      state.signature = info.signature;
      state.hash = info.hash;
      localStorage.setItem("signature", info.signature);
      localStorage.setItem("hash", info.hash);
    },
    Logout: (state: permissionStateTypes) => {
      state.ConnectWalletID = '';
      state.WalletName = '';
      localStorage.clear();
    },
    getAllNftList: (state: permissionStateTypes, data) => {
      state.AllNftList = data;
      localStorage.setItem('AllNftList', data);
    },
  },
  actions: {
    connectWallet({ commit }, info: any) {
      commit('setConnectWallet', info);
    },
    setHash({ commit }, info: any) {
      commit('setHashValue', info);
    },
    Logout({ commit }) {
      commit('Logout');
    },
    async getAllNftList({ commit }) {
      var data = (await getNftList()).data;
      commit('getAllNftList', JSON.stringify(data));
    },
  },
  getters: {
    getConnectWalletID(state: permissionStateTypes) {
      return state.ConnectWalletID;
    },
    getWalletName(state: permissionStateTypes) {
      return state.WalletName;
    },
    getAllNftList(state: permissionStateTypes) {
      return state.AllNftList;
    },
    getSignature(state: permissionStateTypes) {
      return state.signature;
    },
    getHash(state: permissionStateTypes) {
      return state.hash;
    },
  },
});

