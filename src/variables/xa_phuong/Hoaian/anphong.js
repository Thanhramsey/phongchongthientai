const anphong = [
  { lng: 108.970840454102, lat: 14.3307161331177 },
  { lng: 108.971199035645, lat: 14.3318309783937 },
  { lng: 108.971054077149, lat: 14.3337125778198 },
  { lng: 108.970481872559, lat: 14.3355941772461 },
  { lng: 108.970123291016, lat: 14.3368482589722 },
  { lng: 108.970085144043, lat: 14.3380546569825 },
  { lng: 108.969871520996, lat: 14.3402833938599 },
  { lng: 108.969299316406, lat: 14.3434162139893 },
  { lng: 108.969009399414, lat: 14.3444595336915 },
  { lng: 108.968437194824, lat: 14.3457126617432 },
  { lng: 108.967437744141, lat: 14.3475227355958 },
  { lng: 108.967224121094, lat: 14.3485670089721 },
  { lng: 108.966865539551, lat: 14.3505868911744 },
  { lng: 108.966361999512, lat: 14.3515615463257 },
  { lng: 108.965507507324, lat: 14.3522577285767 },
  { lng: 108.963363647461, lat: 14.3540678024293 },
  { lng: 108.962646484375, lat: 14.3554601669312 },
  { lng: 108.962432861328, lat: 14.3562955856324 },
  { lng: 108.962577819824, lat: 14.3569822311401 },
  { lng: 108.96265411377, lat: 14.3568897247316 },
  { lng: 108.963958740234, lat: 14.3565607070923 },
  { lng: 108.965843200684, lat: 14.356279373169 },
  { lng: 108.966278076172, lat: 14.356279373169 },
  { lng: 108.966278076172, lat: 14.3573150634766 },
  { lng: 108.966232299805, lat: 14.3586330413819 },
  { lng: 108.96622467041, lat: 14.3593864440919 },
  { lng: 108.966659545899, lat: 14.3598098754883 },
  { lng: 108.967529296875, lat: 14.3597631454468 },
  { lng: 108.968139648438, lat: 14.3597860336304 },
  { lng: 108.968330383301, lat: 14.3609161376953 },
  { lng: 108.968864440918, lat: 14.3611516952515 },
  { lng: 108.969390869141, lat: 14.3612461090088 },
  { lng: 108.969879150391, lat: 14.3613395690919 },
  { lng: 108.970024108887, lat: 14.3619050979615 },
  { lng: 108.970069885254, lat: 14.3627996444702 },
  { lng: 108.970405578613, lat: 14.3630819320679 },
  { lng: 108.971374511719, lat: 14.3632116317749 },
  { lng: 108.971427917481, lat: 14.3634414672852 },
  { lng: 108.971527099609, lat: 14.363579750061 },
  { lng: 108.971717834473, lat: 14.3636960983276 },
  { lng: 108.97314453125, lat: 14.3641366958619 },
  { lng: 108.974884033203, lat: 14.3647165298463 },
  { lng: 108.975219726563, lat: 14.3649034500123 },
  { lng: 108.975387573242, lat: 14.3650646209717 },
  { lng: 108.975570678711, lat: 14.365460395813 },
  { lng: 108.97583770752, lat: 14.3663654327393 },
  { lng: 108.976005554199, lat: 14.3666896820069 },
  { lng: 108.976356506348, lat: 14.3670148849488 },
  { lng: 108.976745605469, lat: 14.3671770095825 },
  { lng: 108.97721862793, lat: 14.3673629760743 },
  { lng: 108.977554321289, lat: 14.3675947189332 },
  { lng: 108.977935791016, lat: 14.3679189682006 },
  { lng: 108.978385925293, lat: 14.3684301376343 },
  { lng: 108.978912353516, lat: 14.3693351745607 },
  { lng: 108.980484008789, lat: 14.3722124099733 },
  { lng: 108.980812072754, lat: 14.3727931976319 },
  { lng: 108.981101989746, lat: 14.3733730316163 },
  { lng: 108.98136138916, lat: 14.3740463256835 },
  { lng: 108.981483459473, lat: 14.3744401931763 },
  { lng: 108.981552124024, lat: 14.3747653961182 },
  { lng: 108.981483459473, lat: 14.3751363754274 },
  { lng: 108.981475830078, lat: 14.3754768371581 },
  { lng: 108.981567382813, lat: 14.375756263733 },
  { lng: 108.981903076172, lat: 14.3762893676759 },
  { lng: 108.982070922852, lat: 14.3766832351685 },
  { lng: 108.982116699219, lat: 14.3768920898439 },
  { lng: 108.982093811035, lat: 14.3770780563355 },
  { lng: 108.981948852539, lat: 14.3773555755616 },
  { lng: 108.981880187988, lat: 14.377634048462 },
  { lng: 108.981880187988, lat: 14.3779592514039 },
  { lng: 108.981925964356, lat: 14.3784456253052 },
  { lng: 108.981925964356, lat: 14.3790721893311 },
  { lng: 108.981857299805, lat: 14.3795356750488 },
  { lng: 108.981643676758, lat: 14.3800916671753 },
  { lng: 108.981391906738, lat: 14.3806381225587 },
  { lng: 108.982421875, lat: 14.3816509246826 },
  { lng: 108.983711242676, lat: 14.3826322555543 },
  { lng: 108.984939575195, lat: 14.3835554122925 },
  { lng: 108.986785888672, lat: 14.3845891952515 },
  { lng: 108.988227844238, lat: 14.385440826416 },
  { lng: 108.988716125488, lat: 14.385931968689 },
  { lng: 108.989448547363, lat: 14.386848449707 },
  { lng: 108.989639282227, lat: 14.3871021270752 },
  { lng: 108.989700317383, lat: 14.3868274688722 },
  { lng: 108.989700317383, lat: 14.3858127593995 },
  { lng: 108.98983001709, lat: 14.3855047225952 },
  { lng: 108.990013122559, lat: 14.3853206634521 },
  { lng: 108.990394592285, lat: 14.3851366043091 },
  { lng: 108.990997314453, lat: 14.3846139907837 },
  { lng: 108.991943359375, lat: 14.3831386566163 },
  { lng: 108.992210388184, lat: 14.3826322555543 },
  { lng: 108.992584228516, lat: 14.3817710876464 },
  { lng: 108.993095397949, lat: 14.3811569213867 },
  { lng: 108.993721008301, lat: 14.3805112838746 },
  { lng: 108.994262695313, lat: 14.3799886703491 },
  { lng: 108.994667053223, lat: 14.3795585632324 },
  { lng: 108.995048522949, lat: 14.378851890564 },
  { lng: 108.995429992676, lat: 14.3777151107788 },
  { lng: 108.995727539062, lat: 14.376992225647 },
  { lng: 108.996040344238, lat: 14.3765621185303 },
  { lng: 108.996513366699, lat: 14.3761005401612 },
  { lng: 108.996803283692, lat: 14.3757324218751 },
  { lng: 108.997276306152, lat: 14.3752412796021 },
  { lng: 108.997718811035, lat: 14.375147819519 },
  { lng: 108.998062133789, lat: 14.375147819519 },
  { lng: 108.998565673828, lat: 14.3753328323364 },
  { lng: 108.999069213867, lat: 14.3757944107055 },
  { lng: 108.999702453613, lat: 14.3765621185303 },
  { lng: 108.999954223633, lat: 14.3767156600952 },
  { lng: 109.000839233398, lat: 14.3768386840821 },
  { lng: 109.001884460449, lat: 14.3768386840821 },
  { lng: 109.003082275391, lat: 14.3765306472778 },
  { lng: 109.004234313965, lat: 14.3762092590333 },
  { lng: 109.005302429199, lat: 14.3758392333984 },
  { lng: 109.00634765625, lat: 14.3753156661987 },
  { lng: 109.006881713867, lat: 14.3750400543214 },
  { lng: 109.007354736328, lat: 14.3748245239257 },
  { lng: 109.00757598877, lat: 14.3744564056396 },
  { lng: 109.007957458496, lat: 14.3735637664795 },
  { lng: 109.008270263672, lat: 14.3725204467773 },
  { lng: 109.008590698242, lat: 14.3719968795778 },
  { lng: 109.009010314942, lat: 14.3716735839844 },
  { lng: 109.010055541992, lat: 14.3713359832763 },
  { lng: 109.010749816895, lat: 14.3709983825684 },
  { lng: 109.012077331543, lat: 14.3702602386475 },
  { lng: 109.012954711914, lat: 14.3694915771484 },
  { lng: 109.013305664062, lat: 14.3692150115968 },
  { lng: 109.013778686524, lat: 14.3691539764405 },
  { lng: 109.014945983887, lat: 14.3690929412842 },
  { lng: 109.015701293945, lat: 14.3690309524536 },
  { lng: 109.016189575195, lat: 14.368800163269 },
  { lng: 109.018402099609, lat: 14.3673563003541 },
  { lng: 109.019409179688, lat: 14.3665571212769 },
  { lng: 109.020263671875, lat: 14.365818977356 },
  { lng: 109.022338867188, lat: 14.3638515472413 },
  { lng: 109.022918701172, lat: 14.3633298873902 },
  { lng: 109.02335357666, lat: 14.3629007339478 },
  { lng: 109.023628234863, lat: 14.3621082305908 },
  { lng: 109.024223327637, lat: 14.3606052398682 },
  { lng: 109.024833679199, lat: 14.3589868545533 },
  { lng: 109.025848388672, lat: 14.3570709228515 },
  { lng: 109.026443481445, lat: 14.3559160232544 },
  { lng: 109.026557922363, lat: 14.3556842803956 },
  { lng: 109.026847839355, lat: 14.3550071716309 },
  { lng: 109.027053833008, lat: 14.353816986084 },
  { lng: 109.026947021484, lat: 14.3532562255859 },
  { lng: 109.026679992676, lat: 14.3518362045289 },
  { lng: 109.026695251465, lat: 14.3502006530762 },
  { lng: 109.026901245117, lat: 14.3493089675904 },
  { lng: 109.02774810791, lat: 14.3475914001466 },
  { lng: 109.028221130371, lat: 14.3466987609863 },
  { lng: 109.028625488281, lat: 14.3456087112427 },
  { lng: 109.028953552246, lat: 14.3450641632081 },
  { lng: 109.031120300293, lat: 14.3436107635499 },
  { lng: 109.031661987305, lat: 14.3430156707764 },
  { lng: 109.031867980957, lat: 14.3424882888795 },
  { lng: 109.031761169434, lat: 14.3419256210328 },
  { lng: 109.031150817871, lat: 14.340934753418 },
  { lng: 109.030387878418, lat: 14.3400869369506 },
  { lng: 109.029541015625, lat: 14.3391962051392 },
  { lng: 109.029235839844, lat: 14.3385362625122 },
  { lng: 109.029167175293, lat: 14.3379421234132 },
  { lng: 109.029205322266, lat: 14.337314605713 },
  { lng: 109.029403686524, lat: 14.3362588882447 },
  { lng: 109.029914855957, lat: 14.3346424102783 },
  { lng: 109.030258178711, lat: 14.3336181640624 },
  { lng: 109.03035736084, lat: 14.3331232070923 },
  { lng: 109.030296325684, lat: 14.3326854705811 },
  { lng: 109.029037475586, lat: 14.332133293152 },
  { lng: 109.027610778809, lat: 14.3318033218384 },
  { lng: 109.025543212891, lat: 14.3309783935547 },
  { lng: 109.024147033691, lat: 14.3303184509277 },
  { lng: 109.023170471191, lat: 14.3298225402833 },
  { lng: 109.022338867188, lat: 14.3294286727905 },
  { lng: 109.021629333496, lat: 14.3292961120607 },
  { lng: 109.020866394043, lat: 14.329050064087 },
  { lng: 109.020301818848, lat: 14.3285894393922 },
  { lng: 109.019226074219, lat: 14.327052116394 },
  { lng: 109.018440246582, lat: 14.326099395752 },
  { lng: 109.017242431641, lat: 14.3249311447144 },
  { lng: 109.016754150391, lat: 14.3244237899781 },
  { lng: 109.016212463379, lat: 14.3234395980836 },
  { lng: 109.015800476074, lat: 14.3229179382325 },
  { lng: 109.014984130859, lat: 14.3221797943115 },
  { lng: 109.014129638672, lat: 14.3214731216431 },
  { lng: 109.013931274414, lat: 14.321195602417 },
  { lng: 109.013252258301, lat: 14.3222866058351 },
  { lng: 109.012535095215, lat: 14.323540687561 },
  { lng: 109.012107849121, lat: 14.3250741958618 },
  { lng: 109.011604309082, lat: 14.3257007598877 },
  { lng: 109.010673522949, lat: 14.3259801864624 },
  { lng: 109.008964538574, lat: 14.3266067504883 },
  { lng: 109.007026672363, lat: 14.3270254135132 },
  { lng: 109.005531311035, lat: 14.3279314041138 },
  { lng: 109.002555847168, lat: 14.3292903900147 },
  { lng: 109.000053405762, lat: 14.3303346633911 },
  { lng: 108.999198913574, lat: 14.3305444717408 },
  { lng: 108.998481750488, lat: 14.3300561904907 },
  { lng: 108.997550964356, lat: 14.3294992446899 },
  { lng: 108.996551513672, lat: 14.329080581665 },
  { lng: 108.995407104492, lat: 14.3285226821899 },
  { lng: 108.994834899902, lat: 14.3278274536133 },
  { lng: 108.99390411377, lat: 14.3266420364381 },
  { lng: 108.993049621582, lat: 14.326153755188 },
  { lng: 108.992263793945, lat: 14.3262243270874 },
  { lng: 108.991691589355, lat: 14.3265724182129 },
  { lng: 108.99097442627, lat: 14.3282451629639 },
  { lng: 108.990539550781, lat: 14.3288021087646 },
  { lng: 108.98983001709, lat: 14.3288717269897 },
  { lng: 108.988327026367, lat: 14.3290109634401 },
  { lng: 108.987396240234, lat: 14.3294286727905 },
  { lng: 108.986572265625, lat: 14.3296728134156 },
  { lng: 108.985931396484, lat: 14.3303003311158 },
  { lng: 108.985214233398, lat: 14.3315544128419 },
  { lng: 108.984786987305, lat: 14.3319015502929 },
  { lng: 108.983787536621, lat: 14.3321809768678 },
  { lng: 108.982498168945, lat: 14.332389831543 },
  { lng: 108.98184967041, lat: 14.3322496414185 },
  { lng: 108.981498718262, lat: 14.3319015502929 },
  { lng: 108.979850769043, lat: 14.3300209045411 },
  { lng: 108.978988647461, lat: 14.3296718597413 },
  { lng: 108.978065490723, lat: 14.3297424316407 },
  { lng: 108.976127624512, lat: 14.330228805542 },
  { lng: 108.974555969238, lat: 14.3305778503419 },
  { lng: 108.972412109375, lat: 14.3307170867919 },
  { lng: 108.970840454102, lat: 14.3307161331177 },
];

export default anphong;
