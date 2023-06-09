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
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 1</span>📋<div class="panel-body">
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟦 Las normas administrativas, fueron creadas por la comisión nacional del MPPS, cumpliendo las interpretaciones legales de los diferentes instrumentos jurídicos que tenemos. </span><span style="vertical-align: inherit;">Ley enfermería, Convención de trabajo, Recomendación 157 para el personal de enfermería, bajo estos instrumentos se crean las normas.</p>
</span>
<input id="showmore_1" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟧Entendiendo que existía un vacío entre estos paquetes legales y la aplicación reglamentaria de los diferentes artículos y leyes contenidas en estos basamentos. </span><span style="vertical-align: inherit;">En diferentes centros de salud no se manejaba un solo criterio en cuanto a diferentes normas, entre estos estaban los horarios, cambios de guardias, suplencias, uniformes, vacaciones y trimestrales.Estas normas vienen a ser el reglamento exacto que nos hacia falta para mantener una misma norma en todos los centros de salud del MPPS.</p>
      
    </span>
    <label for="showmore_1" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 1</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212530&amp;authkey=AO1zQpMgja8CObY"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 
 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 2</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212531&amp;authkey=AGwkNaqxj4CE-2k"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 3</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212532&amp;authkey=AL8PamPt3_XIPLU"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 1</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/pf5Db7N/normas-1.png" style="border-radius: 8px;" /> 
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 4</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212533&amp;authkey=AIQVa4ev33QLjzk"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 2</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/2s4p2FN/normas-2.png" style="border-radius: 8px;" /> 
     </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 5</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212535&amp;authkey=AFJIFKZs2H2mvnk"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 6</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212536&amp;authkey=AGg8QDwTK3Hs9Zw"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>


<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 2</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>DÍA COMPENSATORIO O ADICIONAL</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟪El día adicional nace de laborar el domingo  ó feriado, y proviene de la cláusula 26, domingo y Feriado de la convención colectiva de enfermería, Esta jornada libre, se coloca dentro de un círculo y debe ser otorgada la misma semana siguiente.</p>
</span>
<input id="showmore_2" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟦El sábado para amanecer, el domingo del turno nocturno, es una jornada dominical, por lo tanto, entra en esta norma.</p>
      
    </span>
    <label for="showmore_2" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style= "margin: 10px;">Texto 3</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>DEUDA POR MES ANTERIOR</b></p>
   <div style=" text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">          
     </span></h3><p style="font-family: Verdana; font-size: medium;">🟥Las jornadas libres del mes anterior se puede reflejar en los cuadros como deuda, encerrado en un triángulo, esa deuda nacen de algunas jornadas extras que laboro el enfermero, y que por acuerdo mutuo, se le cancela como día libre el siguiente mes, para no modificar el cuadro de turnos, ya que no se puede hacer una vez publicado .</p>      
     </div></div></div></div></div>   
   
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 3</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="portada-modulos" border="0" src="https://i.ibb.co/Z8WQq0K/normas-3.png" style="border-radius: 8px;" /> 
     </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 4</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>VACACIONES</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟧Las vacaciones se deben reflejar con la letra V, en los cuadros de turnos de enfermería, únicamente, ninguna otra más, no se debe colocar la palabra VACACIONES completa, ya que en la leyenda del pie del cuadro esta especificado, la nomenclatura.</p>
</span>
<input id="showmore_3" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟩Si usted agrega la palabra completa VACACIONES, estaría agregando las otras nomenclaturas en cada día del cuadro, dañando totalmente el sentido y la norma de la elaboración, por ejemplo, colocaría  V,A,C,A,C,I,O,N,E,S cuando ninguna de estos símbolos corresponde legalmente.</p>
      
    </span>
    <label for="showmore_3" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style= "margin: 10px;">Texto 5</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>REPOSO MÉDICO</b></p>
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">          
     </span></h3><p style="font-family: Verdana; font-size: medium;">⬛El reposo médico, igualmente se debe reflejar en cada cuadro la palabra <b> RM</b>, juntas estas dos letras, y especificar en la leyenda, las palabras completas REPOSO MÉDICO.</p>      
     </div></div></div></div></div>   
   
