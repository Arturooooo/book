
//Menú

function setMenuActual (num) {
    // a los que no son menu quitales la clase activa
    console.log($('.info-menu'));
    
    $('.info-menu').addClass("hide");
    $('.numeroCirculo').removeClass("hide");


    // solo al que es menu, le agrego clase activa
    $('#info'+num).removeClass("hide");
    $('#infos'+num).removeClass("hide");
    $('#btn'+num).addClass("hide");
    $('#btns'+num).addClass("hide");
}

function actualizaMenu(slideId) {
    if (slideId < 12) {
        setMenuActual('1');
       //  $("#control-1").show();
       // $("#control-2").show();
        
    } else if (slideId < 16) {
        setMenuActual('2');
         $("#control-1").hide();
        $("#control-2").hide();
       
    } else if (slideId < 22) {
        setMenuActual('3')
       
    } else if (slideId < 33) {
        setMenuActual('4')
    } else if (slideId < 36) {
        setMenuActual('5')
    }

}



$(document).ready(function () {

    console.log('LISTO')
    $('#carouselControls').on('slide.bs.carousel', function (params) {
        // do something…
        var slideId = $(params.relatedTarget)[0].id
        console.log('cambio slide', slideId )
        actualizaMenu(slideId)
    })

 
        $("#info1").addClass("hide");
        $("#info2").addClass("hide");
$("#info3").addClass("hide");
$("#info4").addClass("hide");
$("#info5").addClass("hide");
    $("#infos1").addClass("hide");
        $("#infos2").addClass("hide");
$("#infos3").addClass("hide");
$("#infos4").addClass("hide");
$("#infos5").addClass("hide");

    
    
    
});




  


// Música y nav

$(document).ready(function () {
    
  
     $("#control-1").hide();
        ;$("#control-2").hide();
    
    
    $("#empezamos").one("click", function () {
    
$("#player")[0].play();
  
});
    
      $("#si-14").one("click", function () {
    
  $("#player").attr("src","musica/2.mp3");
  
});
    
       $("#no-14").one("click", function () {
    
  $("#player").attr("src","musica/2.mp3");
  
});
    
    
});






// Última slide parte 1
// Dere e Izq están invertidas

$(document).ready(function () {
    $("#divi").addClass("invisible");
    $(".mano-anim2").hide();
    $("#cuadro-activo").hide();
    $("#dere").one("click", function () {
        $(".mano-anim").hide();

        $("#divi").removeClass("invisible");
        $("#divi").addClass("visible");
        $("#divi").addClass("animate__fadeIn");
        $("#cuadro-activo").addClass("animate__delay-2s");
        $('#cuadro-activo').show(0);
       
        
              setTimeout(function(){
      
       $("#izq").addClass("sb-amarillo");
   }, 6000);  
        
                 setTimeout(function(){
      $(".mano-anim2").show();
      
   }, 6500); 
        
        
      
    });


});


$(document).ready(function () {
    $("#divis").hide();
    $("#flecha-pop-13").hide();


    $("#izq").click(function () {

        $(".mano-anim2").hide();  

       

        $("#divis").addClass("animate__fadeIn");
         $("#divis").show();
        
            setTimeout(function(){
     $("#flecha-pop-13").show();
   }, 2000); 
        
        

    });
    
    
     $("#flecha-pop-13").click(function () {
         
         $("#control-1").hide();  
         $("#control-2").hide(); 
        
         
         
           });
});








