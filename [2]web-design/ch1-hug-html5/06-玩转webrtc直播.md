## 使用WebRTC实现视频聊天

- 在互联网上的两个浏览器之间将多媒体数据以流的方式进行传输
- WebRTC 网络实时通信
- 依赖于交互式连接建立ICE框架 -- RTCPeerConnection
- 在浏览器之间建立点对点连接，自动处理与防火墙或网络地址转化相关的复杂性内容
- 对媒体流进行解码
- 音频回声抵消
- getUserMadia

```javascript
// Expose the browser-specific versions of the getUserMedia() method through the standard
// method name. If the standard name is already supported in the browser (as it is in Opera),
// use that, otherwise fall back to Mozilla's, Google's or Microsoft's implementations as
// appropriate for the current browser
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia ||
navigator.webkitGetUserMedia || navigator.msGetUserMedia;
```

- 访问网络摄像头和麦克风

```javascript
// Define a function to execute if we are successfully able to access the user's webcam and
// microphone
function onSuccess() {
alert("Successful connection made to access webcam and microphone");
}

// Define a function to execute if we are unable to access the user's webcam and microphone -
// either because the user denied access or because of a technical error
function onError() {
throw new Error("There has been a problem accessing the webcam and microphone");
}

// Using the polyfill from Listing 12-1, we know the getUserMedia() method is supported in the
// browser if the method exists
if (navigator.getUserMedia) {

// We can now execute the getUserMedia() method, passing in an object telling the browser
// which form of media we wish to access ("video" for the webcam, "audio" for the
// microphone). We pass in a reference to the onSuccess() and onError() functions which
// will be executed based on whether the user grants us access to the requested media types
navigator.getUserMedia({
video: true,
audio: true
}, onSuccess, onError);
} else {

// Throw an error if the getUserMedia() method is unsupported by the user's browser
throw new Error("Sorry, getUserMedia() is not supported in your browser");
}
```

- 把网络摄像头和麦克风的数据内容回拨给用户

```javascript
// Use the getUserMedia() polyfill from Listing 12-1 for best cross-browser support

// Define a function to execute if we are successfully able to access the user's webcam and
// microphone, taking the stream of data provided and passing it as the "src" attribute of a
// new <video> element, which is then placed onto the current HTML page, relaying back to the
// user the output from theirwebcam and microphone
function onSuccess(stream) {

// Create a new <video> element
var video = document.createElement("video"),

// Get the browser to create a unique URL to reference the binary data directly from
// the provided stream, as it is not a file with a fixed URL
videoSource = window.URL.createObjectURL(stream);

// Ensure the <video> element start playing the video immediately
video.autoplay = true;

// Point the "src" attribute of the <video> element to the generated stream URL, to relay
// the data from the webcam and microphone back to the user
video.src = videoSource;

// Add the <video> element to the end of the current page
document.body.appendChild(video);
}

function onError() {
throw new Error("There has been a problem accessing the webcam and microphone");
}

if (navigator.getUserMedia) {
navigator.getUserMedia({
video: true,
audio: true
}, onSuccess, onError);
} else {
throw new Error("Sorry, getUserMedia() is not supported in your browser");
}
```

- 一个简单的视频聊天网页应用程序
- 连接与信令交互
- 利用[Firebase](https://firebase.google.com/)服务实现简单信令交互
- NAT会话传输应用程序 STUN
- 通过Relay方式穿越NAT TURN 中继工作方式 数据带宽减少
- [搭建自己的STUN/TURN服务器](http://numb.viagenie.ca/)
- 公共STUN服务器
- Mozilla stun:23.21.150.121
- Google stun:stun.l.google.com:19302
- 更好的解决方案
- EventSource API
- WebSocket

## WebRTC基础

- [WebRTC 点对点直播](https://segmentfault.com/a/1190000008416360)

## HTML5直播

- <https://juejin.im/entry/599657196fb9a0249e3b2062?utm\_source=gold\_browser\_extension>
- **HLS** 啥都好，就是延迟性太大了，估计苹果一开始设计的时候，并不在乎它的延时性
- **RTMP** 内部是借由 TCP 长连接协议传输相关数据，所以，它的延时性非常低

![](/assets/video-audio-standard.png)

## HTML5 indexedDB

- <https://juejin.im/entry/599b8867518825241f787cae?utm\_source=gold\_browser\_extension>
- 从气质上讲，"关系型数据库"稳重持久，"非关系型数据库"迅速灵动
- MDN文档 <https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB\_API>
