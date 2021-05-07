$(document).ready(function(){

    $('.containerInicio').show();
    $('.container21').hide();
    $('.container22').hide();
    $('.container23').hide();
    $('.container231').hide();
    $('.container232').hide();
    $('.container234').hide();
    $('.container24').hide();

    $('[data-toggle="tooltip"]').tooltip();   
    $('[data-toggle="popover"]').popover();

    $('#autor').attr('data-content',`Obed Peralta => 18680190@cuautla.tecnm.mx | github.com/obed-peralta`);

    // Eventos al hacer clic en los menús del NAV
    $(document).on('click','#link21',function(){
        $('.containerInicio').hide();
        $('.container21').show();
        $('.container22').hide();
        $('.container23').hide();
        $('.container231').hide();
        $('.container232').hide();
        $('.container24').hide();
    });
    $(document).on('click','#link22',function(){
        $('.containerInicio').hide();
        $('.container21').hide();
        $('.container22').show();
        $('.container23').hide();
        $('.container231').hide();
        $('.container232').hide();
        $('.container24').hide();
    });
    $(document).on('click','#link231',function(){
        $('.containerInicio').hide();
        $('.container21').hide();
        $('.container22').hide();
        $('.container23').show();
        $('.container231').show();
        $('.container232').hide();
        $('.container234').hide();
        $('.container24').hide();
    });
    $(document).on('click','#link232',function(){
        $('.containerInicio').hide();
        $('.container21').hide();
        $('.container22').hide();
        $('.container23').show();
        $('.container231').hide();
        $('.container232').show();
        $('.container234').hide();
        $('.container24').hide();
    });
    $(document).on('click','#link24',function(){
        $('.containerInicio').hide();
        $('.container21').hide();
        $('.container22').hide();
        $('.container23').hide();
        $('.container231').hide();
        $('.container232').hide();
        $('.container24').show();
    });
    $(document).on('click','#u2',function(){
        $('.containerInicio').show();
        $('.container21').hide();
        $('.container22').hide();
        $('.container23').hide();
        $('.container231').hide();
        $('.container232').hide();
        $('.container24').hide();
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