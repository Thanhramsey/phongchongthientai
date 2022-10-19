const binhdinh = [
  { lng: 109.125679016113, lat: 13.875018119812 },
  { lng: 109.125587463379, lat: 13.8749923706055 },
  { lng: 109.124801635742, lat: 13.8746938705444 },
  { lng: 109.12419128418, lat: 13.8746290206909 },
  { lng: 109.123588562012, lat: 13.8746948242189 },
  { lng: 109.123291015625, lat: 13.8746957778932 },
  { lng: 109.122749328613, lat: 13.8747606277466 },
  { lng: 109.122032165527, lat: 13.8751039505005 },
  { lng: 109.119888305664, lat: 13.8761205673218 },
  { lng: 109.118408203125, lat: 13.8767757415771 },
  { lng: 109.117942810059, lat: 13.8768415451051 },
  { lng: 109.117202758789, lat: 13.8768415451051 },
  { lng: 109.11669921875, lat: 13.8766460418702 },
  { lng: 109.116333007813, lat: 13.8763189315796 },
  { lng: 109.115928649902, lat: 13.8759918212892 },
  { lng: 109.115631103516, lat: 13.8756647109986 },
  { lng: 109.114959716797, lat: 13.8749780654907 },
  { lng: 109.114517211914, lat: 13.874520301819 },
  { lng: 109.113883972168, lat: 13.8739643096925 },
  { lng: 109.113578796387, lat: 13.87380027771 },
  { lng: 109.112907409668, lat: 13.8736371994018 },
  { lng: 109.112747192383, lat: 13.8736371994018 },
  { lng: 109.11247253418, lat: 13.8737030029298 },
  { lng: 109.1123046875, lat: 13.8737678527833 },
  { lng: 109.112037658691, lat: 13.8740301132203 },
  { lng: 109.111671447754, lat: 13.8744564056398 },
  { lng: 109.111137390137, lat: 13.8751430511475 },
  { lng: 109.110496520996, lat: 13.8757648468018 },
  { lng: 109.109809875488, lat: 13.8762674331664 },
  { lng: 109.109008789062, lat: 13.8767576217651 },
  { lng: 109.108001708984, lat: 13.8776416778564 },
  { lng: 109.107734680176, lat: 13.8779687881469 },
  { lng: 109.105819702148, lat: 13.8802909851075 },
  { lng: 109.104682922363, lat: 13.8813056945801 },
  { lng: 109.104217529297, lat: 13.8815670013428 },
  { lng: 109.104011535645, lat: 13.8816661834718 },
  { lng: 109.103546142578, lat: 13.8817310333253 },
  { lng: 109.103073120117, lat: 13.8817644119263 },
  { lng: 109.102737426758, lat: 13.8817319869996 },
  { lng: 109.102470397949, lat: 13.8816986083985 },
  { lng: 109.102066040039, lat: 13.8815355300903 },
  { lng: 109.101699829102, lat: 13.8813400268556 },
  { lng: 109.101432800293, lat: 13.8811111450196 },
  { lng: 109.101196289062, lat: 13.8809146881104 },
  { lng: 109.100929260254, lat: 13.8806533813477 },
  { lng: 109.100227355957, lat: 13.8798694610597 },
  { lng: 109.099456787109, lat: 13.8791494369507 },
  { lng: 109.098480224609, lat: 13.8783321380615 },
  { lng: 109.096900939941, lat: 13.8773517608643 },
  { lng: 109.096214294434, lat: 13.8770523071289 },
  { lng: 109.095939636231, lat: 13.8770999908447 },
  { lng: 109.095428466797, lat: 13.8774147033692 },
  { lng: 109.095039367676, lat: 13.8776607513429 },
  { lng: 109.094566345215, lat: 13.878044128418 },
  { lng: 109.093132019043, lat: 13.8796300888063 },
  { lng: 109.091819763184, lat: 13.8808326721192 },
  { lng: 109.091178894043, lat: 13.8811883926393 },
  { lng: 109.090827941895, lat: 13.881311416626 },
  { lng: 109.090240478516, lat: 13.8812017440796 },
  { lng: 109.089408874512, lat: 13.8811082839967 },
  { lng: 109.089408874512, lat: 13.8813009262086 },
  { lng: 109.089424133301, lat: 13.8814239501953 },
  { lng: 109.089477539063, lat: 13.8815822601318 },
  { lng: 109.089744567871, lat: 13.8820209503174 },
  { lng: 109.090759277344, lat: 13.8831968307495 },
  { lng: 109.090789794922, lat: 13.8834075927735 },
  { lng: 109.090774536133, lat: 13.8834953308106 },
  { lng: 109.090667724609, lat: 13.8837585449219 },
  { lng: 109.090591430664, lat: 13.8841276168823 },
  { lng: 109.090576171875, lat: 13.8842859268188 },
  { lng: 109.090591430664, lat: 13.8844261169434 },
  { lng: 109.09073638916, lat: 13.8848123550416 },
  { lng: 109.090850830078, lat: 13.8850231170654 },
  { lng: 109.090934753418, lat: 13.885181427002 },
  { lng: 109.091079711914, lat: 13.8853740692139 },
  { lng: 109.091247558594, lat: 13.8855848312378 },
  { lng: 109.09147644043, lat: 13.8858308792115 },
  { lng: 109.091728210449, lat: 13.8860769271852 },
  { lng: 109.092109680176, lat: 13.886498451233 },
  { lng: 109.092346191406, lat: 13.886778831482 },
  { lng: 109.092506408691, lat: 13.8869724273681 },
  { lng: 109.092651367188, lat: 13.8871831893921 },
  { lng: 109.0927734375, lat: 13.8874111175538 },
  { lng: 109.092880249023, lat: 13.8876209259034 },
  { lng: 109.092971801758, lat: 13.887866973877 },
  { lng: 109.09302520752, lat: 13.8880434036255 },
  { lng: 109.093048095703, lat: 13.8882007598878 },
  { lng: 109.093048095703, lat: 13.8887281417847 },
  { lng: 109.092994689941, lat: 13.8899192810059 },
  { lng: 109.092803955078, lat: 13.8906230926514 },
  { lng: 109.094184875488, lat: 13.8910093307495 },
  { lng: 109.09481048584, lat: 13.8912935256958 },
  { lng: 109.095016479492, lat: 13.8915395736694 },
  { lng: 109.095184326172, lat: 13.8919067382812 },
  { lng: 109.095314025879, lat: 13.8923568725587 },
  { lng: 109.095771789551, lat: 13.8928470611573 },
  { lng: 109.09627532959, lat: 13.8931741714478 },
  { lng: 109.096946716309, lat: 13.8934192657472 },
  { lng: 109.097366333008, lat: 13.893500328064 },
  { lng: 109.098289489746, lat: 13.8935413360596 },
  { lng: 109.099128723145, lat: 13.8935813903809 },
  { lng: 109.100425720215, lat: 13.8935403823853 },
  { lng: 109.100883483887, lat: 13.8935403823853 },
  { lng: 109.101226806641, lat: 13.8935813903809 },
  { lng: 109.101554870605, lat: 13.8939476013184 },
  { lng: 109.101722717285, lat: 13.8940706253053 },
  { lng: 109.101890563965, lat: 13.8941516876221 },
  { lng: 109.102058410645, lat: 13.8941926956177 },
  { lng: 109.102439880371, lat: 13.8941926956177 },
  { lng: 109.102729797363, lat: 13.8941106796266 },
  { lng: 109.10302734375, lat: 13.8939065933228 },
  { lng: 109.103569030762, lat: 13.8929262161256 },
  { lng: 109.103691101074, lat: 13.8924350738526 },
  { lng: 109.103569030762, lat: 13.8919858932495 },
  { lng: 109.103569030762, lat: 13.8917808532714 },
  { lng: 109.103652954102, lat: 13.8916997909546 },
  { lng: 109.104026794434, lat: 13.8913717269898 },
  { lng: 109.10457611084, lat: 13.8910036087037 },
  { lng: 109.104782104492, lat: 13.8908004760742 },
  { lng: 109.105163574219, lat: 13.8907184600831 },
  { lng: 109.105415344238, lat: 13.8907184600831 },
  { lng: 109.105621337891, lat: 13.8907594680787 },
  { lng: 109.10587310791, lat: 13.8913717269898 },
  { lng: 109.106002807617, lat: 13.8914527893066 },
  { lng: 109.10620880127, lat: 13.8915348052978 },
  { lng: 109.106712341309, lat: 13.8914937973022 },
  { lng: 109.107048034668, lat: 13.8913707733155 },
  { lng: 109.107803344727, lat: 13.8909616470337 },
  { lng: 109.108390808106, lat: 13.8907575607301 },
  { lng: 109.108642578125, lat: 13.8907165527345 },
  { lng: 109.10888671875, lat: 13.8907165527345 },
  { lng: 109.109390258789, lat: 13.8908796310425 },
  { lng: 109.111366271973, lat: 13.8922681808472 },
  { lng: 109.113288879395, lat: 13.894024848938 },
  { lng: 109.11442565918, lat: 13.8948822021486 },
  { lng: 109.115135192871, lat: 13.8954544067384 },
  { lng: 109.115699768066, lat: 13.8956050872804 },
  { lng: 109.116340637207, lat: 13.8955183029176 },
  { lng: 109.117042541504, lat: 13.8952894210816 },
  { lng: 109.117828369141, lat: 13.8950777053833 },
  { lng: 109.118515014649, lat: 13.895058631897 },
  { lng: 109.119003295898, lat: 13.8950576782227 },
  { lng: 109.11939239502, lat: 13.8950386047363 },
  { lng: 109.120040893555, lat: 13.8950386047363 },
  { lng: 109.120239257812, lat: 13.895076751709 },
  { lng: 109.121276855469, lat: 13.8954973220825 },
  { lng: 109.121742248535, lat: 13.8956880569458 },
  { lng: 109.122093200684, lat: 13.8957643508912 },
  { lng: 109.122566223145, lat: 13.8958396911621 },
  { lng: 109.123611450195, lat: 13.8961954116822 },
  { lng: 109.123809814453, lat: 13.8963289260865 },
  { lng: 109.123886108398, lat: 13.8963098526001 },
  { lng: 109.123970031738, lat: 13.8960418701173 },
  { lng: 109.123947143555, lat: 13.8956031799316 },
  { lng: 109.123924255371, lat: 13.8948192596436 },
  { lng: 109.123947143555, lat: 13.8937129974366 },
  { lng: 109.123588562012, lat: 13.8936471939087 },
  { lng: 109.121612548828, lat: 13.893648147583 },
  { lng: 109.120971679688, lat: 13.8936004638671 },
  { lng: 109.120727539063, lat: 13.8934545516968 },
  { lng: 109.120574951172, lat: 13.8932142257691 },
  { lng: 109.120452880859, lat: 13.8920812606812 },
  { lng: 109.120498657227, lat: 13.8905849456788 },
  { lng: 109.120552062988, lat: 13.8900547027588 },
  { lng: 109.121040344238, lat: 13.8883180618287 },
  { lng: 109.121536254883, lat: 13.8871612548828 },
  { lng: 109.121879577637, lat: 13.8867740631103 },
  { lng: 109.122276306152, lat: 13.8864364624024 },
  { lng: 109.125045776367, lat: 13.8854703903198 },
  { lng: 109.12760925293, lat: 13.8848581314087 },
  { lng: 109.127288818359, lat: 13.8831996917726 },
  { lng: 109.126396179199, lat: 13.8814306259155 },
  { lng: 109.126159667969, lat: 13.8808956146241 },
  { lng: 109.125846862793, lat: 13.8804960250854 },
  { lng: 109.125640869141, lat: 13.880295753479 },
  { lng: 109.125541687012, lat: 13.8801622390747 },
  { lng: 109.125503540039, lat: 13.8800287246705 },
  { lng: 109.125541687012, lat: 13.8799619674683 },
  { lng: 109.125747680664, lat: 13.8797941207886 },
  { lng: 109.125984191895, lat: 13.8796281814575 },
  { lng: 109.126052856445, lat: 13.8792934417725 },
  { lng: 109.126022338867, lat: 13.8784589767456 },
  { lng: 109.125747680664, lat: 13.876955986023 },
  { lng: 109.12557220459, lat: 13.8761224746704 },
  { lng: 109.12557220459, lat: 13.875286102295 },
  { lng: 109.125679016113, lat: 13.875018119812 },
];

export default binhdinh;