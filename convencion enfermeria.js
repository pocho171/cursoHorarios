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
        
      <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 1</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212513&amp;authkey=AB_TycRe1NM3HcI"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 1</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-vuelva a cargar la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/FKJqRgt/convencion-1.png" /> 
  </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 2</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/7tbYNDW/convencion-2.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 2</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212514&amp;authkey=AN6Gp10VEypN4wE"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 

<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style= "margin: 10px;">Texto 1</span>📋<div class="panel-body">
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">          
     </span></h3><p style="font-family: Verdana; font-size: medium;"><p>⚠ ❗ Comentario <b> IMPORTANTE </b> sobre la vigencia de esta convención de trabajo que regula el trabajo del personal de enfermería dentro del M.P.P.S.⬇⬇⬇</p>      
     </div></div></div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 3</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212516&amp;authkey=AP1xTE0g1tPq9ng"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 
 
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 3</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/PxKbwMs/convencion-3.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 4</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212517&amp;authkey=AK4u37A_0KvYXro"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>
  
  
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 4</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-vuelva a cargar la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/BfR9tMY/convencion-4.png" /> 
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 5</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212518&amp;authkey=AL_I5l6VZf8jlwU"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>
 
  

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 5</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/cxkGKMS/convencion-5.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 6</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212519&amp;authkey=ACjuNz3JSqdYIC0"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>
  
  
  
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 5</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/3skRjDM/convencion-6.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 7</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212520&amp;authkey=AIe6tZI5K3jzwiY"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 8</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212521&amp;authkey=AF6TUKdAPYHZj54"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 6</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/pbWrhjv/convencion-7.png" /> 
     </div></div></div>


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 7</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-vuelva a cargar la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/crLT4Yt/convencion-8.png" />  
     </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style= "margin: 10px;">Texto 2</span>📋<div class="panel-body">
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">          
     </span></h3><p style="font-family: Verdana; font-size: medium;">🟫 El <b>personal administrativo</b> debe ir en otro cuadro, no en de turnos, ya que es un horario diferente. Para este tema, no tenemos comentarios, porque se sobreentiende por sí misma esta cláusula.</p>      
     </div></div></div></div></div>   
     
<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style= "margin: 10px;">Texto 3</span>📋<div class="panel-body">
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">          
     </span></h3><p style="font-family: Verdana; font-size: medium;">🟪 El <b>personal administrativo</b> no genera variables, si trabaja en horas o días extraordinarios se debe cancelar dicho tiempo laborado, de forma monetaria, o disfrute de días libres, en compensación a su esfuerzo.</p>           </div></div></div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 8</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/w48SJsZ/convencion-11.png" />  
     </div></div></div>
     
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 9</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-vuelva a cargar la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/T1QS1hX/convencion-9.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 10</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212522&amp;authkey=AOn-yADes150nEc"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>



<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 11</span>🖥<div class="panel-body">     
   <img alt="No se cargo la imagen-vuelva a cargar la página" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/y0n3QCG/convencion-10.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 11</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212523&amp;authkey=ALVRj52MrtgeDWY"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>



<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

