// Petits schémas SVG fidèles aux descriptions du cours
const SCHEMAS = {
  membrane:
    "<figure class='schema'><svg viewBox='0 0 320 150' xmlns='http://www.w3.org/2000/svg'>" +
    "<rect x='0' y='0' width='320' height='150' fill='#fff8f0'/>" +
    // rangée du haut : têtes vers le haut
    "<g fill='#ff6b57'>" +
    "<circle cx='30' cy='45' r='8'/><circle cx='70' cy='45' r='8'/><circle cx='110' cy='45' r='8'/><circle cx='190' cy='45' r='8'/><circle cx='230' cy='45' r='8'/><circle cx='270' cy='45' r='8'/></g>" +
    "<g stroke='#e0a43c' stroke-width='3'><line x1='26' y1='53' x2='24' y2='78'/><line x1='34' y1='53' x2='36' y2='78'/>" +
    "<line x1='66' y1='53' x2='64' y2='78'/><line x1='74' y1='53' x2='76' y2='78'/>" +
    "<line x1='106' y1='53' x2='104' y2='78'/><line x1='114' y1='53' x2='116' y2='78'/>" +
    "<line x1='186' y1='53' x2='184' y2='78'/><line x1='194' y1='53' x2='196' y2='78'/>" +
    "<line x1='226' y1='53' x2='224' y2='78'/><line x1='234' y1='53' x2='236' y2='78'/>" +
    "<line x1='266' y1='53' x2='264' y2='78'/><line x1='274' y1='53' x2='276' y2='78'/></g>" +
    // rangée du bas : têtes vers le bas
    "<g fill='#ff6b57'><circle cx='30' cy='105' r='8'/><circle cx='70' cy='105' r='8'/><circle cx='110' cy='105' r='8'/><circle cx='190' cy='105' r='8'/><circle cx='230' cy='105' r='8'/><circle cx='270' cy='105' r='8'/></g>" +
    "<g stroke='#e0a43c' stroke-width='3'><line x1='26' y1='97' x2='24' y2='72'/><line x1='34' y1='97' x2='36' y2='72'/>" +
    "<line x1='66' y1='97' x2='64' y2='72'/><line x1='74' y1='97' x2='76' y2='72'/>" +
    "<line x1='106' y1='97' x2='104' y2='72'/><line x1='114' y1='97' x2='116' y2='72'/>" +
    "<line x1='186' y1='97' x2='184' y2='72'/><line x1='194' y1='97' x2='196' y2='72'/>" +
    "<line x1='226' y1='97' x2='224' y2='72'/><line x1='234' y1='97' x2='236' y2='72'/>" +
    "<line x1='266' y1='97' x2='264' y2='72'/><line x1='274' y1='97' x2='276' y2='72'/></g>" +
    // protéine membranaire
    "<rect x='135' y='30' width='40' height='90' rx='18' fill='#5b7fd4'/>" +
    "<text x='155' y='140' font-size='11' fill='#5b7fd4' text-anchor='middle'>protéine</text>" +
    "<text x='45' y='20' font-size='11' fill='#c0492f'>tête hydrophile</text>" +
    "<text x='45' y='70' font-size='11' fill='#a87b1f'>queues hydrophobes</text>" +
    "</svg><figcaption>La mosaïque fluide : bicouche de phospholipides + protéines</figcaption></figure>",

  mitochondrie:
    "<figure class='schema'><svg viewBox='0 0 320 150' xmlns='http://www.w3.org/2000/svg'>" +
    "<rect width='320' height='150' fill='#fff8f0'/>" +
    "<ellipse cx='160' cy='75' rx='130' ry='55' fill='#ffe3d6' stroke='#ff6b57' stroke-width='3'/>" +
    "<path d='M45 75 Q80 45 115 75 Q150 105 185 75 Q220 45 255 75 Q275 95 285 80' fill='none' stroke='#c0492f' stroke-width='3'/>" +
    "<text x='160' y='30' font-size='11' fill='#333' text-anchor='middle'>crêtes internes</text>" +
    "<text x='25' y='75' font-size='10' fill='#333' text-anchor='start'>C₆H₁₂O₆ + O₂</text>" +
    "<text x='320' y='75' font-size='10' fill='#333' text-anchor='end'>CO₂ + H₂O + E</text>" +
    "</svg><figcaption>La mitochondrie : la respiration cellulaire y produit de l'énergie</figcaption></figure>",

  golgi:
    "<figure class='schema'><svg viewBox='0 0 320 150' xmlns='http://www.w3.org/2000/svg'>" +
    "<rect width='320' height='150' fill='#fff8f0'/>" +
    "<g stroke='#5b7fd4' stroke-width='5' fill='none' stroke-linecap='round'>" +
    "<path d='M70 40 Q160 25 250 40'/><path d='M75 62 Q160 47 245 62'/><path d='M80 84 Q160 69 240 84'/><path d='M85 106 Q160 91 235 106'/></g>" +
    "<g fill='#ff6b57'><circle cx='255' cy='35' r='6'/><circle cx='268' cy='55' r='6'/><circle cx='252' cy='100' r='6'/><circle cx='60' cy='120' r='6'/></g>" +
    "<text x='160' y='140' font-size='11' fill='#333' text-anchor='middle'>sacs aplatis empilés + vésicules (bourgeonnement)</text>" +
    "</svg><figcaption>Un dictyosome de l'appareil de Golgi</figcaption></figure>",

  vegetale:
    "<figure class='schema'><svg viewBox='0 0 320 150' xmlns='http://www.w3.org/2000/svg'>" +
    "<rect width='320' height='150' fill='#fff8f0'/>" +
    "<rect x='25' y='15' width='270' height='120' rx='22' fill='#eef7e4' stroke='#4e9b47' stroke-width='4'/>" +
    "<rect x='33' y='22' width='254' height='106' rx='18' fill='none' stroke='#8ac98a' stroke-width='2'/>" +
    "<ellipse cx='90' cy='55' rx='24' ry='12' fill='#4e9b47'/><ellipse cx='145' cy='100' rx='24' ry='12' fill='#4e9b47'/>" +
    "<circle cx='230' cy='75' r='28' fill='#bfe3f7' stroke='#5b9bd4' stroke-width='2'/>" +
    "<text x='90' y='38' font-size='11' fill='#2e6b29'>chloroplastes</text>" +
    "<text x='230' y='79' font-size='11' fill='#2f6da8' text-anchor='middle'>vacuole</text>" +
    "<text x='160' y='145' font-size='11' fill='#333' text-anchor='middle'>enveloppe rigide à l'extérieur</text>" +
    "</svg><figcaption>La cellule végétale : enveloppe, chloroplastes et vacuoles en plus</figcaption></figure>"
};
