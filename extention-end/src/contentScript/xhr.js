import { createCustomEvent } from "../utils/utils";
import { dataMiddleDomId } from "../utils/constants";

/**
 * 对全局XMLHttpRequest覆盖 直接插入到dom
 * 
 * @Date 2017年11月21日
 */
function modifyResponse( response ) {

  var original_response, modified_response;

  if ( this.readyState === 4 ) {

    let {
      readyState,
      requestData,
      requestMethod,
      requestURL,
      response,
      responseText,
      responseType,
      responseURL,
      responseXML,
      status,
      statusText,
      timeout,
      withCredentials
    } = this;


    $( `#${dataMiddleDomId}` ).val( JSON.stringify( {
      readyState,
      requestData,
      requestMethod,
      requestURL,
      response,
      responseText,
      responseType,
      responseURL,
      responseXML,
      status,
      statusText,
      timeout,
      withCredentials
    } ) )
    document.body.dispatchEvent( createCustomEvent( 'extensionPageEventFromFrame', { detail: this } ) )
  }
}
XMLHttpRequest.prototype.open = ( function( original_function ) {
  return function( method, url, async ) {
    // 保存请求相关参数
    this.requestMethod = method;
    this.requestURL = url;

    this.addEventListener( "readystatechange", modifyResponse );
    return original_function.apply( this, arguments );
  };
}( XMLHttpRequest.prototype.open ) );

XMLHttpRequest.prototype.send = ( function( original_function ) {
  return function( data ) {
    // 保存请求相关参数
    this.requestData = data;
    return original_function.apply( this, arguments );
  };
}( XMLHttpRequest.prototype.send ) );
