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

        videoObj = document.getElementById("video");
        
        //unhide video 

        videoObj.style.display = "block";

        videoObj.srcObject = stream;
    });
}