const nhonbinh = [
  { lng: 109.214248657227, lat: 13.8133354187013 },
  { lng: 109.213607788086, lat: 13.813341140747 },
  { lng: 109.213607788086, lat: 13.8125000000001 },
  { lng: 109.213890075684, lat: 13.812219619751 },
  { lng: 109.214027404785, lat: 13.8120145797731 },
  { lng: 109.214721679688, lat: 13.8111124038697 },
  { lng: 109.214996337891, lat: 13.8111124038697 },
  { lng: 109.215278625488, lat: 13.8110389709473 },
  { lng: 109.215553283691, lat: 13.8106899261475 },
  { lng: 109.215896606445, lat: 13.8106203079224 },
  { lng: 109.216110229492, lat: 13.8105564117432 },
  { lng: 109.21639251709, lat: 13.8105564117432 },
  { lng: 109.216667175293, lat: 13.8108339309693 },
  { lng: 109.217498779297, lat: 13.8108339309693 },
  { lng: 109.217781066895, lat: 13.8111124038697 },
  { lng: 109.218612670899, lat: 13.8111095428468 },
  { lng: 109.218887329102, lat: 13.8113899230958 },
  { lng: 109.219169616699, lat: 13.8113899230958 },
  { lng: 109.219436645508, lat: 13.811671257019 },
  { lng: 109.220001220703, lat: 13.8116655349733 },
  { lng: 109.220558166504, lat: 13.8122215270997 },
  { lng: 109.220832824707, lat: 13.812219619751 },
  { lng: 109.221946716309, lat: 13.813341140747 },
  { lng: 109.221946716309, lat: 13.8138904571534 },
  { lng: 109.222221374512, lat: 13.8141660690308 },
  { lng: 109.222221374512, lat: 13.8144435882568 },
  { lng: 109.222496032715, lat: 13.8147201538087 },
  { lng: 109.222496032715, lat: 13.8149995803833 },
  { lng: 109.222778320313, lat: 13.8152780532837 },
  { lng: 109.222778320313, lat: 13.8161096572877 },
  { lng: 109.223052978516, lat: 13.8163995742798 },
  { lng: 109.223052978516, lat: 13.8166656494141 },
  { lng: 109.223609924317, lat: 13.8172216415406 },
  { lng: 109.223892211914, lat: 13.8172197341918 },
  { lng: 109.224166870117, lat: 13.8175010681153 },
  { lng: 109.224716186524, lat: 13.8175010681153 },
  { lng: 109.225563049316, lat: 13.8166713714599 },
  { lng: 109.225563049316, lat: 13.8161096572877 },
  { lng: 109.225761413574, lat: 13.8158321380616 },
  { lng: 109.225830078125, lat: 13.8138875961304 },
  { lng: 109.226112365723, lat: 13.8136100769043 },
  { lng: 109.226112365723, lat: 13.8125000000001 },
  { lng: 109.226669311523, lat: 13.811939239502 },
  { lng: 109.226669311523, lat: 13.8116655349733 },
  { lng: 109.226936340332, lat: 13.8113899230958 },
  { lng: 109.226936340332, lat: 13.8111095428468 },
  { lng: 109.22721862793, lat: 13.8108339309693 },
  { lng: 109.22721862793, lat: 13.8102779388428 },
  { lng: 109.227500915527, lat: 13.8100004196167 },
  { lng: 109.227500915527, lat: 13.8091697692872 },
  { lng: 109.227783203125, lat: 13.8088903427123 },
  { lng: 109.227783203125, lat: 13.808611869812 },
  { lng: 109.22721862793, lat: 13.8080558776855 },
  { lng: 109.226669311523, lat: 13.8080596923829 },
  { lng: 109.226387023926, lat: 13.8077802658082 },
  { lng: 109.22632598877, lat: 13.8075017929078 },
  { lng: 109.227500915527, lat: 13.8061122894288 },
  { lng: 109.227500915527, lat: 13.8058338165284 },
  { lng: 109.227775573731, lat: 13.8055562973023 },
  { lng: 109.227783203125, lat: 13.8052797317505 },
  { lng: 109.228332519531, lat: 13.8047208786011 },
  { lng: 109.228332519531, lat: 13.8044433593751 },
  { lng: 109.228057861328, lat: 13.8041677474976 },
  { lng: 109.228057861328, lat: 13.8033313751221 },
  { lng: 109.227775573731, lat: 13.8030548095703 },
  { lng: 109.227775573731, lat: 13.8025646209716 },
  { lng: 109.227630615234, lat: 13.8025646209716 },
  { lng: 109.227203369141, lat: 13.8024883270264 },
  { lng: 109.226699829102, lat: 13.8023853302003 },
  { lng: 109.226440429688, lat: 13.8022041320801 },
  { lng: 109.226066589356, lat: 13.8019199371338 },
  { lng: 109.225830078125, lat: 13.8016872406006 },
  { lng: 109.2255859375, lat: 13.801428794861 },
  { lng: 109.225326538086, lat: 13.8011713027954 },
  { lng: 109.225135803223, lat: 13.8010158538819 },
  { lng: 109.225006103516, lat: 13.8009119033813 },
  { lng: 109.224754333496, lat: 13.8008193969727 },
  { lng: 109.224662780762, lat: 13.8007831573486 },
  { lng: 109.224426269531, lat: 13.8007583618164 },
  { lng: 109.224212646484, lat: 13.8007583618164 },
  { lng: 109.223976135254, lat: 13.8008098602296 },
  { lng: 109.223762512207, lat: 13.8009653091431 },
  { lng: 109.223602294922, lat: 13.8011722564697 },
  { lng: 109.223388671875, lat: 13.8015089035035 },
  { lng: 109.223129272461, lat: 13.8018188476564 },
  { lng: 109.222938537598, lat: 13.8020515441895 },
  { lng: 109.222518920898, lat: 13.8025178909303 },
  { lng: 109.222229003906, lat: 13.8027505874634 },
  { lng: 109.22193145752, lat: 13.8029317855836 },
  { lng: 109.221641540527, lat: 13.8030366897584 },
  { lng: 109.221435546875, lat: 13.8030624389648 },
  { lng: 109.221138000488, lat: 13.8030881881714 },
  { lng: 109.220878601074, lat: 13.8030633926392 },
  { lng: 109.22045135498, lat: 13.8030109405519 },
  { lng: 109.220001220703, lat: 13.8029079437257 },
  { lng: 109.219390869141, lat: 13.8027029037476 },
  { lng: 109.218940734863, lat: 13.8025217056275 },
  { lng: 109.218597412109, lat: 13.8023147583008 },
  { lng: 109.218254089356, lat: 13.8020296096802 },
  { lng: 109.218116760254, lat: 13.8017978668213 },
  { lng: 109.217735290527, lat: 13.8010091781617 },
  { lng: 109.21760559082, lat: 13.800853729248 },
  { lng: 109.217445373535, lat: 13.8007507324219 },
  { lng: 109.217071533203, lat: 13.8006744384767 },
  { lng: 109.216651916504, lat: 13.8005714416505 },
  { lng: 109.21630859375, lat: 13.8004932403565 },
  { lng: 109.215957641602, lat: 13.8004417419434 },
  { lng: 109.215721130371, lat: 13.8003387451172 },
  { lng: 109.215507507324, lat: 13.800235748291 },
  { lng: 109.215377807617, lat: 13.8001317977905 },
  { lng: 109.21524810791, lat: 13.8000030517578 },
  { lng: 109.215087890625, lat: 13.7998218536377 },
  { lng: 109.21492767334, lat: 13.7994871139526 },
  { lng: 109.214820861817, lat: 13.799201965332 },
  { lng: 109.214637756348, lat: 13.7985811233521 },
  { lng: 109.214477539062, lat: 13.7982454299927 },
  { lng: 109.214286804199, lat: 13.7979860305786 },
  { lng: 109.214027404785, lat: 13.7977018356324 },
  { lng: 109.213706970215, lat: 13.7974958419801 },
  { lng: 109.213386535645, lat: 13.7973670959472 },
  { lng: 109.212936401367, lat: 13.797264099121 },
  { lng: 109.212699890137, lat: 13.7971343994141 },
  { lng: 109.212623596191, lat: 13.7970046997071 },
  { lng: 109.21272277832, lat: 13.7964620590211 },
  { lng: 109.212753295898, lat: 13.7962551116944 },
  { lng: 109.212699890137, lat: 13.7961778640748 },
  { lng: 109.212516784668, lat: 13.7959709167481 },
  { lng: 109.212326049805, lat: 13.7958421707154 },
  { lng: 109.212112426758, lat: 13.7957382202148 },
  { lng: 109.211769104004, lat: 13.7955827713013 },
  { lng: 109.211296081543, lat: 13.7953510284424 },
  { lng: 109.210510253906, lat: 13.7950544357299 },
  { lng: 109.210327148438, lat: 13.7948989868165 },
  { lng: 109.209800720215, lat: 13.7942008972169 },
  { lng: 109.209533691406, lat: 13.7939434051515 },
  { lng: 109.209159851074, lat: 13.7934522628785 },
  { lng: 109.208892822266, lat: 13.7925472259522 },
  { lng: 109.208839416504, lat: 13.7920303344727 },
  { lng: 109.208763122559, lat: 13.7908401489258 },
  { lng: 109.208534240723, lat: 13.7903099060058 },
  { lng: 109.208084106445, lat: 13.789818763733 },
  { lng: 109.207366943359, lat: 13.7891988754274 },
  { lng: 109.205902099609, lat: 13.7883739471436 },
  { lng: 109.205436706543, lat: 13.7881145477295 },
  { lng: 109.203834533691, lat: 13.7874479293823 },
  { lng: 109.202697753906, lat: 13.7876586914063 },
  { lng: 109.202621459961, lat: 13.7876729965211 },
  { lng: 109.200874328613, lat: 13.7879962921143 },
  { lng: 109.198959350586, lat: 13.7885122299194 },
  { lng: 109.197120666504, lat: 13.7890920639038 },
  { lng: 109.194480895996, lat: 13.7900581359864 },
  { lng: 109.192970275879, lat: 13.7910251617431 },
  { lng: 109.191780090332, lat: 13.7920541763306 },
  { lng: 109.189804077148, lat: 13.7939853668213 },
  { lng: 109.18921661377, lat: 13.7948865890503 },
  { lng: 109.187896728516, lat: 13.7966861724854 },
  { lng: 109.187110900879, lat: 13.798357963562 },
  { lng: 109.186218261719, lat: 13.8014268875122 },
  { lng: 109.18563079834, lat: 13.8030996322632 },
  { lng: 109.184837341309, lat: 13.8045158386231 },
  { lng: 109.18359375, lat: 13.8058032989503 },
  { lng: 109.182861328125, lat: 13.8064470291138 },
  { lng: 109.182205200195, lat: 13.8072843551636 },
  { lng: 109.181747436523, lat: 13.8081846237184 },
  { lng: 109.181022644043, lat: 13.8104381561279 },
  { lng: 109.180229187012, lat: 13.8126897811889 },
  { lng: 109.180000305176, lat: 13.8140735626222 },
  { lng: 109.179740905762, lat: 13.8152322769164 },
  { lng: 109.179740905762, lat: 13.8167762756349 },
  { lng: 109.17943572998, lat: 13.817720413208 },
  { lng: 109.179679870606, lat: 13.8177995681762 },
  { lng: 109.179924011231, lat: 13.8180398941041 },
  { lng: 109.180114746094, lat: 13.8183412551881 },
  { lng: 109.179924011231, lat: 13.8187618255616 },
  { lng: 109.179374694824, lat: 13.8191843032838 },
  { lng: 109.178382873535, lat: 13.8199071884156 },
  { lng: 109.176536560059, lat: 13.8213529586793 },
  { lng: 109.175552368164, lat: 13.821834564209 },
  { lng: 109.175422668457, lat: 13.822135925293 },
  { lng: 109.175422668457, lat: 13.8225584030151 },
  { lng: 109.175552368164, lat: 13.8242425918579 },
  { lng: 109.175674438477, lat: 13.8250246047975 },
  { lng: 109.175674438477, lat: 13.826530456543 },
  { lng: 109.175735473633, lat: 13.8276138305664 },
  { lng: 109.175827026367, lat: 13.8277864456177 },
  { lng: 109.175926208496, lat: 13.8279752731324 },
  { lng: 109.176284790039, lat: 13.8280420303345 },
  { lng: 109.176612854004, lat: 13.8279924392701 },
  { lng: 109.176795959473, lat: 13.8279418945314 },
  { lng: 109.176971435547, lat: 13.8278417587281 },
  { lng: 109.177124023438, lat: 13.8276672363281 },
  { lng: 109.17733001709, lat: 13.8273925781251 },
  { lng: 109.177459716797, lat: 13.8270187377929 },
  { lng: 109.177612304688, lat: 13.8264951705934 },
  { lng: 109.177963256836, lat: 13.825548171997 },
  { lng: 109.178092956543, lat: 13.8252992630005 },
  { lng: 109.178298950195, lat: 13.825023651123 },
  { lng: 109.178581237793, lat: 13.8247499465943 },
  { lng: 109.17896270752, lat: 13.8244752883911 },
  { lng: 109.179550170899, lat: 13.8242845535278 },
  { lng: 109.179649353027, lat: 13.8242511749268 },
  { lng: 109.180160522461, lat: 13.8242750167847 },
  { lng: 109.181007385254, lat: 13.8243236541748 },
  { lng: 109.18172454834, lat: 13.8243494033815 },
  { lng: 109.182411193848, lat: 13.8243227005005 },
  { lng: 109.183410644531, lat: 13.8241977691652 },
  { lng: 109.184661865234, lat: 13.8236742019654 },
  { lng: 109.185600280762, lat: 13.8229999542237 },
  { lng: 109.187210083008, lat: 13.8217773437501 },
  { lng: 109.188262939453, lat: 13.820878982544 },
  { lng: 109.18864440918, lat: 13.8204545974733 },
  { lng: 109.18879699707, lat: 13.8201808929443 },
  { lng: 109.189025878906, lat: 13.8195066452026 },
  { lng: 109.189102172852, lat: 13.8190593719483 },
  { lng: 109.189155578613, lat: 13.8187103271485 },
  { lng: 109.189224243164, lat: 13.8184852600099 },
  { lng: 109.189819335938, lat: 13.8178873062133 },
  { lng: 109.190559387207, lat: 13.8175373077392 },
  { lng: 109.191856384277, lat: 13.8171119689942 },
  { lng: 109.192756652832, lat: 13.8169622421265 },
  { lng: 109.193389892578, lat: 13.8169374465943 },
  { lng: 109.194618225098, lat: 13.8172101974487 },
  { lng: 109.19605255127, lat: 13.8175582885742 },
  { lng: 109.196762084961, lat: 13.8176574707032 },
  { lng: 109.197250366211, lat: 13.8176555633545 },
  { lng: 109.197624206543, lat: 13.8175983428955 },
  { lng: 109.197929382324, lat: 13.8175230026246 },
  { lng: 109.198211669922, lat: 13.8173732757569 },
  { lng: 109.198387145996, lat: 13.817198753357 },
  { lng: 109.19856262207, lat: 13.8169994354249 },
  { lng: 109.198822021484, lat: 13.8165502548218 },
  { lng: 109.198822021484, lat: 13.8163003921509 },
  { lng: 109.198791503906, lat: 13.8160009384155 },
  { lng: 109.198745727539, lat: 13.8155517578126 },
  { lng: 109.198669433594, lat: 13.8151025772095 },
  { lng: 109.19856262207, lat: 13.814603805542 },
  { lng: 109.198539733887, lat: 13.8141803741456 },
  { lng: 109.19856262207, lat: 13.8136806488037 },
  { lng: 109.198616027832, lat: 13.8132820129395 },
  { lng: 109.198867797852, lat: 13.8128576278688 },
  { lng: 109.19905090332, lat: 13.8126831054689 },
  { lng: 109.199508666992, lat: 13.8125333786011 },
  { lng: 109.199890136719, lat: 13.8124828338622 },
  { lng: 109.200347900391, lat: 13.812481880188 },
  { lng: 109.200630187988, lat: 13.8125066757202 },
  { lng: 109.200836181641, lat: 13.8125820159913 },
  { lng: 109.201324462891, lat: 13.8128061294556 },
  { lng: 109.202941894531, lat: 13.8143892288208 },
  { lng: 109.203918457031, lat: 13.8150606155396 },
  { lng: 109.204811096191, lat: 13.8156089782715 },
  { lng: 109.205474853516, lat: 13.8158330917359 },
  { lng: 109.206367492676, lat: 13.8160820007324 },
  { lng: 109.20726776123, lat: 13.8162059783936 },
  { lng: 109.209541320801, lat: 13.816204071045 },
  { lng: 109.210868835449, lat: 13.8162784576417 },
  { lng: 109.211250305176, lat: 13.8163766860961 },
  { lng: 109.211936950684, lat: 13.8165264129639 },
  { lng: 109.212249755859, lat: 13.8166255950929 },
  { lng: 109.212554931641, lat: 13.8166503906251 },
  { lng: 109.212936401367, lat: 13.8166246414186 },
  { lng: 109.213165283203, lat: 13.816575050354 },
  { lng: 109.213424682617, lat: 13.8164749145508 },
  { lng: 109.213623046875, lat: 13.8163251876832 },
  { lng: 109.213775634766, lat: 13.8161506652833 },
  { lng: 109.214004516602, lat: 13.8154020309449 },
  { lng: 109.214134216309, lat: 13.8138799667358 },
  { lng: 109.214248657227, lat: 13.8133354187013 },
];

export default nhonbinh;