// DIAPO 17 PARTE 1
$(document).ready(function () {
    
      $("#cl-alimentacion2").hide(); $("#cl-salud2").hide(); $("#cl-educacion2").hide(); $("#todosderechos").hide(); $("#flechas2").hide(); $("#flechas4").hide(); 
    $("#cl-textosa").addClass("invisible"); 
    $("#cl-textosb").addClass("invisible"); 
    $("#cl-textosc").addClass("invisible"); 

    $("#flechas1").addClass("invisible"); 
    $("#flechas3").addClass("invisible"); 
    $("#flecha-pop-17").addClass("invisible"); 
  

     $(".cl-alimentacion").one("click", function () {
        
           $("#cl-alimentacion2").show();
         
          setTimeout(function(){
     $("#cl-textosa").removeClass("invisible");
               $("#cl-textosa").addClass("animate__fadeIn"); 
   }, 1000); 
        
         
         $("#mano-sequia-1").hide();    
         $("#flechas1").removeClass("invisible"); 
       
         $("#flechas1").addClass("animate__fadeIn"); 
        
        
    });
    
    
     $("#flechas1").one("click", function () {
        
        
          $("#cl-salud2").show();
            setTimeout(function(){
      $("#cl-textosb").removeClass("invisible"); 
                 $("#cl-textosb").addClass("animate__fadeIn"); 
   }, 1000); 
  
         
      $("#flechas3").removeClass("invisible"); 
         $("#flechas3").addClass("animate__fadeIn"); 
         
           $("#flechas1a").removeClass("flecha-right"); 
        
    });
    
      $("#flechas3").one("click", function () {
        
        
   
          $("#cl-educacion2").show();
          
                  setTimeout(function(){
      $("#cl-textosc").removeClass("invisible"); 
                       $("#cl-textosc").addClass("animate__fadeIn"); 
   }, 1000); 
      
           $("#flechas2a").removeClass("flecha-right"); 
         
         
        $("#flecha-pop-17").removeClass("invisible");
              $("#flecha-pop-17").addClass("animate__fadeIn"); 
        
    });
    
    
    
    
    
    });



// DIAPO 17 PARTE 2
$(document).ready(function () {
    
      $("#vulnerar").hide(); 
      $("#perjudicar").hide(); 
      $("#flecha-pop-18").addClass("invisible"); 

     $(".salud-hover").one("click", function () {
        
           $("#salud").addClass("pad-salud");
         $("#cl-textos1").addClass("invisible");
         
         $("#mano-sequia2").hide();
         
         setTimeout(function(){
      $("#cl-textos2").removeClass("invisible");
   }, 1000);    
         
            setTimeout(function(){
      $("#vulnerar").show(); 
                $("#vulnerar").addClass("animate__fadeIn");
   }, 1500);  
         
         
                  setTimeout(function(){
      $("#vulnerar").hide(2000); 
               
   }, 4400);  
         
         
         setTimeout(function(){
       $("#alimentacion").addClass("pad-alimentacion");
   }, 2500);     
         
         setTimeout(function(){
       $("#educacion").addClass("pad-educacion");
   }, 2500);
         
                       setTimeout(function(){
      $("#perjudicar").show();
                    $("#perjudicar").addClass("animate__fadeIn");
   }, 4500); 
         
                       setTimeout(function(){
    
        $("#flecha-pop-18").removeClass("invisible");
              $("#flecha-pop-18").addClass("animate__fadeIn"); 
   }, 5500); 
         
        
    });
    
    });

// DIAPO 19
$(document).ready(function () {
    
      $("#dere-19-1").addClass("invisible");
      $("#dere-19-2").addClass("invisible");
    
     $("#flecha-pop-19").addClass("invisible"); 

     $("#flecha-19").one("click", function () {
          $("#flecha-al").removeClass("flecha-right"); 
        
           $("#dere-19-1").removeClass("invisible"); $("#dere-19-1").addClass("animate__fadeIn");
         
                setTimeout(function(){
       $("#dere-19-2").removeClass("invisible"); $("#dere-19-2").addClass("animate__fadeIn");
   }, 1000);
        
           $("#mano-19").addClass("invisible");
         
                  setTimeout(function(){
    
        $("#flecha-pop-19").removeClass("invisible");
              $("#flecha-pop-19").addClass("animate__fadeIn"); 
   }, 3000); 
        
    });
    
    });


