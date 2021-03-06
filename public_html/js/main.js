$(document).ready(function(){
    
    
    
    
    if($('.team-slider').length > 0){
        $('.team-slider').owlCarousel({
            autoplay: true,
            nav: false,
            loop: true,
            responsive:{
                0: {
                    items: 1,
                    margin: 0
                },
                992:{
                    items: 2,
                    margin: 20
                },
                 1200:{
                    items: 2,
                    margin: 73
                }
            }
        });
    }
    
    
    
 
    
// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }



    animation();
    $(window).scroll(function () {
        animation();
    });
// animation end




if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message:{
                        required: true                       
                    }
                },
                messages: {
                   name: {
                        required: 'Name* is required field!!!'
                    },
                    email: {
                        required: 'Email* is required field!!!',
                        email: 'Please insert valid Email address!!!'
                    },
                    message:{
                        required: 'Message* is required field!!!'
                        
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

            });
        });
    }//Form Validation



    
    
    
});

