// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="subtitle">a visual programming environment</span><span id="linkButton">Salva e crea un link ai blocchi.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Esegui il programma</span><span id="resetProgram">Ricomincia</span><span id="codeTooltip">Guarda il codice Javascript generato.</span><span id="linkButton">Salva e crea un link ai blocchi.</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">La richiesta non è stata soddisfatta.</span><span id="blocklyMessage">Blockly</span><span id="linkAlert">Condividi i tuoi blocchi con questo indirizzo:\n\n%1</span><span id="hashError">Mi spiace, \'%1\' non corrisponde con nessun documento di saved Blockly salvato.</span><span id="xmlError">Non è stato possibile caricare il documento.  Forse è stato creato con una versione diversa di Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>' + codepage.start(null, null, opt_ijData) + graphpage.start(null, null, opt_ijData) + mazepage.start(null, null, opt_ijData) + planepage.start(null, null, opt_ijData) + puzzlepage.start(null, null, opt_ijData) + turtlepage.start(null, null, opt_ijData) + ok(null, null, opt_ijData);
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<style type="text/css">#dialog {visibility: hidden; background-color: #fff; color: #000; border: 1px solid #000; position: absolute; border-radius: 8px; box-shadow: 5px 5px 5px #888; padding: 10px;}#dialogBorder {visibility: hidden; position: absolute; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 8px; box-shadow: 5px 5px 5px #888;}#dialogShadow {visibility: hidden; position: absolute; top: 0; left: 0; height: 100%; width: 100%; background-color: #000; opacity: 0.3}.dialogAnimate {transition-property: width height left top opacity; transition-duration: 0.2s;}.dialogHiddenContent {visibility: hidden; position: absolute; top: 0; left: 0; z-index: -1;}</style><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="httpRequestError">La richiesta non è stata soddisfatta.</span><span id="linkAlert">Condividi i tuoi blocchi con questo indirizzo:\n\n%1</span><span id="hashError">Mi spiace, \'%1\' non corrisponde con nessun documento di saved Blockly salvato.</span><span id="xmlError">Non è stato possibile caricare il documento.  Forse è stato creato con una versione diversa di Blockly?</span><span id="moveForward">avanza diritto</span><span id="turnLeft">svolta a sinistra</span><span id="turnRight">svolta a destra</span><span id="doCode">fa\'</span><span id="elseCode">altrimenti</span><span id="pathAhead">se c\'è strada avanti</span><span id="pathLeft">se c\'è strada a sinistra</span><span id="pathRight">se c\'è strada a destra</span><span id="repeatUntil">ripeti sino alla</span><span id="moveForwardTooltip">Avanza la pedina di una casella.</span><span id="turnTooltip">Gira la pedina verso destra o sinistra di 90 gradi.</span><span id="ifTooltip">Se c\'è strada nella direzione indicata, \\nallora fa\' qualcosa. </span><span id="ifelseTooltip">Se c\'è strada nella direzione indicata, \\nAllora esegui la prima serie di azioni. \\nAltrimenti esegui la seconda serie di \\nazioni. </span><span id="whileTooltip">Ripeti l\'azione scelta sino al punto di arrivo.</span><span id="capacity0">Puoi usare altri 0 blocchi.</span><span id="capacity1">Puoi usare altri 1 blocchi.</span><span id="capacity2">Puoi usare altri %1 blocchi.</span><span id="nextLevel">Gaudio! Sei pronto a passare al livello %1?</span><span id="finalLevel">Tripudio! Hai risolto l\'ultimo livello.</span></div>';
};


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = mazepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Labirinto</span> &nbsp; ';
  for (var i201 = 1; i201 < 11; i201++) {
    output += ' ' + ((i201 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i201) + '</span>' : (i201 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i201) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i201) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i201) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i201) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select> &nbsp; <button id="pegmanButton" onmousedown="Maze.showPegmanMenu();"><img src="../../media/1x1.gif"><span>&#x25BE;</span></button></td></tr></table><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Un programma è una sequenza di istruzioni. Impila un paio di blocchi \'avanza diritto\' per aiutarmi a raggiungere l\'arrivo.';
      break;
    case 2:
      output += 'Che passi sono necessari per seguire questa strada?';
      break;
    case 3:
      output += 'I computer hanno una memoria limitata. Raggiungi l\'arrivo usando solo due blocchi. Scegli \'ripeti\' per eseguire un blocco più di una volta.';
      break;
    case 4:
      output += 'Raggiungi l\'obiettivo usando solo cinque blocchi.';
      break;
    case 5:
      output += 'La pedina dovrà girare a sinistra quando non può procedere diritto.';
      break;
    case 6:
      output += 'Con \'se\' l\'azione verrà eseguita solo se la condizione è soddisfatta. Prova a girare a sinistra se c\'è una strada a sinistra.';
      break;
    case 7:
      output += 'Questo labirinto sembra più difficile del precedente, ma non lo è.';
      break;
    case 8:
      output += 'Puoi usare più di una istruzione \'se\'.';
      break;
    case 9:
      output += 'Le istruzioni if-else cercheranno di compiere la prima azione o la seconda.';
      break;
    case 10:
      output += 'Sai risolvere questo labirinto intricato? Prova a seguire il muro di sinistra. Solo per programmatori avanzati!';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button class="notext" title="Guarda il codice Javascript generato." onclick="BlocklyApps.showCode(this);"><img src="../../media/1x1.gif" class="code icon21"></button><button class="notext" id="linkButton" title="Salva e crea un link ai blocchi." onclick="BlocklyStorage.link();"><img src="../../media/1x1.gif" class="link icon21"></button></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();" title="Makes the character do what the blocks say."><img src="../../media/1x1.gif" class="run icon21"> Esegui il programma</button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none" title=Put the character back at the start of the maze.><img src="../../media/1x1.gif" class="stop icon21"> Ricomincia</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + apps.dialog(null, null, opt_ijData) + '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div><div id="dialogOneTopBlock" class="dialogHiddenContent"><div>In questo livello dovrai impilare tutti i blocchi nella zona bianca.</div>' + apps.ok(null, null, opt_ijData) + '</div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
