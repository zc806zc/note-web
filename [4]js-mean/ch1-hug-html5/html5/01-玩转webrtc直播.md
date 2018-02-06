# 使用WebRTC实现视频聊天(直播)

- [WebRTC 点对点直播](https://segmentfault.com/a/1190000008416360)
- 在互联网上的两个浏览器之间将多媒体数据以流的方式进行传输
- WebRTC 网络实时通信
- 依赖于交互式连接建立ICE框架 -- RTCPeerConnection
- 在浏览器之间建立点对点连接，自动处理与防火墙或网络地址转化相关的复杂性内容
- 对媒体流进行解码
- 音频回声抵消
- getUserMadia

- <https://juejin.im/entry/599657196fb9a0249e3b2062>

- HLS 啥都好，就是延迟性太大了，估计苹果一开始设计的时候，并不在乎它的延时性

- RTMP 内部是借由 TCP 长连接协议传输相关数据，所以，它的延时性非常低

```javascript
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia ||
navigator.webkitGetUserMedia || navigator.msGetUserMedia;
```

- 访问网络摄像头和麦克风

```javascript

function onSuccess() {
    alert("Successful connection made to access webcam and microphone");
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

- 把网络摄像头和麦克风的数据内容回拨给用户

```javascript
function onSuccess(stream) {

    var video = document.createElement("video"),
        videoSource = window.URL.createObjectURL(stream);

    video.autoplay = true;
    video.src = videoSource;

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

- 搭建自己的STUN/TURN服务器

  - <http://numb.viagenie.ca/>

- 公共STUN服务器

  - Mozilla stun:23.21.150.121
  - Google stun:stun.l.google.com:19302

- 更好的解决方案

  - EventSource API
  - WebSocket

![](/assets/video-audio-standard.png)

# 如何实现1080P延迟低于500ms的实时超清直播传输技术

- [http://mp.weixin.qq.com/s?__biz=MzAwMDU1MTE1OQ==∣=2653547697&idx=1&sn=acc748b7fcf0058b58e244970e51eabc](http://mp.weixin.qq.com/s?__biz=MzAwMDU1MTE1OQ==&mid=2653547697&idx=1&sn=acc748b7fcf0058b58e244970e51eabc)
