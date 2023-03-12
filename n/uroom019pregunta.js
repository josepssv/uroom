window.onload = function() {
};
window.onbeforeunload = function() {
    if(partiNames[me.id].rol == 2){
        shared.log='';
        shared.modo='apagado';
        for (const m of participants) {
            m.x = 0;
            m.y = 0;
            m.atento = 2;
            m.pide = 1;
            m.micLevel = 0
            m.voto = -1
            m.premio = -1
            m.respuesta = ''
            m.palabra=-1
            m.id=-1;
        }
        iniciado=false;
    }
};

//let textoInicial=''

/*
Z-INDEX
button3 PROYECTOR al maximo siempre  si es rol 2   9999999
buttGuardaApuntes al maximo si no es rol 2 y no est¨¢ en proyector  9999999
pizarradiv al minimo se esta protector y modo video, imagen,
#nuestraimagen por encima de pizarradiv si el modo es imagen  1
cnv por encima de video 8000
button2 Resumen por encima si es 2 el rol y no hay Proyetor 20000
Si frameid pizarradiv 8000 y cnv  7 ?!!
al inicio button2 Resumen si rol es 2  20000
resumenApizarra

*/

function escena(n){
    var nivel=[0,50,100,150,200,250,300,350,400,450,500];
    if(n === 0){
        selectid.hide();
        //modaldiv.hide();
        button.hide();
        button1.hide(); 
        button2.hide();
        button2.hide();
        button3.hide();
        buttGuardaApuntes.hide(); 
        pizarradiv.hide();
        buttResumenApizarra.hide();
        cnv.show();
        //shared.onoffProyector=-1;
    }
    if(n==100){
        //modaldiv.style('z-index', '0');
        cnv.style('z-index', '0'); 
        pizarradiv.style('z-index', '50') ;
        buttGuardaApuntes.style('z-index', '55');
        
        pizarradiv.position(cnv.x + pizarra.x, cnv.y + pizarra.y);
        pizarradiv.size(pizarra.w, pizarra.h);
        pizarradiv.style('background-color', pizarraact.color);
        
        pizarradiv.show(); 
        buttGuardaApuntes.show(); 
        //modaldiv.hide();
    }
    if(n==102){
        //modaldiv.style('z-index', '0');
        cnv.style('z-index', '0'); 
       
        pizarradiv.style('z-index', '50') ;
        button.style('z-index', '51'); 
        button1.style('z-index', '52'); 
        button2.style('z-index', '53');
        button3.style('z-index', '54');
        buttResumenApizarra.style('z-index', '55');

        pizarradiv.position(cnv.x + pizarra.x, cnv.y + pizarra.y);
        pizarradiv.size(pizarra.w, pizarra.h);
        pizarradiv.style('background-color', pizarraact.color);
        pizarradiv.show(); 
        
        selectid.show();
        button.show();
        button1.show();
        button2.show();
        button3.show();
        buttResumenApizarra.show();
        buttGuardaApuntes.hide(); 
        //modaldiv.hide();
    }
    if(n==200){ // PROYECTOR ROL <2
        //modaldiv.style('z-index', '0') ; 
        pizarradiv.style('z-index', '2') ; 
        buttGuardaApuntes.style('z-index', '3');
        cnv.style('z-index', '50');  
        pizarradiv.position(cnv.x, cnv.y);
        pizarradiv.size(width, height);
        pizarradiv.style('background-color', 'rgba(0,0,0,0)');
        buttGuardaApuntes.hide();  
        //modaldiv.hide();
    }
    if(n==202){  // PROYECTOR ROL 2
        //modaldiv.style('z-index', '0') ; 
        pizarradiv.style('z-index', '2') ;
        button.style('z-index', '3'); 
        button1.style('z-index', '4'); 
        button2.style('z-index', '5');
        buttResumenApizarra.style('z-index', '6');
        cnv.style('z-index', '50');  
        button3.style('z-index', '51');
        
        pizarradiv.position(cnv.x, cnv.y);
        pizarradiv.size(width, height);
        pizarradiv.style('background-color', 'rgba(0,0,0,0)');

        selectid.hide();
        //modaldiv.hide();
        button.hide();
        button1.hide(); 
        button2.hide();
        button2.hide();
        button3.show();
        buttResumenApizarra.hide();
        buttGuardaApuntes.hide();  
    }
    if(n==300){ // MODAL ROL 0 . NO USADO
        //modaldiv.style('z-index', '0');
        cnv.style('z-index', '2'); 
        pizarradiv.style('z-index', '50') ;
        buttGuardaApuntes.style('z-index', '55');
        
        pizarradiv.position(cnv.x + pizarra.x, cnv.y + pizarra.y);
        pizarradiv.size(pizarra.w, pizarra.h);
        pizarradiv.style('background-color', pizarraact.color);
        
        pizarradiv.show(); 
        buttGuardaApuntes.show(); 
        //modaldiv.hide();
    }
    if(n==302){  //MODAL ROL 2
        cnv.style('z-index', '2'); 
        pizarradiv.style('z-index', '50') ;
        button.style('z-index', '51'); 
        button1.style('z-index', '52'); 
        button2.style('z-index', '53');
        button3.style('z-index', '54');
        buttResumenApizarra.style('z-index', '55');
        //modaldiv.style('z-index', '100');

        pizarradiv.position(cnv.x + pizarra.x, cnv.y + pizarra.y);
        pizarradiv.size(pizarra.w, pizarra.h);
        pizarradiv.style('background-color', pizarraact.color);
        pizarradiv.show(); 
        
        selectid.show();
        button.show();
        button1.show();
        button2.show();
        button3.show();
        buttResumenApizarra.show();
        buttGuardaApuntes.hide();  
        document.getElementById("myModal").style.zIndex='100';
        document.getElementById("myModal").style.display = "block";
        //modaldiv.show();
    }
}

var oldURL = document.referrer;
var loc = window.location.pathname;
var room = loc.substring(0, loc.lastIndexOf('/'));
var strcad = '';
let me;
let participants;
let host;
var suelo;
var vertice;
var nuestras = '';
var dimTarjeta = {
  w: 100,
  h: 100
};
var dimTarjetaN = {
  w: 100,
  h: 70
};
var dimTarjetaS = {
  w: 100,
  h: 100
};
var color1, color2, color3, colorFondo, colorFondoT;
var colorBloque = [];
var pidecolor = []; //noesta0 //salir1//conforme2//ayuda3//pizarra4//5enbabia;
var fondosc = [];
//var colorBloqueS = '#c9ff03, #6dff00, #00ff80, #00fccf, #00d9ff, #00caff, #4897f3'.split(',')
//var colorBloqueS = '#ffe90000, #8b8cf900, #43ff0000, #fb444400, #9a9a9a00, #b54cf300, #4da6ff00'.split(', ');
var colorBloqueS = [];
for (var k = 0; k < 100; k++) {
  colorBloqueS[k] = '#dddddd';
}
var colormio, colorotros;

var elegidos = [];
var selectIcon = 0;
var pasa = [-1, -1];
var pasaN = [-1, -1];
var pasaE = [0, 0];
var selectN = [-1, -1];
var selectid;
var selectid1, selectid2;
var nimages = [];
var fondo;
var tagtarjeta = [];
var ttarjeta = {};
var wim = 5000;
var him = 800;
var button, button1, button2, button3;
var buttResumenApizarra
var buttGuardaApuntes
var onoffProyector = -1;
var pizarradiv;
var pizarra = {
  x: 290,
  y: 5,
  w: 600,
  h: 120,
  color: '#000'
};
var pizarraini = {
  x: 290,
  y: 5,
  w: 600,
  h: 120,
  color: '#000'
};
var pizarraact = {
  x: 290,
  y: 5,
  w: 600,
  h: 120,
  color: '#000'
};
var silla = {
  x: 0,
  y: 0,
  w: 80,
  h: 14
};
var mesa = {
  x: 0,
  y: 0,
  w: 80,
  h: 24
};
var puerta = {
  x: 900,
  y: 0,
  w: 40,
  h: 100,
  color: '#111'
};
var madera = {
  x: 900,
  y: 0,
  w: 40,
  h: 100,
  color: '#111'
};
var tiza = {
  x: 900,
  y: 0,
  w: 20,
  h: 5,
  color: '#111'
};
var borrador = {
  x: 900,
  y: 0,
  w: 30,
  h: 10,
  color: '#111'
};



var fecha;
var profe = {};
let shared;
var modaldiv;
var modalclosediv;
var modalok;
var pizarrata;
var sharedPrev = 0;
var proyectorPrev = -1;
var idvideoPrev = '';
var toc = 0;
let capture;
let mic;
var iframeid = 'iframevideoyout';
var iframevideo;
var timeproyector = 0;
var isloadediframe = -1;
var premioAl = [];
var profeSobreAlumno = -1;
var profeDa=0;
var profeDaSobre=0;
var tsprofe=0;
let tcopa = "\uD83C\uDFC6";
let tmicro = "\uD83C\uDFA4";
let tquestion = "\u2753";
var ppregunta=0;
var preguntaa=-1;
let twcopa = 0;

//////////////////////
var player;
var tag = document.createElement('script');
var firstScriptTag = document.getElementsByTagName('script')[0];
tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
////////////////
/////////////
var rectangles = [];
var bouncingRectX = 150;
var bouncingRectY = 150;
var bouncingRectWidth = 20;
var bouncingRectHeight = 4;
var bouncingRectSpeedX = 2;
var bouncingRectSpeedY = 1;

var playPause=0;
var incr=0;
var centerg={x:0,y:0};



