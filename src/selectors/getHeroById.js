import { heroes } from './../data/heroes';

export const getHeroById = (heroId) => {  
  return heroes.filter( hero => hero.id === heroId )[0];
}
