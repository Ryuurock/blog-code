// import { createCustomEvent } from './utils';
import events from './event';

import * as eventConst from './eventsConstants';
//===================wechat=====================
import wechat from './platform/wechat/acceptEvent';
import wechatEventHandler from './platform/wechat/eventHandler';
//===================wechat=====================

const platformHandler = {
  wechat: wechatEventHandler
};

document.body.addEventListener( 'extensionBrowerEvent', function( { detail } ) {
  let jsonDetail = null;
  try {
    jsonDetail = typeof detail === 'object' ? ( detail || {} ) : JSON.parse( detail );
  } catch ( error ) {
    return;
  }
  let { event, data, platform } = jsonDetail;

  let eventHandlers = platformHandler[ platform ];
  let namespaceEvent = `${platform}.${event}`;

  if ( eventHandlers ) {
    // 根据平台来获取相关的事件处理
    let handlerItem = eventHandlers[ namespaceEvent ];
    handlerItem ? handlerItem( data ) : events.emit( namespaceEvent, data );
  } else {
    events.emit( namespaceEvent, data );
  }
}, false );

export default events;
export { eventConst, wechat };