function preload() {
  //partyConnect("wss://deepstream-server-1.herokuapp.com", "cursors", "main1");
  //partyConnect("wss://deepstream-server-1.herokuapp.com", "room" + room, "main" + room);
  //-->partyConnect("wss://uroom.herokuapp.com/", "room" + room, "main" + room);
   partyConnect(
    "wss://demoserver.p5party.org",
   "room" + room, "main" + room
  );
  shared = partyLoadShared("shared");

  me = partyLoadMyShared();
  participants = partyLoadParticipantShareds();
  host = partyLoadShared("room" + room);
}
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  var y = 5;
  cnv.position(x, y);
  pizarradiv.position(cnv.x + pizarra.x, cnv.y + pizarra.y);
  // pizarra.x=cnv.x + pizarraini.x;
  // pizarra.y=cnv.y + pizarraini.y;
  selectid.position(cnv.x, height + 66);
  button.position(cnv.x, height + 13);
  button1.position(cnv.x + 90, height + 13);
  //button2.position(cnv.x+90*2, height+13 );
  button2.position(cnv.x + 2, 2);
  button3.position(cnv.x + button3.xpos, 2);
  buttResumenApizarra.position(cnv.x + 90*3, height + 13);
  buttGuardaApuntes.position(cnv.x + 2, 2);
  madera.x = pizarra.x;
  madera.y = pizarra.y + pizarra.h + borrador.h;
  madera.w = pizarra.w;
  madera.h = 15;
  //pizarradiv.html(pizarradiv.position)
  madera.color = color(43, 46, 22);
  borrador.x = madera.x + 90;
  borrador.y = madera.y - borrador.h;
  borrador.w = borrador.w;
  borrador.h = borrador.h;
  borrador.color = color(105);
  tiza.x = madera.x + 170;
  tiza.y = madera.y - tiza.h;
  tiza.w = tiza.w;
  tiza.h = tiza.h;
  tiza.color = color(255);
}



function windowResized() {
  //centerCanvas();
}

function mepide() {
  if (typeof me.pide !== "undefined") {
    me.pide = 6;
  }
}

function setup() {
  cnv = createCanvas(1010, 700);
  cnv.id('canvas')
  centerg.x= width/2
  centerg.y= 350
  //colorFondo=color(220,189,189)
  colorFondo = color(200, 200, 200);
  colorFondoT = color(0, 0, 0, 0);
  color1 = color(0, 255, 0);
  color2 = color(255, 0, 255);
  color3 = color(255, 0, 0);
  colormio = color(155, 0, 0);
  //profeDaColor = color(155, 0, 255);
  colorotros = color(0, 155, 0);
  pidecolor = [color(0, 0, 0, 0), color(0, 0, 0), color(0, 0, 255), color(255, 0, 0), color(0, 255, 0), color(100), color(100, 0, 100)];
  fondosc = [color(33), color(60), color(94), color(124), color(155), color(170), color(200), color(222), color(238), color(248)];
  //baseColor=6
  //capture= createCapture(VIDEO);
  //capture.size(320,240)
  //--> Debe ser el rol 2  Quien es el rol 2?
  tsprofe=partiNames[0].elige[0].w-8
  textSize(tsprofe)
  twcopa = textWidth(tcopa)

  cnv.style('background-color', 'colorFondoT');
  //var bodyse=select('body')
  //bodyse.attribute('background-image', 'url("https://media-cdn.tripadvisor.com/media/photo-s/13/21/aa/36/lake-mcdonald-may-2018.jpg")'); 
  //bodyse.attribute('background-color', ); 
  document.body.style.backgroundColor = '#000'

  mic = new p5.AudioIn();
  mic.start();
  getAudioContext().resume();
  let mici = mic.getLevel();
  for (var d = 0; d < colorBloqueS.length; d++) {
    colorBloque[d] = color(colorBloqueS[d]);
  }
  selectid = select('#resumen');
  selectid1 = select('#resumen1');
  selectid2 = select('#resumen2');
  noStroke();
  //console.log("setup");
  var posx = 0;
  var posy = 0;
  var yini = 350;
  me.total = 0;
  me.mias = '0,0,';
  //me.capture0

  var totalhoras = 0;
  /* for (var a = 0; a < tarjeta.length; a++) {
     posx = a * dimTarjeta.w + 12 + (22 * a)
     for (var b = 0; b < tarjeta[a].length; b++) {
       posy = (b) * dimTarjeta.h + yini + (40 * b)
       tarjeta[a][b].x = posx
       tarjeta[a][b].y = posy
       totalhoras += tarjeta[a][b].horas
     }
   }
   */
 // muestraHoras(totalhoras);
  textAlign(LEFT, BOTTOM);
  rectangles[0]=new Rectangle(0, 0, width, 1);
  rectangles[1]=new Rectangle(0, width-1, width, 1);
  rectangles[2]=new Rectangle(0, 0, 1, height);
  rectangles[3]=new Rectangle(width-1, 0, 1, height);
  var anchoping=0
  for (var a = 0; a < partiNames.length; a++) {
     textSize(14) 
     anchoping=textWidth(partiNames[a].name)
    rectangles.push(new Rectangle(partiNames[a].x, partiNames[a].y-14, anchoping, 16));
    //x = a * 80 + 12 + (22 * a)
    //y = 135
    //partiNames[a].x = x
    //partiNames[a].y = y
    partiNames[a].silla = {
      x: partiNames[a].x + silla.x,
      y: partiNames[a].y + partiNames[a].h + silla.y,
      w: partiNames[a].w,
      h: silla.h,
      control: false
    };
    partiNames[a].pide = 0;
    if (partiNames[a].rol == 2) {
      profe = {
        x: partiNames[a].x,
        y: partiNames[a].y,
        w: partiNames[a].w,
        h: partiNames[a].h
      };
    }
  }

  /* ttarjeta['x']=parseInt(wim/2);
   ttarjeta['y']=0
    ttarjeta['x1']=parseInt((wim/2)-wim)
   ttarjeta['y1']=0
   for ( a = 2; a < tarjeta.length; a++) {
    tagtarjeta.push('x'+a)
     tagtarjeta.push('y'+a)
     ttarjeta['x'+a]=tarjeta[a].x
     ttarjeta['y'+a]=tarjeta[a].y
   }
  */
  /*PARA BORRAR
  suelo = (height / 3) * 2
  vertice = {
    x: 10 + 100,
    y: suelo - 50
  }
  
  host.ball = host.ball || {
    x:0,
    y: 0,
    x1:0,
    y1: 0,
    x2:0,
    y2: 0,
    w: 100,
    h: 50
  };
  shared.click = shared.click || {
    x: width * 0.5,
    y: height * 0.5,
  };
  */
  /*  --PARA BORRAR
   if (partyIsHost()) {
    shared.clicks = [];
    shared.startTime = new Date();
   
  }
  */
 host.ball = host.ball || {
    x:0,
    y:0
 }
  //console.log("partyIsHost()", partyIsHost());
  if (partyIsHost()) {
    // if partyIsHost is true, this client is the first one in the room
    //console.log("Participants.length should be 1:", participants.length === 1);
    //console.log("me should equal participants[0]", me === participants[0]);
    //host.ball = host.ball || ttarjeta;
    me.x = 200;
    me.y = 200;
    me.atento = 2;
    me.pide = 1;
    me.micLevel = 0
    me.voto = -1
    me.premio = -1
    me.respuesta = ''
    me.palabra=-1
    me.id=-1;


  } else {
    //console.log("Participants.length should be > 1: ", participants.length > 1);
    //console.log(
    //"participants[0].x should be defined",
    // typeof participants[0].x !== "undefined"
    //);
    me.x = 0;
    me.y = 0;
    me.atento = 1;
    me.pide = 0;
    me.micLevel = 0
    me.voto = -1
    me.premio = -1
    me.respuesta = ''
    me.palabra=-1
    me.id=-1
  }
  cnv.mouseOut(mepide);
  //console.log("me", JSON.stringify(me));
  //console.log("participants", JSON.stringify(participants));
  //let cdiv = createDiv('josep.ssv&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;om <br> emailme');
  let cdiv = createDiv('');
  cdiv.position(850, height + 32);
  //cdiv.center('horizontal')
  cdiv.style('color', '#555');
  // cdiv.style('background-color', '#222');
  cdiv.style('text-align', 'right');
  cdiv.style('padding-right', '30px');
  //cdiv.style('width', '200px');
  //cdiv.style('top', (height + 32) + 'px');
  //cdiv.style('left', (800) + 'px');
  //cdiv.style('margin-left','auto'); 


  button = createButton('GuardarTXT');
  button.position(19, height + 26);
  button.mousePressed(saveReparto);


  button1 = createButton('GuardarPDF');
  button1.position(109, height + 26);
  button1.mousePressed(saveRepartoPdf);


  button2 = createButton('Resumen');
  //button2.position(209, height + 26);
  button2.id('button2');
  button2.position(29, 2);
  button2.mousePressed(mostrar);


  button3 = createButton('Proyector');
  //button2.position(209, height + 26);
  button3.xpos = 90
  button3.position(90, 2);
  button3.mousePressed(mostrarProyector);
  

  

  buttResumenApizarra = createButton('Resumen a pizarra');
 buttResumenApizarra.position(200, height + 26);
  buttResumenApizarra.mousePressed(aPizarra);
 

  buttGuardaApuntes= createButton('Guarda apuntes');
  buttGuardaApuntes.xpos = 90
  buttGuardaApuntes.position(90, 2);
  buttGuardaApuntes.mousePressed(guardaApuntes);
 


  var fechai = new Date();
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  fecha = fechai.toLocaleDateString("es-ES", options)
  var tinit = '<div style="font-size:10px;font-family:Arial;text-align:left;margin-left:5px;width:' + (pizarra.w - 10) + 'px;">' + fecha + '</div>'


  pizarra.color = color('#001100')
  pizarradiv = createDiv(tinit);
  pizarradiv.id('pizarradiv'); //attribute('id', 'pizarradiv');
  //alert(pizarradiv.attribute('id'))
  pizarradiv.position(cnv.x + pizarra.x, cnv.y + pizarra.y);
  pizarradiv.size(pizarra.w, pizarra.h);
  pizarradiv.style('font-family', 'Arial, Helvetica, sans-serif');
  pizarradiv.style('color', '#fff');
  pizarradiv.style('font-size', '18px');
  //pizarradiv.style('background-color', pizarra.color);
  pizarradiv.style('overflow', 'auto');
  // pizarradiv.style('pointer-events','none');
  //pizarradiv.style('z-index', '-1')
  //pizarradiv.attribute('contenteditable', 'true');
  //pizarradiv.mouseOut(cargatexto);

  //button2.mousePressed(mostrar);

  puerta.x = width - puerta.w
  puerta.y = 0




  pizarradiv.position(cnv.x + pizarra.x, cnv.y + pizarra.y);
  pizarradiv.size(pizarra.w, pizarra.h);
  //-->centerCanvas();


 // modalok = select('#modalok')
  //modaldiv = select('#myModal')
 // modalclosediv = select('.close')
  pizarrata = select('#pizarrata')
  pizarradiv.mousePressed(function() {
   //if(elegido){modaldiv.show()}
    //modaldiv.show()
    //decide
    //if(elegido && partiNames[me.id].rol>0){modaldiv.show()}
  });
  document.getElementById('pizarradiv').addEventListener("paste", pegadaImagen);
  
 window.onclick = function(event) {
  if (event.target == document.getElementById('modalok')) {
      var solve = ''
      decide(pizarrata.value())
    //pizarradiv.html(solve)
      document.getElementById('myModal').style.display = "none";
      escena(102)
    }
    if (event.target == document.getElementsByClassName("close")[0]) {
        document.getElementById('myModal').style.display = "none";
        escena(102)
    }
  }
  
  /*
  modalclosediv.mousePressed(function() {
    //borratexto()
    //modaldiv.hide()
    escena(102)
  });
  modalok.mousePressed(function() {
    var solve = ''
    decide(pizarrata.value())
    //pizarradiv.html(solve)
    escena(102)
  });
*/

  if (!shared.log) {
    //shared.log = shared.log + "\n" +" ";
    shared.log = ''

  } else {
    //shared.log = '' + "";
  }
  pizarraini.x = pizarra.x
  pizarraini.y = pizarra.y
  pizarraini.w = pizarra.w
  pizarraini.h = pizarra.h
  pizarraini.color = pizarra.color

  pizarraact.x = pizarradiv.x
  pizarraact.y = pizarradiv.y
  pizarraact.w = pizarraini.w
  pizarraact.h = pizarraini.h
  pizarraact.color = pizarra.color
  shared.modo = ''
  // partySetShared(shared, { onoffProyector: -1, log: '' , modo: '', modoestado:-1 , idvideo: '',opcionesVotar:[]});
  //partySetShared(opcionesVotar, {, opcionesVotar:[]
  if (!shared.onoffProyector) {
    //shared.log = shared.log + "\n" +" ";
    //shared.piza= {x:pizarraact.x,y:pizarraact.y,w:pizarraact.w,h:pizarraact.h,color:pizarraact.color}
    shared.onoffProyector = -1
    proyectorPrev = -1
  } else {
    //shared.log = '' + "";
    //shared.piza= {x:pizarraact.x,y:pizarraact.y,w:pizarraact.w,h:pizarraact.h,color:pizarraact.color}
    shared.onoffProyector = -1
    proyectorPrev = -1
  }
  shared.centerg = shared.centerg || {x:centerg.x,y:centerg.y};
  shared.opcionesVotar = shared.opcionesVotar || [];
  if (!shared.seek) {
    //shared.log = shared.log + "\n" +" ";
    //shared.piza= {x:pizarraact.x,y:pizarraact.y,w:pizarraact.w,h:pizarraact.h,color:pizarraact.color}
    shared.seek = 0
    shared.modo = ''
    shared.modoestado = -1
    shared.idvideo = ''
    idvideoPrev = ''

  } else {
     shared.modo = ''
    //shared.log = '' + "";
    //shared.piza= {x:pizarraact.x,y:pizarraact.y,w:pizarraact.w,h:pizarraact.h,color:pizarraact.color}

  }

 escena(0);

}

