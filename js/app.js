$(document).ready(function(){

    $('.containerInicio').show();
    $('.container31').hide();
    $('.container32').hide();
    $('.container33').hide();
    $('.container34').hide();

    $('[data-toggle="tooltip"]').tooltip();   
    $('[data-toggle="popover"]').popover();

    $('#autor').attr('data-content',`Obed Peralta => 18680190@cuautla.tecnm.mx | github.com/obed-peralta`);

    // Eventos al hacer clic en los menús del NAV
    $(document).on('click','#link31',function(){
        $('.containerInicio').hide();
        $('.container31').show();
        $('.container32').hide();
        $('.container33').hide();
        $('.container34').hide();
    });
    $(document).on('click','#link32',function(){
        $('.containerInicio').hide();
        $('.container31').hide();
        $('.container32').show();
        $('.container33').hide();
        $('.container34').hide();
    });
    $(document).on('click','#link33',function(){
        $('.containerInicio').hide();
        $('.container31').hide();
        $('.container32').hide();
        $('.container33').show();
        $('.container34').hide();
    });
    $(document).on('click','#link34',function(){
        $('.containerInicio').hide();
        $('.container31').hide();
        $('.container32').hide();
        $('.container33').hide();
        $('.container34').show();
    });
    $(document).on('click','#u2',function(){
        $('.containerInicio').show();
        $('.container31').hide();
        $('.container32').hide();
        $('.container33').hide();
        $('.container34').hide();
    });


    /**
     * INICIO Bloque para generar animación de circulos
     */
     function animacionInicio(){
        let container = document.querySelector('#container');
        for (let i = 0; i <= 7; i++) {          
            let blocks = document.createElement('div');
            blocks.classList.add('block');
            container.appendChild(blocks);
        }
        animar();
    }
    function animar(){
        anime({
            targets: '.block',
            translateX: function(){
                return anime.random(-500,500);
            },
            translateY: function(){
                return anime.random(-200,200);
            },
            scale: function(){
                return anime.random(1,3);
            },
            easing: 'linear',
            duration: 3000,
            delay: anime.stagger(10),
            complete: animar,
        });
    }
    animacionInicio();
    /**
     * FIN Bloque para generar animación de circulos
     */


});