$(document).ready(function(){
    var cnote=document.getElementById("c-note");
    var dnote=document.getElementById("d-note");
    var enote=document.getElementById("e-note");
    var fnote=document.getElementById("f-note");
    var gnote=document.getElementById("g-note");
    var anote=document.getElementById("a-note");
    var bnote=document.getElementById("b-note");

    $("#c").on("click",playCnote);
    function playCnote(){
        cnote.currentTime=0;
        cnote.play();
    };


    $("#d").on("click",playDnote);
    function playDnote(){
        dnote.currentTime=0;
        dnote.play();
    };
    
    $("#e").on("click",playEnote);
    function playEnote(){
        enote.currentTime=0;
        enote.play();
    };

    $("#f").on("click",playFnote);
    function playFnote(){
        fnote.currentTime=0;
        fnote.play();
    };
    $("#g").on("click",playGnote);
    function playGnote(){
        gnote.currentTime=0;
        gnote.play();
    };
    $("#a").on("click",playAnote);
    function playAnote(){
        anote.currentTime=0;
        anote.play();
    };
    $("#b").on("click",playBnote);
    function playBnote(){
        bnote.currentTime=0;
        bnote.play();
    };
    $(document).keypress(function(evt){
        //playCnote();
        //console.log(evt.keyCode);
        if (evt.keyCode===122){
            playCnote();
        }
        if (evt.keyCode===120){
            playDnote();
        }
        if (evt.keyCode===99){
            playEnote();
        }
        if (evt.keyCode===118){
            playFnote();
        }
        if (evt.keyCode===98){
            playGnote();
        }
        if (evt.keyCode===110){
            playAnote();
        }
        if (evt.keyCode===109){
            playBnote();
        }
    });
        
});







    


                                   
                                
    
    
    
    
    
   