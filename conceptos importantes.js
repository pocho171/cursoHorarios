function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe usuario activo')
            aparece(user);
          // User is signed in.
          var displayName = user.displayName;
          
          var email = user.email;
          
          console.log('*****************');
          console.log(user.emailVerified)
          console.log('*****************');
          
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('no existe usuario activo')
          
          contenido.innerHTML = `
          
<center><img src="https://i.ibb.co/1QKh3cP/curso-horarios-enfermeria.jpg" alt="curso-horarios-enfermeria" border="0"></center>
          
        
        `;
          // ...
        }
      });
}



observador();

function aparece(user){
    var user = user;
    var contenido = document.getElementById('contenido');
    if(user.emailVerified){ 
 
        contenido.innerHTML = `
        
        <!-- /* INICIO DE LA ZONA VIP */ -->
        
      <!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body">
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">❗Hemos notado que una de las grandes debilidades los que elaboran los cuadros de guardia o turnos de trabajo, está en conocer los conceptos necesarios y manejar las diferencias entre cada una de las nomenclaturas a usar.</p>
</span>
<input id="showmore_1" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">⬛ Por eso, traemos a este curso, las definiciones de estos terminos, para que puedan manejar muy bien el diseño de los cuadros de turnos de trabajo de enfermería</p>
      
    </span>
    <label for="showmore_1" class="more" >Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div> 

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 1</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/8BP069F/Concepto1.png" /> 
     </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 2</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/cJ8S95k/Concepto2.png" /> 
     </div></div></div>



<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style= "margin: 10px;">Texto 2</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>JORNADA DE TRABAJO EN ENFERMERÍA</b></p>
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">          
     </span></h3><p style="font-family: Verdana; font-size: medium;">🟦Es muy importante que dominen este concepto, la <b>jornada de trabajo</b> se inicia desde que usted recibe la guardia hasta que la entrega, 4 horas de trabajo, se computa como jornada efectiva laborada. Solo en situaciones de emergencia la jornada comienza desde que usted pisa el centro de trabajo sin importar la hora de ingreso.  De allí la regla de que al entregar su guardia debe retirarse de la misma y no se le debe permitir laborar.</p>      
     </div></div></div></div></div>  

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 3</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/tsvfJHn/Concepto3.png" /> 
     </div></div></div>

   

<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>JORNADA LIBRE Ó DÍA LIBRE</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟨Este concepto es mal definido en los cuadros de guardia, confunden descanso con libre.El libre es una jornada de trabajo permitida para que el trabajador se ausente, no es un permiso tampoco, el libre tiene un basamento jurídico, Por ejemplo libre por 36 horas de trabajo, libre por día festivo, se entiende que el libre está dentro de la misma jornada de labores. Este concepto se debe definir con una nomenclatura que veremos posterior, al tener definidos los conceptos que vienen, podrán observar las diferencias.</p>
</span>
<input id="showmore_2" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟪Muchos indican que un permiso es libre, no, son conceptos diferentes.</p>
      
    </span>
    <label for="showmore_2" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 4</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/v44JH07/Concepto4.png" /> 
     </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 5</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/wyC05G0/Concepto5.png" /> 
     </div></div></div>



 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 1</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://app.talkshoe.com/recording/inline/key/9ba725f435e82f7685562e4c6bb014e8.mp3"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 2</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212526&amp;authkey=ANCH82TMEDBtk-0"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 3</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212527&amp;authkey=AL5fYo7fNhH0PTw"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 4</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212528&amp;authkey=AFSJRs-xhaMTD-Y"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 6</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/F7pt8bM/Concepto6.png" /> 
     </div></div></div>


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 7</span>🖥<div class="panel-body">     
   <a href="https://i.ibb.co/YBrv624/Concepto7.png"><img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/YBrv624/Concepto7.png" /> </a> 
     </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 8</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/LgZVdQy/Concepto8.png" /> 
     </div></div></div>




<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

