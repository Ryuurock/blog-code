/**
 * 作用域在隔离的window环境下
 * 
 * 
 * 
 * 
 */

import { createCustomEvent } from "../../utils/utils";

let urlToken = null;

const urlFunMap = {
  '/' () {
    // $( 'form.login_form .mpui-form__input[name="account"]' )
    //   .val( 'xxxxxxx' )[ 0 ]
    //   .dispatchEvent( createCustomEvent( 'input' ) )

    // $( 'form.login_form .mpui-form__input[name="password"]' )
    //   .val( 'xxxxx' )[ 0 ]
    //   .dispatchEvent( createCustomEvent( 'input' ) )

    // $( 'form.login_form .btn_login' )[ 0 ]
    //   .dispatchEvent( new Event( 'click' ) );

    return {
      event: 'enteredIndex'
    }
  },
  '/cgi-bin/bizlogin' () {
    return {
      // 扫码
      event: 'scanCode',
      data: {
        src: $( '.qrcode.js_qrcode' ).prop( 'src' )
      }
    }
  },
  /**
   * 进入首页的操作
   * 
   */
  '/cgi-bin/home' () {
    return {
      event: 'enteredHome'
    }
  },
  '/cgi-bin/appmsg': {
    'media/appmsg_edit_v2' () {

      return {
        event: 'enteredEditor'
      }
    }
  }
}

/**
 * 处理微信每个页面初始化要做的事
 * 
 * @export
 * @param {any} url 
 */
export default function( location ) {
  let {
    pathname,
    origin,
    hostname,
    search
  } = location;

  let handler = urlFunMap[ pathname ];

  let searchMap = {};

  search.substr( 1, Infinity ).split( '&' ).forEach( item => {
    let [ key, value ] = item.split( '=' );
    searchMap[ key ] = value;
  } );
  urlToken = searchMap[ 'token' ]

  if ( typeof handler !== 'function' && searchMap.t ) {
    handler = handler[ searchMap.t ];
  }

  return handler && handler( searchMap );
}


export function goPage( url ) {
  location.href = `${url}${urlToken}`
}
