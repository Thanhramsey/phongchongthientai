const canhhien = [
  { lng: 109.014045715332, lat: 13.6867837905884 },
  { lng: 109.014595031738, lat: 13.6869106292725 },
  { lng: 109.015243530273, lat: 13.6871309280397 },
  { lng: 109.016372680664, lat: 13.6876821517945 },
  { lng: 109.017807006836, lat: 13.688645362854 },
  { lng: 109.01961517334, lat: 13.6896085739136 },
  { lng: 109.020767211914, lat: 13.6901874542236 },
  { lng: 109.021385192871, lat: 13.6901025772094 },
  { lng: 109.022300720215, lat: 13.6894550323487 },
  { lng: 109.023361206055, lat: 13.6892089843751 },
  { lng: 109.024696350098, lat: 13.6885108947754 },
  { lng: 109.025146484375, lat: 13.6883735656739 },
  { lng: 109.025367736816, lat: 13.6883192062378 },
  { lng: 109.026008605957, lat: 13.6883192062378 },
  { lng: 109.026405334473, lat: 13.6883459091186 },
  { lng: 109.026741027832, lat: 13.6882371902467 },
  { lng: 109.02702331543, lat: 13.6880731582642 },
  { lng: 109.027191162109, lat: 13.6878814697266 },
  { lng: 109.027442932129, lat: 13.6875534057618 },
  { lng: 109.02774810791, lat: 13.6871147155761 },
  { lng: 109.027969360352, lat: 13.6867589950563 },
  { lng: 109.028305053711, lat: 13.6862115859986 },
  { lng: 109.028533935547, lat: 13.6860198974611 },
  { lng: 109.028671264649, lat: 13.6859378814697 },
  { lng: 109.029373168945, lat: 13.6859378814697 },
  { lng: 109.029571533203, lat: 13.6859645843506 },
  { lng: 109.02970123291, lat: 13.6859550476075 },
  { lng: 109.029907226562, lat: 13.6859378814697 },
  { lng: 109.030097961426, lat: 13.6859378814697 },
  { lng: 109.030464172363, lat: 13.6857461929321 },
  { lng: 109.030914306641, lat: 13.6855554580688 },
  { lng: 109.031303405762, lat: 13.6854734420777 },
  { lng: 109.03150177002, lat: 13.6854448318481 },
  { lng: 109.031837463379, lat: 13.6854448318481 },
  { lng: 109.032203674316, lat: 13.6855268478395 },
  { lng: 109.032455444336, lat: 13.6856908798218 },
  { lng: 109.032821655273, lat: 13.6859922409058 },
  { lng: 109.033325195312, lat: 13.6861019134522 },
  { lng: 109.033744812012, lat: 13.6861019134522 },
  { lng: 109.034019470215, lat: 13.6860466003418 },
  { lng: 109.034790039062, lat: 13.6856765747071 },
  { lng: 109.035491943359, lat: 13.6853218078614 },
  { lng: 109.041152954102, lat: 13.682228088379 },
  { lng: 109.041351318359, lat: 13.6821737289429 },
  { lng: 109.041458129883, lat: 13.6821737289429 },
  { lng: 109.041709899902, lat: 13.6823377609252 },
  { lng: 109.043113708496, lat: 13.6842813491822 },
  { lng: 109.044921875, lat: 13.686619758606 },
  { lng: 109.045341491699, lat: 13.68727684021 },
  { lng: 109.045509338379, lat: 13.6876602172852 },
  { lng: 109.045562744141, lat: 13.6882066726685 },
  { lng: 109.045532226562, lat: 13.688645362854 },
  { lng: 109.045478820801, lat: 13.6890277862549 },
  { lng: 109.045196533203, lat: 13.6906967163086 },
  { lng: 109.04517364502, lat: 13.6916284561157 },
  { lng: 109.04517364502, lat: 13.6926126480103 },
  { lng: 109.045204162598, lat: 13.6931333541871 },
  { lng: 109.045310974121, lat: 13.6933517456055 },
  { lng: 109.045478820801, lat: 13.6934061050415 },
  { lng: 109.045677185059, lat: 13.6934337615968 },
  { lng: 109.0458984375, lat: 13.6934061050415 },
  { lng: 109.046478271484, lat: 13.6930856704712 },
  { lng: 109.046730041504, lat: 13.6930589675903 },
  { lng: 109.046836853027, lat: 13.6931142807006 },
  { lng: 109.046867370605, lat: 13.693196296692 },
  { lng: 109.046867370605, lat: 13.693660736084 },
  { lng: 109.046836853027, lat: 13.6943721771241 },
  { lng: 109.046783447266, lat: 13.6954107284546 },
  { lng: 109.046752929688, lat: 13.6961221694947 },
  { lng: 109.046836853027, lat: 13.6965322494506 },
  { lng: 109.046981811524, lat: 13.6968326568604 },
  { lng: 109.047149658203, lat: 13.6969690322875 },
  { lng: 109.047286987305, lat: 13.6969690322875 },
  { lng: 109.047485351563, lat: 13.6969423294067 },
  { lng: 109.048408508301, lat: 13.696614265442 },
  { lng: 109.048629760742, lat: 13.6964216232301 },
  { lng: 109.04891204834, lat: 13.6962032318115 },
  { lng: 109.049247741699, lat: 13.6961212158204 },
  { lng: 109.049530029297, lat: 13.6961212158204 },
  { lng: 109.049896240234, lat: 13.6961755752565 },
  { lng: 109.050148010254, lat: 13.6963119506837 },
  { lng: 109.050422668457, lat: 13.696475982666 },
  { lng: 109.050537109375, lat: 13.6966133117677 },
  { lng: 109.050651550293, lat: 13.696831703186 },
  { lng: 109.050735473633, lat: 13.6972150802612 },
  { lng: 109.05101776123, lat: 13.6988277435303 },
  { lng: 109.051124572754, lat: 13.6990470886231 },
  { lng: 109.05143737793, lat: 13.6993751525879 },
  { lng: 109.051628112793, lat: 13.6994304656982 },
  { lng: 109.051742553711, lat: 13.6994285583497 },
  { lng: 109.051910400391, lat: 13.6994018554689 },
  { lng: 109.052047729492, lat: 13.6993751525879 },
  { lng: 109.052215576172, lat: 13.6993198394775 },
  { lng: 109.052528381348, lat: 13.6991834640503 },
  { lng: 109.052795410156, lat: 13.699055671692 },
  { lng: 109.054237365723, lat: 13.6983623504639 },
  { lng: 109.055946350098, lat: 13.6973495483398 },
  { lng: 109.057090759277, lat: 13.696255683899 },
  { lng: 109.059104919434, lat: 13.6949968338013 },
  { lng: 109.060508728027, lat: 13.6940393447877 },
  { lng: 109.061988830566, lat: 13.6932716369629 },
  { lng: 109.062240600586, lat: 13.6931076049806 },
  { lng: 109.062606811524, lat: 13.6927528381348 },
  { lng: 109.062858581543, lat: 13.6924238204957 },
  { lng: 109.063430786133, lat: 13.6915349960328 },
  { lng: 109.064384460449, lat: 13.6903314590454 },
  { lng: 109.066146850586, lat: 13.6881141662598 },
  { lng: 109.066459655762, lat: 13.6871843338013 },
  { lng: 109.06672668457, lat: 13.6851463317872 },
  { lng: 109.06681060791, lat: 13.684407234192 },
  { lng: 109.067230224609, lat: 13.683066368103 },
  { lng: 109.067588806152, lat: 13.6824369430543 },
  { lng: 109.067817687988, lat: 13.6821908950806 },
  { lng: 109.068428039551, lat: 13.6816711425782 },
  { lng: 109.069717407227, lat: 13.6809864044189 },
  { lng: 109.070640563965, lat: 13.6803569793701 },
  { lng: 109.070785522461, lat: 13.6800832748414 },
  { lng: 109.070808410645, lat: 13.6798915863038 },
  { lng: 109.070869445801, lat: 13.6796731948853 },
  { lng: 109.070838928223, lat: 13.6793718338013 },
  { lng: 109.070770263672, lat: 13.6787843704224 },
  { lng: 109.070739746094, lat: 13.6783733367921 },
  { lng: 109.070709228516, lat: 13.6778526306153 },
  { lng: 109.070739746094, lat: 13.6772794723511 },
  { lng: 109.070793151856, lat: 13.6767044067384 },
  { lng: 109.071273803711, lat: 13.6752271652223 },
  { lng: 109.071525573731, lat: 13.674132347107 },
  { lng: 109.071632385254, lat: 13.6736946105958 },
  { lng: 109.071716308594, lat: 13.6732835769653 },
  { lng: 109.071716308594, lat: 13.6729831695557 },
  { lng: 109.071228027344, lat: 13.6719026565552 },
  { lng: 109.070472717285, lat: 13.6707544326783 },
  { lng: 109.068511962891, lat: 13.6684293746948 },
  { lng: 109.067779541016, lat: 13.6672248840333 },
  { lng: 109.067268371582, lat: 13.6659812927246 },
  { lng: 109.066734313965, lat: 13.6647768020631 },
  { lng: 109.063163757324, lat: 13.6596746444703 },
  { lng: 109.061897277832, lat: 13.6578702926637 },
  { lng: 109.060447692871, lat: 13.6557092666627 },
  { lng: 109.060165405273, lat: 13.6552982330323 },
  { lng: 109.059997558594, lat: 13.6549415588379 },
  { lng: 109.059936523438, lat: 13.6547231674195 },
  { lng: 109.059936523438, lat: 13.6545333862305 },
  { lng: 109.059967041016, lat: 13.6542863845826 },
  { lng: 109.060081481934, lat: 13.6539030075073 },
  { lng: 109.060249328613, lat: 13.653465270996 },
  { lng: 109.060668945313, lat: 13.6521511077881 },
  { lng: 109.061576843262, lat: 13.6507148742676 },
  { lng: 109.065315246582, lat: 13.646541595459 },
  { lng: 109.066909790039, lat: 13.6449003219606 },
  { lng: 109.067886352539, lat: 13.6437225341796 },
  { lng: 109.07022857666, lat: 13.6400146484376 },
  { lng: 109.071624755859, lat: 13.6379346847534 },
  { lng: 109.071655273438, lat: 13.6375522613525 },
  { lng: 109.071571350098, lat: 13.6371965408325 },
  { lng: 109.071319580078, lat: 13.6362123489379 },
  { lng: 109.071090698242, lat: 13.6350078582764 },
  { lng: 109.070983886719, lat: 13.6341333389283 },
  { lng: 109.070953369141, lat: 13.6330928802491 },
  { lng: 109.071006774902, lat: 13.6324367523193 },
  { lng: 109.07186126709, lat: 13.6297960281372 },
  { lng: 109.071891784668, lat: 13.6293859481813 },
  { lng: 109.07186126709, lat: 13.6291389465331 },
  { lng: 109.071662902832, lat: 13.6289205551148 },
  { lng: 109.070907592773, lat: 13.6285381317139 },
  { lng: 109.066162109375, lat: 13.6270427703859 },
  { lng: 109.063865661621, lat: 13.6262235641481 },
  { lng: 109.058296203613, lat: 13.6242017745972 },
  { lng: 109.0556640625, lat: 13.623164176941 },
  { lng: 109.052978515625, lat: 13.6224813461305 },
  { lng: 109.049728393555, lat: 13.6211690902711 },
  { lng: 109.047012329102, lat: 13.6202936172485 },
  { lng: 109.043853759766, lat: 13.6195011138917 },
  { lng: 109.043151855469, lat: 13.6194744110107 },
  { lng: 109.042846679688, lat: 13.6195278167725 },
  { lng: 109.042533874512, lat: 13.6197204589844 },
  { lng: 109.042182922363, lat: 13.6202478408815 },
  { lng: 109.041679382324, lat: 13.6211500167847 },
  { lng: 109.040420532227, lat: 13.6229267120362 },
  { lng: 109.039947509766, lat: 13.6239662170411 },
  { lng: 109.039665222168, lat: 13.6245670318604 },
  { lng: 109.039581298828, lat: 13.6248407363893 },
  { lng: 109.03955078125, lat: 13.6252231597902 },
  { lng: 109.039581298828, lat: 13.6256875991821 },
  { lng: 109.039779663086, lat: 13.6260156631469 },
  { lng: 109.039970397949, lat: 13.6262893676758 },
  { lng: 109.040199279785, lat: 13.6265354156495 },
  { lng: 109.040313720703, lat: 13.6266994476318 },
  { lng: 109.040367126465, lat: 13.62686252594 },
  { lng: 109.040367126465, lat: 13.6271362304687 },
  { lng: 109.040397644043, lat: 13.6274366378784 },
  { lng: 109.040481567383, lat: 13.6277647018434 },
  { lng: 109.040618896484, lat: 13.6282567977905 },
  { lng: 109.040901184082, lat: 13.6286115646362 },
  { lng: 109.041343688965, lat: 13.6289396286011 },
  { lng: 109.041458129883, lat: 13.6291322708131 },
  { lng: 109.041511535645, lat: 13.6293783187867 },
  { lng: 109.041511535645, lat: 13.629677772522 },
  { lng: 109.041458129883, lat: 13.6297597885133 },
  { lng: 109.041343688965, lat: 13.6298971176148 },
  { lng: 109.040901184082, lat: 13.6303615570068 },
  { lng: 109.040733337402, lat: 13.6305532455444 },
  { lng: 109.040534973145, lat: 13.6308813095094 },
  { lng: 109.040397644043, lat: 13.6311817169189 },
  { lng: 109.039894104004, lat: 13.6321382522584 },
  { lng: 109.039665222168, lat: 13.6325206756592 },
  { lng: 109.039390563965, lat: 13.6326313018799 },
  { lng: 109.038627624512, lat: 13.6327133178711 },
  { lng: 109.037986755371, lat: 13.6327400207521 },
  { lng: 109.037536621094, lat: 13.6327676773072 },
  { lng: 109.036506652832, lat: 13.6329593658447 },
  { lng: 109.035835266113, lat: 13.6331777572633 },
  { lng: 109.035331726074, lat: 13.633451461792 },
  { lng: 109.035034179688, lat: 13.6337022781373 },
  { lng: 109.034683227539, lat: 13.6339979171753 },
  { lng: 109.034294128418, lat: 13.6344633102416 },
  { lng: 109.033981323242, lat: 13.6349000930786 },
  { lng: 109.033706665039, lat: 13.6352548599244 },
  { lng: 109.033508300781, lat: 13.6354188919069 },
  { lng: 109.03328704834, lat: 13.635500907898 },
  { lng: 109.03311920166, lat: 13.635500907898 },
  { lng: 109.032806396484, lat: 13.6354465484619 },
  { lng: 109.032554626465, lat: 13.6352834701539 },
  { lng: 109.032279968262, lat: 13.6351461410522 },
  { lng: 109.032028198242, lat: 13.6350917816162 },
  { lng: 109.031715393067, lat: 13.6351194381714 },
  { lng: 109.031295776367, lat: 13.6351737976075 },
  { lng: 109.031074523926, lat: 13.6352834701539 },
  { lng: 109.030822753906, lat: 13.6353101730347 },
  { lng: 109.030349731445, lat: 13.6353645324708 },
  { lng: 109.030006408692, lat: 13.6353921890259 },
  { lng: 109.029586791992, lat: 13.635311126709 },
  { lng: 109.02857208252, lat: 13.6352338790894 },
  { lng: 109.026916503906, lat: 13.6351699829102 },
  { lng: 109.026580810547, lat: 13.6351699829102 },
  { lng: 109.026252746582, lat: 13.635298728943 },
  { lng: 109.026115417481, lat: 13.6356878280639 },
  { lng: 109.025856018066, lat: 13.637243270874 },
  { lng: 109.025787353516, lat: 13.6380186080933 },
  { lng: 109.025718688965, lat: 13.6384077072145 },
  { lng: 109.025588989258, lat: 13.6386671066284 },
  { lng: 109.025390625, lat: 13.638731956482 },
  { lng: 109.024925231934, lat: 13.6387968063356 },
  { lng: 109.024261474609, lat: 13.638731956482 },
  { lng: 109.02229309082, lat: 13.639533996582 },
  { lng: 109.021911621094, lat: 13.6397161483765 },
  { lng: 109.020660400391, lat: 13.6402330398559 },
  { lng: 109.020286560059, lat: 13.640432357788 },
  { lng: 109.020065307617, lat: 13.6407041549684 },
  { lng: 109.019958496094, lat: 13.6410312652588 },
  { lng: 109.019958496094, lat: 13.6413393020631 },
  { lng: 109.01993560791, lat: 13.6417379379273 },
  { lng: 109.019844055176, lat: 13.6419382095337 },
  { lng: 109.019660949707, lat: 13.6420650482178 },
  { lng: 109.019493103027, lat: 13.6420650482178 },
  { lng: 109.019340515137, lat: 13.6420097351075 },
  { lng: 109.018783569336, lat: 13.6416482925414 },
  { lng: 109.01847076416, lat: 13.641393661499 },
  { lng: 109.018173217774, lat: 13.6414480209351 },
  { lng: 109.018096923828, lat: 13.6415929794313 },
  { lng: 109.018135070801, lat: 13.6429719924927 },
  { lng: 109.018089294434, lat: 13.6438341140748 },
  { lng: 109.017959594727, lat: 13.6457195281983 },
  { lng: 109.017471313477, lat: 13.6473579406739 },
  { lng: 109.017150878906, lat: 13.648554801941 },
  { lng: 109.016464233399, lat: 13.6510200500489 },
  { lng: 109.015930175781, lat: 13.6524343490602 },
  { lng: 109.01579284668, lat: 13.6531934738159 },
  { lng: 109.016159057617, lat: 13.6534090042114 },
  { lng: 109.01725769043, lat: 13.6541748046876 },
  { lng: 109.019607543945, lat: 13.6556301116944 },
  { lng: 109.020393371582, lat: 13.6559867858888 },
  { lng: 109.021339416504, lat: 13.6563959121704 },
  { lng: 109.02229309082, lat: 13.6568145751954 },
  { lng: 109.023147583008, lat: 13.6575498580933 },
  { lng: 109.023513793945, lat: 13.6577825546266 },
  { lng: 109.023948669434, lat: 13.6579351425171 },
  { lng: 109.024261474609, lat: 13.657995223999 },
  { lng: 109.024635314942, lat: 13.6580858230591 },
  { lng: 109.025100708008, lat: 13.6582374572754 },
  { lng: 109.025375366211, lat: 13.6583881378174 },
  { lng: 109.025688171387, lat: 13.6586608886719 },
  { lng: 109.025932312012, lat: 13.6589031219484 },
  { lng: 109.026214599609, lat: 13.6591453552246 },
  { lng: 109.026832580566, lat: 13.6594457626343 },
  { lng: 109.026679992676, lat: 13.6596689224244 },
  { lng: 109.026527404785, lat: 13.6598281860352 },
  { lng: 109.026275634766, lat: 13.6600313186647 },
  { lng: 109.025993347168, lat: 13.660161972046 },
  { lng: 109.025672912598, lat: 13.6602916717529 },
  { lng: 109.025283813477, lat: 13.6603651046754 },
  { lng: 109.02498626709, lat: 13.6603937149048 },
  { lng: 109.024703979492, lat: 13.66037940979 },
  { lng: 109.024421691895, lat: 13.6602916717529 },
  { lng: 109.024261474609, lat: 13.6601333618163 },
  { lng: 109.023475646973, lat: 13.6594228744507 },
  { lng: 109.022300720215, lat: 13.6585102081299 },
  { lng: 109.021537780762, lat: 13.6585140228273 },
  { lng: 109.020889282227, lat: 13.6582937240601 },
  { lng: 109.020767211914, lat: 13.6582937240601 },
  { lng: 109.020660400391, lat: 13.6584548950195 },
  { lng: 109.020614624023, lat: 13.6590595245361 },
  { lng: 109.020645141602, lat: 13.659556388855 },
  { lng: 109.020484924316, lat: 13.659875869751 },
  { lng: 109.020309448242, lat: 13.6601238250732 },
  { lng: 109.02001953125, lat: 13.6603240966796 },
  { lng: 109.018661499023, lat: 13.6612358093262 },
  { lng: 109.017959594727, lat: 13.6618785858155 },
  { lng: 109.017852783203, lat: 13.6622495651246 },
  { lng: 109.017730712891, lat: 13.6626462936403 },
  { lng: 109.017669677734, lat: 13.6628608703614 },
  { lng: 109.017753601074, lat: 13.6641044616699 },
  { lng: 109.018005371094, lat: 13.6646480560304 },
  { lng: 109.018028259277, lat: 13.6647968292236 },
  { lng: 109.017967224121, lat: 13.6649370193482 },
  { lng: 109.017135620117, lat: 13.6656551361084 },
  { lng: 109.017082214355, lat: 13.6658515930176 },
  { lng: 109.017181396484, lat: 13.6660499572754 },
  { lng: 109.017539978027, lat: 13.6662483215333 },
  { lng: 109.018218994141, lat: 13.6663970947267 },
  { lng: 109.018402099609, lat: 13.666470527649 },
  { lng: 109.018478393555, lat: 13.6666688919068 },
  { lng: 109.018424987793, lat: 13.6669664382935 },
  { lng: 109.017692565918, lat: 13.6677570343019 },
  { lng: 109.016624450684, lat: 13.6694650650026 },
  { lng: 109.016006469727, lat: 13.6703929901122 },
  { lng: 109.015647888184, lat: 13.6714067459107 },
  { lng: 109.01522064209, lat: 13.6731386184693 },
  { lng: 109.014610290527, lat: 13.6742515563965 },
  { lng: 109.01439666748, lat: 13.6748142242433 },
  { lng: 109.014221191406, lat: 13.6766147613525 },
  { lng: 109.014205932617, lat: 13.6768608093262 },
  { lng: 109.013938903809, lat: 13.6785945892333 },
  { lng: 109.013862609863, lat: 13.6794853210449 },
  { lng: 109.013496398926, lat: 13.6816501617432 },
  { lng: 109.013473510742, lat: 13.6826152801514 },
  { lng: 109.013473510742, lat: 13.6830606460571 },
  { lng: 109.013854980469, lat: 13.6840496063233 },
  { lng: 109.014183044434, lat: 13.6849155426026 },
  { lng: 109.014221191406, lat: 13.6855716705322 },
  { lng: 109.014045715332, lat: 13.6867837905884 },
];

export default canhhien;
