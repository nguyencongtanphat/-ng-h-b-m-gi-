window.onload= function () 
{
    
    var tens= 00;
    var screen_tens=document.getElementById("tens")
    var seconds=00;
    var screen_seconds= document.getElementById("seconds")
    var button_start=document.getElementById("button-start")
    var button_stop=document.getElementById("button-stop")
    var button_reset=document.getElementById("button-reset")
    var get;
   button_start.onclick= function () 
   {
      
       clearInterval(get);
        get=setInterval(timer,10);
   }
   button_stop.onclick= function()
   {
       clearInterval(get);
   }
   button_reset.onclick= function () 
   {
       clearInterval(get);
        tens=0;
        seconds=0;
     screen_tens.innerHTML="00";
     screen_seconds.innerHTML="00";

   }
  
   function timer() 
   {
        tens++;
        if(tens<10)
        {
             screen_tens.innerHTML="0"+tens;
        }
         else if(tens <= 99)
        {
              screen_tens.innerHTML=tens;
        }
        if(tens==100)
        {
             seconds++;
             tens=0;
        }
         if(seconds<10)
        {
            screen_seconds.innerHTML="0"+seconds;
        }
        else if(seconds <= 99)
        {
            screen_seconds.innerHTML=seconds;
        }
    }




}