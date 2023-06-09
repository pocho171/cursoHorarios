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
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>BIENVENIDOS</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">Estimados/as participantes,<br /><br />

Reciban un cordial saludo de bienvenida a este espacio de formación virtual dónde podrán tener una nueva experiencia de aprendizaje.&nbsp;En esta formación conocerán sobre&nbsp;La elaboración de cuadros de turnos de trabajo, del personal de enfermería, dependientes del MPPS</p>
</span>
<input id="showmore_1" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟫Este curso, online tiene como finalidad principal, resolver las necesidades que tienen los profesionales de enfermería en la actualización de los conocimientos, laborales, administrativos, operativos y jurídicos que contienen la elaboración de los cuadros de guardia de los turnos o jornadas de trabajo de esta valiosa profesión.<br /><br />

⬛Se han encontrado fallas y confusiones en la realización de los cuadros de enfermería, nos han consultado de distintos lugares variados temas, en especial sobre los turnos, días libres, tiempo de trabajo, carga horaria, compensaciones, variables y muchas otras cosas en torno a la situación laboral de los profesionales, los cuales están laborando en diferentes entes de salud.</p>
      
    </span>
    <label for="showmore_1" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>


<!--modulo video--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Video 1</span>🎞<div class="panel-body">   
       <div style="padding:75% 0 0 0;position:relative;"><iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture"   style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 8px;" src="https://drive.google.com/file/d/13XeKGt7_lbyxXJs3VGTuHXoOBLShcTda/preview"></iframe></div>
     </div></div></div> 

     


<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 2</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>¿Qué hemos observado en el análisis de los cuadros solicitados?</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟪Durante las asesorías que se han realizado a los cuadros enviados en diferentes lugares del país, se han observado las siguientes fallas:
Cuadros de guardias mal elaborados.</p>
</span>
<input id="showmore_2" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;"><ul><li>
Nomenclaturas sin basamento jurídico, sin conceptos, inventados en muchos casos, que solo es entendible para los que laboran allí, por costumbre o adaptación.</li><li>
No entiende la importancia del cuadro como documento legal, por esa razón tiene tachaduras, enmendaduras, elaborado con colores no acordes a un documento legal.</li><li>
No sigue las normas administrativas del MPPS en la elaboración de los mismos.</li><li>
No se identifica al personal por grupos, turnos, horarios, cédula, cargo.</li><li>
Mala distribución de los grupos de trabajo de cada turno, también un desequilibrio en la carga de funciones profesionales.</li><li>
Mala carga horaria mensual y semanal.</li><li>
Irrespeto a los días libres y compensatorios.</li><li>
Mal uso del horario de trabajo de cada profesional allí reflejado.</li><li>
Mala utilización de las vacaciones, trimestrales, reposos, permisos, comisiones y procedimientos administrativos.</li><li>
Falta de ética y diseño en la elaboración de los cuadros.</li><li>
Mal uso de la leyenda de cada cuadro. </li></ul></p>
      </span>
    <label for="showmore_2" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 3</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>¿Por qué las fallas en la realización del cuadro?</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟥La principal falla que observamos es el desconocimiento legal que implica la elaboración de los cuadros, quien lo elabora, lo ejecuta, diseña o implementa, generalmente no entiende el basamento jurídico, administrativo ni operativos de realizar el cuadro, y solo se limita, a seguir una costumbre o repetir cuadros de gestiones pasadas, sin entender ni luego corregir las fallas.</p>
</span>
<input id="showmore_3" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟧Un buen gerente deja huellas, crea su propio legado de éxito, no repite las fallas anteriores de sus antecesores.</p>
      
    </span>
    <label for="showmore_3" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>


<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 4</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>Sobrecarga laboral y modificación de cuadros</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟨Uno de los principales problemas que hemos encontrado en la realización de los cuadros de guardia está en la sobrecarga laboral, esto viene pasando porque los coordinadores o jefes no han hecho las gestiones pertinentes necesarias para sustituir a los trabajadores que se han retirado por algún motivo al no tener sustitución necesaria para tratar de tapar los huecos que hay en las asignaciones.</p>
</span>
<input id="showmore_4" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟩Estos compañeros se van a la opción de Modificar el cuadro de turnos faltando a los lineamientos, las normas, inclusive las propias leyes para cargar de más horas de trabajo al personal de enfermería.<br /><br />