<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 6</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>DESCANSO TRIMESTRAL</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟨El trimestral por descontaminación proviene de la cláusula 67 DESCANSO TRIMESTRAL de la conversión de trabajo de enfermería, para mejor comprensión se la colocamos  en los siguientes párrafos de abajo.
</p>
</span>
<input id="showmore_4" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟧Igual que las anteriores nomenclaturas de esta lámina, <b>DT</b> va en cada cuadro diario, no se coloca las palabras completas, si en la leyenda de abajo.</p>
      
    </span>
    <label for="showmore_4" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
            </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 7</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>CLÁUSULA N° 67 DESCANSO TRIMESTRAL</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟥El Ministerio de Salud y Desarrollo Social y los Organismos adscritos convienen en nombrar una comisión (3) tripartita, conformada por la Federación de Colegios de Enfermeras y Enfermeros de Venezuela. Ministerio de Salud y Desarrollo Social e Inspectoría Nacional y Asuntos Colectivos del Trabajo,...</p>
</span>
<input id="showmore_5" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">...que se encargue de realizar: 1. Un análisis de riesgos laborales de dicho gremio de Enfermeras y Enfermeros. 2. La elaboración de una propuesta de promoción y prevención basada en estudios de viabilidad técnica, económica y social que permita brindar una atención integral a las Enfermeras y Enfermeros que laboran en las áreas de alto riesgo que sean definidos.<br /><br />              🟧Esta comisión tendrá en  un lapso de seis (6) meses contados a partir de la designación de ambas partes para presentar dicha propuesta. <br /><br />
 🟨Hasta tanto no se convenga entre las partes el acuerdo resultante de dicho informe. El Ministerio de Salud y Desarrollo Social y los Organismos adscritos se obligan a conceder DIEZ (10) días continuos no acumulables de descanso trimestral. A las Enfermeras y Enfermeros que laboran en los servicios de infectocontagioso, hemodinámica resonancia magnética, medicine nuclear, servicio de quimioterapia. Radioterapia, cuidados intensivos infantiles y adultos, hospitalización de salud mental y psiquiatría, unidad de diálisis, hemoterapia y cualquier otro servicio, siempre y cuando así lo determinen las partes, como servicios de alto riesgo.  </p>
          </span>
    <label for="showmore_5" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 8</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>COMISIÓN DE SERVICIO</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">⬛La comisión de servicio tendrá de nomenclatura <b>CS</b> igual a las anteriores ambas letras en cada cuadro diario.</p>
</span>
<input id="showmore_6" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟫Ley del Estatuto de la Función Pública,  Artículo 71: La comisión de servicio será la situación administrativa de carácter temporal por la cual se encomienda a un funcionario o funcionaria público el ejercicio de un cargo diferente, de igual o superior nivel, del cual es titular.</p>
      
    </span>
    <label for="showmore_6" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
            </div></div></div>


   <!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 9</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>PERMISO GREMIAL</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟪Esta nomenclatura del cuadro de turnos de enfermería se escribe con las palabras PG, su basamento jurídico es el siguiente:</p>
