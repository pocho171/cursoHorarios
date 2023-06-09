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
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body">
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟥Uno de los grandes problemas de las personas que elaboran los cuadros de guardia está en el desconocimiento de las leyes y muchos lo hacen de forma empírica o sencillamente siguen el patrón que ha realizado otros compañeros en el pasado, entonces, simplemente lo que hacen es repetir y repetir, pero sinceramente, desconocen lo que hacen  y la idea de este curso es que ustedes hagan las cosas perfectas bien que sepa de dónde sale las diferentes normas que regula el personal de enfermería, sobre todo en los horarios, por eso vamos a traerle a ustedes un pequeño repaso de todas las leyes y normas aquí.</p>
</span>
<input id="showmore_1" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟧Desde la que comienza con el origen y el final que serían las normas administrativas como tal, entonces de verdad prestele mucha atención a cada una de las láminas que vamos a colocar con su respectiva comentario y espero de verdad que que entienda así por algún motivo de hay alguna duda y recuerden que anotarla y después en el último encuentro vamos a colocar ya definitivamente las interrogantes las inquietudes y las asesorías.</p>      
    </span>
    <label for="showmore_1" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label> 
         </div></div></div>

<!--modulo video--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Video 1</span>🎞<div class="panel-body">   
       <div style="padding:75% 0 0 0;position:relative;"><iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture"   style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 8px;" src="https://drive.google.com/file/d/1KJRyBl5HOqD8kR19bqxZTE6si7GbWn7n/preview"></iframe></div>
     </div></div></div> 

<!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 1</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212471&amp;authkey=AET97ko906Tf1cY"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

<!--alertas colores inicio-->
  <label class="barracolores" style="margin-top: 10px;"><center><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">CONVENIO 149 OIT PERSONAL ENFERMERIA </span></span></span></span></center></label><br /><!--alertas colores fin--> 


<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body">
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">⬛El primer paso para entender el tema de la elaboración de los cuadros de guardias está en recordar el origen de las normas y leyes de enfermería en Venezuela.
Este punto consideramos que es vital en este curso, ya que de esta manera podemos entender los siguientes pasos.</p>
</span>
<input id="showmore_2" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟫Venezuela suscribió un convenio con la OIT en 1977 relacionada con el trabajo del personal de enfermería, este instrumento dio origen a las recomendaciones sobre las condiciones trabajo del personal de esta carrera.
Todo esto es el punto de partida de la elaboración de los cuadros, ya que como indicamos es un conjunto de normas y leyes que sé debe respetar en todo momento</p>
      
    </span>
    <label for="showmore_2" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
  
 
         </div></div></div>


  
  

<!--modulo video--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Video 1</span>🎞<div class="panel-body">   
       <div style="padding:75% 0 0 0;position:relative;"><iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture"   style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 8px;" src="https://drive.google.com/file/d/1KJe3ipsspTxSaoY9RNYHjGM0Q4jOZyCK/preview"></iframe></div>
     </div></div></div> 


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 1</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212481&amp;authkey=AP7rmyhUzviW35o"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


  
<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 3</span>📋<div class="panel-body">
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟦Cuando un país ratifica un convenio de la OIT se compromete a darle efecto a través de la ley y a poner en práctica sus disposiciones.También acepta que la OIT supervise las medidas que el país adopta para aplicar el convenio.<br /><br />

🟥El Convenio OIT n. 149, pese a ser una norma de mínimos, plantea como objetivo principal la mejora de las condiciones laborales del personal de enfermería, integrado mayoritariamente por mujeres.</p>
</span>
<input id="showmore_3" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟩El Convenio sobre el personal de enfermería contempla una serie de disposiciones que permiten abordar muchos de los problemas mencionados. Su aplicación en el mayor número de países posible permitirá establecer normas de trabajo decentes, elevar el perfil profesional y el peso político del personal de enfermería y proporcionar incentivos a estos profesionales para que sigan desempeñando sus funciones.</p>      
    </span>
    <label for="showmore_3" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label> 
          </div></div></div>


<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 4</span>📋<div class="panel-body">
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟨El Convenio núm. 149 reconoce el papel crucial que desempeña el personal de enfermería y otras categorías de trabajadores de la salud en beneficio de la salud y el bienestar de la población. Establece normas laborales mínimas que hacen hincapié en las particulares condiciones en que se realiza la atención de enfermería. Entre los aspectos contemplados en el Convenio figuran:</p>
</span>
<input id="showmore_4" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;"><ul><li>
Educación y formación apropiadas al ejercicio de las funciones del personal de enfermería;</li><li>
Condiciones de empleo y de trabajo atractivas, incluidas perspectivas de carrera, remuneración y seguridad social;</li><li>
Adaptación de las normas que rigen la seguridad y la salud en el trabajo al ejercicio de la enfermería;</li><li>
Participación del personal de enfermería en la planificación de los servicios de enfermería;</li><li>
Consulta al personal de enfermería respecto de sus condiciones de empleo y de trabajo;</li><li>
Mecanismos de resolución de conflictos.</li></ul><br />
🟪Te invitamos a que leas con determinación y mucha atención este convenio complementario</p>      
    </span>
    <label for="showmore_4" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
   </div></div></div>




<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

