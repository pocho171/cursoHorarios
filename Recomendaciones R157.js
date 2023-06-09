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
      <p style="font-family: Verdana; font-size: medium;">🟥Luego de la firma del convenio O.I.T. surgieron las recomendaciones en conjunto con la Organización Mundial de la Salud y de esta colaboración se proseguirá a fin de promover y garantizar su aplicación a todos los firmantes del acuerdo O.I.T.<br /><br />
🟧De las normas anteriores, se conviene crear otras especialmente aplicables al personal de enfermería y destinadas a garantizarles una condición que corresponda a su función en el campo de la salud, la cual podrá recibir su aceptación en todas las partes.</p>
</span>
<input id="showmore_1" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟨Recordando que el personal de enfermería está amparado por numerosos convenios y recomendaciones internacionales del trabajo, que fijan normas de alcance general en materia de empleo y condiciones de trabajo, tales como los instrumentos sobre la discriminación, sobre la libertad sindical y el derecho de negociación colectiva, sobre la conciliación y el arbitraje voluntario, sobre la duración del trabajo, las vacaciones pagadas y la licencia pagada de estudios, sobre la seguridad social y los servicios sociales, y sobre la protección de la maternidad y la protección de la salud de los trabajadores.<br /><br />
🟩Es por todo lo anterior expuesto, que se decide adoptar, con fecha veintiuno de junio de mil novecientos setenta y siete, la presente recomendación, que podrá ser citada como la Recomendación sobre el personal de enfermería, 1977.<br /><br />
Ahora, para buen uso de este curso, decidimos solo hacer referencia a la parte VIII. Relacionado sobre: <b>Tiempo de Trabajo y de Descanso</b>, punto de partida de las leyes que sustenta la elaboración de los cuadros de turnos de trabajo.</p></span>
    <label for="showmore_1" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span></label>  
         </div></div></div>
  
 

   <!--modulo contenido-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 1</span>🖥<div class="panel-body">     
   <img  border="0"style="border-radius: 8px;"  src="https://i.ibb.co/SKkWHkQ/uc-export-view-id-16-Xbnalojpa-Vqfra24cx-Of-B0-Q6-NFe7y-7.png" />  
     </div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 1</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212484&amp;authkey=AOMlQ_p_ilNJ2SE"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 2</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&&amp;resid=8415156FCA35FCF7%212488&amp;authkey=ANqHhQDm-Gh9Vr4"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>
  
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 2</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/XtcT6hJ/uc-export-view-id-1-Wjq-X01f-BRRPtm54a5x8-Wa-Y25ns-FTNd-JE.png" />
     </div></div></div>




 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 3</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&&amp;resid=8415156FCA35FCF7%212489&amp;authkey=AJCdpeIQ_zfUPfM"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


<!--modulo lamina-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 3</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/9wQxNr3/uc-export-view-id-1-Z-4-Ek-Xp-Uexji-Rh-ka-Z-O-di-Md1-Wb-Uo-OB.png" />
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 4</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&&amp;resid=8415156FCA35FCF7%212490&amp;authkey=ACTs2oiC37wqHhc"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


<!--modulo lamina-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 4</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/p1LTZSM/uc-export-view-id-1-Lq-DU6c-RQv-bk8s4dgdb7-XPRbw7mm-Nu-GR.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 5</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&&amp;resid=8415156FCA35FCF7%212491&amp;authkey=AC-PJ8BZh3MhTHQ"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>



<!--modulo lamina-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 5</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/5hxBRzJ/uc-export-view-id-18-Zh-CMa-FCNJWKRo3vl9ct6-Pibz-Iy-HSNv-C.png" />
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 6</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&&amp;resid=8415156FCA35FCF7%212492&amp;authkey=APgVNnJBKzs5mwA"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>




<!--modulo lamina-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 6</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/xXLqTkm/uc-export-view-id-1w5-KIGv-A4q-O-ipr-F9-Ft5-F0-Xe-Yk-NQ2rn66.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 7</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&&amp;resid=8415156FCA35FCF7%212493&amp;authkey=AMM3enNgrcNyx3w"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>



<!--modulo lamina-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 7</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/CW3mvS1/uc-export-view-id-1-L9x3-9ls-Ko-Ev-Ejn7-Zmk-DSOmzl-Ghq-LK.png" /> 
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 8</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&&amp;resid=8415156FCA35FCF7%212494&amp;authkey=AKJA5KZKQekVOHQ"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


<!--modulo lamina-->  
<div style="margin-top: 10px;width: auto;"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Lámina 8</span>🖥<div class="panel-body">     
   <img alt="portada-modulos" border="0"style="border-radius: 8px;"  src="https://i.ibb.co/0KFHC2z/uc-export-view-id-1dvyfu8w1-Ywt-T14o-B94n5-lbu-OSmpl-FHa.png" />  
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 9</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&&amp;resid=8415156FCA35FCF7%212495&amp;authkey=AKeeLEg3s2ge2u4"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>



<!--modulo contenido--> 
<div style="margin-top: 10px;"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning">Texto 2</span>📋<div class="panel-body">
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">
          
     </span></h3><p style="font-family: Verdana; font-size: medium;"><p>🟦En Venezuela este convenio fue ratificado en el año 1983,notificación registrada el 17 de agosto de 1983, Gaceta Oficial número 3.217 del 11 de julio del año 1983, bajo la denominación de <b>Ley probatoria del convenio número 149 sobre el empleo y condiciones de trabajo y de vida del personal de enfermería.</b><br /><br />🟪El convenio número 149, así como la recomendación número 157, son herramientas fundamentales para mejorar las condiciones de empleo del personal de enfermería mediante el fortalecimiento de sus derechos.
 </p>      
     </div></div></div></div> 



<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

