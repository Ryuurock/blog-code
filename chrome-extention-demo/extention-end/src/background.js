import axios from './utils/axios'
import bgMessageHandle from './background/backgroundMessageHandle'


// const wx = 'https://mp.weixin.qq.com';


// chrome.browserAction.onClicked.addListener( function( tab ) {
//   chrome.tabs.getSelected( null, function( tab ) {　　 // 先获取当前页面的tabID
//     console.log( tab )
//     chrome.tabs.sendMessage( tab.id, { greeting: "hello" }, function( response ) {
//       console.log( response );　　 // 向content-script.js发送请求信息
//     } )
//   } )
// } )

chrome.extension.onMessage.addListener( function( { type = 'executeScript', data = '' }, sender, sendResponse ) {
  console.log( sender.tab ?
    "from a content script:" + sender.tab.url :
    "from the extension" );
  bgMessageHandle[ type ]( data, sender.tab.id )
  sendResponse( arguments[ 0 ] )
} )

/**
 * 拦截网络请求发出前
 */
// chrome.webRequest.onBeforeRequest.addListener( function( details ) {
//     console.error( details )
//     chrome.tabs.query( { active: true }, function( tab ) {
//       // 当前页面的url
//       var pageUrl = tab[ 0 ].url;
//       // 在这可以写判断逻辑，将请求cancel掉，或者将请求打印出来
//       console.error( "current url -> " + pageUrl );
//     } );
//     return {
//       cancel: false
//     }
//   }, {
//     urls: [ "*://mp.weixin.qq.com/**" ],
//     types: [ 'xmlhttprequest' ]
//   }, //监听页面请求,你也可以通过*来匹配。
//   [ "blocking" ]
// )
/**
 * 网络请求发出完成
 */
// chrome.webRequest.onCompleted.addListener( function( details ) {
//   //console.log( details )
// }, {
//   urls: [ '*://mp.weixin.qq.com/**' ],
//   types: [ 'xmlhttprequest' ]
// } )
