window.onscroll = function () {
    myFunction()
};

var nav = document.querySelector("header");
var header = document.querySelector(".for-fixed");

var prt = nav.parentElement;

var sticky = nav.offsetTop + 100;

function myFunction() {
    var wdth = window.innerWidth;
    if (wdth < 257) {
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
            prt.classList.add('menu-change');
            header.style.paddingTop = '0';

        } else {
            nav.classList.remove("sticky");
            prt.classList.remove('menu-change');
            header.style.paddingTop = '0';
        }
    } else {
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
            prt.classList.add('menu-change');
            $('body').css({'margin-top': '74px'})
        } else {
            nav.classList.remove("sticky");
            prt.classList.remove('menu-change');
            $('body').css({'margin-top': '0'})
        }
    }
}


$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu');
                $('.menu-cnt').addClass('transition-menu');
            })
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '1', transition: '0.2s'})
                }
            })
        }

    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
});


$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});


$('.supply-industrial-slider').slick({
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});


$('.clic-res').on('click', function () {
    $('.open-res').toggleClass('open-res-act')
});

$('.header-form-info label input').on('click', function () {
    $(this).parent().toggleClass('header-form-inf-act')
});


$('.whole-catalog-name').on('click', function () {
    $(this).parent().toggleClass('whole-catalog-act')
});

if ($('.whole-catalog-drop ul li').has('submenu-head')) {
    $('.submenu-head').parent().addClass('submenu-active');
}

$('.header-leng strong').on('click', function () {
    $(this).parent().toggleClass('click-open-leng')
});

$('.header-leng-droup ul li a').on('click', function () {
    var text_in = $('.header-leng strong').html();
    let selected_text = $(this).html();
    $('.header-leng strong').html(selected_text);
    $(this).html(text_in)
    $('.header-leng').removeClass('click-open-leng')
});


$('.header-flag-main').on('click', function () {
    $(this).parent().toggleClass('header-flag-act')
});


$('.header-flag-droup ul li').on('click', function () {
    var text_in = $('.header-flag-main').html();
    var text = $(this).html();
    $('.header-flag-main').html(text)
    $(this).html(text_in)
    $('.header-flag').removeClass('header-flag-act')

});


$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out')
    $('body').css({overflow: 'hidden '})
    modal.fadeIn()
})

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})

})
$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100)
    $('body').css({overflow: 'visible '})

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})

        }
    })
});


$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();


        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        ;

        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    var accordion = new Accordion($('#accordion'), false);
});


$('.open-filter-in-mob').on('click', function () {
    $('.angular-contact-popup').addClass('angular-contact-popup-act')
});

$('.close-filter-in-mob').on('click', function () {
    $('.angular-contact-popup').removeClass('angular-contact-popup-act')
});

$('.popular-products-slider-js').slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.pages-catalog-slider').slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


const incrementDecrementCount = {
    decrement: (element) => {
        const parentBlock = element.parentNode;
        let counterValue = +parentBlock.children.item(1).innerText;
        const counterBlock = parentBlock.children.item(1);
        if (counterValue === 1) {
            counterValue = 1
        } else {
            counterValue--;
        }
        counterBlock.innerText = counterValue
    },
    increment: (element) => {
        const parentBlock = element.parentNode;
        let counterValue = +parentBlock.children.item(1).innerText;
        const counterBlock = parentBlock.children.item(1);
        counterValue++;
        counterBlock.innerText = counterValue
    }
};

$('.physical-item-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.physical-item-small-slider'
});
$('.physical-item-small-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.physical-item-slider',
    dots: false,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
});


$(document).ready(function () {

    addActiveClass('reviews-min-text-hrefs', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');

    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    })

    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }

    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }

    //   change case block with click  case menu
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: 'auto'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: 'auto'});

                }
            })
        }
    }

});


$('.click-dal-chit').on('click', function () {
    $('.fishtext-website-will').addClass('fishtext-website-will-act');
});


$('.roll-up').on('click', function () {
    $('.fishtext-website-will').removeClass('fishtext-website-will-act');
});