var iniciado = false


function draw() {
  if(me.id==-1){iniciado=false
      if(shared.modo=='apagado'){
          location.href='../'
      }
  }
  if (!iniciado) {
    background("#555");
    eligeTuNombre()
  } else {
    if (shared.onoffProyector == 1) {
      
      clear()
      if (partiNames[me.id].rol == 2){
        shared.centerg.x=me.x
        shared.centerg.y=me.y
      }
      if (partiNames[me.id].rol != 2 && shared.modo == 'video' && shared.modoestado > 0 && isloadediframe == 1 && typeof(player) != "undefined") {
        player.seekTo(shared.seek, true)
      }
      proyector()
       
    } else {
      let basecolor = 8
      if (shared.modo == 'votar' || shared.modo == 'pregunta') {
        basecolor = 3
      }
      background(fondosc[basecolor]);
      fill(fondosc[basecolor - 1])
      beginShape();
      vertex(200, 0);
      vertex(200, pizarra.h + 180);
      vertex(0, height);
      vertex(0, 0);
      endShape(CLOSE);
      fill(fondosc[basecolor - 1])
      beginShape();
      vertex(width - 90, 0);
      vertex(width, 0);
      vertex(width, height);
      vertex(width - 90, pizarra.h + 180);
      endShape(CLOSE);
      fill(fondosc[basecolor - 3])
      beginShape();
      vertex(200, pizarra.h + 180);
      vertex(width - 90, pizarra.h + 180);
      vertex(width, height);
      vertex(0, height);
      endShape(CLOSE);
    }
    if (partiNames[me.id].rol == 2 && shared.modo == 'video' && shared.modoestado > 0 && isloadediframe == 1 && typeof(player) != "undefined") {
          shared.seek = player.getCurrentTime()
    }
    fill(puerta.color)
    rect(puerta.x, puerta.y, puerta.w, puerta.h)
       
    if (shared.onoffProyector == -1) {
      dibujaSitios()
      repartePremios()
      repartePalabra()
      dibujaPizarra()
    } 
    proyector()
    dibujaParticipantes() 

    if (shared.log.length != sharedPrev.length) { //? && shared.modo==''
      var s = '<div id="iframevideoyout"></div>'
      if (shared.log == s && shared.modo == 'video') {
        isloadediframe = -1;
      }
      pizarradiv.html(shared.log)
      sharedPrev = shared.log

    } else {
      if (shared.modo == 'video' && isloadediframe == -1) {
        onYouTubeIframeAPIReady()
      }
    }
  }
}

function dibujaPizarra() {
  if (iniciado) {
    if (partiNames[me.id].rol > 0) {
      fill(pizarra.color)
      rect(madera.x, madera.y - borrador.h, madera.w, borrador.h)
      fill(madera.color)
      rect(madera.x, madera.y, madera.w, madera.h)
      if (toc == 8) {
        fill(233, 0, 0)
      } else {
        fill(tiza.color)
      }
      rect(tiza.x, tiza.y, tiza.w, tiza.h)
      if (toc == 7) {
        fill(244, 0, 9)
      } else {
        fill(borrador.color)
      }
      rect(borrador.x, borrador.y, borrador.w, borrador.h)
    }
  }

}

function muestraHoras(n) {
  //console.log(n)

}

function dibujaParticipantes() {
  for (const m of participants) {
    //if (typeof m.x !== "undefined" && typeof m.id !== "undefined") {

      let colorparti = colorotros

      if (m.id == me.id) {
        colorparti = colormio
        //colorsilla = 100
        //ellipse(me.x, me.y, 15, 15);
      }
      //SIGLAS MOVIENDO
      if ((shared.modo == 'votar' || shared.modo == 'pregunta') ) {

      } else {
          fill(colorparti)
         textSize(14)
         //console.log(m.id)
         if(typeof m.id !== "undefined"  &&  m.id != null  &&  m.id>-1){textAlign(CENTER, BOTTOM);
             textAlign(LEFT, BOTTOM);
              text(partiNames[m.id].name, m.x, m.y)
              rectangles[m.id+4].x=m.x
              rectangles[m.id+4].y=m.y-14
              noFill()
              strokeWeight(2)
              stroke(179,20)
              rect(m.x, m.y-14, rectangles[m.id+4].rectWidth, rectangles[m.id+4].rectHeight);
              noStroke()
         }
     }
  }
  //if(shared.onoffProyector==1 && pizarradiv.html()==''){
    if(shared.onoffProyector==1){  
      stroke(255,10)
      noFill()
      strokeWeight(30)
     //ellipse(shared.centerg.x,shared.centerg.y,width/3,width/3)
      ellipse(shared.centerg.x,shared.centerg.y,width/3,width/3)
      fill(255,60)
      strokeWeight(10)
      ellipse(shared.centerg.x,shared.centerg.y,20,20)
      noStroke()
      if(partiNames[me.id].rol==2){
          
       for (var i = 0; i < rectangles.length; i++) {
           if(i!=me.id+4){
                //check collision for this obstacle
              var rectangle= rectangles[i];
            
                //check X movment bounce
                if (bouncingRectX + bouncingRectWidth + bouncingRectSpeedX > rectangle.x && 
                  bouncingRectX + bouncingRectSpeedX < rectangle.x + rectangle.rectWidth && 
                  bouncingRectY + bouncingRectHeight > rectangle.y && 
                  bouncingRectY < rectangle.y + rectangle.rectHeight) {
            
                  bouncingRectSpeedX *= -1;
                }
            
                //check Y movement bounce
                if (bouncingRectX + bouncingRectWidth> rectangle.x && 
                  bouncingRectX< rectangle.x + rectangle.rectWidth && 
                  bouncingRectY + bouncingRectHeight + bouncingRectSpeedY > rectangle.y && 
                  bouncingRectY + bouncingRectSpeedY < rectangle.y + rectangle.rectHeight) {
            
                  bouncingRectSpeedY *= -1;
                }
           }
         }
         
         bouncingRectX += bouncingRectSpeedX*incr;
          bouncingRectY += bouncingRectSpeedY*incr;
          host.ball.x=bouncingRectX
          host.ball.y=bouncingRectY
         
      }
      var distanceBC=dist(shared.centerg.x, shared.centerg.y, host.ball.x, host.ball.y)
      if(distanceBC<10){incr=0}
  }
   fill(0, 255, 0);
   if(incr==0){fill(255,0, 0);}
   rect(host.ball.x, host.ball.y, bouncingRectWidth, bouncingRectHeight);
}

