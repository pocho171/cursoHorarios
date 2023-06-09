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
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Lámina 1</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/7CbtF7C/LTTT1.png" style="border-radius: 8px;" />
     </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Lámina 2</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/rF7Ndtx/LTTT2.png" style="border-radius: 8px;" /></a>  
     </div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default" style="background: rgb(234, 230, 170);"><span class="label label-warning" style="margin: 10px;">Lámina 3</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/Vm0t0GF/LTTT3.png" style="border-radius: 8px;" /> 
     </div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 1</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212496&amp;authkey=ADQ_FqyHyUxUZJU"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body">
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟥La ley orgánica del trabajo (675 artículos) contiene normas fundamentales relativas a las características de la legislación del trabajo;del trabajo, la aplicación de las normas laborales y la prescripción de las acciones;el deber de trabajar, el derecho al trabajo y la libertad de trabajo, las personas en el derecho regula el derecho individual -incluidos los dispositivos especiales para determinados trabajadores (menores, aprendices, domésticos, conserjes, a domicilio, deportistas profesionales, rurales, del transporte terrestre, de la navegación, del transporte aéreo, motorizados, intelectuales y culturales y minusválidos);</p>
</span>
<input id="showmore_1" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">derecho colectivo del trabajo;el la administración del trabajo, la representación de los trabajadores en la gestión de entes públicos, las sanciones y aspectos de procedimiento jurisdiccional.<br /><br />
🟨La ley abarca, parcialmente, a los funcionarios públicos, en el sentido de que sus beneficios se les aplican en todo lo no previsto en los ordenamientos nacionales, estatales o municipales de función pública;además, los funcionarios que desempeñen cargos de carrera tienen derecho a la negociación colectiva, a la solución pacífica de los conflictos ya la huelga en los términos de esa ley, en cuanto sea compatible con la índole de los servicios que prestan y con las exigencias de la Administración Pública.<br /><br />
🟪Entre los beneficios que otorgó esta Ley a los trabajadores se cuentan:<br /><br />
✅Amplió los períodos prenatal (seis semanas) y posnatal (20 semanas) para las mujeres.<br />
✅Estableció inamovilidad laboral a madres como y padres a partir de la fecha de nacimiento del hijo.<br />
✅Otorgó el derecho a disfrutar de dos días continuos de descanso.<br />
✅Instauró la inclusión al trabajo para personas con discapacidad y eliminó la tercerización de actividades.<br />
✅Reestablecido el derecho de que las prestaciones sociales sean calculadas a partir del tiempo de servicio en la empresa y con base al último salario devengado.<br /><br />
🟫Una vez que el trabajador cumpla un año de labor ininterrumpida, podrá disfrutar de un período de vacaciones remuneradas que constará de 15 días hábiles, según establece el Artículo 190. Los años sucesivos tendrán derecho a un día adicional remunerado por cada año de servicio, hasta un máximo de 15 días hábiles.</p>
      
    </span>
   <label for="showmore_1" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
  
 
         </div></div></div>


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Lámina 4</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/WWjXHws/LTTT4.png" style="border-radius: 8px;" /></a>  
     </div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width:auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 2</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212499&amp;authkey=AMf54-NjFjX__VM"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Lámina 5</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/MM8scS7/LTTT5.png" style="border-radius: 8px;" /> 
     </div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 3</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212500&amp;authkey=ABePMzRRa6xK6AE"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Lámina 6</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/3CSXypJ/LTTT6.png" style="border-radius: 8px;" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 4</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212501&amp;authkey=AEX9X_vBzGoKk5Q"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 
 <!--modulo lamina o imagen-->  
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Lámina 7</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/vdW1JvF/LTTT7.png" style="border-radius: 8px;" />  
     </div></div></div>  

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 5</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212502&amp;authkey=APPsu5aoRhczW4U"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

  
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Lámina 8</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/TW7t7zk/LTTT8.png" style="border-radius: 8px;" />  
     </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Texto 2</span>📋<div class="panel-body">
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">
          
     </span></h3><p style="font-family: Verdana; font-size: medium;">📌 Sobre el <b>artículo 14</b>, consideramos que es de fácil entendimiento y en las siguientes laminas sera explicado con detalles, adaptado al sistema laboral de enfermería.📌 
&nbsp;</p>      
     <p></p></div></div></div></div> 


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; width: auto;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;">Lámina 9</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0" src="https://i.ibb.co/NmKSjFJ/LTTT9.png" style="border-radius: 8px;" />  
     </div></div></div>
  
  <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 6</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212503&amp;authkey=AKyXGm6Jw9kXig4"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div> 



<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

