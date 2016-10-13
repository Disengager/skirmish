var Application = {
  pLastHover: 0,
  pNowHover: 0,
  pVideo: undefined,
  pTemp: true,
  pTimings: {
    action: [],
  },
  hover: function(val) {
    // console.log(5);
    if(val != this.pLastHover) {
      this.pLastHover = this.pNowHover;
      this.pNowHover = val;

    }
  },
  pCanvasW: 50,
  pCanvasH: undefined,
  pCanvasL: undefined,
  pCanvas: undefined,
  pCanvasContext: undefined,
  pBackCanvas: undefined,
  pBackContext: undefined,
  pAnimation: undefined,
  pBlackZone: [],
  rendringCanvas: function(v,c, w, h) {
    if(Application.pLastHover != Application.pNowHover) {
      Application.pTimings.action[Application.pNowHover]();
      Application.pLastHover = Application.pNowHover;

      var length = Application.pBlackZone.length;
      var nowH = Application.pNowHover;
      Application.pBackContext.clearRect(0, 0, Application.pCanvasW, Application.pCanvasH);
      for(var i = 1; i < length; i++) {
       if(i != nowH)
         Application.pBackContext.drawImage(Application.pBlackZone[i],0,0,Application.pCanvasW,Application.pCanvasH);
      }

      console.log(Application.pBackContext);

      length = null; nowH = null;
    }

    c.drawImage(v,0,0,w,h);
    // c.drawImage(Application.pBackCanvas,0,0,w,h);

    setTimeout(Application.rendringCanvas,20,v,c,w,h);

  },
  loader: function(val) {
    val();
    val = function() {};
  },
}

function Resize() {}

var resizeObj = new Resize();

function load() {
  Application.loader(function() {

    resizeObj.setC = function(clientW, clientH) {
      resizeObj.clientH = clientH;
      resizeObj.clientW = clientW;
      console.log(clientH + " : " + clientW);
      if(resizeObj.clientH <= 1080 && resizeObj.clientW <= 1920) {
        resizeObj.c = resizeObj.clientH / 1080;
        if(resizeObj.c * 1920 < resizeObj.clientW)
          resizeObj.c = resizeObj.clientW / 1920;
        return true;
      }
      else return false;

    };

    resizeObj.getWidth = function() {
      return resizeObj.c * 1920;
    };
    resizeObj.getHeight = function() {
      return resizeObj.c * 1080;
    };
    resizeObj.getLeft = function() {
      var tempWidth = resizeObj.getWidth();
      var tempLeft =  (tempWidth - resizeObj.clientW);
      if(tempWidth - tempLeft <= resizeObj.clientW) {
         tempWidth = tempLeft - (1920 / 100 * 7);
         if(tempWidth >= 0)
           tempLeft = tempWidth;
        return tempLeft * (-1);
      }
    };
    resizeObj.getPlace = function() {
      var tempArr = [];
      var tempW = Application.pCanvasW / 100 * 45;
      tempArr[1] = {'width' : tempW, 'left' : Application.pCanvasL};
      tempW = Application.pCanvasW / 100 * 20;
      var tempL = Application.pCanvasL + Application.pCanvasW / 100 * 45;
      tempArr[2] = {'width' : tempW, 'left' : tempL};
      tempW = Application.pCanvasW / 100 * 35;
      tempL = Application.pCanvasL + Application.pCanvasW / 100 * 45 + Application.pCanvasW / 100 * 20;
      tempArr[3] = {'width' : tempW, 'left' : tempL};
      tempW = Application.pCanvasW / 100 * 50;
      tempL = Application.pCanvasL + Application.pCanvasW / 100 * 35;
      var tempT = Application.pCanvasH / 100 * 32;
      tempArr[4] = {'width':tempW, 'left' : tempL, 'top' : tempT};

      return tempArr;
    };



    Application.pVideo = document.getElementById('data');
    Application.pCanvas = document.getElementById('view');
    Application.pBackCanvas = document.getElementById('mask');
    var offset = document.getElementById('map-main');
    Application.pCanvasContext = Application.pCanvas.getContext('2d');
    Application.pBackContext = Application.pBackCanvas.getContext('2d');

    Application.pBlackZone[1] = new Image();
    Application.pBlackZone[2] = new Image();
    Application.pBlackZone[3] = new Image();
    Application.pBlackZone[4] = new Image();

    Application.pBlackZone[1].src = "img/bg-participants-black.png";
    Application.pBlackZone[2].src = "img/bg-achievements-black.png";
    Application.pBlackZone[3].src = "img/bg-others-black.png";
    Application.pBlackZone[4].src = "img/bg-about-black.png";

    // Application.pBlackZone[]
    if(resizeObj.setC(offset.clientWidth, offset.clientHeight)) {
      Application.pBackCanvas.width = Application.pCanvas.width = Application.pCanvasW = resizeObj.getWidth();
      Application.pBackCanvas.height = Application.pCanvas.height = Application.pCanvasH = resizeObj.getHeight();
      Application.pBackCanvas.style.left = Application.pCanvasL = Application.pCanvas.style.left = resizeObj.getLeft();
    }
    else {
      Application.pBackCanvas.width = Application.pCanvas.width = Application.pCanvasW = Application.pCanvas.clientWidth;
      Application.pBackCanvas.height = Application.pCanvas.height = Application.pCanvasH = Application.pCanvas.clientHeight;
    }

    Application.pCanvasPlaces = resizeObj.getPlace();
    alert(Application.pCanvasPlaces[1]);


    Application.pVideo.addEventListener('play', function(){
          Application.rendringCanvas(this,Application.pCanvasContext,Application.pCanvasW,Application.pCanvasH);
    },false);

    Application.pVideo.play();
    // Application.pVideo.pause();

    Application.pTimings.action[1] = function() {
      Application.pVideo.currentTime = 1.6;
      setTimeout(function() {
        Application.pVideo.pause();
      },500);
      Application.pVideo.play();
    };
    Application.pTimings.action[2] = function() {
      Application.pVideo.currentTime = 1.2;
      setTimeout(function() {
        Application.pVideo.pause();
      },500);
      Application.pVideo.play();
    };
    Application.pTimings.action[3] = function() {
      Application.pVideo.currentTime = 0.7;
      setTimeout(function() {
        Application.pVideo.pause();
      },500);
      Application.pVideo.play();
    };
    Application.pTimings.action[4] = function() {
      Application.pVideo.currentTime = 5;

      setTimeout(function() {
        Application.pVideo.pause();
      },500);
      Application.pVideo.play();
    };

    // Application.pTimings.action['9']();

    // alert(Application.pCanvasW);
  });
}
