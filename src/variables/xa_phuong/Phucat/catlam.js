const catlam = [
  { lng: 108.98365020752, lat: 14.0508651733399 },
  { lng: 108.983749389648, lat: 14.0500993728639 },
  { lng: 108.983749389648, lat: 14.0490007400513 },
  { lng: 108.983749389648, lat: 14.0486192703247 },
  { lng: 108.983596801758, lat: 14.0482749938965 },
  { lng: 108.982849121094, lat: 14.0481605529786 },
  { lng: 108.978302001953, lat: 14.0480833053589 },
  { lng: 108.974548339844, lat: 14.0481157302857 },
  { lng: 108.971336364746, lat: 14.0480308532715 },
  { lng: 108.969863891602, lat: 14.0478200912477 },
  { lng: 108.968605041504, lat: 14.0477352142335 },
  { lng: 108.968208312988, lat: 14.0476932525635 },
  { lng: 108.967994689942, lat: 14.0475664138795 },
  { lng: 108.967864990234, lat: 14.047311782837 },
  { lng: 108.968040466309, lat: 14.0468473434448 },
  { lng: 108.968170166016, lat: 14.0456199645997 },
  { lng: 108.967948913574, lat: 14.0439281463624 },
  { lng: 108.967697143555, lat: 14.0435047149659 },
  { lng: 108.966781616211, lat: 14.0435466766358 },
  { lng: 108.964569091797, lat: 14.043800354004 },
  { lng: 108.96257019043, lat: 14.0436725616456 },
  { lng: 108.960922241211, lat: 14.0434188842774 },
  { lng: 108.959838867187, lat: 14.0433769226075 },
  { lng: 108.959228515625, lat: 14.0435028076171 },
  { lng: 108.958969116211, lat: 14.0437145233154 },
  { lng: 108.959098815918, lat: 14.0453224182128 },
  { lng: 108.959182739258, lat: 14.0466117858888 },
  { lng: 108.957946777344, lat: 14.0467290878295 },
  { lng: 108.956932067871, lat: 14.0468149185181 },
  { lng: 108.956565856934, lat: 14.0466527938843 },
  { lng: 108.956352233887, lat: 14.0462436676025 },
  { lng: 108.95630645752, lat: 14.0453186035157 },
  { lng: 108.95597076416, lat: 14.0443706512452 },
  { lng: 108.955024719238, lat: 14.042197227478 },
  { lng: 108.954231262207, lat: 14.0405988693237 },
  { lng: 108.953979492188, lat: 14.041130065918 },
  { lng: 108.952651977539, lat: 14.0434045791626 },
  { lng: 108.9521484375, lat: 14.0443153381349 },
  { lng: 108.951164245606, lat: 14.046314239502 },
  { lng: 108.950736999512, lat: 14.0470161437989 },
  { lng: 108.950546264648, lat: 14.0473756790162 },
  { lng: 108.950134277344, lat: 14.0475835800171 },
  { lng: 108.949203491211, lat: 14.0476026535034 },
  { lng: 108.948791503906, lat: 14.0474700927736 },
  { lng: 108.947959899902, lat: 14.0471668243409 },
  { lng: 108.946792602539, lat: 14.0464267730712 },
  { lng: 108.946144104004, lat: 14.0460567474366 },
  { lng: 108.945816040039, lat: 14.0459251403809 },
  { lng: 108.945327758789, lat: 14.0459060668946 },
  { lng: 108.943634033203, lat: 14.0459051132203 },
  { lng: 108.94270324707, lat: 14.0459241867065 },
  { lng: 108.941688537598, lat: 14.0461893081666 },
  { lng: 108.940780639648, lat: 14.0465869903566 },
  { lng: 108.940124511719, lat: 14.0465955734254 },
  { lng: 108.939735412598, lat: 14.0464630126954 },
  { lng: 108.939056396484, lat: 14.0460653305054 },
  { lng: 108.938301086426, lat: 14.0458745956421 },
  { lng: 108.936515808106, lat: 14.0455150604249 },
  { lng: 108.935012817383, lat: 14.0452871322632 },
  { lng: 108.93367767334, lat: 14.0451345443726 },
  { lng: 108.932556152344, lat: 14.0447835922242 },
  { lng: 108.932418823242, lat: 14.0447206497194 },
  { lng: 108.930740356445, lat: 14.0431776046754 },
  { lng: 108.928894042969, lat: 14.0416049957277 },
  { lng: 108.927223205566, lat: 14.040460586548 },
  { lng: 108.926544189453, lat: 14.0397129058839 },
  { lng: 108.926452636719, lat: 14.0392866134644 },
  { lng: 108.926452636719, lat: 14.0381917953491 },
  { lng: 108.926826477051, lat: 14.0376443862915 },
  { lng: 108.92748260498, lat: 14.0369138717651 },
  { lng: 108.928169250488, lat: 14.0360012054444 },
  { lng: 108.928421020508, lat: 14.0351486206055 },
  { lng: 108.928550720215, lat: 14.0346231460571 },
  { lng: 108.928184509277, lat: 14.0343589782715 },
  { lng: 108.926368713379, lat: 14.0318651199341 },
  { lng: 108.925254821777, lat: 14.0300207138062 },
  { lng: 108.924934387207, lat: 14.0296058654786 },
  { lng: 108.92472076416, lat: 14.0295543670654 },
  { lng: 108.924613952637, lat: 14.0296306610108 },
  { lng: 108.924591064453, lat: 14.0297346115113 },
  { lng: 108.924591064453, lat: 14.0305137634277 },
  { lng: 108.924560546875, lat: 14.0307998657227 },
  { lng: 108.924346923828, lat: 14.0312671661378 },
  { lng: 108.924057006836, lat: 14.0319681167603 },
  { lng: 108.923843383789, lat: 14.0325918197633 },
  { lng: 108.923683166504, lat: 14.0332145690919 },
  { lng: 108.923309326172, lat: 14.0333700180053 },
  { lng: 108.92301940918, lat: 14.0333700180053 },
  { lng: 108.921684265137, lat: 14.0333204269409 },
  { lng: 108.920989990234, lat: 14.0334997177125 },
  { lng: 108.920776367188, lat: 14.0337066650391 },
  { lng: 108.920394897461, lat: 14.0346031188966 },
  { lng: 108.919464111328, lat: 14.0369396209718 },
  { lng: 108.919166564942, lat: 14.0378494262695 },
  { lng: 108.919075012207, lat: 14.0388736724854 },
  { lng: 108.919128417969, lat: 14.0401725769042 },
  { lng: 108.919097900391, lat: 14.0412893295289 },
  { lng: 108.918884277344, lat: 14.0421199798583 },
  { lng: 108.917831420899, lat: 14.0448083877564 },
  { lng: 108.916610717773, lat: 14.0480785369873 },
  { lng: 108.915878295898, lat: 14.0501165390016 },
  { lng: 108.915664672852, lat: 14.0507411956787 },
  { lng: 108.914833068848, lat: 14.0520906448364 },
  { lng: 108.913932800293, lat: 14.0533113479615 },
  { lng: 108.913612365723, lat: 14.0537776947021 },
  { lng: 108.912895202637, lat: 14.0541925430299 },
  { lng: 108.912490844727, lat: 14.0545568466186 },
  { lng: 108.912132263184, lat: 14.0552711486816 },
  { lng: 108.911468505859, lat: 14.0564393997192 },
  { lng: 108.911170959473, lat: 14.0572700500489 },
  { lng: 108.911094665527, lat: 14.0579185485839 },
  { lng: 108.911041259766, lat: 14.0585680007935 },
  { lng: 108.910774230957, lat: 14.059139251709 },
  { lng: 108.910453796387, lat: 14.0594768524169 },
  { lng: 108.909706115723, lat: 14.0599956512452 },
  { lng: 108.908897399902, lat: 14.0605535507203 },
  { lng: 108.907325744629, lat: 14.0628128051758 },
  { lng: 108.907028198242, lat: 14.0635662078858 },
  { lng: 108.906867980957, lat: 14.0641632080078 },
  { lng: 108.906616210937, lat: 14.0655784606934 },
  { lng: 108.906616210937, lat: 14.0663566589355 },
  { lng: 108.906509399414, lat: 14.0667982101442 },
  { lng: 108.906059265137, lat: 14.0676546096801 },
  { lng: 108.905685424805, lat: 14.0685377120973 },
  { lng: 108.905471801758, lat: 14.0691356658936 },
  { lng: 108.905418395996, lat: 14.0700130462646 },
  { lng: 108.905334472656, lat: 14.0709800720215 },
  { lng: 108.905082702637, lat: 14.0726022720337 },
  { lng: 108.904922485352, lat: 14.0730686187745 },
  { lng: 108.904632568359, lat: 14.0735626220704 },
  { lng: 108.904174804688, lat: 14.0741338729859 },
  { lng: 108.903884887695, lat: 14.0747060775757 },
  { lng: 108.903259277344, lat: 14.076795578003 },
  { lng: 108.903121948242, lat: 14.0771846771241 },
  { lng: 108.902404785156, lat: 14.0791578292847 },
  { lng: 108.901870727539, lat: 14.0804567337036 },
  { lng: 108.901016235352, lat: 14.0814952850342 },
  { lng: 108.900566101074, lat: 14.0817813873292 },
  { lng: 108.900009155273, lat: 14.0819358825683 },
  { lng: 108.899314880371, lat: 14.0819358825683 },
  { lng: 108.898582458496, lat: 14.082052230835 },
  { lng: 108.896957397461, lat: 14.0832462310791 },
  { lng: 108.895973205566, lat: 14.0843362808229 },
  { lng: 108.894981384277, lat: 14.0856075286865 },
  { lng: 108.894668579102, lat: 14.0861539840698 },
  { lng: 108.894691467285, lat: 14.0865945816041 },
  { lng: 108.89485168457, lat: 14.0868291854858 },
  { lng: 108.895408630371, lat: 14.0873231887817 },
  { lng: 108.89567565918, lat: 14.0877122879028 },
  { lng: 108.895713806152, lat: 14.0880632400512 },
  { lng: 108.895713806152, lat: 14.0889463424684 },
  { lng: 108.895820617676, lat: 14.0896987915039 },
  { lng: 108.89624786377, lat: 14.0903215408326 },
  { lng: 108.89688873291, lat: 14.0909719467163 },
  { lng: 108.897338867188, lat: 14.0914392471313 },
  { lng: 108.897422790527, lat: 14.0916986465455 },
  { lng: 108.897422790527, lat: 14.0919332504272 },
  { lng: 108.897354125977, lat: 14.0920753479004 },
  { lng: 108.895965576172, lat: 14.0933465957642 },
  { lng: 108.895355224609, lat: 14.0941524505616 },
  { lng: 108.895301818848, lat: 14.09459400177 },
  { lng: 108.895408630371, lat: 14.0949573516846 },
  { lng: 108.895965576172, lat: 14.0959959030153 },
  { lng: 108.896499633789, lat: 14.0967226028442 },
  { lng: 108.896659851074, lat: 14.0970611572267 },
  { lng: 108.896659851074, lat: 14.0972948074341 },
  { lng: 108.896430969238, lat: 14.0980091094971 },
  { lng: 108.895736694336, lat: 14.0993328094484 },
  { lng: 108.895446777344, lat: 14.1001377105713 },
  { lng: 108.895309448242, lat: 14.1007871627809 },
  { lng: 108.895149230957, lat: 14.1013317108155 },
  { lng: 108.894622802734, lat: 14.1023206710815 },
  { lng: 108.894348144531, lat: 14.1029939651489 },
  { lng: 108.894149780273, lat: 14.1038074493409 },
  { lng: 108.893669128418, lat: 14.1056489944458 },
  { lng: 108.893325805664, lat: 14.1066093444824 },
  { lng: 108.89289855957, lat: 14.107232093811 },
  { lng: 108.892707824707, lat: 14.1075429916383 },
  { lng: 108.892578125, lat: 14.1083993911743 },
  { lng: 108.892440795898, lat: 14.1089181900026 },
  { lng: 108.891967773438, lat: 14.1097478866578 },
  { lng: 108.89143371582, lat: 14.1105518341064 },
  { lng: 108.891242980957, lat: 14.1110191345215 },
  { lng: 108.891242980957, lat: 14.1112785339357 },
  { lng: 108.891403198242, lat: 14.1116418838501 },
  { lng: 108.891700744629, lat: 14.1119890213013 },
  { lng: 108.892265319824, lat: 14.1129655838013 },
  { lng: 108.893180847168, lat: 14.113826751709 },
  { lng: 108.893783569336, lat: 14.1144733428956 },
  { lng: 108.894538879395, lat: 14.1154556274414 },
  { lng: 108.894760131836, lat: 14.1159791946411 },
  { lng: 108.895042419434, lat: 14.1168699264526 },
  { lng: 108.895324707031, lat: 14.1178846359253 },
  { lng: 108.895500183106, lat: 14.1181211471559 },
  { lng: 108.895751953125, lat: 14.1183052062989 },
  { lng: 108.896629333496, lat: 14.1183671951295 },
  { lng: 108.897705078125, lat: 14.1183986663819 },
  { lng: 108.898399353027, lat: 14.1184597015381 },
  { lng: 108.899215698242, lat: 14.1185531616212 },
  { lng: 108.89981842041, lat: 14.1186761856079 },
  { lng: 108.900161743164, lat: 14.1188611984253 },
  { lng: 108.900512695312, lat: 14.1192607879639 },
  { lng: 108.900512695312, lat: 14.1195993423463 },
  { lng: 108.900382995605, lat: 14.1206140518188 },
  { lng: 108.899940490723, lat: 14.1217517852783 },
  { lng: 108.898902893066, lat: 14.1245193481446 },
  { lng: 108.89820098877, lat: 14.1257801055908 },
  { lng: 108.901840209961, lat: 14.1249780654907 },
  { lng: 108.903648376465, lat: 14.1245880126953 },
  { lng: 108.904586791992, lat: 14.1243267059326 },
  { lng: 108.905456542969, lat: 14.1237411499024 },
  { lng: 108.906723022461, lat: 14.1218509674073 },
  { lng: 108.907463073731, lat: 14.120677947998 },
  { lng: 108.908325195313, lat: 14.1197652816774 },
  { lng: 108.910133361816, lat: 14.1185932159424 },
  { lng: 108.911270141602, lat: 14.1180057525635 },
  { lng: 108.912139892578, lat: 14.1178760528565 },
  { lng: 108.912605285645, lat: 14.1178760528565 },
  { lng: 108.914680480957, lat: 14.1178121566773 },
  { lng: 108.916389465332, lat: 14.1180410385133 },
  { lng: 108.918663024902, lat: 14.1186933517457 },
  { lng: 108.919731140137, lat: 14.1188888549805 },
  { lng: 108.921531677246, lat: 14.1188898086548 },
  { lng: 108.923141479492, lat: 14.1185646057128 },
  { lng: 108.924011230469, lat: 14.1183042526246 },
  { lng: 108.924743652344, lat: 14.1177825927735 },
  { lng: 108.926078796387, lat: 14.1161527633668 },
  { lng: 108.927154541016, lat: 14.1145887374878 },
  { lng: 108.928924560547, lat: 14.1120033264161 },
  { lng: 108.929817199707, lat: 14.1108760833741 },
  { lng: 108.930397033691, lat: 14.1102600097656 },
  { lng: 108.931076049805, lat: 14.1098947525026 },
  { lng: 108.932151794434, lat: 14.1096897125245 },
  { lng: 108.932762145996, lat: 14.1094398498535 },
  { lng: 108.933631896973, lat: 14.1088695526124 },
  { lng: 108.934516906738, lat: 14.1078214645387 },
  { lng: 108.935127258301, lat: 14.1072969436647 },
  { lng: 108.935852050781, lat: 14.1067953109742 },
  { lng: 108.936721801758, lat: 14.1064119338989 },
  { lng: 108.938034057617, lat: 14.1062984466553 },
  { lng: 108.939109802246, lat: 14.1062526702881 },
  { lng: 108.939994812012, lat: 14.1062068939208 },
  { lng: 108.940628051758, lat: 14.1060934066772 },
  { lng: 108.941329956055, lat: 14.1058416366578 },
  { lng: 108.94189453125, lat: 14.1053857803345 },
  { lng: 108.942802429199, lat: 14.1039943695068 },
  { lng: 108.943672180176, lat: 14.1023740768433 },
  { lng: 108.944747924805, lat: 14.1003198623658 },
  { lng: 108.945617675781, lat: 14.0990190505982 },
  { lng: 108.946762084961, lat: 14.0975818634033 },
  { lng: 108.947357177734, lat: 14.0972738265991 },
  { lng: 108.948318481445, lat: 14.0972509384156 },
  { lng: 108.949935913086, lat: 14.0973434448242 },
  { lng: 108.951690673828, lat: 14.0974349975587 },
  { lng: 108.952789306641, lat: 14.0973882675171 },
  { lng: 108.95386505127, lat: 14.0970916748048 },
  { lng: 108.954811096191, lat: 14.0965099334717 },
  { lng: 108.955795288086, lat: 14.0962591171265 },
  { lng: 108.956588745117, lat: 14.0962362289429 },
  { lng: 108.957763671875, lat: 14.0963964462281 },
  { lng: 108.959281921387, lat: 14.0969219207764 },
  { lng: 108.960098266602, lat: 14.0972585678102 },
  { lng: 108.960632324219, lat: 14.0972890853882 },
  { lng: 108.961212158203, lat: 14.0970058441163 },
  { lng: 108.96167755127, lat: 14.0969123840333 },
  { lng: 108.96280670166, lat: 14.0970296859742 },
  { lng: 108.963676452637, lat: 14.0970535278321 },
  { lng: 108.964164733887, lat: 14.0972423553466 },
  { lng: 108.964401245117, lat: 14.0975723266602 },
  { lng: 108.964698791504, lat: 14.0984201431276 },
  { lng: 108.965019226074, lat: 14.0987224578859 },
  { lng: 108.966079711914, lat: 14.0990142822265 },
  { lng: 108.966606140137, lat: 14.098822593689 },
  { lng: 108.966896057129, lat: 14.0987434387207 },
  { lng: 108.967514038086, lat: 14.0987634658814 },
  { lng: 108.967964172363, lat: 14.0988626480103 },
  { lng: 108.968353271484, lat: 14.0988626480103 },
  { lng: 108.968872070312, lat: 14.0987234115601 },
  { lng: 108.969566345215, lat: 14.0981616973877 },
  { lng: 108.970207214355, lat: 14.0976409912111 },
  { lng: 108.970901489258, lat: 14.0970001220704 },
  { lng: 108.97144317627, lat: 14.0966186523438 },
  { lng: 108.971641540527, lat: 14.0964994430543 },
  { lng: 108.971870422363, lat: 14.0964393615722 },
  { lng: 108.972053527832, lat: 14.0964393615722 },
  { lng: 108.972564697266, lat: 14.0966367721558 },
  { lng: 108.974159240723, lat: 14.0970420837402 },
  { lng: 108.975021362305, lat: 14.0977087020874 },
  { lng: 108.976089477539, lat: 14.0979824066163 },
  { lng: 108.976974487305, lat: 14.0985832214355 },
  { lng: 108.977699279785, lat: 14.0993413925172 },
  { lng: 108.978782653809, lat: 14.1003971099853 },
  { lng: 108.979331970215, lat: 14.1008863449097 },
  { lng: 108.979827880859, lat: 14.0999126434326 },
  { lng: 108.980247497559, lat: 14.0983648300172 },
  { lng: 108.980850219727, lat: 14.0968017578126 },
  { lng: 108.981414794922, lat: 14.095890045166 },
  { lng: 108.983192443848, lat: 14.0943431854249 },
  { lng: 108.983291625977, lat: 14.0942611694336 },
  { lng: 108.983757019043, lat: 14.0935773849487 },
  { lng: 108.984939575195, lat: 14.0917310714722 },
  { lng: 108.98624420166, lat: 14.0899410247803 },
  { lng: 108.986961364746, lat: 14.0888013839722 },
  { lng: 108.987075805664, lat: 14.0895462036133 },
  { lng: 108.987678527832, lat: 14.0911436080933 },
  { lng: 108.98819732666, lat: 14.0910120010377 },
  { lng: 108.989219665527, lat: 14.0908489227295 },
  { lng: 108.991752624512, lat: 14.0902681350709 },
  { lng: 108.992851257324, lat: 14.0899047851562 },
  { lng: 108.993835449219, lat: 14.0897235870361 },
  { lng: 108.995101928711, lat: 14.0898685455323 },
  { lng: 108.99690246582, lat: 14.0901536941529 },
  { lng: 108.998893737793, lat: 14.0905895233154 },
  { lng: 109.000816345215, lat: 14.0910615921021 },
  { lng: 109.00146484375, lat: 14.090600013733 },
  { lng: 109.002296447754, lat: 14.0903358459472 },
  { lng: 109.002548217774, lat: 14.0900707244873 },
  { lng: 109.002914428711, lat: 14.0891265869141 },
  { lng: 109.003860473633, lat: 14.0867738723755 },
  { lng: 109.004768371582, lat: 14.0849599838257 },
  { lng: 109.005493164062, lat: 14.0834197998047 },
  { lng: 109.005592346192, lat: 14.0832691192627 },
  { lng: 109.005783081055, lat: 14.0832118988038 },
  { lng: 109.00634765625, lat: 14.0831356048583 },
  { lng: 109.007377624512, lat: 14.0830230712891 },
  { lng: 109.008049011231, lat: 14.0827398300172 },
  { lng: 109.008598327637, lat: 14.0821542739869 },
  { lng: 109.008979797363, lat: 14.0817003250123 },
  { lng: 109.009063720703, lat: 14.081247329712 },
  { lng: 109.009040832519, lat: 14.080906867981 },
  { lng: 109.009040832519, lat: 14.0806798934936 },
  { lng: 109.009117126465, lat: 14.0805101394653 },
  { lng: 109.009269714355, lat: 14.0803213119507 },
  { lng: 109.009506225586, lat: 14.0802068710328 },
  { lng: 109.010185241699, lat: 14.0800943374634 },
  { lng: 109.010688781738, lat: 14.0799999237061 },
  { lng: 109.010917663574, lat: 14.0798673629761 },
  { lng: 109.01099395752, lat: 14.0796985626221 },
  { lng: 109.011039733887, lat: 14.0793952941895 },
  { lng: 109.011039733887, lat: 14.0792436599733 },
  { lng: 109.010803222656, lat: 14.0790357589723 },
  { lng: 109.01057434082, lat: 14.0788087844849 },
  { lng: 109.010566711426, lat: 14.0785980224609 },
  { lng: 109.010864257813, lat: 14.0781288146972 },
  { lng: 109.011749267578, lat: 14.076729774475 },
  { lng: 109.011924743652, lat: 14.0764284133911 },
  { lng: 109.011924743652, lat: 14.0762577056885 },
  { lng: 109.011848449707, lat: 14.0760879516603 },
  { lng: 109.01148223877, lat: 14.0758991241456 },
  { lng: 109.01033782959, lat: 14.0754270553588 },
  { lng: 109.009895324707, lat: 14.0750112533569 },
  { lng: 109.00944519043, lat: 14.0740470886231 },
  { lng: 109.009368896484, lat: 14.0735940933228 },
  { lng: 109.009262084961, lat: 14.0726404190064 },
  { lng: 109.00919342041, lat: 14.0720090866088 },
  { lng: 109.009010314942, lat: 14.0717334747316 },
  { lng: 109.00846862793, lat: 14.0715446472169 },
  { lng: 109.007362365723, lat: 14.070598602295 },
  { lng: 109.006721496582, lat: 14.0700511932374 },
  { lng: 109.006484985352, lat: 14.0695495605469 },
  { lng: 109.006072998047, lat: 14.0691719055175 },
  { lng: 109.004974365234, lat: 14.0684347152711 },
  { lng: 109.003288269043, lat: 14.0674533843994 },
  { lng: 109.002182006836, lat: 14.0669994354249 },
  { lng: 109.001319885254, lat: 14.0663585662841 },
  { lng: 108.998497009277, lat: 14.063952445984 },
  { lng: 108.997299194336, lat: 14.0625534057618 },
  { lng: 108.996124267578, lat: 14.06116771698 },
  { lng: 108.994552612305, lat: 14.0596609115602 },
  { lng: 108.992637634277, lat: 14.0576162338257 },
  { lng: 108.992317199707, lat: 14.05730342865 },
  { lng: 108.991844177246, lat: 14.0569820404054 },
  { lng: 108.991584777832, lat: 14.0568084716798 },
  { lng: 108.99072265625, lat: 14.0566577911378 },
  { lng: 108.989158630371, lat: 14.0564641952514 },
  { lng: 108.987701416016, lat: 14.056248664856 },
  { lng: 108.985557556152, lat: 14.056118965149 },
  { lng: 108.984642028809, lat: 14.0560436248779 },
  { lng: 108.983673095703, lat: 14.0559568405153 },
  { lng: 108.983520507812, lat: 14.0545825958253 },
  { lng: 108.983474731445, lat: 14.0522127151489 },
  { lng: 108.98365020752, lat: 14.0508651733399 },
];
export default catlam;