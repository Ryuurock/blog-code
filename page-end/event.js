import pubsub from 'pubsub-js';

pubsub.on = pubsub.subscribe;
pubsub.emit = pubsub.publish;
pubsub.off = pubsub.unsubscribe;
pubsub.one = function( event, fn ) {
  let token = pubsub.on( event, function() {
    pubsub.off( token );
    fn.apply( this, arguments );
  } );
  return pubsub;
};

export default pubsub;
