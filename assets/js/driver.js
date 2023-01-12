"use strict";
exports.__esModule = true;
exports.warning = exports.select = exports.confirm2 = exports.confirm = exports.cancel = exports.enter = void 0;
var $ = require("jquery");
var howler_1 = require("howler");
var bgm = new howler_1.Howl({
    src: ['assets/audio/dv-i_configuration_bitcrush.ogg'],
    loop: true,
    volume: .6
});
exports.enter = new howler_1.Howl({
    src: ['assets/audio/enter.ogg']
});
exports.cancel = new howler_1.Howl({
    src: ['assets/audio/cancel.ogg']
});
exports.confirm = new howler_1.Howl({
    src: ['assets/audio/confirm.ogg']
});
exports.confirm2 = new howler_1.Howl({
    src: ['assets/audio/confirm2.ogg']
});
exports.select = new howler_1.Howl({
    src: ['assets/audio/select.ogg']
});
exports.warning = new howler_1.Howl({
    src: ['assets/audio/warning.ogg']
});
$(function () {
    console.log('READY [OK]');
    $('.grid, #menuButtons').hide();
    $('.cover').on('click', function () {
        console.log('Starting...');
        $('.cover').css('display', 'none');
        $('.grid, #menuButtons').show();
        $('.fader').attr('started', 'true');
        exports.enter.play(), bgm.play();
    });
    $('#shutdown').on('click', function () {
        setTimeout(function () {
            $('.grid, #menuButtons').hide();
            $('.fader').attr('started', 'false');
            $('.cover').css('pointer-events', 'none');
            bgm.pause();
            $('.cover').css('display', 'block').html(' Terminated!');
            setTimeout(function () {
                $('.mainWindow').hide();
                setTimeout(function () {
                    $('.mainWindow').show();
                    $('.cover').html('<a href="https://github.com/Potato22/HTML5RetroUX">https://github.com/Potato22/HTML5RetroUX</a><br><br>INTERACTIVE RETRO STYLIZED UX MOCKUP (4:3) 768p BY POTTO<br><b>[!] build may not work properly with devices screen smaller than 720p viewport.</b><br><br>###################<br>Music "Configuration", by DV-i<br>###################<br><br>BUILD IS STILL UNFINISHED! current todos:<br>-button events<br>-scene states<br>-background<br>started on 22 Oct 2022<br><br><br> (READY)<br><br> Click to start.');
                    //window.close();
                }, 1000);
                $('.cover').css('pointer-events', 'auto');
            }, 2000);
        }, 500);
    });
});
