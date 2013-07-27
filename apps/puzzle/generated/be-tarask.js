// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof puzzlepage == 'undefined') { var puzzlepage = {}; }


puzzlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="country1">Аўстралія</span><span id="country1Flag">flag_au.png</span><span id="country1FlagHeight">50</span><span id="country1FlagWidth">100</span><span id="country1Language">ангельская</span><span id="country1City1">Мэльбурн</span><span id="country1City2">Сыднэй</span><span id="country1HelpUrl">http://be-x-old.wikipedia.org/wiki/Аўстралія</span><span id="country2">Нямеччына</span><span id="country2Flag">flag_de.png</span><span id="country2FlagHeight">60</span><span id="country2FlagWidth">100</span><span id="country2Language">нямецкая</span><span id="country2City1">Бэрлін</span><span id="country2City2">Мюнхэн</span><span id="country2HelpUrl">http://be-x-old.wikipedia.org/wiki/Нямеччына</span><span id="country3">Кітай</span><span id="country3Flag">flag_cn.png</span><span id="country3FlagHeight">66</span><span id="country3FlagWidth">100</span><span id="country3Language">кітайская</span><span id="country3City1">Пэкін</span><span id="country3City2">Шанхай</span><span id="country3HelpUrl">http://be-x-old.wikipedia.org/wiki/Кітай</span><span id="country4">Бразылія</span><span id="country4Flag">flag_br.png</span><span id="country4FlagHeight">70</span><span id="country4FlagWidth">100</span><span id="country4Language">партугальская</span><span id="country4City1">Рыё-дэ-Жанэйра</span><span id="country4City2">Сан-Паўлу</span><span id="country4HelpUrl">http://be-x-old.wikipedia.org/wiki/Бразылія</span><span id="flag">сьцяг</span><span id="language">мова:</span><span id="languageChoose">выберыце...</span><span id="cities">гарады:</span><span id="error0">Выдатна!\nУсе блёкі (%1) зьмешчаныя правільна.</span><span id="error1">Бязмала! Адзін блёк зьмешчаны няправільна.</span><span id="error2">Некалькі блёкаў (%1) зьмешчаныя няправільна.</span><span id="tryAgain">Вылучаны блёк зьмешчаны няправільна.\nСпрабуйце далей.</span></div>';
};


puzzlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1><span id="title"><a href="../index.html">Blockly</a> : Мазгатня</span></h1></td><td style="display: none;"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select>&nbsp; &nbsp;<button id="helpButton" onclick="Puzzle.showHelp(true);">Дапамога</button>&nbsp; &nbsp;<button id="checkButton" class="launch" onclick="Puzzle.checkAnswers();">Праверыць адказы</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div><div id="shadow"></div><div id="helpBorder"></div><div id="help"><div style="padding-bottom: 0.7ex">Далучыце да кожнай краіны (зялёны) яе сьцяг, выберыце яе афіцыйную мову і вызначыце гарады, што ёсьць у гэтай краіне.</div><iframe src="help.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" style="height: 200px; width: 100%; border: none;"></iframe><div class="farSide" style="padding: 1ex 3ex 0"><button id="okButton" onclick="Puzzle.hideHelp(true)">OK</button></div></div>';
};


puzzlepage.help = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div><div id="notouch"></div>';
};
