adapter = import('./adapter-latest.js');



const displayMediaOptions = {
    video: true,
    audio: false
  };
  
  
async function startCapture(displayMediaOptions) {
    let captureStream = null;
    console.log(adapter)
    try {
      captureStream =
        await adapter.browserShim.shimGetDisplayMedia(window,displayMediaOptions);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
    return captureStream;
  }

function start(){
    startCapture(displayMediaOptions).then((stream) => {
        document.body.innerHTML = "<video id='video' autoplay></video>";
        videoObj = document.getElementById("video");
        videoObj.srcObject = stream;
    });
}