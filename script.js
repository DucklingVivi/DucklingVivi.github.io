adapter = import('./adapter.js');



const displayMediaOptions = {
    video: true,
    audio: false
  };
  
  
async function startCapture(displayMediaOptions) {
    let captureStream = null;
    console.log(adapter)
    try {
      captureStream =
        await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
    console.log(captureStream)
    return captureStream;
  }

function start(){
    startCapture(displayMediaOptions).then((stream) => {

        document.body.innerHTML = "<video id='video'></video>";
        videoObj = document.getElementById("video");
        videoObj.autoplay = true;
        videoObj.srcObject = stream;
    });
}