!function(){var e=[];function t(e,t){var a=t-e.toString().length+1;return new Array(+(a>0&&a)).join("0")+e}function a(e){if(isNaN(e))return"--:--";var a=Math.floor(e/60);return e-=60*a,t(a,2)+":"+t(e,2)}var i=function(e){this.bbplayer=e,this.bbaudio=e.getElementsByTagName("audio").item(0),this.bbdebug=e.getElementsByClassName("bb-debug").item(0),this.bbaudio.setAttribute("preload","auto"),this.state=this.bbaudio.autoplay?"playing":"paused",this.repeat=!!this.bbaudio.loop,this.bbaudio.removeAttribute("loop"),this.trackList=[],this.init()};i.prototype.log=function(e){this.bbdebug&&(this.bbdebug.appendChild(document.createTextNode(e)),this.bbdebug.appendChild(document.createElement("br")),this.bbdebug.scrollTop=this.bbdebug.scrollHeight-this.bbdebug.clientHeight)},i.prototype.canPlay=function(e){return!(!/mp3/i.test(e)||!this.bbaudio.canPlayType("audio/mpeg"))||!(!/ogg/i.test(e)||!this.bbaudio.canPlayType("audio/ogg"))},i.prototype.loadSources=function(){var e=this,t=[];e.log("func: loadSources");var a=e.bbaudio.getElementsByTagName("source");[].forEach.call(a,(function(a){var i=a.getAttribute("src").split("/").pop(),n=i.split(".").pop(),o=i.split(".").shift(),d=e.canPlay(n);-1===e.trackList.indexOf(o)&&!0===d?e.trackList.push(o):t.push(a)})),[].forEach.call(t,(function(e){e.parentNode.removeChild(e)}))},i.prototype.updateDisplay=function(){var e,t=this.bbaudio,i=a(Math.ceil(t.duration)),n=a(Math.ceil(t.currentTime)),o=(e=t.currentSrc,(e=decodeURI(e)).split("/").pop().split(".").shift()).replace(/_/g," ");this.bbplayer.getElementsByClassName("bb-trackLength").item(0).innerHTML=i,this.bbplayer.getElementsByClassName("bb-trackTime").item(0).innerHTML=n,this.bbplayer.getElementsByClassName("bb-trackTitle").item(0).innerHTML=o;var d=this.bbplayer.getElementsByClassName("bb-play").item(0);this.bbaudio.paused?(d.classList.remove("bb-playing"),d.classList.add("bb-paused")):(d.classList.remove("bb-paused"),d.classList.add("bb-playing"))},i.prototype.loadTrack=function(e){var t=this.bbaudio.getElementsByTagName("source").item(e).getAttribute("src");this.bbaudio.src=t,"paused"===this.state&&this.bbaudio.pause(),this.currentTrack=e,this.log("func: loadTrack: loaded "+t)},i.prototype.loadNext=function(){this.log("func: loadNext");var e=this.bbaudio.getElementsByTagName("source").length,t=(1+this.currentTrack)%e;t<=this.currentTrack&&!this.repeat&&(this.state="paused"),this.loadTrack(t)},i.prototype.loadPrevious=function(){this.log("func: loadPrevious");var e=this.bbaudio.getElementsByTagName("source").length,t=(this.currentTrack+(e-1))%e;this.loadTrack(t)},i.prototype.setAudioEventHandlers=function(){var e=this;e.log("func: setAudioEventHandlers"),e.bbaudio.addEventListener("abort",(function(){e.log("event: audio abort")})),e.bbaudio.addEventListener("canplay",(function(){e.log("event: audio canplay"),"playing"===e.state&&this.paused&&this.play(),e.updateDisplay()})),e.bbaudio.addEventListener("canplaythrough",(function(){e.log("event: audio canplaythrough")})),e.bbaudio.addEventListener("durationchange",(function(){e.log("event: audio durationchange")})),e.bbaudio.addEventListener("emptied",(function(){e.log("event: audio emptied")})),e.bbaudio.addEventListener("ended",(function(){e.log("event: audio ended"),e.loadNext()})),e.bbaudio.addEventListener("error",(function(){e.log("event: audio error")})),e.bbaudio.addEventListener("loadeddata",(function(){e.log("event: audio loadeddata")})),e.bbaudio.addEventListener("loadedmetadata",(function(){e.log("event: audio loadedmetadata")})),e.bbaudio.addEventListener("loadstart",(function(){e.log("event: audio loadstart")})),e.bbaudio.addEventListener("pause",(function(){e.log("event: audio pause")})),e.bbaudio.addEventListener("play",(function(){e.log("event: audio play")})),e.bbaudio.addEventListener("playing",(function(){e.log("event: audio playing")})),e.bbaudio.addEventListener("progress",(function(){e.log("event: audio progress")})),e.bbaudio.addEventListener("ratechange",(function(){e.log("event: audio ratechange")})),e.bbaudio.addEventListener("seeked",(function(){e.log("event: audio seeked")})),e.bbaudio.addEventListener("seeking",(function(){e.log("event: audio seeking")})),e.bbaudio.addEventListener("stalled",(function(){e.log("event: audio stalled")})),e.bbaudio.addEventListener("suspend",(function(){e.log("event: audio suspend")})),e.bbaudio.addEventListener("timeupdate",(function(){e.updateDisplay()})),e.bbaudio.addEventListener("volumechange",(function(){e.log("event: audio volumechange")})),e.bbaudio.addEventListener("waiting",(function(){e.log("event: audio waiting")}))},i.prototype.setClickHandlers=function(){var t=this;t.log("func: setClickHandlers");var a=t.bbaudio;[].forEach.call(t.bbplayer.getElementsByClassName("bb-forward"),(function(e){e.addEventListener("click",(function(){t.log("event: click .bb-forward"),t.loadNext()}))})),[].forEach.call(t.bbplayer.getElementsByClassName("bb-play"),(function(a){a.addEventListener("click",(function(){t.log("event: click .bb-play"),t.bbaudio.paused?(!function(){var t=0;for(t=0;t<e.length;t++)e[t].bbaudio.pause(),e[t].updateDisplay()}(),t.bbaudio.play(),t.state="playing"):(t.bbaudio.pause(),t.state="paused"),t.updateDisplay()}))})),[].forEach.call(t.bbplayer.getElementsByClassName("bb-rewind"),(function(e){e.addEventListener("click",(function(){t.log("event: click .bb-rewind"),a.currentTime>1.5?a.currentTime=0:t.loadPrevious()}))})),t.bbdebug&&t.bbdebug.click((function(){$(this).empty()}))},i.prototype.init=function(){var e=this;e.setAudioEventHandlers(),e.loadSources(),e.currentTrack=0,e.setClickHandlers(),e.updateDisplay()},document.addEventListener("DOMContentLoaded",(function(){[].forEach.call(document.getElementsByClassName("bbplayer"),(function(t){e.push(new i(t))}))}))}();