const hoaitan = [
  { lng: 108.982696533203, lat: 14.4659023284913 },
  { lng: 108.982772827148, lat: 14.4663467407228 },
  { lng: 108.982582092285, lat: 14.4676456451417 },
  { lng: 108.981971740723, lat: 14.469500541687 },
  { lng: 108.981666564941, lat: 14.47105884552 },
  { lng: 108.981208801269, lat: 14.4716520309448 },
  { lng: 108.980598449707, lat: 14.472246170044 },
  { lng: 108.979682922363, lat: 14.4726905822754 },
  { lng: 108.979148864746, lat: 14.4730615615844 },
  { lng: 108.979148864746, lat: 14.4733591079712 },
  { lng: 108.979988098145, lat: 14.4757328033448 },
  { lng: 108.980216979981, lat: 14.4769201278687 },
  { lng: 108.980102539062, lat: 14.4785156250001 },
  { lng: 108.979568481445, lat: 14.4805192947388 },
  { lng: 108.979187011719, lat: 14.4813346862792 },
  { lng: 108.978950500488, lat: 14.4815082550049 },
  { lng: 108.979644775391, lat: 14.4828329086304 },
  { lng: 108.980834960938, lat: 14.4839353561403 },
  { lng: 108.981552124024, lat: 14.4839935302735 },
  { lng: 108.98184967041, lat: 14.4839935302735 },
  { lng: 108.983039855957, lat: 14.484398841858 },
  { lng: 108.984413146973, lat: 14.4846897125245 },
  { lng: 108.985191345215, lat: 14.4850378036498 },
  { lng: 108.986442565918, lat: 14.4864883422852 },
  { lng: 108.986740112305, lat: 14.4874162673951 },
  { lng: 108.98722076416, lat: 14.4877643585206 },
  { lng: 108.988830566406, lat: 14.4882287979127 },
  { lng: 108.989189147949, lat: 14.4883451461793 },
  { lng: 108.98966217041, lat: 14.4886932373046 },
  { lng: 108.989898681641, lat: 14.48939037323 },
  { lng: 108.990676879883, lat: 14.4910707473756 },
  { lng: 108.991424560547, lat: 14.4919834136962 },
  { lng: 108.991958618164, lat: 14.4923877716064 },
  { lng: 108.993751525879, lat: 14.4929122924805 },
  { lng: 108.99488067627, lat: 14.4934911727905 },
  { lng: 108.996192932129, lat: 14.4944791793823 },
  { lng: 108.997146606445, lat: 14.4947109222413 },
  { lng: 108.997978210449, lat: 14.4951171875001 },
  { lng: 108.998756408691, lat: 14.4959888458251 },
  { lng: 108.999473571777, lat: 14.4968585968018 },
  { lng: 108.999710083008, lat: 14.4978456497193 },
  { lng: 109.000129699707, lat: 14.4984273910522 },
  { lng: 109.000785827637, lat: 14.4986581802368 },
  { lng: 109.002571105957, lat: 14.4990081787109 },
  { lng: 109.0029296875, lat: 14.4992399215698 },
  { lng: 109.003257751465, lat: 14.4990034103395 },
  { lng: 109.004043579102, lat: 14.4988813400269 },
  { lng: 109.005241394043, lat: 14.4988460540772 },
  { lng: 109.005882263184, lat: 14.4988632202148 },
  { lng: 109.00666809082, lat: 14.4990367889405 },
  { lng: 109.007331848144, lat: 14.4990892410279 },
  { lng: 109.007637023926, lat: 14.498984336853 },
  { lng: 109.008140563965, lat: 14.4985837936402 },
  { lng: 109.00862121582, lat: 14.4981670379638 },
  { lng: 109.009056091309, lat: 14.4979791641236 },
  { lng: 109.009811401367, lat: 14.4978027343751 },
  { lng: 109.010208129883, lat: 14.4976558685303 },
  { lng: 109.010566711426, lat: 14.4973621368408 },
  { lng: 109.010871887207, lat: 14.4969205856324 },
  { lng: 109.011047363281, lat: 14.4963026046753 },
  { lng: 109.01123046875, lat: 14.4955682754516 },
  { lng: 109.011322021484, lat: 14.4946861267089 },
  { lng: 109.011535644531, lat: 14.4941568374634 },
  { lng: 109.011741638184, lat: 14.4938039779663 },
  { lng: 109.011817932129, lat: 14.4932308197021 },
  { lng: 109.011940002441, lat: 14.4912023544312 },
  { lng: 109.011940002441, lat: 14.4902906417846 },
  { lng: 109.011756896973, lat: 14.4895553588868 },
  { lng: 109.011581420898, lat: 14.4883785247803 },
  { lng: 109.011680603027, lat: 14.4861602783204 },
  { lng: 109.011627197266, lat: 14.4850130081177 },
  { lng: 109.011741638184, lat: 14.4843368530273 },
  { lng: 109.01195526123, lat: 14.4840717315674 },
  { lng: 109.012214660645, lat: 14.4839963912963 },
  { lng: 109.012306213379, lat: 14.4839687347413 },
  { lng: 109.013236999512, lat: 14.4841156005859 },
  { lng: 109.014419555664, lat: 14.484380722046 },
  { lng: 109.016044616699, lat: 14.4849386215211 },
  { lng: 109.016868591309, lat: 14.4850568771363 },
  { lng: 109.017616271973, lat: 14.4849691390992 },
  { lng: 109.018737792969, lat: 14.484616279602 },
  { lng: 109.020065307617, lat: 14.4841156005859 },
  { lng: 109.022346496582, lat: 14.483543395996 },
  { lng: 109.023666381836, lat: 14.4834070205688 },
  { lng: 109.024833679199, lat: 14.4834632873535 },
  { lng: 109.026443481445, lat: 14.4837207794191 },
  { lng: 109.027923583984, lat: 14.4838590621948 },
  { lng: 109.029029846192, lat: 14.4839420318605 },
  { lng: 109.029624938965, lat: 14.4841079711913 },
  { lng: 109.029998779297, lat: 14.4842176437378 },
  { lng: 109.030166625977, lat: 14.484356880188 },
  { lng: 109.030281066895, lat: 14.4844951629639 },
  { lng: 109.030540466309, lat: 14.4847993850707 },
  { lng: 109.030960083008, lat: 14.4848556518556 },
  { lng: 109.031051635742, lat: 14.4848537445068 },
  { lng: 109.031875610352, lat: 14.4847707748414 },
  { lng: 109.032440185547, lat: 14.4846048355103 },
  { lng: 109.032814025879, lat: 14.4844951629639 },
  { lng: 109.032814025879, lat: 14.4860162734986 },
  { lng: 109.032867431641, lat: 14.4861822128295 },
  { lng: 109.033126831055, lat: 14.4861822128295 },
  { lng: 109.033645629883, lat: 14.4859876632691 },
  { lng: 109.034545898438, lat: 14.4860153198242 },
  { lng: 109.035163879395, lat: 14.4860153198242 },
  { lng: 109.036582946777, lat: 14.4863433837892 },
  { lng: 109.03694152832, lat: 14.4855518341064 },
  { lng: 109.037353515625, lat: 14.4850883483887 },
  { lng: 109.037704467773, lat: 14.4846029281617 },
  { lng: 109.037742614746, lat: 14.4844760894776 },
  { lng: 109.037788391113, lat: 14.4842653274536 },
  { lng: 109.037788391113, lat: 14.4840116500854 },
  { lng: 109.03768157959, lat: 14.4835481643677 },
  { lng: 109.037292480469, lat: 14.4831895828248 },
  { lng: 109.036880493164, lat: 14.4828310012818 },
  { lng: 109.036773681641, lat: 14.4826412200928 },
  { lng: 109.036758422852, lat: 14.4822511672974 },
  { lng: 109.036781311035, lat: 14.4819984436036 },
  { lng: 109.036842346192, lat: 14.4817028045655 },
  { lng: 109.036994934082, lat: 14.4813232421876 },
  { lng: 109.03734588623, lat: 14.4810066223145 },
  { lng: 109.037498474121, lat: 14.4807748794556 },
  { lng: 109.037559509277, lat: 14.4805011749269 },
  { lng: 109.037536621094, lat: 14.4801416397095 },
  { lng: 109.037300109863, lat: 14.4793405532838 },
  { lng: 109.03727722168, lat: 14.4788980484009 },
  { lng: 109.037231445313, lat: 14.4785175323487 },
  { lng: 109.037231445313, lat: 14.4780960083008 },
  { lng: 109.03727722168, lat: 14.4776525497437 },
  { lng: 109.037658691406, lat: 14.4760189056398 },
  { lng: 109.03791809082, lat: 14.4751958847046 },
  { lng: 109.038093566895, lat: 14.4741830825807 },
  { lng: 109.038200378418, lat: 14.4734659194946 },
  { lng: 109.038200378418, lat: 14.4728116989136 },
  { lng: 109.038383483887, lat: 14.4711990356445 },
  { lng: 109.038513183594, lat: 14.4703969955444 },
  { lng: 109.038619995117, lat: 14.4694900512695 },
  { lng: 109.038726806641, lat: 14.4689416885376 },
  { lng: 109.038833618164, lat: 14.4681577682495 },
  { lng: 109.039390563965, lat: 14.4664001464844 },
  { lng: 109.039604187012, lat: 14.4656410217286 },
  { lng: 109.039649963379, lat: 14.4650926589966 },
  { lng: 109.039649963379, lat: 14.4649448394775 },
  { lng: 109.039627075195, lat: 14.4646072387696 },
  { lng: 109.039543151856, lat: 14.4642486572267 },
  { lng: 109.039283752441, lat: 14.4636163711548 },
  { lng: 109.039024353027, lat: 14.4630889892579 },
  { lng: 109.038856506348, lat: 14.4625720977784 },
  { lng: 109.038688659668, lat: 14.4622983932495 },
  { lng: 109.038360595703, lat: 14.4621076583862 },
  { lng: 109.037994384766, lat: 14.4620447158813 },
  { lng: 109.037559509277, lat: 14.4618978500367 },
  { lng: 109.036994934082, lat: 14.4616241455078 },
  { lng: 109.036560058594, lat: 14.4611167907714 },
  { lng: 109.036346435547, lat: 14.4606113433838 },
  { lng: 109.036064147949, lat: 14.4598312377931 },
  { lng: 109.035781860352, lat: 14.4588184356689 },
  { lng: 109.035545349121, lat: 14.4581432342529 },
  { lng: 109.035362243652, lat: 14.4575853347778 },
  { lng: 109.035186767578, lat: 14.4569311141968 },
  { lng: 109.035057067871, lat: 14.4563398361205 },
  { lng: 109.035118103027, lat: 14.455834388733 },
  { lng: 109.035118103027, lat: 14.4550323486329 },
  { lng: 109.03498840332, lat: 14.4548206329346 },
  { lng: 109.034858703613, lat: 14.4546318054199 },
  { lng: 109.034706115723, lat: 14.4544839859009 },
  { lng: 109.034408569336, lat: 14.454294204712 },
  { lng: 109.033950805664, lat: 14.4542522430421 },
  { lng: 109.033042907715, lat: 14.4540424346924 },
  { lng: 109.031982421875, lat: 14.4538726806641 },
  { lng: 109.030784606934, lat: 14.4535140991212 },
  { lng: 109.030006408692, lat: 14.4532403945922 },
  { lng: 109.029495239258, lat: 14.452808380127 },
  { lng: 109.028610229492, lat: 14.451795578003 },
  { lng: 109.027786254883, lat: 14.4512252807618 },
  { lng: 109.026313781738, lat: 14.450719833374 },
  { lng: 109.025337219238, lat: 14.4504890441895 },
  { lng: 109.024864196777, lat: 14.4503412246705 },
  { lng: 109.024429321289, lat: 14.4500665664673 },
  { lng: 109.02360534668, lat: 14.4492015838623 },
  { lng: 109.02278137207, lat: 14.4483575820923 },
  { lng: 109.022346496582, lat: 14.4479036331177 },
  { lng: 109.021781921387, lat: 14.447380065918 },
  { lng: 109.021240234375, lat: 14.4466590881348 },
  { lng: 109.020874023437, lat: 14.4457731246949 },
  { lng: 109.020736694336, lat: 14.4449539184571 },
  { lng: 109.020668029785, lat: 14.4442977905273 },
  { lng: 109.020736694336, lat: 14.4436759948731 },
  { lng: 109.021179199219, lat: 14.4423179626465 },
  { lng: 109.020301818848, lat: 14.4418420791626 },
  { lng: 109.019348144531, lat: 14.4412651062013 },
  { lng: 109.017570495606, lat: 14.440242767334 },
  { lng: 109.016242980957, lat: 14.439311027527 },
  { lng: 109.01496887207, lat: 14.4390001296998 },
  { lng: 109.014236450195, lat: 14.4389638900757 },
  { lng: 109.012825012207, lat: 14.4391794204712 },
  { lng: 109.011817932129, lat: 14.439489364624 },
  { lng: 109.011383056641, lat: 14.4399108886719 },
  { lng: 109.011161804199, lat: 14.4406661987305 },
  { lng: 109.010932922363, lat: 14.4422206878663 },
  { lng: 109.01065826416, lat: 14.4429321289062 },
  { lng: 109.010383605957, lat: 14.4432430267333 },
  { lng: 109.009468078613, lat: 14.4438648223878 },
  { lng: 109.008331298828, lat: 14.4445753097534 },
  { lng: 109.007369995117, lat: 14.4450635910035 },
  { lng: 109.005180358887, lat: 14.4456424713135 },
  { lng: 109.003997802734, lat: 14.4460859298706 },
  { lng: 109.002601623535, lat: 14.4468193054199 },
  { lng: 109.00146484375, lat: 14.4473962783814 },
  { lng: 109.000457763672, lat: 14.4477071762085 },
  { lng: 108.999504089355, lat: 14.4479293823242 },
  { lng: 108.998748779297, lat: 14.4477195739747 },
  { lng: 108.997360229492, lat: 14.4471740722656 },
  { lng: 108.995758056641, lat: 14.4465961456299 },
  { lng: 108.99471282959, lat: 14.4465961456299 },
  { lng: 108.994346618652, lat: 14.4468631744385 },
  { lng: 108.993255615234, lat: 14.4480180740356 },
  { lng: 108.992614746094, lat: 14.4483728408814 },
  { lng: 108.991813659668, lat: 14.4484844207764 },
  { lng: 108.990219116211, lat: 14.4487495422363 },
  { lng: 108.989120483398, lat: 14.4491949081421 },
  { lng: 108.988624572754, lat: 14.4496393203735 },
  { lng: 108.988121032715, lat: 14.4503488540651 },
  { lng: 108.987480163574, lat: 14.4509267807007 },
  { lng: 108.986297607422, lat: 14.4518594741822 },
  { lng: 108.985336303711, lat: 14.4528369903566 },
  { lng: 108.984970092774, lat: 14.4538583755493 },
  { lng: 108.984489440918, lat: 14.4550724029542 },
  { lng: 108.98412322998, lat: 14.4556035995484 },
  { lng: 108.983489990234, lat: 14.4560480117799 },
  { lng: 108.982849121094, lat: 14.4566249847412 },
  { lng: 108.982116699219, lat: 14.4581336975098 },
  { lng: 108.98152923584, lat: 14.4595985412597 },
  { lng: 108.981208801269, lat: 14.4611959457397 },
  { lng: 108.981391906738, lat: 14.4627046585083 },
  { lng: 108.981620788574, lat: 14.4634160995484 },
  { lng: 108.982162475586, lat: 14.4638147354127 },
  { lng: 108.982528686523, lat: 14.4644365310669 },
  { lng: 108.982620239258, lat: 14.4651908874512 },
  { lng: 108.982696533203, lat: 14.4659023284913 },
];

export default hoaitan;
