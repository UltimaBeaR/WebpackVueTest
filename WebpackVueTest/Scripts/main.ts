// Это основной модуль, указанный в настройках webpack-а как точка входа в приложение

// Импортируем дополнителный модуль из другого файла
import * as testModule from "./testmodule";

// Находим на странице span с id #helloWorldText и записываем в него текст, полученный из дополнительного модуля
document.getElementById("helloWorldText").innerText = `Text from another module: ${testModule.getText()}`;

// Vue

import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});