// DIAPO 20
$(document).ready(function () {
    
      $("#dere-20-1").addClass("invisible");
      $("#dere-20-2").addClass("invisible");
     $("#flecha-pop-20").addClass("invisible"); 
    
  

     $("#flecha-20").one("click", function () {
          $("#flecha-20").removeClass("flecha-right"); 
        
           $("#dere-20-1").removeClass("invisible"); $("#dere-20-1").addClass("animate__fadeIn");
         
                setTimeout(function(){
       $("#dere-20-2").removeClass("invisible"); $("#dere-20-2").addClass("animate__fadeIn");
   }, 1000);
        
           $("#mano-20").addClass("invisible");
         
           setTimeout(function(){
    
        $("#flecha-pop-20").removeClass("invisible");
              $("#flecha-pop-20").addClass("animate__fadeIn"); 
   }, 3000); 
        
    });
    
    });


// DIAPO 21
$(document).ready(function () {
    
      $("#dere-21-1").addClass("invisible");
      $("#dere-21-2").addClass("invisible");
      $("#flecha-pop-21").addClass("invisible"); 
    
  

     $("#flecha-21").one("click", function () {
         $("#flecha-21").removeClass("flecha-right"); 
        
           $("#dere-21-1").removeClass("invisible"); $("#dere-21-1").addClass("animate__fadeIn");
         
                setTimeout(function(){
       $("#dere-21-2").removeClass("invisible"); $("#dere-20-2").addClass("animate__fadeIn");
   }, 1000);
        
           $("#mano-21").addClass("invisible");
         
            setTimeout(function(){
    
        $("#flecha-pop-21").removeClass("invisible");
              $("#flecha-pop-21").addClass("animate__fadeIn"); 
   }, 3000); 
        
    });
    
    });


// DIAPO MAPAS 1


$(document).ready(function () {
    
     $("#zambia").hide();  
     
    $("#mapa-zambia2").hide(); 
    $("#flecha-pop-27").hide();
    $(".mozambique-hide").hide();
  
    

     $("#mapa-zambia").one("click", function () {
        
         
        
         $("#mapa-zambia2").show(); 
          $("#zambia").addClass("animate__fadeIn"); 
          $("#mapa-zambia2").addClass("animate__fadeIn"); 
             setTimeout(function(){
    
       $("#zambia").show(); 
   }, 1000); 
         
          setTimeout(function(){
    
       $("#flecha-pop-27").show(); 
   }, 3000); 
         
    });
    
    $("#flecha-pop-27").one("click", function () {
       
        $("#mapa-mozambique").show();
        $(".mozambique-hide").show();
        $(".zambia-hide").hide("slow");
        $("#flecha-pop-27").hide();
    
    });
     });

$(document).ready(function () {
    
     $("#mozambique").hide();    $("#mapa-mozambique2").hide(); 
      $("#flecha-pop-28").hide();

     $("#mapa-mozambique").one("click", function () {
        
        
          $("#mapa-mozambique2").addClass("animate__fadeIn"); 
         $("#mapa-mozambique2").show(); 
           
          setTimeout(function(){
     $("#mozambique").addClass("animate__fadeIn"); 
       $("#mozambique").show(); 
   }, 1000); 
         
          setTimeout(function(){
    
       $("#flecha-pop-28").show(); 
   }, 3000); 
        
    });
    
    });


$(document).ready(function () {
    
     $("#bolivia").hide();    $("#mapa-bolivia2").hide(); 
     $("#fin-bolivia").hide(); 
    
     $("#flecha-pop-32").hide();

     $("#mapa-bolivia").one("click", function () {
        
       
         $("#mapa-bolivia2").show(); 
           $("#mapa-bolivia2").addClass("animate__fadeIn"); 
           $("#bolivia").addClass("animate__fadeIn"); 
         
            setTimeout(function(){
    
       $("#bolivia").show(); 
         $("#inicio-bolivia").addClass("animate__fadeOut");          
   }, 3000); 
         
                   setTimeout(function(){
     $("#fin-bolivia").addClass("animate__fadeIn");
       $("#fin-bolivia").show(); 
   }, 6000); 
         
              setTimeout(function(){
    
       $("#flecha-pop-32").show(); 
   }, 10000); 
        
         
         
        
    });
    
    });



