export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const ROWPOINTS = [40, 100, 300, 1200];

import BLOCKONE from './img/1.png';
import BLOCKTWO from './img/2.png';
import BLOCKTHREE from './img/3.png';
import BLOCKFOUR from './img/4.png';
import BLOCKFIVE from './img/5.png';
import BLOCKSIX from './img/6.png';
import BLOCKSEVEN from './img/7.png';

import BLOCKONE_HQ from './img/hq/1.png';
import BLOCKTWO_HQ from './img/hq/2.png';
import BLOCKTHREE_HQ from './img/hq/3.png';
import BLOCKFOUR_HQ from './img/hq/4.png';
import BLOCKFIVE_HQ from './img/hq/5.png';
import BLOCKSIX_HQ from './img/hq/6.png';
import BLOCKSEVEN_HQ from './img/hq/7.png';

export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0', image: undefined, imageHQ: undefined },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0]
    ],
    color: '80, 227, 230',
    image: BLOCKONE,
    imageHQ: BLOCKONE_HQ
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0]
    ],
    color: '36, 95, 223',
    image: BLOCKTWO,
    imageHQ: BLOCKTWO_HQ
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L']
    ],
    color: '223, 173, 36',
    image: BLOCKTHREE,
    imageHQ: BLOCKTHREE_HQ
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O']
    ],
    color: '223, 217, 36',
    image: BLOCKFOUR,
    imageHQ: BLOCKFOUR_HQ
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0]
    ],
    color: '48, 211, 56',
    image: BLOCKFIVE,
    imageHQ: BLOCKFIVE_HQ
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0]
    ],
    color: '132, 61, 198',
    image: BLOCKSIX,
    imageHQ: BLOCKSIX_HQ
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0]
    ],
    color: '227, 78, 78',
    image: BLOCKSEVEN,
    imageHQ: BLOCKSEVEN_HQ
  }
};