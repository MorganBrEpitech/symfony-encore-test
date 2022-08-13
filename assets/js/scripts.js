$('.menuItemSection_trending').click(function(e) {
    const id = $(this).data('set')
    $('.containerParent').removeClass('containerParentActive')
    $(`.containerParent_${id}`).addClass('containerParentActive')
    $('.menu > div').removeClass('menuActive')
    $(this).addClass('menuActive')

})
