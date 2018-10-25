# cocos2d-js

- <http://www.cocos.com/docs/js/>

```javascript
var StartLayer = cc.Layer.extend({
  ctor: function () {
    this._super();

    var size = cc.winSize;

    var helloLabel = new cc.LabelTTF("Hello World", "", 38);
    helloLabel.x = size.width / 2;
    helloLabel.y = size.height / 2;
    this.addChild(helloLabel);

    return true;
  }
});

var StartScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    var layer = new StartLayer();
    this.addChild(layer);
  }
});

cc.LoaderScene.preload(g_resources, function () {
  cc.director.runScene(new StartScene());
}, this);
```
