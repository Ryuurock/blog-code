/**
 * 操作插入到页面的iframe
 */
import { createCustomEvent } from "../../utils/utils";
import { goPage } from "./wxRouterMapping";

const createEditorUrl = '/cgi-bin/appmsg?t=media/appmsg_edit_v2&action=edit&isNew=1&type=10&lang=zh_CN&token='


export default {
  login( { username, password, code } ) {
    $( 'form.login_form .mpui-form__input[name="account"]' )
      .val( username )[ 0 ]
      .dispatchEvent( createCustomEvent( 'input' ) )

    $( 'form.login_form .mpui-form__input[name="password"]' )
      .val( password )[ 0 ]
      .dispatchEvent( createCustomEvent( 'input' ) )

    $( 'form.login_form .btn_login' )[ 0 ]
      .dispatchEvent( new Event( 'click' ) );
  },
  goEditor() {
    goPage( createEditorUrl );
  }
}
