const nhonhung = [
  { lng: 109.123947143555, lat: 13.8937129974366 },
  { lng: 109.123924255371, lat: 13.8948192596436 },
  { lng: 109.123947143555, lat: 13.8956031799316 },
  { lng: 109.123970031738, lat: 13.8960418701173 },
  { lng: 109.123886108398, lat: 13.8963098526001 },
  { lng: 109.123809814453, lat: 13.8963289260865 },
  { lng: 109.123611450195, lat: 13.8961954116822 },
  { lng: 109.122566223145, lat: 13.8958396911621 },
  { lng: 109.122093200684, lat: 13.8957643508912 },
  { lng: 109.121742248535, lat: 13.8956880569458 },
  { lng: 109.121276855469, lat: 13.8954973220825 },
  { lng: 109.120239257812, lat: 13.895076751709 },
  { lng: 109.120040893555, lat: 13.8950386047363 },
  { lng: 109.11939239502, lat: 13.8950386047363 },
  { lng: 109.119003295898, lat: 13.8950576782227 },
  { lng: 109.118515014649, lat: 13.895058631897 },
  { lng: 109.117828369141, lat: 13.8950777053833 },
  { lng: 109.117042541504, lat: 13.8952894210816 },
  { lng: 109.116340637207, lat: 13.8955183029176 },
  { lng: 109.115699768066, lat: 13.8956050872804 },
  { lng: 109.115135192871, lat: 13.8954544067384 },
  { lng: 109.11442565918, lat: 13.8948822021486 },
  { lng: 109.113288879395, lat: 13.894024848938 },
  { lng: 109.111366271973, lat: 13.8922681808472 },
  { lng: 109.109390258789, lat: 13.8908796310425 },
  { lng: 109.10888671875, lat: 13.8907165527345 },
  { lng: 109.108642578125, lat: 13.8907165527345 },
  { lng: 109.108390808106, lat: 13.8907575607301 },
  { lng: 109.107803344727, lat: 13.8909616470337 },
  { lng: 109.107048034668, lat: 13.8913707733155 },
  { lng: 109.106712341309, lat: 13.8914937973022 },
  { lng: 109.10620880127, lat: 13.8915348052978 },
  { lng: 109.106002807617, lat: 13.8914527893066 },
  { lng: 109.10587310791, lat: 13.8913717269898 },
  { lng: 109.105621337891, lat: 13.8907594680787 },
  { lng: 109.105415344238, lat: 13.8907184600831 },
  { lng: 109.105163574219, lat: 13.8907184600831 },
  { lng: 109.104782104492, lat: 13.8908004760742 },
  { lng: 109.10457611084, lat: 13.8910036087037 },
  { lng: 109.104026794434, lat: 13.8913717269898 },
  { lng: 109.103652954102, lat: 13.8916997909546 },
  { lng: 109.103569030762, lat: 13.8917808532714 },
  { lng: 109.103569030762, lat: 13.8919858932495 },
  { lng: 109.103691101074, lat: 13.8924350738526 },
  { lng: 109.103569030762, lat: 13.8929262161256 },
  { lng: 109.10302734375, lat: 13.8939065933228 },
  { lng: 109.102729797363, lat: 13.8941106796266 },
  { lng: 109.102439880371, lat: 13.8941926956177 },
  { lng: 109.102058410645, lat: 13.8941926956177 },
  { lng: 109.101890563965, lat: 13.8941516876221 },
  { lng: 109.101722717285, lat: 13.8940706253053 },
  { lng: 109.101554870605, lat: 13.8939476013184 },
  { lng: 109.101226806641, lat: 13.8935813903809 },
  { lng: 109.100883483887, lat: 13.8935403823853 },
  { lng: 109.100425720215, lat: 13.8935403823853 },
  { lng: 109.099128723145, lat: 13.8935813903809 },
  { lng: 109.098289489746, lat: 13.8935413360596 },
  { lng: 109.097366333008, lat: 13.893500328064 },
  { lng: 109.096946716309, lat: 13.8934192657472 },
  { lng: 109.09627532959, lat: 13.8931741714478 },
  { lng: 109.095771789551, lat: 13.8928470611573 },
  { lng: 109.095314025879, lat: 13.8923568725587 },
  { lng: 109.095184326172, lat: 13.8919067382812 },
  { lng: 109.095016479492, lat: 13.8915395736694 },
  { lng: 109.09481048584, lat: 13.8912935256958 },
  { lng: 109.094184875488, lat: 13.8910093307495 },
  { lng: 109.092803955078, lat: 13.8906230926514 },
  { lng: 109.092758178711, lat: 13.8907880783082 },
  { lng: 109.091110229492, lat: 13.8928165435792 },
  { lng: 109.088623046875, lat: 13.8949880599976 },
  { lng: 109.088935852051, lat: 13.8952903747559 },
  { lng: 109.089515686035, lat: 13.8958797454834 },
  { lng: 109.08984375, lat: 13.896375656128 },
  { lng: 109.090202331543, lat: 13.8969011306764 },
  { lng: 109.0908203125, lat: 13.8974313735961 },
  { lng: 109.090126037598, lat: 13.8984518051148 },
  { lng: 109.089698791504, lat: 13.8988857269287 },
  { lng: 109.089401245117, lat: 13.8991565704347 },
  { lng: 109.089294433594, lat: 13.8992919921876 },
  { lng: 109.089279174805, lat: 13.8993873596193 },
  { lng: 109.089294433594, lat: 13.899577140808 },
  { lng: 109.089332580567, lat: 13.899739265442 },
  { lng: 109.089447021484, lat: 13.8998880386354 },
  { lng: 109.089584350586, lat: 13.9000368118286 },
  { lng: 109.089721679687, lat: 13.9001445770264 },
  { lng: 109.089920043945, lat: 13.9002265930176 },
  { lng: 109.090087890625, lat: 13.9002809524537 },
  { lng: 109.090255737305, lat: 13.900321006775 },
  { lng: 109.090599060059, lat: 13.9003887176515 },
  { lng: 109.090682983398, lat: 13.9004297256471 },
  { lng: 109.090766906738, lat: 13.9005241394044 },
  { lng: 109.090805053711, lat: 13.9006061553956 },
  { lng: 109.090850830078, lat: 13.9007406234742 },
  { lng: 109.090866088867, lat: 13.9009714126587 },
  { lng: 109.090866088867, lat: 13.901146888733 },
  { lng: 109.0908203125, lat: 13.9013643264771 },
  { lng: 109.090713500977, lat: 13.901580810547 },
  { lng: 109.090530395508, lat: 13.9017839431763 },
  { lng: 109.090240478516, lat: 13.9020690917969 },
  { lng: 109.089851379395, lat: 13.9022846221924 },
  { lng: 109.089576721191, lat: 13.9023399353027 },
  { lng: 109.0888671875, lat: 13.9023666381835 },
  { lng: 109.08829498291, lat: 13.9023666381835 },
  { lng: 109.088127136231, lat: 13.9024076461793 },
  { lng: 109.087989807129, lat: 13.90247631073 },
  { lng: 109.087768554688, lat: 13.9026384353639 },
  { lng: 109.087432861328, lat: 13.90292263031 },
  { lng: 109.086441040039, lat: 13.9035291671754 },
  { lng: 109.086288452148, lat: 13.9038000106812 },
  { lng: 109.08625793457, lat: 13.9040307998658 },
  { lng: 109.086219787598, lat: 13.9042196273805 },
  { lng: 109.086097717285, lat: 13.9043970108033 },
  { lng: 109.0859375, lat: 13.904559135437 },
  { lng: 109.085762023926, lat: 13.9047899246216 },
  { lng: 109.085174560547, lat: 13.9052782058716 },
  { lng: 109.085052490234, lat: 13.9054269790651 },
  { lng: 109.084785461426, lat: 13.906707763672 },
  { lng: 109.084495544434, lat: 13.9074687957763 },
  { lng: 109.084480285645, lat: 13.9078016281128 },
  { lng: 109.084922790527, lat: 13.9080905914308 },
  { lng: 109.086555480957, lat: 13.9087886810304 },
  { lng: 109.086898803711, lat: 13.9090776443482 },
  { lng: 109.087249755859, lat: 13.9094390869141 },
  { lng: 109.087516784668, lat: 13.9097757339479 },
  { lng: 109.087692260742, lat: 13.9100408554077 },
  { lng: 109.087837219238, lat: 13.9103059768676 },
  { lng: 109.087837219238, lat: 13.9106426239014 },
  { lng: 109.087791442871, lat: 13.9110050201415 },
  { lng: 109.087768554688, lat: 13.9113664627076 },
  { lng: 109.087768554688, lat: 13.9117040634155 },
  { lng: 109.087814331055, lat: 13.9120645523072 },
  { lng: 109.087913513184, lat: 13.9122343063354 },
  { lng: 109.088088989258, lat: 13.9124736785889 },
  { lng: 109.088432312012, lat: 13.912883758545 },
  { lng: 109.088928222656, lat: 13.913414001465 },
  { lng: 109.089050292969, lat: 13.9135818481446 },
  { lng: 109.089172363281, lat: 13.9138231277466 },
  { lng: 109.089172363281, lat: 13.9141359329224 },
  { lng: 109.089126586914, lat: 13.9143285751344 },
  { lng: 109.088943481445, lat: 13.9149732589723 },
  { lng: 109.088890075684, lat: 13.9152135849 },
  { lng: 109.088890075684, lat: 13.9155025482178 },
  { lng: 109.088920593262, lat: 13.91579246521 },
  { lng: 109.088966369629, lat: 13.916033744812 },
  { lng: 109.089004516602, lat: 13.916145324707 },
  { lng: 109.089042663574, lat: 13.9162740707397 },
  { lng: 109.089340209961, lat: 13.9167814254761 },
  { lng: 109.089782714844, lat: 13.917239189148 },
  { lng: 109.090026855469, lat: 13.9174318313599 },
  { lng: 109.090324401855, lat: 13.9175758361816 },
  { lng: 109.090698242188, lat: 13.9177207946777 },
  { lng: 109.092620849609, lat: 13.9179611206056 },
  { lng: 109.093635559082, lat: 13.9180326461793 },
  { lng: 109.093955993652, lat: 13.9180812835694 },
  { lng: 109.094108581543, lat: 13.9181051254273 },
  { lng: 109.094306945801, lat: 13.9182262420655 },
  { lng: 109.094429016113, lat: 13.9183702468872 },
  { lng: 109.094474792481, lat: 13.9186458587647 },
  { lng: 109.094764709473, lat: 13.9184923171998 },
  { lng: 109.095420837402, lat: 13.9181423187255 },
  { lng: 109.09587097168, lat: 13.9180927276611 },
  { lng: 109.096267700195, lat: 13.9180927276611 },
  { lng: 109.096565246582, lat: 13.9181900024413 },
  { lng: 109.096817016602, lat: 13.9184341430664 },
  { lng: 109.097320556641, lat: 13.9186277389528 },
  { lng: 109.098251342773, lat: 13.9186887741089 },
  { lng: 109.09846496582, lat: 13.9187860488891 },
  { lng: 109.098709106445, lat: 13.9188442230225 },
  { lng: 109.098945617676, lat: 13.9188632965088 },
  { lng: 109.09920501709, lat: 13.9188442230225 },
  { lng: 109.099418640137, lat: 13.9188051223755 },
  { lng: 109.099662780762, lat: 13.9187269210816 },
  { lng: 109.100021362305, lat: 13.9185132980347 },
  { lng: 109.100578308106, lat: 13.9182405471802 },
  { lng: 109.100875854492, lat: 13.9181442260743 },
  { lng: 109.101135253906, lat: 13.9181251525879 },
  { lng: 109.101348876953, lat: 13.9181251525879 },
  { lng: 109.101547241211, lat: 13.9181051254273 },
  { lng: 109.101707458496, lat: 13.9180660247803 },
  { lng: 109.101829528809, lat: 13.9180078506471 },
  { lng: 109.101844787598, lat: 13.9179296493531 },
  { lng: 109.101867675781, lat: 13.9176969528198 },
  { lng: 109.101905822754, lat: 13.9174451828003 },
  { lng: 109.102005004883, lat: 13.9172506332397 },
  { lng: 109.102226257324, lat: 13.9168434143067 },
  { lng: 109.102470397949, lat: 13.916464805603 },
  { lng: 109.102745056152, lat: 13.9162769317628 },
  { lng: 109.103225708008, lat: 13.9160566329957 },
  { lng: 109.103469848633, lat: 13.915979385376 },
  { lng: 109.103828430176, lat: 13.9159402847289 },
  { lng: 109.104125976563, lat: 13.9159593582154 },
  { lng: 109.104362487793, lat: 13.9160175323486 },
  { lng: 109.104698181152, lat: 13.9161338806153 },
  { lng: 109.104919433594, lat: 13.9162893295288 },
  { lng: 109.105155944824, lat: 13.9164247512817 },
  { lng: 109.105537414551, lat: 13.9165611267091 },
  { lng: 109.105674743652, lat: 13.9165802001954 },
  { lng: 109.105857849121, lat: 13.9165992736816 },
  { lng: 109.106010437012, lat: 13.9165601730346 },
  { lng: 109.106155395508, lat: 13.9164829254152 },
  { lng: 109.106231689453, lat: 13.9162111282348 },
  { lng: 109.106254577637, lat: 13.9160556793213 },
  { lng: 109.106330871582, lat: 13.9158420562745 },
  { lng: 109.106506347656, lat: 13.9154539108276 },
  { lng: 109.106689453125, lat: 13.9153175354004 },
  { lng: 109.10725402832, lat: 13.9152889251708 },
  { lng: 109.107551574707, lat: 13.9152879714966 },
  { lng: 109.10767364502, lat: 13.9152688980103 },
  { lng: 109.107872009277, lat: 13.9151906967163 },
  { lng: 109.107894897461, lat: 13.9150362014772 },
  { lng: 109.107833862305, lat: 13.9149389266967 },
  { lng: 109.107696533203, lat: 13.9147644042968 },
  { lng: 109.107597351074, lat: 13.9146289825439 },
  { lng: 109.107536315918, lat: 13.914454460144 },
  { lng: 109.107513427734, lat: 13.9142208099366 },
  { lng: 109.107574462891, lat: 13.9138717651367 },
  { lng: 109.10767364502, lat: 13.9136581420898 },
  { lng: 109.108543395996, lat: 13.9127645492554 },
  { lng: 109.108924865723, lat: 13.9122409820557 },
  { lng: 109.109489440918, lat: 13.9111633300781 },
  { lng: 109.110565185547, lat: 13.908187866211 },
  { lng: 109.111427307129, lat: 13.9071655273438 },
  { lng: 109.11198425293, lat: 13.9073219299317 },
  { lng: 109.112312316895, lat: 13.9074678421021 },
  { lng: 109.112998962402, lat: 13.9076137542726 },
  { lng: 109.113418579102, lat: 13.9076137542726 },
  { lng: 109.113746643067, lat: 13.9074974060059 },
  { lng: 109.114494323731, lat: 13.9070262908936 },
  { lng: 109.114990234375, lat: 13.9065189361573 },
  { lng: 109.116157531738, lat: 13.9052047729493 },
  { lng: 109.116363525391, lat: 13.9049434661866 },
  { lng: 109.116661071777, lat: 13.9047384262086 },
  { lng: 109.116928100586, lat: 13.9046211242676 },
  { lng: 109.117263793945, lat: 13.9045629501343 },
  { lng: 109.117797851562, lat: 13.9045915603637 },
  { lng: 109.118606567383, lat: 13.9046792984008 },
  { lng: 109.11905670166, lat: 13.9047660827637 },
  { lng: 109.119445800781, lat: 13.9048538208007 },
  { lng: 109.119827270508, lat: 13.9048833847046 },
  { lng: 109.120964050293, lat: 13.9050884246827 },
  { lng: 109.12126159668, lat: 13.9039888381959 },
  { lng: 109.121788024902, lat: 13.9024448394775 },
  { lng: 109.122375488281, lat: 13.9016437530517 },
  { lng: 109.12272644043, lat: 13.9013576507568 },
  { lng: 109.123428344727, lat: 13.9010143280029 },
  { lng: 109.12419128418, lat: 13.900728225708 },
  { lng: 109.12589263916, lat: 13.9004983901978 },
  { lng: 109.126945495605, lat: 13.899983406067 },
  { lng: 109.125946044922, lat: 13.8963813781738 },
  { lng: 109.125648498535, lat: 13.8948936462402 },
  { lng: 109.125244140625, lat: 13.89426612854 },
  { lng: 109.124771118164, lat: 13.8938646316529 },
  { lng: 109.123947143555, lat: 13.8937129974366 },
];

export default nhonhung;