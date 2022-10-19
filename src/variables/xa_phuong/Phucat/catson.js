const catson = [
  { lng: 108.987846374512, lat: 14.1640405654908 },
  { lng: 108.988212585449, lat: 14.163166999817 },
  { lng: 108.989151000977, lat: 14.1612148284912 },
  { lng: 108.989936828613, lat: 14.1591548919678 },
  { lng: 108.990249633789, lat: 14.157494544983 },
  { lng: 108.990249633789, lat: 14.1567869186402 },
  { lng: 108.990043640137, lat: 14.1562795639038 },
  { lng: 108.989730834961, lat: 14.1559114456177 },
  { lng: 108.988945007324, lat: 14.1554193496705 },
  { lng: 108.988189697266, lat: 14.1547431945801 },
  { lng: 108.985855102539, lat: 14.1525287628174 },
  { lng: 108.985252380371, lat: 14.1520671844483 },
  { lng: 108.985176086426, lat: 14.1517753601074 },
  { lng: 108.985298156738, lat: 14.151406288147 },
  { lng: 108.986404418945, lat: 14.1504220962525 },
  { lng: 108.987411499023, lat: 14.14910030365 },
  { lng: 108.987693786621, lat: 14.1485471725464 },
  { lng: 108.987899780273, lat: 14.1472091674805 },
  { lng: 108.987930297852, lat: 14.1450567245484 },
  { lng: 108.987968444824, lat: 14.1448106765748 },
  { lng: 108.989448547363, lat: 14.1438579559326 },
  { lng: 108.990013122559, lat: 14.1432428359986 },
  { lng: 108.990264892578, lat: 14.1427202224732 },
  { lng: 108.990379333496, lat: 14.1421518325805 },
  { lng: 108.990409851074, lat: 14.1412601470947 },
  { lng: 108.990188598633, lat: 14.139323234558 },
  { lng: 108.989860534668, lat: 14.1372776031494 },
  { lng: 108.989730834961, lat: 14.1361713409424 },
  { lng: 108.989761352539, lat: 14.1354951858521 },
  { lng: 108.990142822266, lat: 14.1347875595093 },
  { lng: 108.990898132324, lat: 14.1337728500366 },
  { lng: 108.992240905762, lat: 14.1323738098145 },
  { lng: 108.993125915527, lat: 14.1315126419069 },
  { lng: 108.993408203125, lat: 14.1309289932251 },
  { lng: 108.993598937988, lat: 14.1303138732911 },
  { lng: 108.993850708008, lat: 14.1295757293702 },
  { lng: 108.995063781738, lat: 14.1277160644532 },
  { lng: 108.996322631836, lat: 14.1255331039429 },
  { lng: 108.99723815918, lat: 14.1243028640747 },
  { lng: 108.997398376465, lat: 14.1237192153931 },
  { lng: 108.997398376465, lat: 14.1231651306152 },
  { lng: 108.99723815918, lat: 14.1225805282593 },
  { lng: 108.996910095215, lat: 14.1219806671143 },
  { lng: 108.996437072754, lat: 14.1210269927979 },
  { lng: 108.996185302734, lat: 14.1200752258302 },
  { lng: 108.996185302734, lat: 14.1189060211181 },
  { lng: 108.996337890625, lat: 14.1182289123535 },
  { lng: 108.996704101562, lat: 14.1173839569092 },
  { lng: 108.997016906738, lat: 14.1156616210938 },
  { lng: 108.997299194336, lat: 14.1149244308471 },
  { lng: 108.999031066895, lat: 14.1120128631592 },
  { lng: 108.999694824219, lat: 14.1105928421021 },
  { lng: 108.999908447266, lat: 14.1092433929444 },
  { lng: 109.000282287598, lat: 14.1083126068115 },
  { lng: 109.00074005127, lat: 14.1074123382568 },
  { lng: 109.000953674316, lat: 14.1069622039796 },
  { lng: 109.001045227051, lat: 14.1065416336061 },
  { lng: 109.000923156738, lat: 14.1054916381835 },
  { lng: 109.000846862793, lat: 14.1048469543457 },
  { lng: 109.000846862793, lat: 14.1041269302369 },
  { lng: 109.000999450684, lat: 14.1036167144777 },
  { lng: 109.001312255859, lat: 14.1035270690918 },
  { lng: 109.001647949219, lat: 14.1035566329957 },
  { lng: 109.002235412598, lat: 14.1039171218872 },
  { lng: 109.002815246582, lat: 14.1040067672731 },
  { lng: 109.003128051758, lat: 14.1039772033692 },
  { lng: 109.00325012207, lat: 14.1038570404053 },
  { lng: 109.003341674805, lat: 14.10346698761 },
  { lng: 109.003372192383, lat: 14.1027460098267 },
  { lng: 109.002967834473, lat: 14.1019058227539 },
  { lng: 109.002075195313, lat: 14.1007661819459 },
  { lng: 109.001708984375, lat: 14.1001663208007 },
  { lng: 109.001556396484, lat: 14.0995664596558 },
  { lng: 109.001388549805, lat: 14.0989513397218 },
  { lng: 109.001358032227, lat: 14.0987110137939 },
  { lng: 109.001388549805, lat: 14.0985612869262 },
  { lng: 109.000640869141, lat: 14.0976505279542 },
  { lng: 109.000450134277, lat: 14.0968770980836 },
  { lng: 109.000427246094, lat: 14.0963478088379 },
  { lng: 109.000854492187, lat: 14.0953845977784 },
  { lng: 109.001335144043, lat: 14.0940828323365 },
  { lng: 109.001495361328, lat: 14.0932521820068 },
  { lng: 109.001152038574, lat: 14.0921115875245 },
  { lng: 109.000923156738, lat: 14.0913000106812 },
  { lng: 109.000816345215, lat: 14.0910615921021 },
  { lng: 108.998893737793, lat: 14.0905895233154 },
  { lng: 108.99690246582, lat: 14.0901536941529 },
  { lng: 108.995101928711, lat: 14.0898685455323 },
  { lng: 108.993835449219, lat: 14.0897235870361 },
  { lng: 108.992851257324, lat: 14.0899047851562 },
  { lng: 108.991752624512, lat: 14.0902681350709 },
  { lng: 108.989219665527, lat: 14.0908489227295 },
  { lng: 108.98819732666, lat: 14.0910120010377 },
  { lng: 108.987678527832, lat: 14.0911436080933 },
  { lng: 108.987075805664, lat: 14.0895462036133 },
  { lng: 108.986961364746, lat: 14.0888013839722 },
  { lng: 108.98624420166, lat: 14.0899410247803 },
  { lng: 108.984939575195, lat: 14.0917310714722 },
  { lng: 108.983757019043, lat: 14.0935773849487 },
  { lng: 108.983291625977, lat: 14.0942611694336 },
  { lng: 108.983192443848, lat: 14.0943431854249 },
  { lng: 108.981414794922, lat: 14.095890045166 },
  { lng: 108.980850219727, lat: 14.0968017578126 },
  { lng: 108.980247497559, lat: 14.0983648300172 },
  { lng: 108.979827880859, lat: 14.0999126434326 },
  { lng: 108.979331970215, lat: 14.1008863449097 },
  { lng: 108.978782653809, lat: 14.1003971099853 },
  { lng: 108.977699279785, lat: 14.0993413925172 },
  { lng: 108.976974487305, lat: 14.0985832214355 },
  { lng: 108.976089477539, lat: 14.0979824066163 },
  { lng: 108.975021362305, lat: 14.0977087020874 },
  { lng: 108.974159240723, lat: 14.0970420837402 },
  { lng: 108.972564697266, lat: 14.0966367721558 },
  { lng: 108.972053527832, lat: 14.0964393615722 },
  { lng: 108.971870422363, lat: 14.0964393615722 },
  { lng: 108.971641540527, lat: 14.0964994430543 },
  { lng: 108.97144317627, lat: 14.0966186523438 },
  { lng: 108.970901489258, lat: 14.0970001220704 },
  { lng: 108.970207214355, lat: 14.0976409912111 },
  { lng: 108.969566345215, lat: 14.0981616973877 },
  { lng: 108.968872070312, lat: 14.0987234115601 },
  { lng: 108.968353271484, lat: 14.0988626480103 },
  { lng: 108.967964172363, lat: 14.0988626480103 },
  { lng: 108.967514038086, lat: 14.0987634658814 },
  { lng: 108.966896057129, lat: 14.0987434387207 },
  { lng: 108.966606140137, lat: 14.098822593689 },
  { lng: 108.966079711914, lat: 14.0990142822265 },
  { lng: 108.965019226074, lat: 14.0987224578859 },
  { lng: 108.964698791504, lat: 14.0984201431276 },
  { lng: 108.964401245117, lat: 14.0975723266602 },
  { lng: 108.964164733887, lat: 14.0972423553466 },
  { lng: 108.963676452637, lat: 14.0970535278321 },
  { lng: 108.96280670166, lat: 14.0970296859742 },
  { lng: 108.96167755127, lat: 14.0969123840333 },
  { lng: 108.961212158203, lat: 14.0970058441163 },
  { lng: 108.960632324219, lat: 14.0972890853882 },
  { lng: 108.960098266602, lat: 14.0972585678102 },
  { lng: 108.959281921387, lat: 14.0969219207764 },
  { lng: 108.957763671875, lat: 14.0963964462281 },
  { lng: 108.956588745117, lat: 14.0962362289429 },
  { lng: 108.955795288086, lat: 14.0962591171265 },
  { lng: 108.954811096191, lat: 14.0965099334717 },
  { lng: 108.95386505127, lat: 14.0970916748048 },
  { lng: 108.952789306641, lat: 14.0973882675171 },
  { lng: 108.951690673828, lat: 14.0974349975587 },
  { lng: 108.949935913086, lat: 14.0973434448242 },
  { lng: 108.948318481445, lat: 14.0972509384156 },
  { lng: 108.947357177734, lat: 14.0972738265991 },
  { lng: 108.946762084961, lat: 14.0975818634033 },
  { lng: 108.945617675781, lat: 14.0990190505982 },
  { lng: 108.944747924805, lat: 14.1003198623658 },
  { lng: 108.943672180176, lat: 14.1023740768433 },
  { lng: 108.942802429199, lat: 14.1039943695068 },
  { lng: 108.94189453125, lat: 14.1053857803345 },
  { lng: 108.941329956055, lat: 14.1058416366578 },
  { lng: 108.940628051758, lat: 14.1060934066772 },
  { lng: 108.939994812012, lat: 14.1062068939208 },
  { lng: 108.939109802246, lat: 14.1062526702881 },
  { lng: 108.938034057617, lat: 14.1062984466553 },
  { lng: 108.936721801758, lat: 14.1064119338989 },
  { lng: 108.935852050781, lat: 14.1067953109742 },
  { lng: 108.935127258301, lat: 14.1072969436647 },
  { lng: 108.934516906738, lat: 14.1078214645387 },
  { lng: 108.933631896973, lat: 14.1088695526124 },
  { lng: 108.932762145996, lat: 14.1094398498535 },
  { lng: 108.932151794434, lat: 14.1096897125245 },
  { lng: 108.931076049805, lat: 14.1098947525026 },
  { lng: 108.930397033691, lat: 14.1102600097656 },
  { lng: 108.929817199707, lat: 14.1108760833741 },
  { lng: 108.928924560547, lat: 14.1120033264161 },
  { lng: 108.927154541016, lat: 14.1145887374878 },
  { lng: 108.926078796387, lat: 14.1161527633668 },
  { lng: 108.924743652344, lat: 14.1177825927735 },
  { lng: 108.924011230469, lat: 14.1183042526246 },
  { lng: 108.923141479492, lat: 14.1185646057128 },
  { lng: 108.921531677246, lat: 14.1188898086548 },
  { lng: 108.919731140137, lat: 14.1188888549805 },
  { lng: 108.918663024902, lat: 14.1186933517457 },
  { lng: 108.916389465332, lat: 14.1180410385133 },
  { lng: 108.914680480957, lat: 14.1178121566773 },
  { lng: 108.912605285645, lat: 14.1178760528565 },
  { lng: 108.912139892578, lat: 14.1178760528565 },
  { lng: 108.911270141602, lat: 14.1180057525635 },
  { lng: 108.910133361816, lat: 14.1185932159424 },
  { lng: 108.908325195313, lat: 14.1197652816774 },
  { lng: 108.907463073731, lat: 14.120677947998 },
  { lng: 108.906723022461, lat: 14.1218509674073 },
  { lng: 108.905456542969, lat: 14.1237411499024 },
  { lng: 108.904586791992, lat: 14.1243267059326 },
  { lng: 108.903648376465, lat: 14.1245880126953 },
  { lng: 108.901840209961, lat: 14.1249780654907 },
  { lng: 108.89820098877, lat: 14.1257801055908 },
  { lng: 108.898002624512, lat: 14.1261329650879 },
  { lng: 108.897750854492, lat: 14.1270866394044 },
  { lng: 108.897750854492, lat: 14.127947807312 },
  { lng: 108.897872924805, lat: 14.1289329528809 },
  { lng: 108.898216247559, lat: 14.1300401687622 },
  { lng: 108.898582458496, lat: 14.1307306289673 },
  { lng: 108.898704528809, lat: 14.1312236785889 },
  { lng: 108.89867401123, lat: 14.1316242218019 },
  { lng: 108.898452758789, lat: 14.1323623657228 },
  { lng: 108.898040771484, lat: 14.1327619552613 },
  { lng: 108.897506713867, lat: 14.1330871582032 },
  { lng: 108.895973205566, lat: 14.1331653594972 },
  { lng: 108.894958496094, lat: 14.1329183578492 },
  { lng: 108.894424438477, lat: 14.1325683593751 },
  { lng: 108.894241333008, lat: 14.1323137283325 },
  { lng: 108.89395904541, lat: 14.132067680359 },
  { lng: 108.893516540527, lat: 14.1320056915284 },
  { lng: 108.891624450684, lat: 14.1323127746582 },
  { lng: 108.89070892334, lat: 14.13258934021 },
  { lng: 108.889358520508, lat: 14.1331729888917 },
  { lng: 108.888916015625, lat: 14.133264541626 },
  { lng: 108.888519287109, lat: 14.1332187652588 },
  { lng: 108.887794494629, lat: 14.1326646804811 },
  { lng: 108.887512207031, lat: 14.1323881149293 },
  { lng: 108.887100219727, lat: 14.1323261260987 },
  { lng: 108.886878967285, lat: 14.132511138916 },
  { lng: 108.88671875, lat: 14.1329097747802 },
  { lng: 108.886497497559, lat: 14.1336183547975 },
  { lng: 108.886215209961, lat: 14.1339254379272 },
  { lng: 108.885208129883, lat: 14.1342935562135 },
  { lng: 108.882873535156, lat: 14.1348457336426 },
  { lng: 108.882461547852, lat: 14.1348457336426 },
  { lng: 108.881927490234, lat: 14.1346607208253 },
  { lng: 108.881324768066, lat: 14.1342296600343 },
  { lng: 108.880462646484, lat: 14.1333532333374 },
  { lng: 108.880020141602, lat: 14.1331071853638 },
  { lng: 108.879386901855, lat: 14.1328296661376 },
  { lng: 108.87850189209, lat: 14.1326446533203 },
  { lng: 108.877372741699, lat: 14.1323976516724 },
  { lng: 108.876800537109, lat: 14.1320600509645 },
  { lng: 108.876075744629, lat: 14.1316900253296 },
  { lng: 108.875160217285, lat: 14.1314134597778 },
  { lng: 108.874824523926, lat: 14.1312494277955 },
  { lng: 108.874862670898, lat: 14.1314144134521 },
  { lng: 108.874893188477, lat: 14.1318845748901 },
  { lng: 108.874847412109, lat: 14.1327171325684 },
  { lng: 108.874748229981, lat: 14.1342554092408 },
  { lng: 108.874588012695, lat: 14.1353540420533 },
  { lng: 108.874328613281, lat: 14.1360759735108 },
  { lng: 108.873977661133, lat: 14.1366100311279 },
  { lng: 108.873397827149, lat: 14.1371116638184 },
  { lng: 108.873077392578, lat: 14.1372365951539 },
  { lng: 108.871948242188, lat: 14.137173652649 },
  { lng: 108.87036895752, lat: 14.1369218826294 },
  { lng: 108.869560241699, lat: 14.1369209289551 },
  { lng: 108.869239807129, lat: 14.1371097564698 },
  { lng: 108.868293762207, lat: 14.1386318206787 },
  { lng: 108.867965698242, lat: 14.1392278671264 },
  { lng: 108.867874145508, lat: 14.1397619247438 },
  { lng: 108.867965698242, lat: 14.140233039856 },
  { lng: 108.868225097656, lat: 14.1409873962403 },
  { lng: 108.868644714356, lat: 14.1423997879029 },
  { lng: 108.868705749512, lat: 14.1430912017823 },
  { lng: 108.868537902832, lat: 14.1432571411132 },
  { lng: 108.86986541748, lat: 14.1444597244263 },
  { lng: 108.870704650879, lat: 14.1451816558839 },
  { lng: 108.871215820312, lat: 14.1456851959229 },
  { lng: 108.872055053711, lat: 14.1465635299684 },
  { lng: 108.872276306152, lat: 14.1469411849976 },
  { lng: 108.872444152832, lat: 14.1475677490235 },
  { lng: 108.872344970703, lat: 14.1480703353882 },
  { lng: 108.872184753418, lat: 14.1491060256957 },
  { lng: 108.872184753418, lat: 14.1498279571533 },
  { lng: 108.872245788574, lat: 14.1508321762086 },
  { lng: 108.872634887695, lat: 14.1518678665162 },
  { lng: 108.87272644043, lat: 14.1528406143188 },
  { lng: 108.872650146484, lat: 14.1533327102661 },
  { lng: 108.872360229492, lat: 14.1536159515381 },
  { lng: 108.871490478516, lat: 14.1539287567139 },
  { lng: 108.871032714844, lat: 14.1541166305543 },
  { lng: 108.870910644531, lat: 14.1543064117432 },
  { lng: 108.871032714844, lat: 14.1546506881714 },
  { lng: 108.871452331543, lat: 14.1552801132202 },
  { lng: 108.87190246582, lat: 14.15615940094 },
  { lng: 108.872131347656, lat: 14.1566619873047 },
  { lng: 108.872222900391, lat: 14.1572580337524 },
  { lng: 108.872161865234, lat: 14.1576347351075 },
  { lng: 108.871368408203, lat: 14.1582164764405 },
  { lng: 108.870018005371, lat: 14.1591262817383 },
  { lng: 108.869537353516, lat: 14.1595973968507 },
  { lng: 108.869209289551, lat: 14.1601934432985 },
  { lng: 108.869117736816, lat: 14.1606636047364 },
  { lng: 108.86930847168, lat: 14.1610727310181 },
  { lng: 108.869598388672, lat: 14.1613235473633 },
  { lng: 108.870208740234, lat: 14.1616382598877 },
  { lng: 108.871307373047, lat: 14.1618270874023 },
  { lng: 108.872177124023, lat: 14.1621112823487 },
  { lng: 108.873077392578, lat: 14.1624250411987 },
  { lng: 108.873733520508, lat: 14.1626920700074 },
  { lng: 108.874092102051, lat: 14.1630067825319 },
  { lng: 108.87451171875, lat: 14.1637287139892 },
  { lng: 108.874702453613, lat: 14.1641063690186 },
  { lng: 108.874641418457, lat: 14.1647033691407 },
  { lng: 108.874153137207, lat: 14.1656446456909 },
  { lng: 108.874183654785, lat: 14.1658964157104 },
  { lng: 108.87434387207, lat: 14.1661787033082 },
  { lng: 108.874473571777, lat: 14.1662101745607 },
  { lng: 108.874893188477, lat: 14.1660852432252 },
  { lng: 108.875213623047, lat: 14.1658020019531 },
  { lng: 108.875701904297, lat: 14.165111541748 },
  { lng: 108.876312255859, lat: 14.1641073226929 },
  { lng: 108.877090454102, lat: 14.1626634597778 },
  { lng: 108.877471923828, lat: 14.1620979309082 },
  { lng: 108.877891540527, lat: 14.1617212295533 },
  { lng: 108.878509521484, lat: 14.1611557006837 },
  { lng: 108.879089355469, lat: 14.1606845855713 },
  { lng: 108.879631042481, lat: 14.1603717803956 },
  { lng: 108.879920959473, lat: 14.1601829528809 },
  { lng: 108.88011932373, lat: 14.1599626541139 },
  { lng: 108.880279541016, lat: 14.1594610214233 },
  { lng: 108.880470275879, lat: 14.1587696075439 },
  { lng: 108.880844116211, lat: 14.1582517623901 },
  { lng: 108.881744384766, lat: 14.1572790145875 },
  { lng: 108.882873535156, lat: 14.1562118530275 },
  { lng: 108.883354187012, lat: 14.1557722091675 },
  { lng: 108.883712768555, lat: 14.1555528640748 },
  { lng: 108.884063720703, lat: 14.1555528640748 },
  { lng: 108.88419342041, lat: 14.1557731628418 },
  { lng: 108.884223937988, lat: 14.1564321517944 },
  { lng: 108.884162902832, lat: 14.1578464508057 },
  { lng: 108.88419342041, lat: 14.1584739685059 },
  { lng: 108.884353637695, lat: 14.1594467163087 },
  { lng: 108.884704589844, lat: 14.1601390838624 },
  { lng: 108.88525390625, lat: 14.1607351303102 },
  { lng: 108.885803222656, lat: 14.1610498428345 },
  { lng: 108.88680267334, lat: 14.1612701416016 },
  { lng: 108.887413024902, lat: 14.1615533828736 },
  { lng: 108.887962341309, lat: 14.1620235443116 },
  { lng: 108.888107299805, lat: 14.1625108718872 },
  { lng: 108.888107299805, lat: 14.1631708145142 },
  { lng: 108.887878417969, lat: 14.1639556884766 },
  { lng: 108.887908935547, lat: 14.1647090911866 },
  { lng: 108.888298034668, lat: 14.1654949188234 },
  { lng: 108.888557434082, lat: 14.1660289764405 },
  { lng: 108.888549804688, lat: 14.1667203903199 },
  { lng: 108.888732910156, lat: 14.1672687530518 },
  { lng: 108.88892364502, lat: 14.167489051819 },
  { lng: 108.889602661133, lat: 14.1678981781006 },
  { lng: 108.890243530273, lat: 14.1683378219604 },
  { lng: 108.890594482422, lat: 14.1686840057374 },
  { lng: 108.890884399414, lat: 14.1692180633545 },
  { lng: 108.890953063965, lat: 14.1697826385498 },
  { lng: 108.891212463379, lat: 14.1716051101684 },
  { lng: 108.891319274902, lat: 14.1736927032471 },
  { lng: 108.891578674316, lat: 14.1746673583985 },
  { lng: 108.892028808594, lat: 14.175452232361 },
  { lng: 108.892997741699, lat: 14.1767721176149 },
  { lng: 108.893623352051, lat: 14.1779184341431 },
  { lng: 108.893814086914, lat: 14.179048538208 },
  { lng: 108.894134521484, lat: 14.1796140670776 },
  { lng: 108.894653320312, lat: 14.1801166534423 },
  { lng: 108.896614074707, lat: 14.1810913085938 },
  { lng: 108.897933959961, lat: 14.1818141937256 },
  { lng: 108.898307800293, lat: 14.1821441650392 },
  { lng: 108.898696899414, lat: 14.1826467514039 },
  { lng: 108.899017333984, lat: 14.1836833953857 },
  { lng: 108.899307250977, lat: 14.18550491333 },
  { lng: 108.899589538574, lat: 14.187671661377 },
  { lng: 108.899444580078, lat: 14.1901063919067 },
  { lng: 108.899482727051, lat: 14.190954208374 },
  { lng: 108.899604797363, lat: 14.1914558410645 },
  { lng: 108.899833679199, lat: 14.1918649673462 },
  { lng: 108.900184631348, lat: 14.1922416687012 },
  { lng: 108.900688171387, lat: 14.1925401687623 },
  { lng: 108.901489257812, lat: 14.1927289962768 },
  { lng: 108.90242767334, lat: 14.1927614212037 },
  { lng: 108.903007507324, lat: 14.1927614212037 },
  { lng: 108.903556823731, lat: 14.1928873062133 },
  { lng: 108.904457092285, lat: 14.1934843063356 },
  { lng: 108.904907226562, lat: 14.1937990188599 },
  { lng: 108.905418395996, lat: 14.1939868927003 },
  { lng: 108.906097412109, lat: 14.1941127777101 },
  { lng: 108.906936645508, lat: 14.1939563751221 },
  { lng: 108.907806396484, lat: 14.1936111450195 },
  { lng: 108.912673950195, lat: 14.1939582824707 },
  { lng: 108.914733886719, lat: 14.1939907073975 },
  { lng: 108.91650390625, lat: 14.1941795349122 },
  { lng: 108.917083740234, lat: 14.1942110061646 },
  { lng: 108.918243408203, lat: 14.1942119598389 },
  { lng: 108.918632507324, lat: 14.1942749023438 },
  { lng: 108.919021606445, lat: 14.1945571899415 },
  { lng: 108.919662475586, lat: 14.1951541900636 },
  { lng: 108.920051574707, lat: 14.1955003738403 },
  { lng: 108.920692443848, lat: 14.1958141326905 },
  { lng: 108.921241760254, lat: 14.1959705352783 },
  { lng: 108.922210693359, lat: 14.196002960205 },
  { lng: 108.922882080078, lat: 14.1959724426271 },
  { lng: 108.923675537109, lat: 14.1958312988282 },
  { lng: 108.924575805664, lat: 14.1954860687255 },
  { lng: 108.925704956055, lat: 14.1948575973511 },
  { lng: 108.926544189453, lat: 14.1944808959962 },
  { lng: 108.926795959473, lat: 14.1943874359131 },
  { lng: 108.927024841309, lat: 14.1944808959962 },
  { lng: 108.927375793457, lat: 14.194920539856 },
  { lng: 108.927696228027, lat: 14.1953611373903 },
  { lng: 108.928215026855, lat: 14.1957693099976 },
  { lng: 108.929344177246, lat: 14.1961784362794 },
  { lng: 108.930633544922, lat: 14.1966495513917 },
  { lng: 108.931198120117, lat: 14.1969804763793 },
  { lng: 108.931709289551, lat: 14.1974821090699 },
  { lng: 108.932197570801, lat: 14.1982669830322 },
  { lng: 108.933227539063, lat: 14.1999320983887 },
  { lng: 108.934448242188, lat: 14.2023191452026 },
  { lng: 108.935173034668, lat: 14.2033720016481 },
  { lng: 108.93546295166, lat: 14.2040634155275 },
  { lng: 108.935852050781, lat: 14.2045974731446 },
  { lng: 108.936302185059, lat: 14.2050676345826 },
  { lng: 108.936851501465, lat: 14.205412864685 },
  { lng: 108.937942504883, lat: 14.2058849334717 },
  { lng: 108.93839263916, lat: 14.2061986923218 },
  { lng: 108.938682556152, lat: 14.2064819335938 },
  { lng: 108.938781738281, lat: 14.2070779800416 },
  { lng: 108.9384765625, lat: 14.2082557678223 },
  { lng: 108.938278198242, lat: 14.2090406417847 },
  { lng: 108.938247680664, lat: 14.2097320556641 },
  { lng: 108.938278198242, lat: 14.2101716995239 },
  { lng: 108.938598632813, lat: 14.2105169296266 },
  { lng: 108.939468383789, lat: 14.2108316421509 },
  { lng: 108.940757751465, lat: 14.2111768722535 },
  { lng: 108.941375732422, lat: 14.2113351821901 },
  { lng: 108.941856384277, lat: 14.2115230560303 },
  { lng: 108.942077636719, lat: 14.2117118835449 },
  { lng: 108.942817687988, lat: 14.2130260467529 },
  { lng: 108.943382263184, lat: 14.2140522003175 },
  { lng: 108.944541931152, lat: 14.216911315918 },
  { lng: 108.945846557617, lat: 14.2195959091187 },
  { lng: 108.946075439453, lat: 14.2198781967164 },
  { lng: 108.946464538574, lat: 14.2201614379883 },
  { lng: 108.947044372559, lat: 14.2203187942505 },
  { lng: 108.94758605957, lat: 14.2204446792603 },
  { lng: 108.947914123535, lat: 14.2205696105958 },
  { lng: 108.948394775391, lat: 14.2209157943726 },
  { lng: 108.948783874512, lat: 14.2214183807372 },
  { lng: 108.949203491211, lat: 14.2219524383546 },
  { lng: 108.949592590332, lat: 14.2222557067872 },
  { lng: 108.949859619141, lat: 14.2223138809204 },
  { lng: 108.950630187988, lat: 14.2223453521729 },
  { lng: 108.951278686523, lat: 14.2221879959106 },
  { lng: 108.951919555664, lat: 14.2218742370606 },
  { lng: 108.952537536621, lat: 14.2213411331178 },
  { lng: 108.953147888184, lat: 14.2204294204712 },
  { lng: 108.953758239746, lat: 14.2193298339845 },
  { lng: 108.954177856445, lat: 14.2183561325073 },
  { lng: 108.954696655273, lat: 14.2172260284424 },
  { lng: 108.955001831055, lat: 14.2168016433717 },
  { lng: 108.955192565918, lat: 14.2165822982789 },
  { lng: 108.955612182617, lat: 14.2164878845215 },
  { lng: 108.956451416016, lat: 14.2165508270264 },
  { lng: 108.958381652832, lat: 14.2168655395509 },
  { lng: 108.959609985352, lat: 14.2169914245605 },
  { lng: 108.960319519043, lat: 14.216992378235 },
  { lng: 108.96118927002, lat: 14.2168655395509 },
  { lng: 108.962120056152, lat: 14.2166776657105 },
  { lng: 108.96346282959, lat: 14.2161912918092 },
  { lng: 108.964042663574, lat: 14.2161283493043 },
  { lng: 108.965202331543, lat: 14.2162227630616 },
  { lng: 108.966583251953, lat: 14.2164115905761 },
  { lng: 108.970008850098, lat: 14.2167711257936 },
  { lng: 108.97046661377, lat: 14.2163438796998 },
  { lng: 108.970878601074, lat: 14.2158517837525 },
  { lng: 108.970985412598, lat: 14.2153453826904 },
  { lng: 108.970985412598, lat: 14.2135000228882 },
  { lng: 108.970794677734, lat: 14.2116861343384 },
  { lng: 108.970245361328, lat: 14.209794998169 },
  { lng: 108.969551086426, lat: 14.2077035903932 },
  { lng: 108.968574523926, lat: 14.2056131362916 },
  { lng: 108.967933654785, lat: 14.2039365768434 },
  { lng: 108.967460632324, lat: 14.2022457122803 },
  { lng: 108.967079162598, lat: 14.2013549804688 },
  { lng: 108.966606140137, lat: 14.200647354126 },
  { lng: 108.965660095215, lat: 14.1997556686403 },
  { lng: 108.964317321777, lat: 14.1987247467042 },
  { lng: 108.963943481445, lat: 14.1982641220093 },
  { lng: 108.963905334473, lat: 14.1979570388794 },
  { lng: 108.964195251465, lat: 14.1976804733278 },
  { lng: 108.964790344238, lat: 14.1973724365235 },
  { lng: 108.96573638916, lat: 14.1968193054199 },
  { lng: 108.966087341309, lat: 14.1964187622071 },
  { lng: 108.966239929199, lat: 14.1960201263429 },
  { lng: 108.966209411621, lat: 14.1953735351562 },
  { lng: 108.96598815918, lat: 14.1945753097535 },
  { lng: 108.965660095215, lat: 14.1938524246216 },
  { lng: 108.964653015137, lat: 14.192406654358 },
  { lng: 108.964111328125, lat: 14.1917610168458 },
  { lng: 108.963859558105, lat: 14.1910543441773 },
  { lng: 108.963859558105, lat: 14.1901006698609 },
  { lng: 108.964195251465, lat: 14.1888246536255 },
  { lng: 108.964637756348, lat: 14.1876564025879 },
  { lng: 108.964950561524, lat: 14.1870107650757 },
  { lng: 108.965522766113, lat: 14.1859350204469 },
  { lng: 108.966247558594, lat: 14.1850738525391 },
  { lng: 108.966842651367, lat: 14.184458732605 },
  { lng: 108.967269897461, lat: 14.1840753555299 },
  { lng: 108.96809387207, lat: 14.182321548462 },
  { lng: 108.969413757324, lat: 14.1806011199951 },
  { lng: 108.970489501953, lat: 14.1797704696656 },
  { lng: 108.971122741699, lat: 14.1794633865356 },
  { lng: 108.972015380859, lat: 14.1792631149292 },
  { lng: 108.973533630371, lat: 14.1784019470216 },
  { lng: 108.97631072998, lat: 14.1767730712891 },
  { lng: 108.9775390625, lat: 14.176157951355 },
  { lng: 108.978546142578, lat: 14.1759433746338 },
  { lng: 108.979843139649, lat: 14.1757898330689 },
  { lng: 108.980361938477, lat: 14.1757125854492 },
  { lng: 108.98055267334, lat: 14.1754665374756 },
  { lng: 108.980834960938, lat: 14.1749429702758 },
  { lng: 108.981216430664, lat: 14.1740207672119 },
  { lng: 108.981399536133, lat: 14.1735286712648 },
  { lng: 108.981689453125, lat: 14.1729154586792 },
  { lng: 108.982872009277, lat: 14.1712379455566 },
  { lng: 108.984512329102, lat: 14.1694240570069 },
  { lng: 108.984886169434, lat: 14.1690254211426 },
  { lng: 108.985389709473, lat: 14.168164253235 },
  { lng: 108.986259460449, lat: 14.1663646697998 },
  { lng: 108.98770904541, lat: 14.164366722107 },
  { lng: 108.987846374512, lat: 14.1640405654908 },
];
export default catson;