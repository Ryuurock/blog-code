/**
 * 创建一个自定义事件
 * 
 * @export
 * @param {string} [eventName='click'] 
 * @param {boolean} [p2=true] 
 * @param {boolean} [p3=true] 
 * @returns 
 */
export function createCustomEvent( eventName, data ) {
  data = data || {}
  // let customEvent = document.createEvent( 'Event' )
  // customEvent.initEvent( eventName, p2, p3 )
  return new CustomEvent( eventName, data.detail ? data : { detail: data } )
}