$('.click-open-new').on('click', function () {
    $(this).parent().toggleClass('pages-new-drop-act');
});


$('.click-open-save').on('click', function () {
    $(this).parent().toggleClass('personal-data-izmin-act')
    $('.personal-data-item').toggleClass('personal-data-active')
});

$('.click-actols').on('click', function () {
    $('.personal-data-item').removeClass('personal-data-active')
    $(this).parent().removeClass('personal-data-izmin-act')
});

$('.show-products-click').on('click', function () {
    $(this).parent().toggleClass('show-products-cnt-act')
});


$('.submenu-active').on('click', function () {
    $(this).toggleClass('submenu-active-op')
})


$('.click-ops-sub-men').on('click', function () {
    $('.header-form-info-open').toggleClass('header-form-info-act')
});


$('.click-open-save').on('click', function () {
    $('.tog-disab').removeAttr("disabled")
});


$('.personal-data-izmin').on('click', function () {
    $('.tog-disab').removeAttr("disabled")
});

$('.register-popup-inp label').on('click', function () {
    $(this).toggleClass('register-popup-inp-rem-s')
});


let sliders = document.getElementsByClassName('nonlinear');

for (let i = 0; i < sliders.length; i++) {

    let slid = sliders[i];
    noUiSlider.create(slid, {
        connect: true,
        behaviour: 'tap',
        start: [document.getElementById(slid.getAttribute('data-id') + '-lower-value').value, document.getElementById(slid.getAttribute('data-id') + '-upper-value').value],
        range: {
            'min': [parseInt(slid.getAttribute('data-min'))],
            'max': [parseInt(slid.getAttribute('data-max'))]
        },
    });

    // document.getElementById(slid.getAttribute('data-id') + '-lower-value').value = 0;
    // document.getElementById(slid.getAttribute('data-id') + '-upper-value').value = slid.getAttribute('data-max');
    document.getElementById(slid.getAttribute('data-id') + '-lower-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([this.value, null]);
        // check();
    });
    document.getElementById(slid.getAttribute('data-id') + '-upper-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([null, this.value]);
        // check();

    });

    slid.noUiSlider.on('slide', function (values, handle, unencoded, isTap, positions) {
        var nodes = [
            document.getElementById(this.target.getAttribute('data-id') + '-lower-value'), // 0
            document.getElementById(this.target.getAttribute('data-id') + '-upper-value'),  // 1
        ];

        nodes[handle].value = parseInt(values[handle]);

    });
    slid.noUiSlider.on('end', function (values, handle, unencoded, isTap, positions) {
        let data = $('form').serializeArray();
        // filter(data)
        // check()
    });
}


$(document).ready(function () {

    $('.open-this-mods').hover(function () {

        var numb = $(this).attr("data-val-pop");
        $(`.tab-data-pop[data-val-pop=${numb}]`).toggleClass('tab-data-col');
    });
    $('.tab-data-pop').hover(function () {
        var numb = $(this).attr("data-val-pop");
        $(`.open-this-mods[data-val-pop=${numb}]`).toggleClass('open-this-mods-col');

    });


    $('.open-this-mods').on('click', function () {
        var dataleft = this.getAttribute('data-left');
        var databot = this.getAttribute('data-bottom');

        var popup = document.querySelector('.open-pop-data');

        if (popup.classList.contains('d_none') === true) {
            popup.classList.remove('d_none');
            popup.setAttribute('style', 'left:' + dataleft + '%; top:' + databot + '%');
            $('.spare-partsa-bsalute').toggleClass('spare-parts-name-act');

        }

        if (this.classList.contains('opened') === false) {
            this.classList.add('opened');
        } else {
            this.classList.remove('opened');
            popup.classList.add('d_none');
        }
    });
    $('.spare-partsa-bsalute').on('click',function () {
        var popup = document.querySelector('.open-pop-data');

        $('.spare-partsa-bsalute').removeClass('spare-parts-name-act');
        $('.open-this-mods').removeClass('opened');
        if (popup.classList.contains('d_none') === false) {
            popup.classList.add('d_none');

        }
    })




});



