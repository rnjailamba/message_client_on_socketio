!Work in progress!

<script src="/message_client_on_socketio/client.js"></script>
var messageServiceClient = new MessageServiceClient({roomName: '/chatroom', publishKey: 44, subscribeKey: 88});
var socket = messageServiceClient.createSocket();

messageServiceClient.addTheListener({
  message: function(message) {
      console.log("New Message!!", message);
  }
})
