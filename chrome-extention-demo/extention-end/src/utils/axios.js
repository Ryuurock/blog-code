//let qs = require( 'qs' )
import axios from 'axios'

axios.interceptors.request.use( config => {
  //在请求发出之前进行一些操作
  config.data = qs.stringify( config.data );
  // console.log(qs.stringify( config.data ))
  config.headers = {
    Origin: 'https://mp.weixin.qq.com',
    Referer: 'https://mp.weixin.qq.com',
    'X-Requested-With': 'XMLHttpRequest'
  }

  return config;

}, function( err ) {
  //Do something with request error
  return Promise.reject( err );
} )

export default axios;
