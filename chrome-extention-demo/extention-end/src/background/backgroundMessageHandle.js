export default {

  executeScript( fileName, tabId ) {
    if ( !fileName ) return;
    chrome.tabs.executeScript( tabId, {
      file: fileName,
      allFrames: true
    } );
  },

  sendMessageToPage( data ) {
    console.log( data )
    chrome.tabs.getSelected( null, function( tab ) {　　 // 先获取当前页面的tabID
      chrome.tabs.sendMessage( tab.id, $.extend( data, { operate: 'sendMessageToPage' } ) );
    } );
  },

  sendMessageToFrameContentScript( data ) {
    chrome.tabs.getSelected( null, function( tab ) {　　 // 先获取当前页面的tabID
      chrome.tabs.sendMessage( tab.id, $.extend( data, { operate: 'sendMessageToFrameContentScript' } ) );
    } );
  }
}
