import { wechatConst } from '../../eventsConstants';
import event from '../../event';
/**
 * 处理来自插件的响应
 */
export default {
  [ wechatConst.scanCode ]( data ) {
    event.emit( wechatConst.scanCode, data );
  },
  [ wechatConst.xhrEvent ]( { responseText } ) {
    let response = null;
    try {
      response = JSON.parse( responseText );
    } catch ( error ) {
      response = {
        base_resp: {
          ret: -999,
          err_msg: '数据发生错误，请尝试重复刚才的操作'
        }
      };
    }
    // TODO  统一对响应数据进行处理
    event.emit( wechatConst.xhrEvent, response.base_resp );
  },
};
