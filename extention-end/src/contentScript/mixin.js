export function onMessageFromBackground( operate, callback ) {
  chrome.extension.onMessage.addListener( function( request, sender, sendMessage ) {
    if ( request.operate === operate ) {
      callback.apply( this, arguments );
    }
  } )
}
