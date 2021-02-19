for (let i = 0; i < 16; i++) {
    $('.container').append('<div class="darkBox"></div>')
};
$('.container').on('click', '.darkBox', function () {
    $(this).toggleClass('lightBox');
});
