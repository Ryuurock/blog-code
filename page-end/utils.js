export function createCustomEvent( eventName, data ) {
  data = data || {};
  // let customEvent = document.createEvent( 'Event' )
  // customEvent.initEvent( eventName, p2, p3 )
  return new CustomEvent( eventName, { detail: data } );
}

export function sendMessageToPulgin( value, operate ) {
  if ( !value.platform ) new Error( '缺少平台' );
  if ( !value.event ) new Error( '缺少事件' );

  if ( operate !== false ) {
    $.extend( value, {
      operate: operate || 'sendMessageToFrameContentScript'
    } );
  }

  document.body.dispatchEvent( new createCustomEvent( 'extensionPageEvent', value ) );
}

export function initWechatFrame() {
  sendMessageToPulgin( {
    platform: 'wechat',
    event: 'bigwePage.initFrame'
  }, false );
}