function dibujaSitios() {
  //image(capture, 0,0, 200, 100);
  var x = 0
  //y = 15
  var y = 15
  
 //TODAS LAS MESAS
  var w = 10
  var h = 10
  for (var a = 0; a < partiNames.length; a++) {
    dimTarjetaN.w = partiNames[a].w
    dimTarjetaN.h = partiNames[a].h

    x = partiNames[a].x
    y = partiNames[a].y

    //partiNames[a].y = y
    strokeWeight(0)
    if (me.id == a) {
      strokeWeight(3);
      stroke(0)
      noFill()
    } else {
      fill(100)
    }
    //rect(x, y, dimTarjetaN.w, dimTarjetaN.h, 10)
    rect(x, y, partiNames[a].w, partiNames[a].h, 10)
    //me.capture0=capture
    //if(a==1){

    // }
    //image(nimages[partiNames[a].conti[0]],x + 6, y + 28, 45,40)
    //image(nimages[partiNames[a].conti[1]],x + 48, y + 28,45,40)
    strokeWeight(0)
    fill(0)
    textSize(14)
    if (a != me.id) {
      text(partiNames[a].name, x + 10, y + 20)
      
    }
    //text(eval(me.total), x + 12, y + 50)

  }
  var contPidePizarra = 0
  var contPideSilla = 0
  for (const m of participants) {
    //var cont=0
    //if (typeof m.id !== "undefined") {
   //if (typeof m.x !== "undefined" ) {
    if ( m.id >= 0 ) {
      x = partiNames[m.id].x
     y = partiNames[m.id].y
     
    //SOUND AND COLORS  
      let colorsilla = 230
      let colorparti = colorotros
      if (m.id == me.id) {
        colorparti = colormio
        colorsilla = 100
        //if (getAudioContext().state === 'running') {
        me.micLevel = mic.getLevel();
        //}
      }

      //PANTALLA

      var atento = color(100 + 155 * (m.atento / 10))
      if (shared.modo == 'votar' && partiNames[m.id].rol != 2) {
        atento = color(30)
        if (m.voto > -1) {
          atento = color(255)
        }
      }
      if (shared.modo == 'pregunta' && partiNames[m.id].rol != 2) {
        atento = color(30)
        if (m.respuesta.length > 0) {
          atento = color(255)
        }
      }

      // var atento=100+ (155*m.micLevel)* (m.atento/10 )
      if (m.micLevel > 0.15) {
        atento = color(0, 255, 0)
      }

      if (profeSobreAlumno == m.id  ) {
        atento = color(255)
        if(profeDa==1){atento=color(200,0,100)}
        if(profeDa==2){atento=color(0,200,100)}
      }
      
       //if(profeDa==1 || profeDa==2){atento = profeDaColor}
     if ( m.id>-1){
        fill(atento)
        rect(x, y, partiNames[m.id].w, partiNames[m.id].h, 10)
     }
   // PANTALLA PROFE
      if (partiNames[m.id].rol == 2 && me.id == m.id &&  m.id>-1) {
        var profeDaColor1=color(200,0,100,0);//profeDaColor 
        var profeDaColor2=color(200,0,100,0);//profeDaColor  
        if(profeDa==1){profeDaColor1=color(200,0,100)}
        if(profeDa==2){profeDaColor2=color(0,200,100)}
        var sobrestroke1=0
        var sobrestroke2=0
        if(profeDaSobre==1){sobrestroke1=2;sobrestroke2=0;}
        if(profeDaSobre==2){sobrestroke1=0;sobrestroke2=2;}
        strokeWeight(sobrestroke1)
        fill(profeDaColor1)
        rect(partiNames[m.id].elige[0].x, partiNames[m.id].elige[0].y, twcopa, twcopa, 6)
        //http://www.iemoji.com/ 
        fill(profeDaColor2) 
        strokeWeight(sobrestroke2)
        rect(partiNames[m.id].elige[1].x, partiNames[m.id].elige[1].y, twcopa, twcopa, 6)
        strokeWeight(0)
        fill(255)
        textSize(tsprofe)
        text(tcopa, partiNames[m.id].elige[0].x, partiNames[m.id].elige[0].y + tsprofe+8)
        text(tmicro, partiNames[m.id].elige[1].x, partiNames[m.id].elige[1].y + tsprofe+8)
        //text("\uD83D\uDD11",partiNames[m.id].elige[1].x+9,partiNames[m.id].elige[1].y+ts)
      }

      //BALLSOUND AND COLORS
      /* 
         stroke(0);
         let h = map(m.micLevel, 0, 1, 8,partiNames[m.id].h+36); 
         fill(m.micLevel*255,0,0)
         ellipse(partiNames[m.id].silla.x+partiNames[m.id].w-6, partiNames[m.id].silla.y-h, 6, 6);
      */
      //SIGLAS EN MESA
      fill(0)
      textSize(14)
      textAlign(LEFT, BOTTOM);
      text(partiNames[m.id].name, x + 7, y + 20)
      //PIDE
      fill(pidecolor[m.pide])
      ellipse(partiNames[m.id].x, partiNames[m.id].y, 15, 15);
      if (shared.modo == 'votar' || shared.modo == 'pregunta') {
        if (m.voto > -1) {
          contPidePizarra++
        }
        if (m.respuesta.length > 0) {
          contPidePizarra++
        }
      } else {
        if (m.pide == 4) {
          contPidePizarra++
        }
         if (m.pide == 2) {
          contPideSilla++
        }
      }
      //SILLA
      if (partiNames[m.id].rol != 2) {
        fill(colorsilla)
        strokeWeight(1)
        rect(partiNames[m.id].silla.x, partiNames[m.id].silla.y, partiNames[m.id].silla.w, partiNames[m.id].silla.h)
        strokeWeight(0)
      }
    
    }
  
  }
 // PILOTOS PIZARRA
   textSize(20)
   fill(0)
  text( (participants.length - 1) + '/' + (partiNames.length - 1) , pizarra.x - 80, pizarra.y + 20)
  fill(0,255,0)
  ellipse (pizarra.x - 73, pizarra.y + 40,15,15)
  fill(0)
   text(contPidePizarra, pizarra.x - 50, pizarra.y + 47)
   
    fill(0,0,255)
  ellipse (pizarra.x - 73, pizarra.y + 70,15,15)
  fill(0)
   text(contPideSilla, pizarra.x - 50, pizarra.y + 77 )
 
}

function eligeTuNombre() {
  //for (const m of participants) {

  var x = 0,
    y = 135
  textSize(25)
  //text(textoInicial, x + 12, y - 50)
  for (var a = 0; a < partiNames.length; a++) {
    x = partiNames[a].x
    y = partiNames[a].y
    if (pasaN[0] == a) {
      fill(color1)
    } else {
      fill(255)
    }
    var cle = 0
    for (const m of participants) {
      if (m.id == a) {
        fill(60);
        cle = 60;
        break
      }
    }
    //rect(x, y, dimTarjetaN.w, dimTarjetaN.h, 10)
    rect(x, y, partiNames[a].w, partiNames[a].h, 10)
    fill(cle)
    textSize(14)
    text(partiNames[a].name, x + 6, y + 30)

  }

}

