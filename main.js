function compute() {
    let startObj = JSON.parse(document.getElementById('startobj').value);
    let endObj = JSON.parse(document.getElementById('endobj').value);
    let framerate = document.getElementById('framerate').value;
    if (startObj == undefined || endObj == undefined || framerate == undefined) return;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let frameRate = parseInt(framerate);
    let diff = (endObj.lct - startObj.lct) * frameRate;
    let frames = diff;
    if (frames >= frameRate) {
        seconds = Math.floor(frames / frameRate);
        frames = frames % frameRate;
        milliseconds = Math.round(frames / frameRate * 1000);
        if (milliseconds < 10) {
            milliseconds = '00' + milliseconds;
        } else if (milliseconds < 100) {
            milliseconds = '0' + milliseconds;
        }
        if (seconds >= 60) {
            minutes = Math.floor(seconds / 60);
            seconds = seconds % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
        }
        if (minutes >= 60) {
            hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
            minutes = minutes < 10 ? '0' + minutes : minutes;
        }
    } else {
        milliseconds = Math.round(frames / frameRate * 1000);
        if (milliseconds < 10) {
            milliseconds = '00' + milliseconds;
        } else if (milliseconds < 100) {
            milliseconds = '0' + milliseconds;
        }
    }
    let print = hours.toString() + 'h ' + minutes.toString() + 'm ' + seconds.toString() + 's ' + milliseconds.toString() + 'ms';
    document.getElementById('time').value = print;
}