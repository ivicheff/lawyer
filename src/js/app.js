//Импортируем всe функции из файла functions.js
import * as flsFunctions from "./modules/functions.js";
import * as consoleLogs from "./modules/consolelog.js";
import * as copyToClipboard from "./modules/clipboard.js";
import * as menu from "./modules/menu.js"; 


flsFunctions.isWebp();

import Swiper, {
	Navigation,
	Pagination
} from 'swiper';

const swiper = new Swiper();

consoleLogs.consoleLog();

copyToClipboard();


menu();