function dibujaTarjetas() {
  var x = 0,
    y = 300
  //rect(host.ball.x, host.ball.y, host.ball.w, host.ball.h);
  var contmias = 0
  var xme = ''
  strcad = ''
  nuestras = ''
  elegidos = []
  for (const m of participants) {
    //elegidos.push([])
    //elegidos[elegidos.length-1][0]=partiNames[m.id].name
    //elegidos[elegidos.length-1][1]=m.id
    if (typeof m.mias !== "undefined" && typeof m.id !== "undefined") {
      //console.log('MIAu:'+m.id)
      if (m.mias.length > 1) {
        var mias = m.mias.split(',')
        nuestras += m.mias
        if (typeof mias != "undefined" && mias != null && mias.length != null && mias.length > 0) {
          //xme = m.id 
          strcad += '<hr><br><h3>' + partiNames[m.id].name + '</h3>';
          elegidos.push([])
          elegidos[elegidos.length - 1][0] = m.id
          elegidos[elegidos.length - 1][1] = partiNames[m.id].name
          for (var c = 0; c < mias.length - 1; c++) {
            var grueso = 0;
            strokeWeight(grueso)
            if (m.id == me.id) {
              //console.log(mio[0]+' --> '+m.mias)
              grueso = 0;
              strokeWeight(grueso)
              // if (pasaE[0] == c) {
              if (selectIcon == c) {
                grueso = 1;
                strokeWeight(grueso)
                fill(color2)
                stroke(color2)
              } else {
                fill(255, 0, 0);
                //fill(colorBloque[mias[c]])
                stroke(colorBloque[mias[c]])
              }
            } else {
              fill(colorBloque[mias[c]])
              stroke(colorBloque[mias[c]])
              noFill()
              noStroke()
            }
            //-->rect(partiNames[xme].x - 2, ty - 12,dimTarjetaS.w, dimTarjetaS.h+12)
            //-->image(nimages[tarjeta[mias[c]].conti[0]],partiNames[xme].x +6, ty +28,45,40) 
            //--->rect(partiNames[m.id].x + 45*c+ 1*c+5-grueso, 15 + 24-grueso, 45+grueso*2,40+grueso*2)
            //----->rect(partiNames[m.id].x + 45 * c + 1 * c + 5 - grueso, partiNames[m.id].y + 24 - grueso, 45 + grueso * 2, 40 + grueso * 2)
            /*
            if (tarjeta[mias[c]].name != '') {
              if (mias[c] <= 0) {
                image(nimages[0], partiNames[m.id].x + 45 * c + 1 * c + 5, partiNames[m.id].y + 24, 45, 40)
              } else {
                image(nimages[tarjeta[mias[c]].conti[0]], partiNames[m.id].x + 45 * c + 1 * c + 5, partiNames[m.id].y + 24, 45, 40)
              }
            }
            */
            strokeWeight(0)
            stroke(0)
            fill(0)
            //-->fill(colorFondo)
            strcad += '<br>' + tarjeta[mias[c]].conti[0] + ' <img src="' + foto[tarjeta[mias[c]].conti[0]] + '" width="60px"><img src="' + foto[tarjeta[mias[c]].conti[1]] + '" width="60px"> ' + tarjeta[mias[c]].name
            elegidos[elegidos.length - 1].push(tarjeta[mias[c]].conti[0])
            //-->partiNames[xme].img.push(tarjeta[mio[0]][mio[1]].img)
            //-->rect(tarjeta[mio[0]][mio[1]].x, tarjeta[mio[0]][mio[1]].y - 10, dimTarjeta.w, dimTarjeta.h)
          }
        }
      }
    } else {
     /* if (typeof m.id !== "undefined" && partiNames[m.id].name != '') {
        var j = 0
        image(nimages[0], partiNames[m.id].x + 45 * j + 1 * j + 5, 15 + 24, 45, 40)
        j = 1
        image(nimages[0], partiNames[m.id].x + 45 * j + 1 * j + 5, 15 + 24, 45, 40)
      }
      */
    }

  }


  for (var a = 1; a < tarjeta.length; a++) {

    //-->if(nuestras.indexOf(a+',')==-1){
    if (pasa[0] == a) {
      fill(color2)
    } else {
      //fill(color1)
      fill(colorBloque[a])
    }
    //if (select[0] == a && select[1] == b) {
    //fill(color3)
    //}
    if (tarjeta[a].name != '') {
      rect(tarjeta[a].x, tarjeta[a].y - 10, tarjeta[a].w + 10, tarjeta[a].h + 40)
      //image(tarjeta[a][b].src,tarjeta[a][b].x, tarjeta[a][b].y + 28, dimTarjeta.w, dimTarjeta.h)
      //-->image(nimages[tarjeta[a].conti[0]], tarjeta[a].x + 6, tarjeta[a].y + 28, 70, 70)
      //image(nimages[tarjeta[a].conti[1]],tarjeta[a].x+52, tarjeta[a].y + 28, 45, 40)

      fill(0)
      textSize(12)
      text(tarjeta[a].name, tarjeta[a].x + 2, tarjeta[a].y + 5)
      textSize(22)
    }
    //shared.onoffproyector!=0 
    //text(tarjeta[a][b].horas, tarjeta[a][b].x + 12, tarjeta[a][b].y + 32)
    //->}
  }
}

function proyector() {
    
       //if(proyectorPrev != shared.onoffproyector  && ( shared.onoffproyector == -1 || shared.onoffproyector == 1 )  ){
      //if(proyectorPrev != shared.onoffproyector &&  typeof shared.onoffproyector !== 'undefined'  ){ 
     var s=proyectorPrev+shared.onoffProyector
    //if((proyectorPrev == 1 && shared.onoffproyector == 1) || (proyectorPrev == -1 && shared.onoffproyector == -1)){ 
    if(s == 2 || s==-2){ 
        //console.log('*'+proyectorPrev +'* *'+shared.onoffProyector+'*')  
    }else{
       console.log('*'+proyectorPrev +'* *'+shared.onoffProyector+'*')    
        if (shared.onoffProyector == 1) {
             incr = 1;
            if(partiNames[me.id].rol < 2){ escena(200);}
            if(partiNames[me.id].rol == 2){escena(202);}
           
            if (shared.modo == 'imagen') {
                //var ele = document.getElementById('nuestraimagen');
                //var elem =document.querySelector(".nuestraimagen");
                var elema =selectAll(".nuestraimagen");
                elema[0].size(800,AUTO)
                   //if(elem.length>0){
                      //elem[0].style.display="block"
                        //select('.nuestraimagen').size(800,AUTO)
                        
                        //elem.width = "800";
                        //elem.height = "auto";
                        //console.log(elem.length)
                   //}
            }
            if (select('#' + iframeid)) {
                  iframevideo = select('#' + iframeid)
                  if (shared.modo == 'video' && isloadediframe == 1) {
                    player.setSize(800, 500)
                  }
             }
            
        }
      
        
        if(shared.onoffProyector == -1 ){
             incr = 0;
            if(partiNames[me.id].rol < 2){escena(100)}
            if(partiNames[me.id].rol == 2){escena(102)}
       
            if (shared.modo == 'imagen') {
               //var elem = document.querySelectorAll(".nuestraimagen");
               //var elem = document.querySelector(".nuestraimagen");
               var elema =selectAll(".nuestraimagen");
                elema[0].size(AUTO,pizarra.h)
                  //if(elem){
                        //select('.nuestraimagen').size(AUTO,pizarra.h)
                    //if(elem.length>0){
                        //console.log(elem.length)
                       //elem.width = "auto";
                       //elem.height = pizarra.h+'';
                  //}
            }
            if (select('#' + iframeid)) {
              iframevideo = select('#' + iframeid)
              iframevideo.attribute('width', '320');
              iframevideo.attribute('height', '180');
            }
        }
   
       proyectorPrev = shared.onoffProyector
    }
    
}

function mostrarProyector() {
  if (shared.onoffProyector) {
    shared.onoffProyector *= -1
   
  
     host.ball.x=12;bouncingRectX=12
      host.ball.y=4;bouncingRectY=4
  }

  //pizarradiv.html(shared.onoffProyector)
}

function repartePremios() {
  for (const m of participants) {
        if (m.premio == 1  && m.id > -1) { 
              fill(255)
              textSize(partiNames[m.id].elige[0].w * 0.7)
              text(tcopa, partiNames[m.id].elige[0].x, partiNames[m.id].elige[0].y + 18)
              //console.log(m.id)
        }
  }
}
function repartePalabra() {
    var tpalabra=tmicro
//acero
  for (const m of participants) {
    if(ppregunta==1){tpalabra = tquestion; }else{ if(preguntaa==m.id){tpalabra = tquestion; } else{tpalabra = tmicro;}}
    if (m.palabra >= 1 && m.id>-1) { 
              if(m.palabra==2){tpalabra = tquestion;}
              fill(255)
              textSize(partiNames[m.id].elige[0].w * 0.7)
              text(tpalabra, partiNames[m.id].elige[1].x, partiNames[m.id].elige[1].y + 18)
              //console.log(m.id)
         }
    
  }
}
function mostrar() {
  window.scroll({
    top: 700,
    left: 0,
    behavior: 'smooth'
  });
  /*for(var a=0;a<partiNames.length;a++){
      if (typeof partiNames[a].conti == "undefined" || partiNames[a].conti == null || partiNames[a].conti.length == null ||
           partiNames[a].conti.length == 0) {
               partiNames[a].conti=[0]
      }
  }
  var jst=JSON.stringify(partiNames, null, " ")
  */
  var hanParticipado = []
  var hanParti = []
  var hanFaltado = []
  elegidos = []
  for (const m of participants) {
    //var cont=0
    //if (typeof m.id !== "undefined") {
    if (typeof m.x !== "undefined" && typeof m.id !== "undefined"  &&  m.id != -1) {
      elegidos.push([])
      elegidos[elegidos.length - 1][0] = m.id
      elegidos[elegidos.length - 1][1] = partiNames[m.id].name
    }
  }
  for (var a = 0; a < elegidos.length; a++) {
    hanParticipado.push(elegidos[a][0])
  }
  //console.log(hanParticipado)
  var finale = []
  for (var a = 0; a < partiNames.length; a++) {
    if (hanParticipado.indexOf(a) == -1) {
      var pn = partiNames[a].name
      //console.log(partiNames[a].name)
      var mati = [a, pn, 0, 0]
      finale.push(mati)
      hanFaltado.push(a + ': ' + partiNames[a].name)
    } else {
      var hp = hanParticipado.indexOf(a)
      finale.push(elegidos[hp])
      if (partiNames[a].rol != 2) {
        hanParti.push(a + ': ' + partiNames[a].name)
      }
    }
  }
  var jst = JSON.stringify(finale, null, " ")
  var cad = '<b>' + shared.modo.toUpperCase() + '</b><br>'
  var listaPremiados = []
  if (shared.modo == 'votar') {
    var nvotos = 0
    for (const m of participants) {
      m.premio = -1
      if (m.voto > -1) {
        nvotos++
        if (premioAl.length > 0) {
          for (var k = 0; k < premioAl.length; k++) {
            if (m.voto == premioAl[k]) {
              m.premio = 1
              listaPremiados.push(partiNames[m.id].name)
            }
          }
        }
      }
    }
    cad += tituloVotacion + '<br>'
    cad += 'Alumnos: ' + (partiNames.length - 1) + '   Asisten: ' + (hanParti.length) + ' Votan: ' + nvotos + '  <br>'
    for (var a = 0; a < shared.opcionesVotar.length; a++) {
      cad += shared.opcionesVotar[a].name + ':' + shared.opcionesVotar[a].votos + '&nbsp;&nbsp;'
    }
    //var se=select('#candiResult'+int(e[1]));
    //se.html(shared.opcionesVotar[int(e[1])].votos)
    //cad=JSON.stringify(shared.opcionesVotar, null, " ")
    //repartePremios()
    cad += '<br>' + listaPremiados.join(' ')
    pizarradiv.html(cad)
    shared.log = cad
    shared.modo = ''
  }
  var cadi = ''
  if (shared.modo == 'pregunta') {

    var nvotos = 0
    for (const m of participants) {
      m.premio = -1
      if (m.respuesta.length > 0) {
        nvotos++
        if (premioAl.length > 0) {
          for (var k = 0; k < premioAl.length; k++) {
            if (m.respuesta.indexOf(premioAl[k]) > -1) {
              m.premio = -1
              if (listaPremiados.indexOf(partiNames[m.id].name) == -1) {
                listaPremiados.push(partiNames[m.id].name)
              }
            }
          }
        }
        cadi += partiNames[m.id].name + ': ' + m.respuesta + '<br>'
      }
    }
    cad += tituloVotacion + '<br>'
    cad += 'Alumnos: ' + (partiNames.length - 1) + '   Asisten: ' + (hanParti.length) + ' Responden: ' + nvotos + '  <br>'
    cad += cadi
    if(listaPremiados.length>0){
        cad += '<br> PREMIADOS <br> ' + listaPremiados.join('<br>')
    }
    
    pizarradiv.html(cad)
    shared.log = cad
    shared.modo = ''
  }
 
  if (shared.modo == 'imagen' || shared.modo == 'texto' || shared.modo == 'video' || shared.modo == 'link'  || shared.modo == 'bigtexto') {
       var cad = '<hr>'
       cad+= pizarradiv.html()
  }
 
  //selectid.html(fecha+'<hr><p>'+cad+'</p><hr><p>Han participado:</p>'+hanParticipado.join('<br>')+'<br><p>Han faltado:</p>'+hanFaltado.join('<br>')+strcad + '<br><hr>' + jst)
  selectid1.html('<h4>' + G + '</h4>' + fecha + '<hr><p>Han faltado:</p>' + hanFaltado.join('<br>') + '<p>Han asistido:</p>' + hanParti.join('<br>') + '<br>')
  selectid2.html('' + '<p>' + cad + '</p><br>', true)


}