</span>
<input id="showmore_7" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;"><center><b>CLÁUSULA N° 75 PERMISOS GREMIALES:</b></center><br /><br />
  <center>Convencion De trabajo de Enfermería:</center><br /></p>
        
        <p style="font-family: Verdana; font-size: medium;">El Ministerio de Salud y Desarrollo Social y los Organismos adscritos convienen en conceder permiso gremial a CUATRO (4) miembros del Comité Ejecutivo de la Federación de Colegios de Enfermeras y Enfermeros de Venezuela y TRES (3) permisos para Miembros de la Junta Directiva del Colegio de Enfermeras y Enfermeros, los cuales serán tramitados por ante la Dirección de Recursos Humanos, Coordinación de Asesoría Legal,...que verificará y tramitará en un plazo no mayor de QUINCE (15) días. Para el mejor control de la Federación o Colegio de Enfermeras, según el caso, estos suministrarán al Ministerio a los fines de verificación de dichos permisos, listados actualizados cada DOCE (12) meses durante el tiempo que dure la gestión gremial. Igualmente, el Ministerio y los Organismos adscritos, convienen en conceder permiso remunerado a los Delegados Gremiales, Delegados a la Asamblea Nacional Anual de la Federación y Colegios de Enfermeras, cuando la gestión que coincida con las boras de trabajo convenidas con el Ministerio y los Organismos adscritos. El Comité Ejecutivo de la Federación y la Junta Directiva de los Colegios, según el caso, solicitarán el permiso correspondiente para los miembros que así lo requieran.<br /><br />
          
          <b>PARÁGRAFO ÚNICO:</b> Cuando las Enfermeras y Enfermeras dependientes de este Ministerio y los Organismos adscritos. Sean designados Directivos del Instituto de Previsión Social de las Enfermeras y Enfermeros "INPRENFERMERAS": El Ministerio conviene en conceder permiso remunerado a DOS (2) de los miembros principales por el tiempo que dure la gestión gremial</p>
      
    </span>
    <label for="showmore_7" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

 <!--modulo audio imagen--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Audio 7</span>🔊<div class="panel-body">   
      <div id="audios"><audio controls="controls" style="width: 82%;"class="izquierda" ><source src="https://onedrive.live.com/download?cid=8415156FCA35FCF7&amp;resid=8415156FCA35FCF7%212537&amp;authkey=APgaVtouqUuTg64"></source> </audio><img src="https://i.ibb.co/qk52zqJ/Logo-Nueva-Carlos2.png" alt="Logo-Nueva-Carlos2" border="0" style= "width:50px;margin-top: 5px"class="derecha" >
     </div></div></div></div>

 



<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 4</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/pnn1hfG/normas-4.png" style="border-radius: 8px;" /> 
     </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 10</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>TURNOS DE ENFERMERÍA</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟦Siguiendo la cláusula 22, Jornada de trabajo, Jornada de trabajo asistencial, Jornada nocturna colocamos  tres turnos de trabajo en el cuadro, <b>Mañana (M), tarde (T) y noche (N)</b>.</p>
</span>
<input id="showmore_8" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟩Una sola palabra en cada cuadro diario, no se coloca las horas, ya que sobreentendemos que el turno de enfermería tiene su entrada y salida, en esta norma jurídica.</p>
      
    </span>
    <label for="showmore_8" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
  
 
         </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 5</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/0ZkKcD9/normas-5.png" style="border-radius: 8px;" /> 
     </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 11</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>PLANIFICACIÓN DE GUARDIAS ANUAL</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟩Para lograr una buena planificación presupuestaria y cualquier otro movimiento operativo, que permita poder realizar movimiento de personal a tiempo, se solicita que sean entregadas todos los cuadros de guardias del año completo en el mes de enero.</p>
</span>
<input id="showmore_9" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟦Con las nuevas actualizaciones de la nómina, esta planificación también se puede pedir en noviembre o diciembre y la de vacaciones en enero. </p>      
    </span>
    <label for="showmore_9" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 6</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="portada-modulos" border="0" src="https://i.ibb.co/WsvHqYJ/normas-6.png" style="border-radius: 8px;" /> 
     </div></div></div>



<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 7</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/R0kCwtv/normas-7.png" style="border-radius: 8px;" /> 
  </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 12</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>PUBLICACIÓN DEL CUADRO DE TURNOS</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;text-align: justify;">🟥Como les explicamos con anterioridad, los cuadros de turnos de trabajo de enfermería, son instrumentos jurídicos, por lo tanto, una vez publicado y divulgado a los enfermeros, no puede ser modificado.</p>
