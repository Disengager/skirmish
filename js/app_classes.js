var Application = {
  pLastHover: 0,
  pNowHover: 0,
  pVideo: undefined,
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
  pCanvas: undefined,
  pCanvasContext: undefined,
  pAnimation: undefined,
  rendringCanvas: function(v,c, w, h) {
    if(Application.pLastHover != Application.pNowHover) {
      Application.pTimings.action[Application.pNowHover]();
      Application.pLastHover = Application.pNowHover;

    }

    c.drawImage(v,0,0,w,h);
    setTimeout(Application.rendringCanvas,20,v,c,w,h);
  },
  loader: function(val) {
    val();
    val = function() {};
  },
}

function load() {
  Application.loader(function() {

    Application.pVideo = document.getElementById('data');
    Application.pCanvas = document.getElementById('view');
    Application.pCanvasContext = Application.pCanvas.getContext('2d');

    Application.pCanvas.width = Application.pCanvasW = Application.pCanvas.clientWidth;
    Application.pCanvas.height = Application.pCanvasH = Application.pCanvas.clientHeight;

    Application.pVideo.addEventListener('play', function(){
          Application.rendringCanvas(this,Application.pCanvasContext,Application.pCanvasW,Application.pCanvasH);
    },false);

    Application.pVideo.play();
    // Application.pVideo.pause();

    Application.pTimings.action[1] = function() {
      Application.pVideo.currentTime = 1.6;
      Application.pVideo.play();
      setTimeout(function() {
        Application.pVideo.pause();
      },500);
    };
    Application.pTimings.action[2] = function() {
      Application.pVideo.currentTime = 1.2;
      Application.pVideo.play();
      setTimeout(function() {
        Application.pVideo.pause();
      },500);
    };
    Application.pTimings.action[3] = function() {
      Application.pVideo.currentTime = 0.7;
      Application.pVideo.play();
      setTimeout(function() {
        Application.pVideo.pause();
      },500);
    };
    Application.pTimings.action[4] = function() {
      Application.pVideo.currentTime = 5;
      Application.pVideo.play();
      setTimeout(function() {
        Application.pVideo.pause();
      },500);
    };

    // Application.pTimings.action['9']();

    // alert(Application.pCanvasW);
  });
}
