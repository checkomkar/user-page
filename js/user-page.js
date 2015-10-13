$(function () {
    var $this = $(this);
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



    var $itemsMobile = $('[data-tab-target]>ul>li').each(function () {
        $(this).click(function () {
            //remove previous class and add it to clicked tab
            $itemsMobile.removeClass('current');
            $(this).addClass('current');

            //hide all content divs and show current one
            $('#v-nav>div.tab-content').hide().eq($itemsMobile.index($(this))).css('display', 'inline-block');

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

    var $container = $('[data-tab-target]');
    var $trigger = $('[data-tab-trigger]');
    var $tabLinks = $('[data-tabs-links]');
    var $clickToHide = $('[data-click-to-hide]');
    var $currWindowHeight = $( window ).height();
    var $vtabHeight = $('#v-nav').height();
    var $tabChildHeight = $('.tab-content-child').height();

    var $overlay = $('[data-overlay]');
    var $addButton = $('[data-add-button]');
    var $addBox = $('[data-add-box]');
    var $closeButton = $('[data-close]');
    var $closeAddSection = $('[data-close-add]');

    var $addToSection = $('[data-add-to-section]');
    var $addWishlistTrigger = $('[data-add-wishlist-trigger]');


    $addButton.on('click', function(e){
        $overlay.fadeIn();
        $addBox.show().addClass('bounceIn');
    });

    $overlay.on('click', function(){
        $(this).fadeOut();
        $addBox.hide();
    });

    $('[data-add-box] li').on('click', function(e){
        $overlay.fadeOut(100);
        $addBox.hide();
    });

    $closeButton.on('click', function(e){
        var $this = $(this);
        $overlay.fadeOut(100);
        $addBox.hide();
    });

    $addWishlistTrigger.on('click', function(e){
        $overlay.fadeIn(100);
        $addToSection.show().addClass('slideInRight');
    });

    $closeAddSection.on('click', function(e){
        $overlay.fadeOut();
        $addToSection.fadeOut().addClass('hide');
    })

    //$(window).on('click',  function (e){
    //    if (!$container.is(e.target) && !$trigger.is(e.target) // if the target of the click isn't the container...
    //        && ($container.has(e.target).length === 0) && ($trigger.has(e.target).length === 0)) // ... nor a descendant of the container
    //    {
    //        $container.animate({'left':'-100%'});
    //    }
    //});

    $trigger.on('click',function(){
        console.log('clicked');
        //$('.sideMenu').height($(document).height());
        $container.animate({'left':'0%'},function(){
            //$('.sideMenuHideArea').css('background','rgba(0,0,0,0.7)');
        });
        $container.data('shown','1');
    });
    $tabLinks.on('click',function(e){
        $('.sideMenuHideArea').css('background','transparent');
        $container.animate({'left':'-100%'});
        $container.data('shown','0');

    });

    $clickToHide.on('click', function(e){
        //console.log('hiya');
        $container.animate({'left':'-100%'});
        $container.data('shown','0');
    });
    $clickToHide.height($currWindowHeight);
    $('[data-tab-target] ul').height($currWindowHeight);
    $('[data-side-line]').height($tabChildHeight);
    $('.maintab').height($vtabHeight);



    //$('[data-tab-trigger]').on('click', function(e){
    //    $('[data-tab-target]').show();
    //});

});