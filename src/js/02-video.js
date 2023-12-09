import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe');
const player = new Player(video);
const KEY = 'videoplayer-current-time';

const throttled = throttle(checkTime, 1000);

function checkTime(data) {
  localStorage.setItem(KEY, data.seconds);
}

let res = player.on('timeupdate', throttled);

player
  .setCurrentTime(localStorage.getItem(KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
