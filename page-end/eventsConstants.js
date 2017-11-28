/**
 * 事件常量
 * 命名空间后面对应插件内的事件
 * 
 * 
 */

export const wechatConst = {
  // 数据接口响应事件
  xhrEvent: 'wechat.xhr',
  // 微信扫码事件
  scanCode: 'wechat.scanCode',
  // 发送文章
  sendArticle: 'wechat.sendArticle',
  // 进入home的回调
  _enteredHome: 'wechat.enteredHome',
  // 首页初始化好
  _enteredIndex: 'wechat.enteredIndex',
  // 进入编辑器
  _enteredEditor: 'wechat.enterdEditor'
};

export const bigweConst = {
  // 数据接口响应事件
  hasExtension: 'bigwe.hasExtension'
};

export const UCConst = {
  // UC后台准备
  initFrame: 'uc.initFrame'
};
