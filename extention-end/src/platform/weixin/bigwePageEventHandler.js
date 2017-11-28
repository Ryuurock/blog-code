
/**
 * 操作本页bigwe.com的事件
 */
import { createCustomEvent } from "../../utils/utils";

/**
 * 由页面主动发起的事件
 */

const wechatFrameID = 'bigwe-weixin-frame';

export default {
  /**
   * 微信各种操作之前，需要插入iframe
   */
  initFrame() {
    !$( `#${wechatFrameID}` ).length ?
      $( `<iframe width="100%" height="500px" id="${wechatFrameID}"/>` )
      .prop( 'src', 'https://mp.weixin.qq.com' )
      .appendTo( 'body' ).bind( 'load', function() {
        chrome.extension.sendMessage( { type: 'executeScript', data: 'build/insertWechat.js' } )
      } ) : $( `#${wechatFrameID}` )[ 0 ].contentWindow.location.reload()
  },
  
}
