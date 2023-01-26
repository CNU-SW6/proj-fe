import cap1 from './clothes/baby_hat.png';
import cap2 from './clothes/cap.png';
import top1 from './clothes/shirt.png';
import top2 from './clothes/long_sleeve_t_shirt.png';
import bottom1 from './clothes/long_pants.png';
import bottom2 from './clothes/short_pants.png';
import bottom3 from './clothes/slacks.png';
import bottom4 from './clothes/skirt.png';
import shoes1 from './clothes/shoes.png';

const Caps = [cap1, cap2];
const Tops = [top1, top2];
const Bottoms = [bottom1, bottom2, bottom3, bottom4];
const Shoes = [shoes1];

const randomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const randomCap = () => {
  return Caps[randomIndex(Caps)];
};

const randomTop = () => {
  return Tops[randomIndex(Tops)];
};

const randomBottom = () => {
  return Bottoms[randomIndex(Bottoms)];
};

const randomShoes = () => {
  return Shoes[randomIndex(Shoes)];
};

export const getRandomItem = (item) => {
  if (item === 'cap') {
    return randomCap();
  }
  if (item === 'top') {
    return randomTop();
  }
  if (item === 'bottom') {
    return randomBottom();
  }
  return randomShoes();
};
