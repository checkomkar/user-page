$(function () {
    var items = $('.maintab-container>ul>li').each(function () {
        $(this).click(function () {
            //remove previous class and add it to clicked tab
            items.removeClass('current');
            $(this).addClass('current');

            //hide all content divs and show current one
            $('#v-nav>div.tab-content').hide().eq(items.index($(this))).css('display', 'inline-block');

            window.location.hash = $(this).attr('tab');
        });
    });

    if (location.hash) {
        showTab(location.hash);
    }
    else {
        showTab("tab1");
    }

    function showTab(tab) {
        $(".maintab-container ul li[tab*=" + tab + "]").click();
    }

    // Bind the event hashchange, using jquery-hashchange-plugin
    $(window).hashchange(function () {
        showTab(location.hash.replace("#", ""));
    });

    $('[data-tab="about"]').click();

    // Trigger the event hashchange on page load, using jquery-hashchange-plugin
    $(window).hashchange();

    $('[data-inside-tab]').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.inside-tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

});