require('@babel/register');
require('@babel/polyfill');

// Сделаем функции Enzyme доступными во всех файлах тестов без необходимости импорта importing
import Enzyme, { shallow, render, mount } from 'enzyme';
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Обрушим тест при любой ошибке
console.error = message => {
   throw new Error(message);
};

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
