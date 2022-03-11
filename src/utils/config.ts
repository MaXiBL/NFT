// 测试环境
let config_dev = {
    baseUrl: "",
    chainId: 1012
}

// 正式环境
let config_prod = {
    baseUrl: "",
    chainId: 56
}

let baseUrl = ''
let ChainId = 0

switch (process.env.VUE_APP_CURENV) {
    case 'dev':
        baseUrl = config_dev.baseUrl
        ChainId = config_dev.chainId
        break
    case 'prod':
        baseUrl = config_prod.baseUrl
        ChainId = config_prod.chainId
        break
}

export { baseUrl, ChainId };