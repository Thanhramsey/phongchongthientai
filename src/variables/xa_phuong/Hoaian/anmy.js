const anmy = [
  { lng: 108.982696533203, lat: 14.4659023284913 },
  { lng: 108.982086181641, lat: 14.4656791687013 },
  { lng: 108.979568481445, lat: 14.464937210083 },
  { lng: 108.977287292481, lat: 14.4641208648681 },
  { lng: 108.975914001465, lat: 14.4630823135377 },
  { lng: 108.974540710449, lat: 14.4607067108155 },
  { lng: 108.973625183105, lat: 14.458185195923 },
  { lng: 108.973167419434, lat: 14.4567747116089 },
  { lng: 108.972900390625, lat: 14.4548082351686 },
  { lng: 108.972221374512, lat: 14.4525823593141 },
  { lng: 108.972145080566, lat: 14.4510984420777 },
  { lng: 108.971687316895, lat: 14.4494657516479 },
  { lng: 108.97061920166, lat: 14.4461269378662 },
  { lng: 108.970314025879, lat: 14.4449396133423 },
  { lng: 108.969741821289, lat: 14.4440860748292 },
  { lng: 108.968444824219, lat: 14.4427509307862 },
  { lng: 108.967910766602, lat: 14.4417858123779 },
  { lng: 108.967758178711, lat: 14.4408206939698 },
  { lng: 108.967834472656, lat: 14.4401531219484 },
  { lng: 108.968673706055, lat: 14.4394121170043 },
  { lng: 108.969207763672, lat: 14.4385213851929 },
  { lng: 108.969207763672, lat: 14.4374818801881 },
  { lng: 108.969512939453, lat: 14.435775756836 },
  { lng: 108.969665527344, lat: 14.4350337982177 },
  { lng: 108.97004699707, lat: 14.4346628189087 },
  { lng: 108.971420288086, lat: 14.4343671798707 },
  { lng: 108.973098754883, lat: 14.4339962005616 },
  { lng: 108.974967956543, lat: 14.4327716827393 },
  { lng: 108.975494384766, lat: 14.4323263168336 },
  { lng: 108.975570678711, lat: 14.431806564331 },
  { lng: 108.975273132324, lat: 14.4293575286865 },
  { lng: 108.975196838379, lat: 14.4288387298585 },
  { lng: 108.975425720215, lat: 14.4286155700684 },
  { lng: 108.976486206055, lat: 14.4285421371461 },
  { lng: 108.978469848633, lat: 14.4284677505493 },
  { lng: 108.97900390625, lat: 14.4283199310304 },
  { lng: 108.979537963867, lat: 14.4272069931031 },
  { lng: 108.979690551758, lat: 14.4265394210817 },
  { lng: 108.979995727539, lat: 14.4261684417725 },
  { lng: 108.980834960938, lat: 14.4260940551759 },
  { lng: 108.982055664063, lat: 14.4265394210817 },
  { lng: 108.983879089355, lat: 14.4272813796998 },
  { lng: 108.985023498535, lat: 14.4275026321412 },
  { lng: 108.986396789551, lat: 14.4274291992189 },
  { lng: 108.987846374512, lat: 14.4277267456055 },
  { lng: 108.988830566406, lat: 14.4277257919312 },
  { lng: 108.989364624024, lat: 14.4274291992189 },
  { lng: 108.989898681641, lat: 14.4267616271974 },
  { lng: 108.989593505859, lat: 14.4249811172486 },
  { lng: 108.989593505859, lat: 14.4245357513429 },
  { lng: 108.990203857422, lat: 14.4243869781495 },
  { lng: 108.99104309082, lat: 14.4243869781495 },
  { lng: 108.991691589355, lat: 14.4241275787354 },
  { lng: 108.992149353027, lat: 14.423607826233 },
  { lng: 108.99275970459, lat: 14.4227180480958 },
  { lng: 108.993446350098, lat: 14.4224214553832 },
  { lng: 108.995063781738, lat: 14.4220170974733 },
  { lng: 108.994941711426, lat: 14.4212837219238 },
  { lng: 108.99462890625, lat: 14.4205989837646 },
  { lng: 108.994201660156, lat: 14.4196090698243 },
  { lng: 108.993682861328, lat: 14.4186420440674 },
  { lng: 108.99348449707, lat: 14.4182615280152 },
  { lng: 108.993103027344, lat: 14.4176301956178 },
  { lng: 108.992904663086, lat: 14.4172487258912 },
  { lng: 108.992164611816, lat: 14.4161071777344 },
  { lng: 108.992149353027, lat: 14.4157428741455 },
  { lng: 108.992149353027, lat: 14.4154996871949 },
  { lng: 108.992149353027, lat: 14.4148635864257 },
  { lng: 108.991333007812, lat: 14.4148778915405 },
  { lng: 108.990798950195, lat: 14.414813041687 },
  { lng: 108.989959716797, lat: 14.4147109985352 },
  { lng: 108.98804473877, lat: 14.4143209457397 },
  { lng: 108.987487792969, lat: 14.4142513275146 },
  { lng: 108.987030029297, lat: 14.4142522811891 },
  { lng: 108.986206054688, lat: 14.4143629074096 },
  { lng: 108.984489440918, lat: 14.415002822876 },
  { lng: 108.981887817383, lat: 14.4163665771486 },
  { lng: 108.980842590332, lat: 14.4171323776246 },
  { lng: 108.978500366211, lat: 14.4192199707032 },
  { lng: 108.977470397949, lat: 14.4201393127441 },
  { lng: 108.975509643555, lat: 14.4212942123414 },
  { lng: 108.974937438965, lat: 14.4216289520264 },
  { lng: 108.974220275879, lat: 14.4217948913575 },
  { lng: 108.972854614258, lat: 14.4220743179322 },
  { lng: 108.971710205078, lat: 14.4221572875977 },
  { lng: 108.97053527832, lat: 14.422212600708 },
  { lng: 108.968894958496, lat: 14.4224767684936 },
  { lng: 108.967491149902, lat: 14.4225883483886 },
  { lng: 108.96654510498, lat: 14.4228105545043 },
  { lng: 108.965972900391, lat: 14.4230613708497 },
  { lng: 108.965179443359, lat: 14.4236183166504 },
  { lng: 108.964347839356, lat: 14.4241743087769 },
  { lng: 108.963775634766, lat: 14.4247026443483 },
  { lng: 108.963417053223, lat: 14.4241399765016 },
  { lng: 108.963317871094, lat: 14.4239788055419 },
  { lng: 108.96297454834, lat: 14.4231996536254 },
  { lng: 108.96280670166, lat: 14.4224195480347 },
  { lng: 108.962501525879, lat: 14.4214601516725 },
  { lng: 108.962356567383, lat: 14.419900894165 },
  { lng: 108.962020874023, lat: 14.418592453003 },
  { lng: 108.962074279785, lat: 14.4175901412965 },
  { lng: 108.962387084961, lat: 14.4169216156005 },
  { lng: 108.96297454834, lat: 14.4163455963135 },
  { lng: 108.96363067627, lat: 14.4158182144166 },
  { lng: 108.963722229004, lat: 14.4155387878417 },
  { lng: 108.963432312012, lat: 14.4148159027099 },
  { lng: 108.963172912598, lat: 14.4143438339233 },
  { lng: 108.962776184082, lat: 14.4139261245729 },
  { lng: 108.962432861328, lat: 14.4137592315675 },
  { lng: 108.961631774902, lat: 14.4135646820069 },
  { lng: 108.960945129395, lat: 14.4133424758911 },
  { lng: 108.960372924805, lat: 14.4130907058715 },
  { lng: 108.960060119629, lat: 14.4127578735353 },
  { lng: 108.959762573242, lat: 14.4124088287355 },
  { lng: 108.959716796875, lat: 14.4124803543092 },
  { lng: 108.959144592285, lat: 14.4132986068727 },
  { lng: 108.958625793457, lat: 14.4139041900635 },
  { lng: 108.958030700684, lat: 14.4145374298095 },
  { lng: 108.958045959473, lat: 14.4150047302246 },
  { lng: 108.958183288574, lat: 14.4155979156495 },
  { lng: 108.959358215332, lat: 14.4176263809204 },
  { lng: 108.95979309082, lat: 14.4190406799316 },
  { lng: 108.959945678711, lat: 14.420150756836 },
  { lng: 108.959945678711, lat: 14.4205713272096 },
  { lng: 108.959831237793, lat: 14.4209918975831 },
  { lng: 108.959106445312, lat: 14.422311782837 },
  { lng: 108.958198547363, lat: 14.4234209060669 },
  { lng: 108.957298278809, lat: 14.4246826171876 },
  { lng: 108.95662689209, lat: 14.425410270691 },
  { lng: 108.955917358398, lat: 14.4257535934449 },
  { lng: 108.954940795898, lat: 14.4258680343628 },
  { lng: 108.953643798828, lat: 14.4259061813355 },
  { lng: 108.951988220215, lat: 14.4259824752809 },
  { lng: 108.951606750488, lat: 14.4260177612305 },
  { lng: 108.951164245606, lat: 14.4260587692261 },
  { lng: 108.950889587402, lat: 14.4254083633423 },
  { lng: 108.950241088867, lat: 14.4241647720337 },
  { lng: 108.949615478516, lat: 14.4233226776124 },
  { lng: 108.948753356934, lat: 14.4224815368653 },
  { lng: 108.947769165039, lat: 14.4216775894166 },
  { lng: 108.946708679199, lat: 14.4211807250977 },
  { lng: 108.946044921875, lat: 14.4205684661865 },
  { lng: 108.945213317871, lat: 14.4200334548951 },
  { lng: 108.944435119629, lat: 14.4197654724121 },
  { lng: 108.943687438965, lat: 14.4194593429566 },
  { lng: 108.943176269531, lat: 14.419114112854 },
  { lng: 108.942741394043, lat: 14.4188852310182 },
  { lng: 108.942390441895, lat: 14.4187698364258 },
  { lng: 108.941757202148, lat: 14.4187688827515 },
  { lng: 108.941268920898, lat: 14.4190559387208 },
  { lng: 108.940719604492, lat: 14.4194002151489 },
  { lng: 108.939933776856, lat: 14.4199743270875 },
  { lng: 108.939071655273, lat: 14.4207010269166 },
  { lng: 108.9384765625, lat: 14.4213886260987 },
  { lng: 108.938247680664, lat: 14.4219236373902 },
  { lng: 108.938125610352, lat: 14.422345161438 },
  { lng: 108.937889099121, lat: 14.4229946136476 },
  { lng: 108.937812805176, lat: 14.4235305786133 },
  { lng: 108.93773651123, lat: 14.4239902496338 },
  { lng: 108.93775177002, lat: 14.4248123168945 },
  { lng: 108.937675476074, lat: 14.4258832931519 },
  { lng: 108.937553405762, lat: 14.4263038635254 },
  { lng: 108.937362670898, lat: 14.4268398284912 },
  { lng: 108.937042236328, lat: 14.4271841049195 },
  { lng: 108.936653137207, lat: 14.4275655746461 },
  { lng: 108.936340332031, lat: 14.4279870986939 },
  { lng: 108.936065673828, lat: 14.4284839630127 },
  { lng: 108.935798645019, lat: 14.4290256500244 },
  { lng: 108.936111450195, lat: 14.4291658401489 },
  { lng: 108.937362670898, lat: 14.4297370910645 },
  { lng: 108.938568115234, lat: 14.4303960800171 },
  { lng: 108.938903808594, lat: 14.4308185577393 },
  { lng: 108.938903808594, lat: 14.431007385254 },
  { lng: 108.938034057617, lat: 14.4313831329346 },
  { lng: 108.936874389648, lat: 14.4325113296509 },
  { lng: 108.936393737793, lat: 14.4331703186036 },
  { lng: 108.936050415039, lat: 14.4340629577637 },
  { lng: 108.935760498047, lat: 14.4356622695924 },
  { lng: 108.935760498047, lat: 14.4374952316284 },
  { lng: 108.93571472168, lat: 14.4385766983032 },
  { lng: 108.935371398926, lat: 14.4392824172974 },
  { lng: 108.935035705566, lat: 14.4406929016114 },
  { lng: 108.93399810791, lat: 14.4422302246094 },
  { lng: 108.933753967285, lat: 14.4431705474854 },
  { lng: 108.934188842773, lat: 14.4439706802369 },
  { lng: 108.934288024902, lat: 14.4449596405029 },
  { lng: 108.934143066406, lat: 14.4456653594971 },
  { lng: 108.934478759766, lat: 14.4467010498048 },
  { lng: 108.934722900391, lat: 14.4475011825562 },
  { lng: 108.934455871582, lat: 14.449312210083 },
  { lng: 108.934112548828, lat: 14.4504890441895 },
  { lng: 108.933967590332, lat: 14.4514303207399 },
  { lng: 108.934066772461, lat: 14.4524650573731 },
  { lng: 108.934646606445, lat: 14.454065322876 },
  { lng: 108.934692382812, lat: 14.4550533294679 },
  { lng: 108.934669494629, lat: 14.4568176269532 },
  { lng: 108.934959411621, lat: 14.4578533172608 },
  { lng: 108.934860229492, lat: 14.4588880538941 },
  { lng: 108.934814453125, lat: 14.4597826004029 },
  { lng: 108.93505859375, lat: 14.4604892730714 },
  { lng: 108.935829162598, lat: 14.4614305496216 },
  { lng: 108.936553955078, lat: 14.4622306823732 },
  { lng: 108.936866760254, lat: 14.462911605835 },
  { lng: 108.936912536621, lat: 14.4637117385865 },
  { lng: 108.936820983887, lat: 14.4646072387696 },
  { lng: 108.937156677246, lat: 14.465407371521 },
  { lng: 108.936912536621, lat: 14.4660663604736 },
  { lng: 108.936866760254, lat: 14.4666309356689 },
  { lng: 108.937202453613, lat: 14.4673366546631 },
  { lng: 108.937782287598, lat: 14.468231201172 },
  { lng: 108.938697814941, lat: 14.4691247940063 },
  { lng: 108.939064025879, lat: 14.4699964523316 },
  { lng: 108.938919067383, lat: 14.4709367752075 },
  { lng: 108.938629150391, lat: 14.4723024368287 },
  { lng: 108.938674926758, lat: 14.4730548858644 },
  { lng: 108.939109802246, lat: 14.4737129211425 },
  { lng: 108.939399719238, lat: 14.4745607376099 },
  { lng: 108.939445495605, lat: 14.4755964279174 },
  { lng: 108.939788818359, lat: 14.476490020752 },
  { lng: 108.940391540527, lat: 14.4771251678467 },
  { lng: 108.94091796875, lat: 14.4774551391602 },
  { lng: 108.941932678223, lat: 14.4777851104737 },
  { lng: 108.942512512207, lat: 14.4782075881959 },
  { lng: 108.943145751953, lat: 14.4783973693848 },
  { lng: 108.943916320801, lat: 14.4781150817871 },
  { lng: 108.945465087891, lat: 14.4771738052369 },
  { lng: 108.945945739746, lat: 14.4770803451538 },
  { lng: 108.946479797363, lat: 14.4769392013549 },
  { lng: 108.947105407715, lat: 14.4775514602661 },
  { lng: 108.948173522949, lat: 14.4781160354614 },
  { lng: 108.949188232422, lat: 14.4785861968995 },
  { lng: 108.949378967285, lat: 14.4791984558107 },
  { lng: 108.949478149414, lat: 14.4798097610475 },
  { lng: 108.949279785156, lat: 14.4806566238403 },
  { lng: 108.948989868164, lat: 14.4814100265503 },
  { lng: 108.948944091797, lat: 14.4820213317872 },
  { lng: 108.948989868164, lat: 14.4828214645387 },
  { lng: 108.949378967285, lat: 14.4843273162842 },
  { lng: 108.949836730957, lat: 14.4853391647339 },
  { lng: 108.94979095459, lat: 14.4865627288818 },
  { lng: 108.94979095459, lat: 14.4878797531128 },
  { lng: 108.949935913086, lat: 14.4891510009766 },
  { lng: 108.950225830078, lat: 14.4898099899293 },
  { lng: 108.950485229492, lat: 14.4900856018068 },
  { lng: 108.950790405273, lat: 14.4896049499512 },
  { lng: 108.951171875, lat: 14.4893083572388 },
  { lng: 108.952163696289, lat: 14.4890117645263 },
  { lng: 108.953308105469, lat: 14.4893093109131 },
  { lng: 108.955062866211, lat: 14.4896802902223 },
  { lng: 108.956283569336, lat: 14.4896059036255 },
  { lng: 108.95735168457, lat: 14.4896802902223 },
  { lng: 108.957962036133, lat: 14.4899034500123 },
  { lng: 108.958717346191, lat: 14.4910907745361 },
  { lng: 108.959327697754, lat: 14.4922037124634 },
  { lng: 108.959861755371, lat: 14.4927968978882 },
  { lng: 108.960395812988, lat: 14.4930944442749 },
  { lng: 108.961235046387, lat: 14.4929456710815 },
  { lng: 108.963066101074, lat: 14.4918327331542 },
  { lng: 108.964286804199, lat: 14.4907951354981 },
  { lng: 108.965278625488, lat: 14.4894590377808 },
  { lng: 108.965698242188, lat: 14.4880123138429 },
  { lng: 108.965774536133, lat: 14.487195968628 },
  { lng: 108.966232299805, lat: 14.4866027832031 },
  { lng: 108.966987609863, lat: 14.4862318038942 },
  { lng: 108.968360900879, lat: 14.4859352111816 },
  { lng: 108.969123840332, lat: 14.4855642318727 },
  { lng: 108.969657897949, lat: 14.4847478866578 },
  { lng: 108.970726013184, lat: 14.4831895828248 },
  { lng: 108.971565246582, lat: 14.482521057129 },
  { lng: 108.972557067871, lat: 14.4820032119752 },
  { lng: 108.973625183105, lat: 14.4816312789918 },
  { lng: 108.974159240723, lat: 14.4817800521852 },
  { lng: 108.975601196289, lat: 14.4823751449584 },
  { lng: 108.976211547852, lat: 14.4820775985718 },
  { lng: 108.97705078125, lat: 14.4813346862792 },
  { lng: 108.977813720703, lat: 14.4812612533569 },
  { lng: 108.978881835938, lat: 14.4815578460694 },
  { lng: 108.978950500488, lat: 14.4815082550049 },
  { lng: 108.979187011719, lat: 14.4813346862792 },
  { lng: 108.979568481445, lat: 14.4805192947388 },
  { lng: 108.980102539062, lat: 14.4785156250001 },
  { lng: 108.980216979981, lat: 14.4769201278687 },
  { lng: 108.979988098145, lat: 14.4757328033448 },
  { lng: 108.979148864746, lat: 14.4733591079712 },
  { lng: 108.979148864746, lat: 14.4730615615844 },
  { lng: 108.979682922363, lat: 14.4726905822754 },
  { lng: 108.980598449707, lat: 14.472246170044 },
  { lng: 108.981208801269, lat: 14.4716520309448 },
  { lng: 108.981666564941, lat: 14.47105884552 },
  { lng: 108.981971740723, lat: 14.469500541687 },
  { lng: 108.982582092285, lat: 14.4676456451417 },
  { lng: 108.982772827148, lat: 14.4663467407228 },
  { lng: 108.982696533203, lat: 14.4659023284913 },
];

export default anmy;
