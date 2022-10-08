import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
console.log(Player);

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const localStorageKey = 'videoplayer-current-time';

const onPlay = function (data) {
        localStorage.setItem(localStorageKey, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(localStorageKey) || 0);
  
