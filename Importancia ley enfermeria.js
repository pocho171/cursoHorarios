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
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 1</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/nmJxCgX/leyenfermeria1.png" /> 
     </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body">
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟥 El proceso de regulación de la profesión de enfermería en Venezuela ha ocupado el interés y el trabajo persistente de varias generaciones de enfermeras y enfermeros, de servicio, docencia y organizaciones profesionales quienes promovieron la aprobación de la Ley del ejercicio profesional de la enfermería (Gaceta Oficial No. 38.263) el 1 de septiembre de 2005 por la Asamblea Nacional de la República Bolivariana de Venezuela.
</p>
</span>
<input id="showmore_1" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟧 El ejercicio de la enfermería no se encontraba regulado legislativamente en Venezuela hasta la sanción en septiembre de 2005 de la Ley del ejercicio profesional de la enfermería. Existían sin embargo colegios de enfermeras y la Federación de Colegios de Profesionales de la Enfermería que sentaron las bases para el ejercicio profesional en el Código Deontológico de Enfermería aprobado por la Asamblea Nacional Anual de la Federación de Colegios de Enfermeras en 1990. Dicha norma, de aplicación a los afiliados, comprende conforme a su artículo 1, a todos las enfermeras (os) en su vida pública y privada.<br /><br />
🟨 La Ley del ejercicio profesional de la enfermería define en su artículo 3 al enfermero o enfermera como "el profesional egresado de una universidad, instituto o colegio universitario venezolano, de acuerdo con las leyes especiales sobre la materia, con conocimientos, habilidades y destrezas que se ocupan del cuidado de las personas, familias y comunidades durante todas las fases del proceso de crecimiento y desarrollo, en la salud y en la enfermedad, durante la discapacidad, la rehabilitación y, hasta en la muerte, así como la gestión del cuidado y servicio".<br /><br /></p>      
    </span>
    <label for="showmore_1" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 1</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212505&amp;authkey=AO5VCdvlmmQaaCc"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 <!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 2</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/pQYWygz/leyenfermeria2.png" /> 
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 2 </span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212506&amp;authkey=AGZL3ePSoJEGuSs"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>



 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 3</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212507&amp;authkey=AAE5Oq1VMpgoTnQ"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>




<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 3</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/VQFgzJc/leyenfermeria3.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 4</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212508&amp;authkey=AHBCu4f_LuHnCWs"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 5</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212510&amp;authkey=AGM8zclCGZYa5Bo"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 4</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/QM0sSbZ/leyenfermeria4.png" /> 
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 6</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212511&amp;authkey=ABwpq24YMdGj8L8"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>



<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