function saveReparto() {
  mostrar()
  let writer = createWriter('eligeAsignaturas.txt');
  // write 'Hello world!'' to the file
  //var texto=selectid.html()
  var element = document.getElementById('resumen');
  var texto = element.innerText || element.textContent;
  //writer.write(['Hello world!']);
  writer.write(texto);
  // close the PrintWriter and save the file
  writer.close();


}


function saveRepartoPdf() {
  //document.querySelector("#reparto").contentWindow.print()
  mostrar()
  var divContents = selectid.html()
  var printWindow = window.open('', '', 'height=400,width=800');
  printWindow.document.write('<html><head><meta charset="gb18030"><title>DIV Contents</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write(divContents);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

function guardaApuntes() {
  //document.querySelector("#reparto").contentWindow.print()
  selectid.html(shared.log)
  var divContents = selectid.html()
  var printWindow = window.open('', '', 'height=400,width=800');
  printWindow.document.write('<html><head><title>DIV Contents</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write(divContents);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}
function enviaPregunta(id){
   var s=select('#'+id+'p').value()
   var t='pregunta'+"\n"+s
   //pizarradiv.html(s) 
   decide(t)
}
function abrePreguntaa(miid){
    var cad='PREGUNTA a '+partiNames[miid].name+'<br>'
     cad += '<input type="text" id="preguntaa' + miid + 'p" value=" "><br>'
    cad += '<button id="preguntaa' + miid + '" onclick="enviaPregunta(this.id)">' + 'ok' + '</button> '
    pizarradiv.html(cad)
}

function mouseMoved(e) {
  //function   mouseDragged(e) {
  // write shared data 
  //function touchMoved() {

  if (!iniciado) {
    mex = mouseX;
    mey = mouseY;
    for (var a = 0; a < partiNames.length; a++) {

      //if ((mex > partiNames[a].x) && (mex < partiNames[a].x + dimTarjetaN.w) && (mey > partiNames[a].y) && (mey < partiNames[a].y + dimTarjetaN.h)) {
      if ((mex > partiNames[a].x) && (mex < partiNames[a].x + partiNames[a].w) && (mey > partiNames[a].y) && (mey < partiNames[a].y + partiNames[a].h)) {

        //color1=color(240, 20, 140);
        pasaN[0] = [a]
        //console.log(participants)
        return false
      } else {
        //color1=color(0,255,0);
        pasaN = [-1, -1]
      }
    }

  } else {
    me.x = mouseX;
    me.y = mouseY;

    //console.log(toc)
    if ((me.x > borrador.x) && (me.x < borrador.x + borrador.w) && (me.y > borrador.y) && (me.y < borrador.y + borrador.h)) {
      toc = 7
      //console.log('borrador')
      //shared.modo=''
      cursor()
      return

    } else {
      noCursor()
    }
    if ((me.x > tiza.x) && (me.x < tiza.x + tiza.w) &&
      (me.y > tiza.y) && (me.y < tiza.y + tiza.h)) {

      toc = 8
      cursor()
      //console.log('tiza')
      return
    } else {
      noCursor()

    }

    //for (const m of participants) {
    //var cont=0
    // SILLA
    if (typeof me.id !== "undefined") {
      toc = 0
      if ((me.x > partiNames[me.id].silla.x) && (me.x < partiNames[me.id].silla.x + partiNames[me.id].silla.w) &&
        (me.y > partiNames[me.id].silla.y+partiNames[me.id].silla.h) && (me.y < partiNames[me.id].silla.y + partiNames[me.id].silla.h*2)) {
        me.atento = 8
        /*var mias = me.mias.split(',')
        if (mias[0] != 0 && mias[1] != 0) {
          me.atento = 10
        }
        if (mias[0] != 0 || mias[1] != 0) {
          me.atento = 9
        }
        */
        me.pide = 2
        //var mias = me.mias.split(',')

        toc = 1

      }

      if ((me.x > puerta.x) && (me.x < puerta.x + puerta.w) &&
        (me.y > puerta.y) && (me.y < puerta.y + puerta.h)) {
        me.pide = 1
        toc = 1
      }
      if ((me.x > profe.x) && (me.x < profe.x + profe.w) &&
        (me.y > profe.y) && (me.y < profe.y + profe.h)) {
        me.pide = 3
        toc = 1
      }
      if ((me.x > pizarra.x) && (me.x < pizarra.x + pizarra.w) &&
        (me.y > pizarra.y) && (me.y < pizarra.y + pizarra.h + 40)) {
        me.pide = 4
        cursor()
        toc = 1
      }
      if (toc == 0) {
        me.atento = 4
        me.pide = 5
      }
    }

    if (partiNames[me.id].rol == 2) {
        profeDaSobre=0
        if ((me.x > partiNames[me.id].elige[0].x) && (me.x < partiNames[me.id].elige[0].x + partiNames[me.id].elige[0].w) && (me.y > partiNames[me.id].elige[0].y) && (me.y < partiNames[me.id].elige[0].y + partiNames[me.id].elige[0].h)) {
            profeDaSobre=1
        }
        if ((me.x > partiNames[me.id].elige[1].x) && (me.x < partiNames[me.id].elige[1].x + partiNames[me.id].elige[1].w) && (me.y > partiNames[me.id].elige[1].y) && (me.y < partiNames[me.id].elige[1].y + partiNames[me.id].elige[1].h)) {
            profeDaSobre=2;
            
        }
      //pizarradiv.html(framesCount())
      for (const m of participants) {
            if(typeof m.id !== "undefined"  &&  m.id != null  &&  m.id>-1){
                  if ((me.x > partiNames[m.id].x) && (me.x < partiNames[m.id].x + partiNames[m.id].w) && (me.y > partiNames[m.id].y) && (me.y < partiNames[m.id].y + partiNames[m.id].h)) {
                          //pizarradiv.html(m.id)
                          if (me.id != m.id) {
                                profeSobreAlumno = m.id
                                if(profeDa==2){
                                    if(m.palabra==1){
                                        ppregunta=1;
                                    }else{
                                        ppregunta=0;
                                    }
                                }else{
                                    ppregunta=0;
                                }
                                return true
                          }
                  } else {
                        profeSobreAlumno = -1
                        ppregunta=0;
                        //break
                  }
            } else {
                 profeSobreAlumno = -1
                 
                    ppregunta=0;
                
                 return false
            }
      }
    }
  }
  //}

  /*
  for (var a = 0; a < tarjeta.length; a++) {
     if ((me.x > tarjeta[a].x) && (me.x < tarjeta[a].x + tarjeta[a].w) &&
       (me.y > tarjeta[a].y) && (me.y < tarjeta[a].y + tarjeta[a].h + 40)) {
       //color1=color(240, 20, 140);
       pasa = [a, 0]
       return false
     } else {
       //color1=color(0,255,0);
       pasa = [-1, -1]
     }
   }
   */


  return false
}

function rewritePos() {
  for (var a = 0; a < partiNames[me.id].elige.length; a++) {
    //let ty = partiNames[me.id].y + a * 30 + 90
    let ty = partiNames[me.id].y + a * 30 + dimTarjetaS.h
    partiNames[me.id].elige[a].y = ty - 12
  }
}

function borraPalabras() {
 //ppregunta=0
 //acero
 for (const m of participants) {
     m.palabra=-1
 }
}



//function mousePressed(e) {
//function touchStarted(e) {
function mouseReleased(e) {
    
  // write shared 
  //-->host.ball.x++;
  //host.ball.y = mouseY;
  if (!iniciado) {
    mex = mouseX;
    mey = mouseY;
    var contigual=[]
    for (var a = 0; a < partiNames.length; a++) {
      if ((mex > partiNames[a].x) && (mex < partiNames[a].x + dimTarjeta.w) && (mey > partiNames[a].y) && (mey < partiNames[a].y + dimTarjeta.h)) {
        for (const m of participants) {
          if (m.id == a) {
              //history.go(0)
            //return false
            contigual.push(m.id)
          }
        }
        if(contigual.indexOf(a)>-1){history.go(0)}
        //color1=color(240, 20, 140);
        selectN[0] = a
        iniciado = true
        
        me.id = a
        if (partiNames[a].rol > 0) {
           escena(102)
        }else{
           escena(100)
        }
        noCursor();
        me.premio=-1
        me.palabra=-1
        return false
      } else {
        //color1=color(0,255,0);
        selectN = [-1, -1]
      }
    }
  } else {

    // if ((mex > borrador.x) && (mex < borrador.x + borrador.w) &&  (mey > borrador.y) && (mey < borrador.y + borrador.h)) {
    if (toc == 7) {
      borratexto()
      shared.modo = ''
      shared.modoestado = -1
      console.log('borrador')
      toc = -1
      return
    }
    //if ((mex > tiza.x) && (mex < tiza.x + tiza.w) &&  (mey >tiza.y) && (mey < tiza.y + tiza.h)) {
    if (toc == 8) {
      // modaldiv.show()
        escena(302);
      //modaldiv.show()
      //modaldiv.style('z-index', '100');
      //modaldiv = select('#myModal')
      //modaldiv.style('z-index', '900000000');
      //modaldiv.show()
      console.log('tiza')
      toc = -1;
      return;
    }
    if (partiNames[me.id].rol == 2 ) {
        if ((me.x > partiNames[me.id].elige[0].x) && (me.x < partiNames[me.id].elige[0].x + partiNames[me.id].elige[0].w) && (me.y > partiNames[me.id].elige[0].y) && (me.y < partiNames[me.id].elige[0].y + partiNames[me.id].elige[0].h)) {
            profeDa=1
        }
        if ((me.x > partiNames[me.id].elige[1].x) && (me.x < partiNames[me.id].elige[1].x + partiNames[me.id].elige[1].w) && (me.y > partiNames[me.id].elige[1].y) && (me.y < partiNames[me.id].elige[1].y + partiNames[me.id].elige[1].h)) {
            borraPalabras()
            ppregunta=0
            preguntaa=-1
            profeDa=2
            
        }
      //console.log(2)
      console.log('INI')
       //console.log(JSON.stringify(participants))
       //var elnum=-1
        //pizarradiv.html(profeSobreAlumno+' '+1+' '+participants[1].premio)
      for (const m of participants) { 
         // elnum++
          if(typeof m.id !== "undefined"  &&  m.id != null  &&  m.id>-1){
                //console.log(JSON.stringify(participants))
                if ((me.x > partiNames[m.id].x) && (me.x < partiNames[m.id].x + partiNames[m.id].w) && (me.y > partiNames[m.id].y) && (me.y < partiNames[m.id].y + partiNames[m.id].h)) {
                  
                  if (me.id != m.id) {
                    if(profeDa==1){
                        m.premio *= -1
                        profeSobreAlumno = m.id
                         break
                        //pizarradiv.html(m.id)
                        //console.log(m.id+' '+m.premio)
                    
                    }
                    if(profeDa==2){
                        borraPalabras()
                        m.palabra = 1;
                        if(ppregunta==1){
                            preguntaa=m.id;
                            m.palabra=2;
                            abrePreguntaa(m.id)
                        };
                        profeSobreAlumno = m.id
                        break
                        //pizarradiv.html(m.id)
                        //console.log(m.id+' '+m.palabra)
                         
                    }
                  } else {
                    //profeSobreAlumno = -1
                    //return true
                   
                  }
                } else {
                    //profeSobreAlumno = -1
                }
              }
             
        } 
       // if(profeSobreAlumno==2){aleprofeSobreAlumnort(2}
        //alert(profeSobreAlumno)
       // pizarradiv.html('<br>'+profeSobreAlumno+' '+elnum+' '+participants[elnum].premio,true)
         //if(elnum==1) {
             //fill(255)
             // textSize(partiNames[profeSobreAlumno].elige[0].w * 0.7)
              //text(tcopa, partiNames[profeSobreAlumno].elige[0].x, partiNames[profeSobreAlumno].elige[0].y + 14)
         //}
        //console.log(JSON.stringify(participants))
        e.preventDefault();
        return false
    }
    //console.log('nuestras: '+nuestras)
    /*
      var mesamitad,mesamedio,elijeid=1
      
      for (var i = 0; i < partiNames[me.id].elige.length; i++) {
        // if ((me.x > partiNames[me.id].elige[i].x) && (me.x < partiNames[me.id].elige[i].x + partiNames[me.id].elige[i].w) && (me.y > partiNames[me.id].elige[i].y) && (me.y < partiNames[me.id].elige[i].y + partiNames[me.id].elige[i].h+50*i)) {
        //if ((me.x > partiNames[me.id].elige[i].x) && (me.x < partiNames[me.id].elige[i].x + partiNames[me.id].elige[i].w) && (me.y > partiNames[me.id].elige[i].y) && (me.y < partiNames[me.id].elige[i].y + partiNames[me.id].elige[i].h)) {
        mesamitad=partiNames[me.id].elige[i].w*0.5
        mesamedio=partiNames[me.id].x+mesamitad
        //if ((me.x > partiNames[me.id].x) && (me.x < partiNames[me.id].x + dimTarjetaN.w) && (me.y > partiNames[me.id].y) && (me.y < partiNames[me.id].y + dimTarjetaN.h)) {
        if ((me.x > partiNames[me.id].x) && (me.x < partiNames[me.id].x + partiNames[me.id].w) && (me.y > partiNames[me.id].y) && (me.y < partiNames[me.id].y + partiNames[me.id].h)) {

          //partiNames[xme].x + 45*c+ 1*c+5, 15 + 24, 45,40) 
          //var bo=alert('Vas a borrar '+ tarjeta[partiNames[me.id].elige[i].a][partiNames[me.id].elige[i].b].name)
          //if(bo){
            if(me.x<mesamedio){eligeid=0}else{eligeid=1}
          var u = partiNames[me.id].elige[i].a
          
          //selectIcon=i
          borra(u, eligeid, i)
          return
          //}else{
          //return
          //}
        }
      }
      for (var a = 0; a < tarjeta.length; a++) {
        //const isIn = nuestras.indexOf(a + ' ' + b + ',');
        // const isIn = nuestras.indexOf(a +',');
        if ((me.x > tarjeta[a].x) && (me.x < tarjeta[a].x + dimTarjetaS.w) && (me.y > tarjeta[a].y) && (me.y < tarjeta[a].y + dimTarjetaS.h)) {
          var don = selectIcon
          //if(don<0){return}
          //tarjeta[a][b].x=partiNames[me.id].x
          //tarjeta[a][b].y=partiNames[me.id].y+dimTarjetaN.h
          me.total += tarjeta[a].horas
          var mm = me.mias.split(',')
          if(mm[0]==a || mm[1]==a){return}
          mm[don] = a
          me.mias = mm.join(',')
            
          partiNames[me.id].horas += int(me.total)
          let ty = partiNames[me.id].y
          console.log(don + ' ' + pasaE[0] + ' ' + a + ' ' + me.mias + ' ')
          var dmio = {
            x: partiNames[me.id].x + 45 * don + 1 * don + 5,
            y: ty,
            w: 45,
            h: 40,
            a: 0,
            id: don
          }
          partiNames[me.id].conti[don] = (a)
          //partiNames[me.id].elige.push(dmio)
          partiNames[me.id].elige[don].a = a
          for (var k = 0; k < partiNames[me.id].elige.length; k++) {
            partiNames[me.id].conti[k] = partiNames[me.id].elige[k].a
          }
          selectIcon++
          if (selectIcon >= 2) {
            selectIcon = 0
          }
          return
        } else {
          //color1=color(0,255,0);
          //selectIcon = [-1, -1]
        }
        
      }
    */
    //console.log(host.ball)
    //if(mouseY>height/2){ host.ball['y']+=6 }else{host.ball['y']-=6 }
    //}
    // host.ball.x+=6 
    //host.ball.y+=6 

    //if (partiNames[me.id].rol = 2) {  onoff ^= true     }
  }
}

function keyReleased() {
  //shared.log=pizarradiv.html() 
  //console.log(shared.log)

}

function touchStarted() {
  //console.log(getAudioContext())
  // pizarradiv.html(getAudioContext().state)
  //if (getAudioContext().state !== 'running') {

  getAudioContext().resume();
  //}
}

function aPizarra(){
  pizarradiv.html(fecha+''+selectid2.html())
  shared.log=pizarradiv.html()
  shared.modo='texto'
  //decide(selectid2.html())
  //
}

function testImage(url, timeoutT) {
  return new Promise(function(resolve, reject) {
    var timeout = timeoutT || 5000;
    var timer, img = new Image();
    img.onerror = img.onabort = function() {
      clearTimeout(timer);
      reject(false);
    };
    img.onload = function() {
      clearTimeout(timer);
      resolve(true);
    };
    timer = setTimeout(function() {
      // reset .src to invalid URL so it stops previous
      // loading, but doens't trigger new load
      img.src = "//!!!!/noexist.jpg";
      reject(false);
    }, timeout);
    img.src = url;
  });
}

var imageis = false

function record(url, result) {
  imageis = result

  if (result === true) {
    borratexto()
    solve = '<img class="nuestraimagen" src="' + url + '" height="' + pizarra.h + '" width="auto"/>'
    carga(solve, 'imagen');
    shared.idvideo = '';
    imageis=false;
    return

  }
  //document.body.innerHTML += "<span class='" + result + "'>" + result + ": " + url + "</span><br>";
}

function runImage(url) {
  testImage(url).then(record.bind(null, url), record.bind(null, url));
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function votosAcero() {
  for (const m of participants) {
    m.voto = -1
    m.premio = -1
    m.respuesta = ''
  }
}

function enviaRespuesta(id) {
  var idr = id + 'r'
  me.respuesta = document.getElementById(idr).value

}
var tituloVotacion = ''

function buscalineas(txt) {

  var splitext = txt.split("\n")
  var st = []
  for (var i = 0; i < splitext.length; i++) {
    splitext[i] = splitext[i].trim()
    //
    if (splitext[i].length < 1) {
      splitext[i] = ''
      //splitext[i] = splitext[i].replace(/  +/g, ' '); }
    } else {
      st.push(splitext[i])

    }
  }
  tituloVotacion = ''
  var modelo = {
    name: '',
    votos: 0
  }
  var cad = ''
  st[0].trim()
  votosAcero()
  if (st[0] == 'votar' || st[0] == 'Votar' || st[0] == 'VOTAR' || st[0] == 'votan' || st[0] == 'Votan' || st[0] == 'VOTAN' || st[0] == 'vota' || st[0] == 'Vota' || st[0] == 'VOTA') {

    premioAl = []
    shared.opcionesVotar = []
    tituloVotacion = st[1]
    cad += st[1] + '<br>'
    var elec = st[2].split(' ')
    var prem = st[3]
    //if(st[3] !== undefined && st[3]>0){
    if (prem !== undefined && prem.length > 0) {
      let pp = prem.split(' ')
      for (var a = 0; a < pp.length; a++) {
        premioAl[a] = int(pp[a]) - 1
      }
    }
    // alert(prem+' '+premioAl.join(' '))
    if (elec[0] == 'todos') {
      elec = []
      for (const m of participants) {
        m.premio = -1
        if (partiNames[m.id].rol != 2) {
          elec.push(partiNames[m.id].name)
        }
      }
    }
    for (var i = 0; i < elec.length; i++) {
      cad += '<button id="candi' + i + '" onclick="votaPor(this.id)">' + elec[i] + '</button> '
      var m = {
        name: elec[i],
        votos: 0
      }
      //m.name=elec[i]
      shared.opcionesVotar.push(m)
    }
    cad += '<br>'
    for (var i = 0; i < elec.length; i++) {
      //--> cad+=elec[i]+ ': <span id="candiResult'+i+'"></span> &nbsp;&nbsp;&nbsp;'

    }

  }
  if (st[0] == 'pregunta' || st[0] == 'Pregunta' || st[0] == 'PREGUNTA' || st[0] == 'preguntar' || st[0] == 'Preguntar' || st[0] == 'PREGUNTAR') {
    votosAcero()
    premioAl = []
    shared.opcionesVotar = []
    tituloVotacion = st[1]
    cad += st[1] + '<br>'
    var prem = st[2]
    //if(st[3] !== undefined && st[3]>0){
    if (prem !== undefined && prem.length > 0) {
      premioAl = prem.split(' ')
    }
    cad += '<input type="text" id="resp' + i + 'r" value=" "><br>'
    cad += '<button id="resp' + i + '" onclick="enviaRespuesta(this.id)">' + 'ok' + '</button> '
  }

  if (cad == '') {
    cad = splitext.join('<br>')
  }
  return cad
}

function votaPor(este) {
  if (me.voto == -1) {
    var e = este.split('candi')
    //console.log(shared.opcionesVotar)
    me.voto = int(e[1])
    shared.opcionesVotar[int(e[1])].votos++
  }
}

function cargaVotar() {
  for (var i = 0; i < shared.opcionesVotar.length; i++) {
    if (sahred.opcionesVotar[i].name) {
      //var crs=select('#candi'+i);
      //crs.mouseClicked(console.log(opcionesVotar[i].name));
    }
  }
}

function decide(texto) {

  var imt = texto
  //imageis=imt.match(/\.(jpeg|jpg|gif|png)$/) != null;
  runImage(texto)

  //alert(imageis)


  if (texto.indexOf('http') != -1) {
    var videoid = texto.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    if (videoid != null) {
      //if(texto.indexOf('you')!=-1 && shared.modo!='video'){
      //if(texto.indexOf('you')!=-1 ){  
      solve = yout(texto)
      if (solve == '') {
        return
      }
      carga(solve, 'video')

      return

    } else {
      //var imt=texto
      //imageis=imt.match(/\.(jpeg|jpg|gif|png)$/) != null;
      /* runImage(texto)
      wait(3000)
      //alert(imageis)
       if(imageis){
         solve='<img id="nuestraimagen" src="'+texto+'" height="'+pizarra.h+'px" />'
           carga(solve,'image');
           shared.idvideo=''; 
           return
           */

      //}else{
      solve = linkify(texto)
      shared.idvideo = ''
      carga(solve, 'link')
      return
      // }
    }
  } else {
    var ltexto = buscalineas(texto)
    if (tituloVotacion.length > 0) {
      if (shared.opcionesVotar.length > 0) {
        solve = ltexto
        carga(solve, 'votar')
        shared.idvideo = ''
        //cargaVotar()
        return
      } else {
        solve = ltexto
        carga(solve, 'pregunta')
        shared.idvideo = ''
        //cargaVotar()
        return
      }
    }
    var nlineas = ltexto.split('<br>')
    if (nlineas == 1) {
      solve = '<h2>' + ltexto + '</h2>'
      carga(solve, 'bigtexto')
      shared.idvideo = ''
      return

    } else {
      carga(ltexto, 'texto')
      shared.idvideo = ''
      return
    }
  }

}

function carga(contenido, modo) {
  if (contenido == '') {
    return
  }
  shared.log = contenido
  shared.modo = modo
  console.log(shared.log + '<br> modo: ' + shared.modo)
}

function borratexto() {
  shared.log = ''
  pizarradiv.html('')
  shared.modo = ''
  shared.modoestado = -1
  shared.idvideo = ''
  console.log(shared.log)
  isloadediframe = -1
  idvideoPrev = ''
}
//var onoff = true





function XXXXonYouTubeIframeAPIReady(s) {
  var player;
  player = new YT.Player('iframevideoyout', {
    videoId: s,
    playerVars: {
      'autoplay': 1,
      'controls': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });

}

function onPlayerReady(event, id) {
  var embedCode = event.target.getVideoEmbedCode();
  alert(embedCode)
  event.target.playVideo();
  //if (document.getElementById('embed-code')) {
  //document.getElementById('embed-code').innerHTML = embedCode;
  //}
}

function XXonPlayerReady(event) {
  alert(event.data)
  //event.target.playVideo();
  //player.playVideo();
  /*
          -1 (unstarted, sin empezar)
           0 (ended, finalizado)
          1 (playing, en reproducciÃ³n)
          2 (paused, en pausa)
          3 (almacenando en bÃºfer)
          5 (video cued, video en cola)
          */
  //share.modoestado=1;//-->event.data
  //console.log(event.data)
}

function onPlayerStateChange(event, id) {
  //if (event.data == YT.PlayerState.PLAYING && !done) { setTimeout(stopVideo, 3000);  done = true; }
  //share.modoestado=event.data;//-->event.data
  //alert(event.data)
}

function stopVideo() {
  //player.stopVideo();
  //share.modoestado=-1
}

function playVideo() {
  //player.playVideo();
  //shared.modoestado=1
}
var done = false;

function onPlayerError(event) {
  // document.getElementById("resumen").innerHTML ='Error'

}

function onPlayerPlaybackQualityChange() {}


function onYouTubeIframeAPIReady() {
  var iid = 'iframevideoyout'
  isloadediframe = -1;
  //console.log('idvideo: '+shared.idvideo)
  if (typeof partyIsHost === "function" && shared.idvideo.length > 0) {
    isloadediframe = 1;
    player = new YT.Player(iid, {
      videoId: shared.idvideo,
      playerVars: {
        origin: (window.location.hostname)
      },
      wmode: 'transparent',
      rel: 0,
      events: {
        'onReady': function(event) {
          event.target.playVideo();
         },
        'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
        'onStateChange': function(event) {
          //document.querySelector('#iframevideoyout').contentDocument.body.focus(); 
          //document.getElementById("resumen").innerHTML = 'Estado: '+ event.data+ '<br>'
          shared.modoestado = event.data
          //if(YT.PlayerState.PAUSED){event.target.playVideo();}
          //console.log(event.data); //onPlayerStateChange(event, iid);
        },
        'onError': onPlayerError
      }
    });
    // document.getElementById("resumen").innerHTML =JSON.stringify(player)+  '<br>llega'
  }
}


function yout(url) {
  var s = '<div id="iframevideoyout"></div>'
  if (url == s) {
    return ''
  }
  var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
  if (videoid != null) {
    shared.idvideo = videoid[1]
    idvideoPrev = videoid[1]
    isloadediframe = -1
    return s
    //onYouTubeIframeAPIReady()

  } else {
    return '';
  }
}

function youtu() {
  var s = '<div id="iframevideoyout"></div>'
  pizarradiv.html(s)
  sharedPrev = shared.log
  shared.modo = 'video'
  shared.modoestado = -1
  isloadediframe = -1

}

function linkify(inputText) {
  var replacedText, replacePattern1, replacePattern2, replacePattern3;
  //URLs starting with http://, https://, or ftp://
  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

  //Change email addresses to mailto:: links.
  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
  return replacedText;
}

function pegadaImagen() {
    if(partiNames[me.id].rol>0 || me.palabra==1){
          var clipboardData = event.clipboardData  || event.originalEvent.clipboardData;
          var items =clipboardData.items;
          var blob = null;
          for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") === 0) {
              blob = items[i].getAsFile();
            }
          }
          if (blob !== null) {
                var reader = new FileReader();
                reader.onload = function(event) {
                decide(event.target.result)
            };
            reader.readAsDataURL(blob);
           }else{
              pastedData = clipboardData.getData('text/html');
              shared.log=pastedData
              shared.modo='texto'
          }
    }
}

class Rectangle{
   constructor(x,  y, rectWidth,  rectHeight) {
    this.x = x;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
   }
}
