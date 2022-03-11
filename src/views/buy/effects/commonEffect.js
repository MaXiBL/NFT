import { post, get } from "@/utils/request.js";

const commonEffect = () => {
  //人民币转美元（没用到的）
  const cnyToUsd = (cny) => {
    let usd = (cny * 0.1561).toFixed(4)
    return usd
  }

  //查询用户信息
  const getUserInfo = async (userAddr) => {
    let params = {
      addr: userAddr
    }
    let res = await get('/api/userinfo', params)
    console.log('用户信息:')
    console.log(res)
    if(res?.data){
      return res.data
    }else{
      return {}
    }
  }

  return { cnyToUsd, getUserInfo }
}
export default commonEffect