</span>
<input id="showmore_10" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟧Para poder realizar una modificación, se tendría que levantar un acta.<br /><br />
        🟨Estamos en presencia de un documento, que se convierte en una notificación al trabajador con tiempo, igualmente ya ha sido enviado a nómina, para el pago de los compromisos contractuales.<br /><br />
        ⬛El basamento jurídico proviene del Artículo 1 Reglamento parcial del decreto con rango, valor y fuerza de ley orgánica del trabajo, los trabajadores y las trabajadoras, sobre el tiempo de trabajo.</p>
          </span>
    <label for="showmore_10" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 8</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/LksV25F/normas-8.png" style="border-radius: 8px;" />
  </div></div></div>

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 13</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>NECESIDAD DE SERVICIO</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">⬛La nomenclatura  usar para este concepto es <b>N/S</b>, siempre conservando los tres símbolos, en cada cuadro diario del plan de trabajo. </p>
</span>
<input id="showmore_11" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟥Cuando por algún motivo se tenga que realizar  una redistribución de los turnos, esto se hará siempre respetando la carga horaria y las normas o leyes que sustentan estos cuadros de turnos de trabajo.<br /><br />
        🟧Se conserva los días libres, adicionales o compensatorios por domingo y o feriado.<br /><br />
        🟨Nunca se puede extralimitar las horas, el quitar días libres y sobrecargar al trabajador bajo la excusa de una necesidad de servicio.<br /><br />
        🟩La falta de personal, no da motivos para violar normas ni leyes en perjuicio del enfermero.<br /><br />
🟦Se pudiera realizar un cambio de grupo de trabajo, si por acuerdo entre el trabajador realizan un cambio de turno, este será igual, en las mismas condiciones de su turno original.   </p>     
    </span>
    <label for="showmore_11" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
  
 
         </div></div></div>
 
<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 9</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/PGTW1RS/normas-9.png" style="border-radius: 8px;" />
  </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 10</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/jTRgDs0/normas-10.png" style="border-radius: 8px;" />
  </div></div></div>  

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 11</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/CnKvS9T/normas-11.png" style="border-radius: 8px;" />
  </div></div></div>

<!--modulo lamina o imagen-->  
<div style="margin-top: 10px; margin: 0px auto; width: 95%;"><div class="panel panel-default"><span class="label label-warning" style="margin: 10px;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">Lámina 12</span></span></span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"> 🖥</span></span><div class="panel-body">     
<img alt="No se cargo la imagen-Cargue de nuevo la página" border="0" src="https://i.ibb.co/k3YX8pQ/normas12.png" style="border-radius: 8px;" />
  </div></div></div> 

<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div style="text-align: left; width: auto;"><div class="panel panel-default"><span class="label label-warning" style= "margin: 10px;">Texto 14</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>CARGA HORARIA MENSUAL</b></p>
   <div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><h3><span style="font-family: Verdana; font-size: small;">          
     </span></h3><p style="font-family: Verdana; font-size: medium;">⬛La carga horaria mensual es 120 horas máximo por mes, más no es una regla obligada, ya que por la cantidad de días libres, y colocando la fórmula de asignaciones de días, no llegarían a esta cifra.  </p>      
     </div></div></div></div></div>   
   
<!--modulo contenido--> 
<div style="margin-top: 10px;width: 95%;margin: 0 auto"><div class="panel panel-default"><span class="label label-warning"style= "margin: 10px;">Texto 15</span>📋<div class="panel-body"><p style="font-family: Verdana; font-size: medium;text-align:center;"><b>DISTRIBUCIÓN DE LA CARGA HORARIA MENSUA</b></p>
<span class="summary">
      <p style="font-family: Verdana; font-size: medium;">🟫En la jornada diurna, cinco días y dos días continuos de descanso: garantizando la prestación del servicio y en la jornada nocturna, se deberá planificar una jornada semanal libre, con dos jornadas trabajadas.</p>
</span>
<input id="showmore_12" type="checkbox" class="showmore">
    <span class="complete">
      <p style="font-family: Verdana; font-size: medium;">🟪Se debe reflejar, además, los días por descanso compensatorio, es decir, libre por cada domingo trabajado, según lo establecido en el Artículo 188 de la Ley Del Trabajo (Ley Orgánica del Trabajo, de los Trabajadores y Trabajadoras). Este día libre adicional podrá ser planificado cualquier día de la semana, siguiente inmediata. </p>
      
    </span>
    <label for="showmore_12" class="more">Leer <span class="mas">más</span> <span class="menos">menos</span> </label>
           </div></div></div>


<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
    

