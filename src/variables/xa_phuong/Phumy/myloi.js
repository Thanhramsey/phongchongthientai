const myloi = [
  { lng: 109.121994018555, lat: 14.2465696334839 },
  { lng: 109.121139526367, lat: 14.2477264404297 },
  { lng: 109.120132446289, lat: 14.2491416931153 },
  { lng: 109.119720458984, lat: 14.2499113082887 },
  { lng: 109.119346618652, lat: 14.2511415481567 },
  { lng: 109.118919372559, lat: 14.252540588379 },
  { lng: 109.118728637695, lat: 14.2538022994995 },
  { lng: 109.118324279785, lat: 14.2554931640626 },
  { lng: 109.118255615234, lat: 14.2559242248535 },
  { lng: 109.11865234375, lat: 14.2568922042847 },
  { lng: 109.119255065918, lat: 14.2575693130493 },
  { lng: 109.119850158692, lat: 14.2582750320435 },
  { lng: 109.120422363281, lat: 14.2593212127687 },
  { lng: 109.120834350586, lat: 14.2603054046632 },
  { lng: 109.121055603027, lat: 14.2615337371826 },
  { lng: 109.120971679688, lat: 14.2620420455933 },
  { lng: 109.120758056641, lat: 14.2626876831055 },
  { lng: 109.120758056641, lat: 14.263056755066 },
  { lng: 109.120849609375, lat: 14.2633638381957 },
  { lng: 109.12100982666, lat: 14.2635793685914 },
  { lng: 109.121231079102, lat: 14.2637329101563 },
  { lng: 109.121482849121, lat: 14.2637643814087 },
  { lng: 109.121856689453, lat: 14.2637634277345 },
  { lng: 109.122207641602, lat: 14.263731956482 },
  { lng: 109.122367858887, lat: 14.2637634277345 },
  { lng: 109.122680664063, lat: 14.2639465332032 },
  { lng: 109.122932434082, lat: 14.2642240524293 },
  { lng: 109.122993469238, lat: 14.2648696899415 },
  { lng: 109.123123168945, lat: 14.2661304473878 },
  { lng: 109.123199462891, lat: 14.2669763565064 },
  { lng: 109.123237609863, lat: 14.2673759460449 },
  { lng: 109.123237609863, lat: 14.2675304412843 },
  { lng: 109.123199462891, lat: 14.2676515579224 },
  { lng: 109.123046875, lat: 14.2678060531616 },
  { lng: 109.12279510498, lat: 14.2679595947267 },
  { lng: 109.122131347656, lat: 14.2680530548095 },
  { lng: 109.121406555176, lat: 14.268144607544 },
  { lng: 109.120613098145, lat: 14.2684230804444 },
  { lng: 109.119384765625, lat: 14.269100189209 },
  { lng: 109.118026733398, lat: 14.2695617675781 },
  { lng: 109.116134643555, lat: 14.2701473236085 },
  { lng: 109.113990783691, lat: 14.2704248428345 },
  { lng: 109.11270904541, lat: 14.270809173584 },
  { lng: 109.112083435059, lat: 14.2710561752319 },
  { lng: 109.111862182617, lat: 14.271209716797 },
  { lng: 109.111701965332, lat: 14.2715787887573 },
  { lng: 109.111572265625, lat: 14.272131919861 },
  { lng: 109.111358642578, lat: 14.2725324630737 },
  { lng: 109.111228942871, lat: 14.2728090286255 },
  { lng: 109.111228942871, lat: 14.2732086181641 },
  { lng: 109.111419677734, lat: 14.2741003036499 },
  { lng: 109.111167907715, lat: 14.2740697860719 },
  { lng: 109.110656738281, lat: 14.2740650177003 },
  { lng: 109.110374450684, lat: 14.2739782333375 },
  { lng: 109.110122680664, lat: 14.2739448547364 },
  { lng: 109.110206604004, lat: 14.2745676040649 },
  { lng: 109.109573364258, lat: 14.2741394042969 },
  { lng: 109.109558105469, lat: 14.2744092941284 },
  { lng: 109.109901428223, lat: 14.2752389907838 },
  { lng: 109.109954833984, lat: 14.2758693695069 },
  { lng: 109.109764099121, lat: 14.2760229110718 },
  { lng: 109.109191894531, lat: 14.2761163711548 },
  { lng: 109.108879089356, lat: 14.2760848999023 },
  { lng: 109.108688354492, lat: 14.2760543823242 },
  { lng: 109.108596801758, lat: 14.2759313583375 },
  { lng: 109.10856628418, lat: 14.2757778167724 },
  { lng: 109.108535766602, lat: 14.2753782272339 },
  { lng: 109.108535766602, lat: 14.274793624878 },
  { lng: 109.108467102051, lat: 14.2744245529175 },
  { lng: 109.108436584473, lat: 14.2741794586182 },
  { lng: 109.108413696289, lat: 14.2735795974732 },
  { lng: 109.10684967041, lat: 14.2728252410889 },
  { lng: 109.10555267334, lat: 14.2722539901734 },
  { lng: 109.104888916016, lat: 14.2720861434937 },
  { lng: 109.104522705078, lat: 14.2723350524902 },
  { lng: 109.104362487793, lat: 14.2731037139893 },
  { lng: 109.104270935059, lat: 14.2734727859497 },
  { lng: 109.10424041748, lat: 14.2741193771363 },
  { lng: 109.10424041748, lat: 14.2746419906617 },
  { lng: 109.104301452637, lat: 14.2748880386352 },
  { lng: 109.104431152344, lat: 14.2751951217651 },
  { lng: 109.104652404785, lat: 14.2755022048951 },
  { lng: 109.104774475098, lat: 14.2756872177125 },
  { lng: 109.104843139648, lat: 14.2758712768555 },
  { lng: 109.104713439941, lat: 14.276086807251 },
  { lng: 109.104522705078, lat: 14.2763328552246 },
  { lng: 109.104118347168, lat: 14.2765789031982 },
  { lng: 109.103607177734, lat: 14.2765789031982 },
  { lng: 109.103164672852, lat: 14.276487350464 },
  { lng: 109.102912902832, lat: 14.2764263153077 },
  { lng: 109.102912902832, lat: 14.2760257720948 },
  { lng: 109.102821350098, lat: 14.2757797241212 },
  { lng: 109.102760314941, lat: 14.2755651474 },
  { lng: 109.102554321289, lat: 14.2753963470458 },
  { lng: 109.10230255127, lat: 14.2753343582154 },
  { lng: 109.101943969727, lat: 14.2754201889038 },
  { lng: 109.101669311523, lat: 14.2756729125977 },
  { lng: 109.10075378418, lat: 14.2767801284791 },
  { lng: 109.099998474121, lat: 14.2781639099122 },
  { lng: 109.09977722168, lat: 14.2788190841675 },
  { lng: 109.099464416504, lat: 14.2791786193848 },
  { lng: 109.099113464355, lat: 14.2796411514283 },
  { lng: 109.098762512207, lat: 14.2798252105714 },
  { lng: 109.098510742187, lat: 14.279887199402 },
  { lng: 109.098327636719, lat: 14.2798557281495 },
  { lng: 109.098167419434, lat: 14.2798557281495 },
  { lng: 109.097854614258, lat: 14.2798261642457 },
  { lng: 109.097473144531, lat: 14.2799491882324 },
  { lng: 109.096748352051, lat: 14.2804412841797 },
  { lng: 109.09546661377, lat: 14.281379699707 },
  { lng: 109.094955444336, lat: 14.2819108963013 },
  { lng: 109.094741821289, lat: 14.2821798324586 },
  { lng: 109.094680786133, lat: 14.2827939987183 },
  { lng: 109.094711303711, lat: 14.2832555770874 },
  { lng: 109.094902038574, lat: 14.2834091186525 },
  { lng: 109.09521484375, lat: 14.2835006713867 },
  { lng: 109.096199035645, lat: 14.2835006713867 },
  { lng: 109.096794128418, lat: 14.2834386825561 },
  { lng: 109.097427368164, lat: 14.2834386825561 },
  { lng: 109.098182678223, lat: 14.2833471298218 },
  { lng: 109.098594665527, lat: 14.2832851409912 },
  { lng: 109.099197387695, lat: 14.2832851409912 },
  { lng: 109.099540710449, lat: 14.2833766937257 },
  { lng: 109.10001373291, lat: 14.2836837768555 },
  { lng: 109.100616455078, lat: 14.2841453552246 },
  { lng: 109.101089477539, lat: 14.2842683792115 },
  { lng: 109.101371765137, lat: 14.2842683792115 },
  { lng: 109.101463317871, lat: 14.2843294143676 },
  { lng: 109.101501464844, lat: 14.2843914031982 },
  { lng: 109.101463317871, lat: 14.2845439910888 },
  { lng: 109.101432800293, lat: 14.28466796875 },
  { lng: 109.101333618164, lat: 14.284917831421 },
  { lng: 109.100875854492, lat: 14.2853031158448 },
  { lng: 109.099960327148, lat: 14.2860412597657 },
  { lng: 109.099113464355, lat: 14.2864408493042 },
  { lng: 109.098762512207, lat: 14.2865343093873 },
  { lng: 109.098480224609, lat: 14.2865028381348 },
  { lng: 109.098350524902, lat: 14.2864723205566 },
  { lng: 109.098350524902, lat: 14.2861957550049 },
  { lng: 109.098480224609, lat: 14.2858877182008 },
  { lng: 109.098701477051, lat: 14.2855806350709 },
  { lng: 109.098793029785, lat: 14.2852725982666 },
  { lng: 109.098823547363, lat: 14.285026550293 },
  { lng: 109.098854064942, lat: 14.2848119735718 },
  { lng: 109.098731994629, lat: 14.2845659255981 },
  { lng: 109.098320007324, lat: 14.2842893600463 },
  { lng: 109.097846984863, lat: 14.2846584320069 },
  { lng: 109.09693145752, lat: 14.285427093506 },
  { lng: 109.09642791748, lat: 14.2857036590576 },
  { lng: 109.09538269043, lat: 14.2861967086791 },
  { lng: 109.095001220703, lat: 14.2863731384278 },
  { lng: 109.095169067383, lat: 14.2884368896484 },
  { lng: 109.094657897949, lat: 14.2902460098267 },
  { lng: 109.093276977539, lat: 14.2917528152467 },
  { lng: 109.091484069824, lat: 14.2946434020996 },
  { lng: 109.090316772461, lat: 14.2963581085206 },
  { lng: 109.089698791504, lat: 14.2982740402222 },
  { lng: 109.089088439941, lat: 14.3006153106691 },
  { lng: 109.088897705078, lat: 14.3019943237305 },
  { lng: 109.088600158691, lat: 14.3035879135132 },
  { lng: 109.088302612305, lat: 14.3049697875978 },
  { lng: 109.087005615234, lat: 14.3054161071778 },
  { lng: 109.086151123047, lat: 14.3061714172364 },
  { lng: 109.084449768066, lat: 14.3082132339478 },
  { lng: 109.083534240723, lat: 14.3097581863403 },
  { lng: 109.083618164062, lat: 14.3098573684694 },
  { lng: 109.083717346191, lat: 14.3101472854614 },
  { lng: 109.083717346191, lat: 14.3107986450195 },
  { lng: 109.083694458008, lat: 14.3118133544922 },
  { lng: 109.083717346191, lat: 14.3121032714844 },
  { lng: 109.083732604981, lat: 14.3124046325684 },
  { lng: 109.083732604981, lat: 14.3127670288087 },
  { lng: 109.083656311035, lat: 14.313154220581 },
  { lng: 109.083610534668, lat: 14.3133468627931 },
  { lng: 109.08358001709, lat: 14.3136367797852 },
  { lng: 109.083656311035, lat: 14.3139495849611 },
  { lng: 109.083908081055, lat: 14.3141679763795 },
  { lng: 109.08430480957, lat: 14.3142404556274 },
  { lng: 109.084648132324, lat: 14.3142404556274 },
  { lng: 109.085220336914, lat: 14.3142642974854 },
  { lng: 109.085395812988, lat: 14.3143606185913 },
  { lng: 109.085540771484, lat: 14.3145542144777 },
  { lng: 109.085739135742, lat: 14.3150129318237 },
  { lng: 109.085914611816, lat: 14.3153505325318 },
  { lng: 109.08618927002, lat: 14.3157606124877 },
  { lng: 109.086547851562, lat: 14.3161602020265 },
  { lng: 109.087265014648, lat: 14.3164491653442 },
  { lng: 109.08837890625, lat: 14.3167142868041 },
  { lng: 109.089424133301, lat: 14.3169307708741 },
  { lng: 109.090614318848, lat: 14.316954612732 },
  { lng: 109.09188079834, lat: 14.3168582916261 },
  { lng: 109.092903137207, lat: 14.3167972564698 },
  { lng: 109.093498229981, lat: 14.3167486190796 },
  { lng: 109.094245910645, lat: 14.3165788650512 },
  { lng: 109.094917297363, lat: 14.3165311813354 },
  { lng: 109.095481872559, lat: 14.3165550231933 },
  { lng: 109.096771240234, lat: 14.3166751861573 },
  { lng: 109.097694396973, lat: 14.3167953491212 },
  { lng: 109.097999572754, lat: 14.316782951355 },
  { lng: 109.09839630127, lat: 14.3165664672852 },
  { lng: 109.098793029785, lat: 14.3165407180787 },
  { lng: 109.099243164063, lat: 14.3165407180787 },
  { lng: 109.100105285645, lat: 14.3165645599366 },
  { lng: 109.100776672363, lat: 14.3167581558228 },
  { lng: 109.101417541504, lat: 14.3168582916261 },
  { lng: 109.102241516113, lat: 14.3169498443604 },
  { lng: 109.103874206543, lat: 14.3170461654663 },
  { lng: 109.105995178223, lat: 14.3170824050904 },
  { lng: 109.110511779785, lat: 14.3170795440673 },
  { lng: 109.112258911133, lat: 14.3172121047974 },
  { lng: 109.114639282227, lat: 14.317234992981 },
  { lng: 109.115005493164, lat: 14.3167991638184 },
  { lng: 109.115730285645, lat: 14.3158178329469 },
  { lng: 109.11686706543, lat: 14.3140907287598 },
  { lng: 109.117820739746, lat: 14.3126974105836 },
  { lng: 109.119064331055, lat: 14.3106479644775 },
  { lng: 109.120475769043, lat: 14.3085041046143 },
  { lng: 109.121437072754, lat: 14.3071813583375 },
  { lng: 109.123245239258, lat: 14.3046951293945 },
  { lng: 109.124031066895, lat: 14.3035850524902 },
  { lng: 109.12638092041, lat: 14.3003101348877 },
  { lng: 109.128952026367, lat: 14.2966928482056 },
  { lng: 109.131523132324, lat: 14.2930335998536 },
  { lng: 109.133026123047, lat: 14.2908515930176 },
  { lng: 109.13313293457, lat: 14.2906332015992 },
  { lng: 109.133178710938, lat: 14.290376663208 },
  { lng: 109.133178710938, lat: 14.2900152206421 },
  { lng: 109.133041381836, lat: 14.2893753051757 },
  { lng: 109.133056640625, lat: 14.2886600494384 },
  { lng: 109.133056640625, lat: 14.288296699524 },
  { lng: 109.133033752441, lat: 14.2879781723024 },
  { lng: 109.133033752441, lat: 14.2878923416138 },
  { lng: 109.133056640625, lat: 14.2877855300903 },
  { lng: 109.133117675781, lat: 14.2875938415527 },
  { lng: 109.133247375488, lat: 14.2874870300294 },
  { lng: 109.13346862793, lat: 14.287359237671 },
  { lng: 109.133926391602, lat: 14.2871026992797 },
  { lng: 109.134475708008, lat: 14.2869110107422 },
  { lng: 109.135025024414, lat: 14.2866764068604 },
  { lng: 109.135482788086, lat: 14.2864189147949 },
  { lng: 109.135704040527, lat: 14.2862062454225 },
  { lng: 109.135932922363, lat: 14.2858333587648 },
  { lng: 109.136260986328, lat: 14.2849788665771 },
  { lng: 109.136672973633, lat: 14.2836990356445 },
  { lng: 109.136917114258, lat: 14.2829742431641 },
  { lng: 109.137229919434, lat: 14.2825145721436 },
  { lng: 109.137954711914, lat: 14.2814912796021 },
  { lng: 109.138565063477, lat: 14.2808504104615 },
  { lng: 109.138786315918, lat: 14.2806158065796 },
  { lng: 109.138450622559, lat: 14.2800531387329 },
  { lng: 109.138366699219, lat: 14.2798366546631 },
  { lng: 109.138366699219, lat: 14.2797193527221 },
  { lng: 109.138427734375, lat: 14.2793064117431 },
  { lng: 109.138931274414, lat: 14.2785577774048 },
  { lng: 109.140045166016, lat: 14.2772998809815 },
  { lng: 109.140365600586, lat: 14.2767486572267 },
  { lng: 109.140548706055, lat: 14.2763748168946 },
  { lng: 109.140838623047, lat: 14.275562286377 },
  { lng: 109.141044616699, lat: 14.274793624878 },
  { lng: 109.141105651855, lat: 14.2745780944824 },
  { lng: 109.141120910645, lat: 14.2743215560913 },
  { lng: 109.141082763672, lat: 14.2741451263428 },
  { lng: 109.140922546387, lat: 14.2738313674928 },
  { lng: 109.140617370606, lat: 14.2733592987061 },
  { lng: 109.140403747559, lat: 14.2729158401489 },
  { lng: 109.14030456543, lat: 14.2723846435546 },
  { lng: 109.140197753906, lat: 14.2719173431398 },
  { lng: 109.140060424805, lat: 14.2711448669433 },
  { lng: 109.140037536621, lat: 14.2702798843385 },
  { lng: 109.140068054199, lat: 14.2687158584595 },
  { lng: 109.140129089355, lat: 14.267357826233 },
  { lng: 109.140060424805, lat: 14.26593208313 },
  { lng: 109.139976501465, lat: 14.2648496627808 },
  { lng: 109.140014648438, lat: 14.2645740509034 },
  { lng: 109.140037536621, lat: 14.2642993927002 },
  { lng: 109.140205383301, lat: 14.2635803222657 },
  { lng: 109.140449523926, lat: 14.263147354126 },
  { lng: 109.140548706055, lat: 14.2629108428955 },
  { lng: 109.140571594238, lat: 14.2627143859864 },
  { lng: 109.140571594238, lat: 14.2624979019164 },
  { lng: 109.140266418457, lat: 14.2619276046754 },
  { lng: 109.140098571777, lat: 14.261365890503 },
  { lng: 109.140075683594, lat: 14.2611904144288 },
  { lng: 109.140098571777, lat: 14.2610521316529 },
  { lng: 109.140151977539, lat: 14.2608947753907 },
  { lng: 109.14054107666, lat: 14.2604799270631 },
  { lng: 109.141166687012, lat: 14.2598705291749 },
  { lng: 109.141426086426, lat: 14.2593994140626 },
  { lng: 109.141563415527, lat: 14.2590236663818 },
  { lng: 109.141586303711, lat: 14.2586307525635 },
  { lng: 109.141525268555, lat: 14.2576656341552 },
  { lng: 109.14151763916, lat: 14.2565145492555 },
  { lng: 109.14151763916, lat: 14.2556886672975 },
  { lng: 109.141471862793, lat: 14.255334854126 },
  { lng: 109.141212463379, lat: 14.254921913147 },
  { lng: 109.140548706055, lat: 14.2542142868042 },
  { lng: 109.138656616211, lat: 14.2517652511597 },
  { lng: 109.137367248535, lat: 14.2501916885377 },
  { lng: 109.135452270508, lat: 14.248215675354 },
  { lng: 109.135093688965, lat: 14.2478227615357 },
  { lng: 109.13484954834, lat: 14.2475471496582 },
  { lng: 109.134666442871, lat: 14.2472524642944 },
  { lng: 109.134414672852, lat: 14.2466125488282 },
  { lng: 109.134330749512, lat: 14.2463970184326 },
  { lng: 109.134208679199, lat: 14.2461795806885 },
  { lng: 109.134086608887, lat: 14.2458457946777 },
  { lng: 109.133995056152, lat: 14.2454204559327 },
  { lng: 109.133338928223, lat: 14.2450246810914 },
  { lng: 109.131790161133, lat: 14.2445030212402 },
  { lng: 109.130783081055, lat: 14.2443199157715 },
  { lng: 109.130401611328, lat: 14.2442579269409 },
  { lng: 109.130271911621, lat: 14.2442283630372 },
  { lng: 109.130088806152, lat: 14.2441663742066 },
  { lng: 109.129737854004, lat: 14.2442893981934 },
  { lng: 109.129142761231, lat: 14.2448425292969 },
  { lng: 109.128540039063, lat: 14.2455186843873 },
  { lng: 109.127975463867, lat: 14.2458877563476 },
  { lng: 109.126800537109, lat: 14.2462882995606 },
  { lng: 109.125450134277, lat: 14.2464122772216 },
  { lng: 109.121994018555, lat: 14.2465696334839 },
];

export default myloi;