// DIAPO 29

$(document).ready(function () {
    
     $("#29-2").hide(); 
     $("#29-3").hide(); 
     $("#29-img-2").hide(); 
     $("#flecha-pop-30").hide(); 


     $("#flecha-pop-29").one("click", function () {
         $("#29-2").show(); 
         $("#29-1").addClass("invisible"); 
        $("#29-img-1").addClass("invisible"); 
        $("#29-img-2").show();  
        $("#flecha-pop-30").show();  
    });
    
      $("#flecha-pop-30").one("click", function () {
         $("#29-3").show(); 
         $("#29-2").hide(); 
           $("#flecha-pop-30").hide(); 
           $("#flecha-pop-31").show(); 
       
    });
    
    
    
    
    });



// DIAPO 31

$(document).ready(function () {
    
     $("#respuesta-31").addClass("invisible"); 
     $("#flecha-pop-31").hide();

     $("#caja1, #caja2, #caja3").one("click", function () {
        
        $("#respuesta-31").removeClass("invisible"); 
        $("#caja1").addClass("caja1ok"); 
         
         setTimeout(function(){
    
       $("#flecha-pop-31").show(); 
   }, 2000); 
  
        
    });
    
    });

$(document).ready(function () {
    
     $("#injustas2").hide(); 
     $("#evitables2").hide(); 
     $("#mano-evitables").hide(); 
     $("#hombre-fin1").hide(); 
     $("#hombre-fin2").hide(); 
     $("#flecha-pop-34").hide(); 

     $("#injustas").one("click", function () {
        
        $("#injustas").addClass("invisible"); 
        $("#injustas2").show();  $("#mano-injustas").hide();
         $("#mano-evitables").show(); 
  
        
    });
    
     $("#evitables").one("click", function () {
        
        $("#evitables").addClass("invisible"); 
        $("#evitables2").show(); 
         $("#mano-evitables").hide(); 
         
             setTimeout(function(){
    
       $("#hombre-fin1").show(); 
       $("#hombre-fin2").show(); 
   }, 2000); 
         
         setTimeout(function(){
    
       $("#flecha-pop-34").show(); 
   }, 4000); 
  
  
        
    });
    
    });


// DIAPO 35


$(document).ready(function () {
    
     $("#nohay").addClass("invisible"); 
     $("#derecho").addClass("invisible"); 
     $("#nohay2").addClass("invisible"); 
     $("#flecha-pop-35").addClass("invisible"); 
     $("#justicia").addClass("invisible");
    $("#flecha2").addClass("invisible"); 
     $("#35-2").hide();
     $("#35-2-2").addClass("invisible");
     $("#cubo").hide(); 

     $("#flecha1").one("click", function () {
        
        
        $("#flecha1fix").removeClass("flecha-down"); 
        $("#nohay").removeClass("invisible"); 
        $("#nohay").addClass("animate__fadeIn"); 
         
        $("#derecho").removeClass("invisible"); 
        $("#derecho").addClass("animate__fadeIn");
          $("#flecha2").removeClass("invisible"); 
        $("#flecha2").addClass("animate__fadeIn");
         
         $('#img-fin').css("background-image", "url(imgs/fin2.jpg)");
      
    });
    
     $("#flecha2").one("click", function () {
    $("#flecha2fix").removeClass("flecha-down"); 
         
          $("#nohay2").removeClass("invisible"); 
        $("#nohay2").addClass("animate__fadeIn"); 
         
        $("#justicia").removeClass("invisible"); 
        $("#justicia").addClass("animate__fadeIn");
  
          $('#img-fin').css("background-image", "url(imgs/fin3.jpg)");
        
        
         
         
         
          setTimeout(function(){
    
     $("#flecha-pop-35").removeClass("invisible"); 
     $("#flecha-pop-35").addClass("animate__fadeIn"); 
   }, 2500); 
         
         
         
         $("#flecha-pop-35").one("click", function () {
         
              $("#35-1").addClass("invisible"); 
              $("#35-2").show(); 
              $("#cubo").show(); 
           
  $("#35-2-2").removeClass("invisible"); 
       $("#35-2-2").addClass("animate__fadeIn");
       $("#35-logo").addClass("animate__fadeIn");
       $("#35-fb").addClass("animate__fadeIn");
       $("#35-tw").addClass("animate__fadeIn");
       $("#35-wa").addClass("animate__fadeIn");
             lottie.play("anim-brocha"); 
             
         
             
              });
        
    });
    
    });







