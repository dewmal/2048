// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

$(document).ready(function () {

    $('.show-link').click(function () {
        $('.game-help').show();
        $(this).hide();
    });
    $('.close-link').click(function () {
        $('.game-help').hide(function () {
            $('.show-link').show();
        });

    });
});
