import { createCustomEvent } from "../utils/utils";
import wechat_pageEvent from '../platform/weixin/pageEventHandler';
import wechat_bigwePageEvent from '../platform/weixin/bigwePageEventHandler';
import { onMessageFromBackground } from "./mixin";

function sendMessageToPage( request ) {
  document.body.dispatchEvent( createCustomEvent( 'extensionBrowerEvent', { detail: request } ) )
}
/**
 * 这里应该接收来自background脚本的消息
 */
onMessageFromBackground( 'sendMessageToPage', sendMessageToPage )

let handler = {
  wechat: {
    // 这里不会执行
    page: wechat_pageEvent,
    bigwePage: wechat_bigwePageEvent
  },
  bigwe: {
    // 插件能力检测
    extentionDetection() {
      sendMessageToPage( {
        platform: 'bigwe',
        event: 'hasExtension',
        data: 1
      } )
    }
  }
};


/**
 * 接收来自页面的事件
 * 
 */
// 根据不同平台实例化不同iframe
document.body.addEventListener( 'extensionPageEvent', function( { detail } ) {
  let { platform, event, data } = detail;
  let platformHandler = handler[ platform ];
  if ( !platform || !platformHandler ) throw new Error( '平台错误' );
  let [ prefix, eventName ] = event.split( '.' );

  let eventHandlers = platformHandler[ prefix ];
  // 执行页面主动发起的事件
  if ( prefix === 'bigwePage' || typeof eventHandlers === 'function' ) {
    typeof eventHandlers === 'function' ?
      eventHandlers( data ) :
      eventHandlers[ eventName ] && eventHandlers[ eventName ]( data )
  } else {
    // 这里要通过background作为桥来通知各个平台的业务代码执行，本脚本不插入iframe 
    // 所以不执行业务代码，发消息给iframe的contentscript来执行代码
    chrome.extension.sendMessage( {
      type: 'sendMessageToFrameContentScript',
      data: $.extend( detail, { event: eventName } )
    } );
  }

}, false )