//Carrusel
//Carrusel
//Carrusel

//Controlar duración del auto play del Carrusel por item
$.fn.carousel.Constructor.prototype.cycle = function (event) {

    if (!event) {
        this._isPaused = false;
    }

    if (this._interval) {
        clearInterval(this._interval)
        this._interval = null;
    }

    if (this._config.interval && !this._isPaused) {

        var $ele = $('.carousel-item-next');
        var newInterval = $ele.data('interval') || this._config.interval;
        this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
            newInterval
        );
    }
};

//Velocidad del carrusel
$(document).ready(function () {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 500 // 1000 es un segundo
});



//Comportamientos botones 14



$(document).ready(function () {
   
 $("#result-botones-14").addClass("invisible");
 $("#pero").addClass("invisible");
    
    $("#no, #si").one("click", function () {
        
           $("#result-botones-14").addClass("animate__fadeIn");
           
      
        $("#result-botones-14").removeClass("invisible"); 
     
        $("#botones-14").addClass("invisible");
  
          setTimeout(function(){
     $("#pero").removeClass("invisible");
              $("#pero").addClass("animate__fadeIn");
   }, 2000); 
    
    });

});

//Pantalla metas


$(document).ready(function () {
    $("#meta2").hide();
    $("#meta2-1").hide();
    $("#meta2-2").hide();
    $("#meta2-3").hide();
    $("#meta2-4").hide();
    $("#flecha-pop-24").hide();
    $("#flecha-pop-25").hide();
         
    
     $("#meta3").hide();
     $("#meta3-1").hide();
    $("#meta3-2").hide();
    $("#meta3-3").hide();
    $("#meta3-4").hide();
    $("#meta3-5").hide();
    
    
    
    $("#flecha-pop-23").one("click", function () {
        
          
           $("#meta-subt-hide").addClass("animate__fadeOut");
           $("#meta1-hide").addClass("animate__fadeOut");
        
         $("#meta2").show();
    $("#meta2-1").show();
    $("#meta2-2").show();
    $("#meta2-3").show();
    $("#meta2-4").show();
           $("#meta2").addClass("animate__fadeIn");
           $("#meta2-1").addClass("animate__fadeIn");
           $("#meta2-2").addClass("animate__fadeIn");
           $("#meta2-3").addClass("animate__fadeIn");
           $("#meta2-4").addClass("animate__fadeIn");
        
           $("#flecha-pop-23").hide();
           $("#flecha-pop-24").show();
          $("#flecha-pop-24").addClass("animate__fadeIn");
 
    
    });
    
     $("#flecha-pop-24").one("click", function () {
         
    $("#meta2-1").hide();
    $("#meta2-2").hide();
    $("#meta2-3").hide();
    $("#meta2-4").hide();
    $("#meta2-5").hide();
        
         $("#meta3").show();
    $("#meta3-1").show();
    $("#meta3-2").show();
    $("#meta3-3").show();
    $("#meta3-4").show();
    $("#meta3-5").show();
           $("#meta3").addClass("animate__fadeIn");
           $("#meta3-1").addClass("animate__fadeIn");
           $("#meta3-2").addClass("animate__fadeIn");
           $("#meta3-3").addClass("animate__fadeIn");
           $("#meta3-4").addClass("animate__fadeIn");
           $("#meta3-5").addClass("animate__fadeIn");
         
        
           $("#flecha-pop-24").hide();
           $("#flecha-pop-25").show();
          $("#flecha-pop-25").addClass("animate__fadeIn");
 
    
    });
   

});



