import strToLink from './modules/task04.js';
import onlyJs from './modules/task_01.js';
import findEmail from './modules/task_02.js';
import findInBrackets from './modules/task_03.js';


const task02 = 'my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz info@methed.ru max24@mail.com java_script@google.io';

const task03 = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';



console.log('onlyJs', onlyJs());
console.log('findEmail', findEmail(task02));
console.log('findInBrackets', findInBrackets(task03));

strToLink();


