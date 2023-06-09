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
        
      <!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 1</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/2P9jN5d/comision-nacio-1.png" /> 
     </div></div></div> 

<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body">
  <p style="font-family: Verdana; font-size: medium;text-align:center"><h2><b>¿Qué es la comisión enfermería?</b></h2></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟥El Ministerio para la Salud emitió una resolución en la Gaceta Oficial N° 40.738 de este jueves 03 de septiembre de 2015, mediante la cual crea la Comisión Nacional de Enfermería.<br /><br /></p>
</span>
<input id="showmore_1" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟧La Resolución N° 456 explica que con el objeto de diseñar e implementar mecanismos de supervisión que permitan el seguimiento y control del ejercicio de la enfermería en los establecimientos de salud. Para ellos, la Comisión dictará su reglamento.<br /><br />
        🟨Apunta la resolución:“La Comisión Nacional de Enfermería estará conformada por un director y cuatro miembros, los cuales estarán sujetos al libre nombramiento y remoción por el Ministro del Poder Popular para la Salud”.</p>      
    </span>
    <label for="showmore_1" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label> 
         </div></div></div>


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 2</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/2vXGZhS/comision-nacio-2.png" /> 
     </div></div></div>



<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style= "margin: 10px;">Texto 2</span>📋<div class="panel-body">
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">          
     </span></h3><p style="font-family: Verdana; font-size: medium;">❗Recuerden que nuestra profesión mediante la ley de enfermería nos indica que los cargos de dirección, supervisión y coordinación de los departamentos de enfermería es de enfermeros, por lo tanto, es ilógico que otras profesiones nos regulen o supervisen. Nos dicten normas y reglamentos, en consecuencia nace esta comisión nacional, como "Máxima autoridad" en esta materia.</p>      
     </div></div></div></div></div> 


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 3</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-Cargue de nuevo la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/VQFgzJc/leyenfermeria3.png" /> 
     </div></div></div>



<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