🟦Se deben ejecutar los diagnósticos administrativos, este tipo de instrumento hace que se haga un verdadero análisis de la situación y pasaría de mano de recursos humanos las gestiones necesarias, mejores las estrategias para nuevamente incluir personas en la nómina de la institución.<br /><br />

⬛La solución, en este caso de la falta de personal, no es modificar el cuadro de guardia y alterar todas las labores que vienen realizando los compañeros y sobrecargar de trabajo, ya que esto trae como consecuencia mayor ausentismo laboral, el trabajador meterá reposos médicos, debido al cansancio que presentara, inclusive ejecutara renuncia, porque no espera soluciones gerencias, para evitar la sobrecarga de sus funciones. Con el diagnóstico administrativo, RRHH estará obligado en ejecutar las gestiones y estrategias necesarias para solventar la situación laboral de la falta de personal, pero si usted como gerente de enfermería altera los horarios, sencillamente está resolviendo un problema momentáneo sin solución a futuro.<br /><br />
🟫Se observa con preocupación que se elaboran los cuadros de turnos de trabajo de enfermería, pensando en la institución y ni en las normas y leyes, incluso nunca mirando el talento humano, que es el débil aquí y recae, los problemas más graves.<br /><br />
  🟪No se puede violar normas, leyes, reglamentos por la falta de personal.</p>
      
    </span>
    <label for="showmore_4" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 5</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>Sobre las nomenclaturas y la norma técnica</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟥Otro tema importante que sea observado durante el chequeo de los cuadros de guardia de los turnos de trabajo de enfermería está en la forma del mal manejo del cuadro, como tal en su aspecto ético y técnicos.</p>
</span>
<input id="showmore_5" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟨Las nomenclaturas totalmente equivocadas, con símbolos que solamente los pueden identificar las personas que laboran allí, sin ningún apoyo jurídico. Cada nomenclatura tiene un concepto legal y su basamento jurídico, no puede ser improvisado.<br /><br />
⬛El cuadro, por ser un instrumento jurídico, viene de normas, o leyes, y todo su contenido así debe ser.<br /><br />
🟪Estos cuadros deben tener un mismo ordenamiento, una misma norma, no puede ser de cada institución, porque la dependencia es un solo ente público, en este caso MPPS.<br /><br />
🟫La idea de tener un cuadro reglamentado, es que cualquiera pueda leerlo, con facilidad, luego de que pueda mirar la norma técnica y jurídica que lo sustenta.</p>
      
    </span>
    <label for="showmore_5" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
            </div></div></div>

<!--modulo video--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Video 2</span>🎞<div class="panel-body">   
       <div style="padding:75% 0 0 0;position:relative;"><iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture"   style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 8px;" src="https://drive.google.com/file/d/1hICd0dXNh3C0oHqSOUsMze-v3SYCr4r1/preview"></iframe></div>
     </div></div></div> 

<!--modulo video--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Video 3</span>🎞<div class="panel-body">   
       <div style="padding:75% 0 0 0;position:relative;"><iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture"   style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 8px;" src="https://drive.google.com/file/d/1GQd1cHfsH0fG06sDgEHRmdCXVJjk9EOK/preview"></iframe></div>
     </div></div></div>

<!--modulo video--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Video 4</span>🎞<div class="panel-body">   
       <div style="padding:75% 0 0 0;position:relative;"><iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture"   style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 8px;" src="https://drive.google.com/file/d/1WdW0ZJE48h3PduGikC7bWbawbrUQRC_C/preview"></iframe></div>
     </div></div></div> 

<!--modulo video--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Video 5</span>🎞<div class="panel-body">   
       <div style="padding:75% 0 0 0;position:relative;"><iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture"   style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 8px;" src="https://drive.google.com/file/d/1CruOsg_YmVeSwyILH6XA7vL3LDSMIGE1/preview"></iframe></div>
     </div></div></div> 

<!--modulo video--> 
<div style="margin-top: 10px;width: auto;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Video 1</span>🎞<div class="panel-body">   
       <div style="padding:75% 0 0 0;position:relative;"><iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture"   style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius: 8px;" src="https://drive.google.com/file/d/1QBu4ge96vdQuN4hkNaSwOg9LN0cZx2Ca/preview"></iframe></div>
     </div></div></div> 




<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

