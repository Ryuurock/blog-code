import { wechatConst, bigweConst } from '../../eventsConstants';
import { initWechatFrame, sendMessageToPulgin } from '../../utils';
import event from '../../event';

/**
 * 提供微信能力 如发送 预览等
 * 
 * 
 * @param {*} event 
 */
export default {
  /**
   * 调用者发起文章发送的请求
   * 
   * 
   * @param {*} articles 
   * @param {*} appID 
   */
  sendArticle: ( function() {
    // 用户信息缓存
    let userInfoTemp = null;

    return function( articles, appID ) {

      return new Promise( ( resolve, reject ) => {

        initWechatFrame();
        // 进入mp.weixin.qq.com
        event.one( wechatConst._enteredIndex, async function() {
          // TODO 发起获取公众号账户和密码的请求

          // let userInfo = await userInfoTemp ? Promise.resolve( userInfoTemp ) : $.get2( '' ).then( ( { ret, data } ) => {
          //   if ( ret === 0 ) {
          //     return {

          //     }
          //   }
          // } );
          
          sendMessageToPulgin( {
            platform: 'wechat',
            event: 'page.login', // 修改成按命名空间来触发事件
            data: {
              username: 'xxxxxx',
              password: 'xxxxx'
            }
          } );

        } );
        
        event.one( wechatConst._enteredHome, function() {
          // 登录成功进入首页
          sendMessageToPulgin( {
            platform: 'wechat',
            event: 'page.goEditor'
          } );
        } );


      } ).catch( err => {
        throw new Error( err );
      } );

    };
  }() ),

  hasExtension() {
    return new Promise( ( resolve ) => {

      event.one( bigweConst.hasExtension, () => resolve( true ) );

      sendMessageToPulgin( {
        platform: 'bigwe',
        event: 'extentionDetection',
      }, false );

      // 200ms未响应则为未安装插件
      setTimeout( () => resolve( false ), 200 );

    } ).catch( () => { throw new Error(); } );
  }
};
