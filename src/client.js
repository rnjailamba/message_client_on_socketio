var EventEmitter = require('events').EventEmitter;
var io = require('socket.io-client');

/**
 * MessageServiceClient simply keep tracks of steps' positions inside a viewport.
 * Apart from the static helper functions and the `scroll` function, a roll instance doesn't depend on DOM manipulation.
 * That means you can use a MessageServiceClient instance in contexts other than DOM.
 */
export default class MessageServiceClient extends EventEmitter {

  /**
   * Create a new MessageServiceClient.
   * @param viewSize viewport size (single dimension)
   */
  constructor(data) {
    super();
    this.roomName = data.roomName;
    this.publishKey = data.publishKey;
    this.subscribeKey = data.subscribeKey;
  }

  requestSocket() {
      var socket = io(this.roomName, { transports: ['websocket'] });
      return socket;
  }

  static requestSocket1(path, callback) {
      callback = callback || function () {}
      var socket = io(path, { transports: ['websocket'] });
      // Add a connect listener
      // socket.on('connect', function (socket) {
      //     console.log('Connected!');
      // });
      // socket.emit('CH01', 'me', 'test msg');
      return callback(null, socket)
  }

}
