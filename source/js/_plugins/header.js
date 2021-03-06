var header = {
    hoverSubMenu: function () {
        var screenWidth = document.body.clientWidth;
        if (screenWidth < 800) {
            return;
        }
        $('.has-sub').hover(function () {
            $(this).find('.sub-menu-tree').removeClass('hidden');

            setTimeout(function () {
                $('.sub-menu-tree').each(function () {
                    if (!$(this).hasClass('hidden')) {
                        $(this).addClass('hidden');
                    }
                });
            }, 1000);
        });
    },

    hideSubMenu: function () {
        $('.sub-menu-tree').addClass('hidden');
    },

    clickShowSub: function () {
        $('.has-sub').click(function () {
            $(this).find('.sub-menu-tree').toggleClass('hidden');
        });
    }
};

$(function () {

    // 悬浮展示目录
    header.hoverSubMenu();

    header.clickShowSub();

});