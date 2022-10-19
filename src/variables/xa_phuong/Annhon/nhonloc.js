const nhonloc = [
  { lng: 109.069396972656, lat: 13.8818664550782 },
  { lng: 109.069633483887, lat: 13.8818492889405 },
  { lng: 109.070091247559, lat: 13.8817682266236 },
  { lng: 109.071105957031, lat: 13.8813867568971 },
  { lng: 109.071678161621, lat: 13.8813371658325 },
  { lng: 109.072319030762, lat: 13.881311416626 },
  { lng: 109.072731018067, lat: 13.8812112808227 },
  { lng: 109.073036193848, lat: 13.881010055542 },
  { lng: 109.073196411133, lat: 13.8808336257935 },
  { lng: 109.073318481445, lat: 13.880558013916 },
  { lng: 109.073448181152, lat: 13.8798036575317 },
  { lng: 109.073554992676, lat: 13.8791007995606 },
  { lng: 109.073608398438, lat: 13.8787240982057 },
  { lng: 109.073837280273, lat: 13.8782720565797 },
  { lng: 109.074432373047, lat: 13.8776941299439 },
  { lng: 109.075454711914, lat: 13.8768901824952 },
  { lng: 109.075584411621, lat: 13.8767137527467 },
  { lng: 109.075637817383, lat: 13.8765888214112 },
  { lng: 109.075614929199, lat: 13.8764877319336 },
  { lng: 109.075401306152, lat: 13.8763666152955 },
  { lng: 109.075202941895, lat: 13.8761873245239 },
  { lng: 109.074920654297, lat: 13.8761367797852 },
  { lng: 109.074424743652, lat: 13.8761367797852 },
  { lng: 109.07396697998, lat: 13.8760623931886 },
  { lng: 109.073684692383, lat: 13.8758859634399 },
  { lng: 109.073478698731, lat: 13.8757352828979 },
  { lng: 109.0732421875, lat: 13.8755598068237 },
  { lng: 109.073112487793, lat: 13.875358581543 },
  { lng: 109.072982788086, lat: 13.8751077651977 },
  { lng: 109.072906494141, lat: 13.8748569488526 },
  { lng: 109.072654724121, lat: 13.8739776611328 },
  { lng: 109.072448730469, lat: 13.8734502792359 },
  { lng: 109.072364807129, lat: 13.8731737136841 },
  { lng: 109.072212219238, lat: 13.872922897339 },
  { lng: 109.072113037109, lat: 13.8728733062744 },
  { lng: 109.071983337402, lat: 13.8728475570679 },
  { lng: 109.071388244629, lat: 13.872922897339 },
  { lng: 109.070877075195, lat: 13.8731489181519 },
  { lng: 109.07022857666, lat: 13.8734064102172 },
  { lng: 109.070152282715, lat: 13.8734350204468 },
  { lng: 109.069244384766, lat: 13.8734645843507 },
  { lng: 109.068397521973, lat: 13.8735990524293 },
  { lng: 109.067848205566, lat: 13.8736801147462 },
  { lng: 109.067153930664, lat: 13.8737621307373 },
  { lng: 109.065979003906, lat: 13.8738346099854 },
  { lng: 109.065093994141, lat: 13.8741283416748 },
  { lng: 109.064598083496, lat: 13.8743228912355 },
  { lng: 109.063133239746, lat: 13.8745841979982 },
  { lng: 109.062461853027, lat: 13.8746976852418 },
  { lng: 109.06111907959, lat: 13.875039100647 },
  { lng: 109.060768127441, lat: 13.875039100647 },
  { lng: 109.060516357422, lat: 13.8750228881837 },
  { lng: 109.060317993164, lat: 13.8749914169312 },
  { lng: 109.060218811035, lat: 13.8749418258668 },
  { lng: 109.060134887695, lat: 13.8748607635497 },
  { lng: 109.059944152832, lat: 13.874397277832 },
  { lng: 109.05980682373, lat: 13.8741369247437 },
  { lng: 109.059707641602, lat: 13.8738613128663 },
  { lng: 109.059555053711, lat: 13.873275756836 },
  { lng: 109.059478759766, lat: 13.873064994812 },
  { lng: 109.059356689453, lat: 13.8728208541871 },
  { lng: 109.059143066406, lat: 13.8724956512452 },
  { lng: 109.058891296387, lat: 13.871992111206 },
  { lng: 109.058555603027, lat: 13.8715372085571 },
  { lng: 109.058242797852, lat: 13.8711948394775 },
  { lng: 109.058082580566, lat: 13.8707132339479 },
  { lng: 109.058082580566, lat: 13.8705024719239 },
  { lng: 109.058097839355, lat: 13.8702087402344 },
  { lng: 109.058151245117, lat: 13.8697547912598 },
  { lng: 109.058166503906, lat: 13.8692827224733 },
  { lng: 109.058113098145, lat: 13.8687152862549 },
  { lng: 109.058036804199, lat: 13.8683090209962 },
  { lng: 109.057914733887, lat: 13.8680000305176 },
  { lng: 109.057746887207, lat: 13.8676433563232 },
  { lng: 109.0576171875, lat: 13.8674802780153 },
  { lng: 109.057319641113, lat: 13.867172241211 },
  { lng: 109.057083129883, lat: 13.8669605255127 },
  { lng: 109.056968688965, lat: 13.8668308258057 },
  { lng: 109.056770324707, lat: 13.8666362762452 },
  { lng: 109.056549072266, lat: 13.8664093017579 },
  { lng: 109.056266784668, lat: 13.8662137985229 },
  { lng: 109.056053161621, lat: 13.8661813735962 },
  { lng: 109.055648803711, lat: 13.8661813735962 },
  { lng: 109.055335998535, lat: 13.8662137985229 },
  { lng: 109.055084228516, lat: 13.8662137985229 },
  { lng: 109.054870605469, lat: 13.8661975860596 },
  { lng: 109.054534912109, lat: 13.8661165237427 },
  { lng: 109.054183959961, lat: 13.8660030364991 },
  { lng: 109.053703308105, lat: 13.8658237457275 },
  { lng: 109.052955627441, lat: 13.8654832839965 },
  { lng: 109.052536010742, lat: 13.8653373718262 },
  { lng: 109.052124023438, lat: 13.8651256561279 },
  { lng: 109.051620483398, lat: 13.8648662567139 },
  { lng: 109.051223754883, lat: 13.8646392822266 },
  { lng: 109.047958374023, lat: 13.8627901077272 },
  { lng: 109.047241210938, lat: 13.8622922897339 },
  { lng: 109.046730041504, lat: 13.8620433807374 },
  { lng: 109.046432495117, lat: 13.8619604110718 },
  { lng: 109.046173095703, lat: 13.8620023727416 },
  { lng: 109.046005249024, lat: 13.8621263504029 },
  { lng: 109.04475402832, lat: 13.8627252578735 },
  { lng: 109.044662475586, lat: 13.862687110901 },
  { lng: 109.041816711426, lat: 13.8628101348877 },
  { lng: 109.040756225586, lat: 13.8628931045533 },
  { lng: 109.040458679199, lat: 13.8630590438842 },
  { lng: 109.04029083252, lat: 13.8633909225464 },
  { lng: 109.04020690918, lat: 13.8637228012086 },
  { lng: 109.04020690918, lat: 13.8638467788697 },
  { lng: 109.039909362793, lat: 13.8640956878663 },
  { lng: 109.03923034668, lat: 13.8643445968628 },
  { lng: 109.037399291992, lat: 13.8654232025147 },
  { lng: 109.034934997559, lat: 13.8672885894777 },
  { lng: 109.033317565918, lat: 13.8682432174684 },
  { lng: 109.031410217285, lat: 13.8692789077759 },
  { lng: 109.025817871094, lat: 13.8713817596437 },
  { lng: 109.022308349609, lat: 13.8733739852905 },
  { lng: 109.020515441895, lat: 13.8741827011108 },
  { lng: 109.019676208496, lat: 13.8745136260987 },
  { lng: 109.017356872559, lat: 13.8751325607301 },
  { lng: 109.01496887207, lat: 13.8757038116455 },
  { lng: 109.01286315918, lat: 13.8760147094728 },
  { lng: 109.012977600098, lat: 13.8769521713258 },
  { lng: 109.013076782227, lat: 13.8779859542848 },
  { lng: 109.013298034668, lat: 13.8785133361817 },
  { lng: 109.013717651367, lat: 13.8794651031495 },
  { lng: 109.013717651367, lat: 13.8796443939209 },
  { lng: 109.013633728027, lat: 13.8802194595338 },
  { lng: 109.013442993164, lat: 13.880578994751 },
  { lng: 109.013442993164, lat: 13.8810386657715 },
  { lng: 109.013481140137, lat: 13.8813343048096 },
  { lng: 109.013786315918, lat: 13.8820877075196 },
  { lng: 109.01407623291, lat: 13.8834972381592 },
  { lng: 109.014228820801, lat: 13.8835105895997 },
  { lng: 109.014999389648, lat: 13.8835287094116 },
  { lng: 109.01537322998, lat: 13.8835287094116 },
  { lng: 109.015716552734, lat: 13.88356590271 },
  { lng: 109.015991210938, lat: 13.8836755752565 },
  { lng: 109.016235351563, lat: 13.8838233947754 },
  { lng: 109.016616821289, lat: 13.8843364715577 },
  { lng: 109.016990661621, lat: 13.8850326538086 },
  { lng: 109.017364501953, lat: 13.8853807449341 },
  { lng: 109.017684936523, lat: 13.8854913711548 },
  { lng: 109.018096923828, lat: 13.8854732513428 },
  { lng: 109.018478393555, lat: 13.8852529525757 },
  { lng: 109.019035339355, lat: 13.8850326538086 },
  { lng: 109.019523620606, lat: 13.8849964141846 },
  { lng: 109.019943237305, lat: 13.8849954605104 },
  { lng: 109.020225524902, lat: 13.8850326538086 },
  { lng: 109.020484924316, lat: 13.885124206543 },
  { lng: 109.020568847656, lat: 13.8851642608643 },
  { lng: 109.020637512207, lat: 13.8855457305909 },
  { lng: 109.020820617676, lat: 13.8858757019042 },
  { lng: 109.021255493164, lat: 13.8862609863282 },
  { lng: 109.021987915039, lat: 13.886700630188 },
  { lng: 109.022308349609, lat: 13.8868293762206 },
  { lng: 109.02286529541, lat: 13.8871240615844 },
  { lng: 109.023368835449, lat: 13.8873472213746 },
  { lng: 109.024002075195, lat: 13.8876180648805 },
  { lng: 109.025016784668, lat: 13.8879232406617 },
  { lng: 109.027336120606, lat: 13.8884477615357 },
  { lng: 109.029327392578, lat: 13.8888530731202 },
  { lng: 109.030151367188, lat: 13.8891353607179 },
  { lng: 109.030982971191, lat: 13.8892555236818 },
  { lng: 109.032600402832, lat: 13.8898220062256 },
  { lng: 109.033554077148, lat: 13.8899841308594 },
  { lng: 109.034820556641, lat: 13.8898420333862 },
  { lng: 109.035690307617, lat: 13.8896799087524 },
  { lng: 109.036064147949, lat: 13.889720916748 },
  { lng: 109.036430358887, lat: 13.8898420333862 },
  { lng: 109.036804199219, lat: 13.8901252746582 },
  { lng: 109.036972045898, lat: 13.8903274536134 },
  { lng: 109.037017822266, lat: 13.8904495239258 },
  { lng: 109.037139892578, lat: 13.8907718658447 },
  { lng: 109.037055969238, lat: 13.8912172317506 },
  { lng: 109.036849975586, lat: 13.8916215896606 },
  { lng: 109.036804199219, lat: 13.8919858932495 },
  { lng: 109.036933898926, lat: 13.8921079635621 },
  { lng: 109.037391662598, lat: 13.8921089172364 },
  { lng: 109.03768157959, lat: 13.8920269012451 },
  { lng: 109.038215637207, lat: 13.8917837142945 },
  { lng: 109.038551330566, lat: 13.8915405273438 },
  { lng: 109.039001464844, lat: 13.891339302063 },
  { lng: 109.039337158203, lat: 13.8912982940675 },
  { lng: 109.039627075195, lat: 13.8913383483887 },
  { lng: 109.040084838867, lat: 13.8915004730225 },
  { lng: 109.041244506836, lat: 13.8919858932495 },
  { lng: 109.041656494141, lat: 13.8920660018921 },
  { lng: 109.042068481445, lat: 13.8921070098876 },
  { lng: 109.042861938477, lat: 13.8917427062989 },
  { lng: 109.044494628906, lat: 13.8913908004761 },
  { lng: 109.044898986816, lat: 13.8915309906006 },
  { lng: 109.045104980469, lat: 13.8913669586182 },
  { lng: 109.045425415039, lat: 13.8911466598512 },
  { lng: 109.045722961426, lat: 13.8909816741944 },
  { lng: 109.046272277832, lat: 13.890781402588 },
  { lng: 109.04679107666, lat: 13.8905982971193 },
  { lng: 109.047523498535, lat: 13.8904695510864 },
  { lng: 109.048461914063, lat: 13.8902683258057 },
  { lng: 109.048858642578, lat: 13.8900299072266 },
  { lng: 109.049446105957, lat: 13.8896923065187 },
  { lng: 109.049858093262, lat: 13.8892526626587 },
  { lng: 109.050102233887, lat: 13.889033317566 },
  { lng: 109.050308227539, lat: 13.8887042999268 },
  { lng: 109.050529479981, lat: 13.8883380889893 },
  { lng: 109.050888061523, lat: 13.8877515792846 },
  { lng: 109.051261901855, lat: 13.8872041702272 },
  { lng: 109.051544189453, lat: 13.8867282867433 },
  { lng: 109.05184173584, lat: 13.8864345550538 },
  { lng: 109.052085876465, lat: 13.8862524032593 },
  { lng: 109.052627563477, lat: 13.8859777450562 },
  { lng: 109.053344726562, lat: 13.8857402801514 },
  { lng: 109.054458618164, lat: 13.8854713439943 },
  { lng: 109.055335998535, lat: 13.8853235244752 },
  { lng: 109.056594848633, lat: 13.8850860595704 },
  { lng: 109.056953430176, lat: 13.8849773406982 },
  { lng: 109.057159423828, lat: 13.8848848342897 },
  { lng: 109.057403564453, lat: 13.8847570419313 },
  { lng: 109.057678222656, lat: 13.8846292495729 },
  { lng: 109.057830810547, lat: 13.8845195770264 },
  { lng: 109.058074951172, lat: 13.8843002319336 },
  { lng: 109.058265686035, lat: 13.8841361999513 },
  { lng: 109.058525085449, lat: 13.8838796615601 },
  { lng: 109.058708190918, lat: 13.8836603164674 },
  { lng: 109.059028625488, lat: 13.8831853866578 },
  { lng: 109.059310913086, lat: 13.8828010559083 },
  { lng: 109.05989074707, lat: 13.8823795318603 },
  { lng: 109.060096740723, lat: 13.8822517395019 },
  { lng: 109.06037902832, lat: 13.882161140442 },
  { lng: 109.060623168945, lat: 13.8821058273316 },
  { lng: 109.060737609863, lat: 13.8820877075196 },
  { lng: 109.061279296875, lat: 13.8819780349732 },
  { lng: 109.061614990234, lat: 13.8818683624268 },
  { lng: 109.061874389648, lat: 13.8817224502564 },
  { lng: 109.062156677246, lat: 13.8816490173341 },
  { lng: 109.062423706055, lat: 13.8815937042237 },
  { lng: 109.06266784668, lat: 13.8815746307373 },
  { lng: 109.063262939453, lat: 13.8815574645997 },
  { lng: 109.06485748291, lat: 13.8816480636596 },
  { lng: 109.065727233887, lat: 13.8816881179809 },
  { lng: 109.06689453125, lat: 13.881769180298 },
  { lng: 109.067352294922, lat: 13.8818502426148 },
  { lng: 109.067764282227, lat: 13.8819313049316 },
  { lng: 109.068389892578, lat: 13.8819313049316 },
  { lng: 109.068809509277, lat: 13.8818902969361 },
  { lng: 109.069053649902, lat: 13.8818902969361 },
  { lng: 109.069396972656, lat: 13.8818664550782 },
];

export default nhonloc;