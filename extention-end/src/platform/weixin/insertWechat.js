import router from './wxRouterMapping';
import { dataMiddleDomId } from '../../utils/constants';
import { onMessageFromBackground } from '../../contentScript/mixin';
import events from './pageEventHandler';

location.hostname === 'mp.weixin.qq.com' && ( function() {
  
  onMessageFromBackground( 'sendMessageToFrameContentScript', function( { event, data } ) {
    events[ event ] && events[ event ]( data )
  } );

  function sendMessageToPage( data ) {
    chrome.extension.sendMessage( {
      type: 'sendMessageToPage',
      data: $.extend( data, { platform: 'wechat' } )
    } );
  }

  // 对每次微信frame的跳转进行响应
  $( function() {
    let result = router( location );
    result && sendMessageToPage( result )
  } );

  // 来自iframe页面的消息
  document.body.addEventListener( 'extensionPageEventFromFrame', function() {
    sendMessageToPage( {
      event: 'xhr',
      platform: 'wechat',
      data: JSON.parse( $( `#${dataMiddleDomId}` ).val() )
    } )
  }, false )

  var script = document.createElement( 'script' );
  script.src = chrome.extension.getURL( 'build/xhr.js' );
  script.onload = function() {
    //this.remove();
  };
  ( document.head || document.documentElement ).appendChild( script );

  $( `<textarea style="display: none" id="${dataMiddleDomId}"></textarea>` ).appendTo( document.body );
}() );
