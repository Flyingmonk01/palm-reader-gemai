'use client'
import { useStore } from '@/lib/store'
import html2pdf from 'html2pdf.js';
// const ReportPage = () => {
//     const { report } = useStore()
//     console.log('ReportPage - report:', report)
//     const va = `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Palm Reading Report</title>
//       <!-- Google Fonts -->
//       <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
//       <style>
//           body {
//               margin: 0;
//               padding: 0;
//               color: #fff;
//               font-family: 'Roboto', sans-serif;
//               background: radial-gradient(circle at bottom, #FFFACD, #E47025);
//               margin: 0 auto;
//           }
//           /* Celestial star background layers */
//           #stars, #stars2, #stars3 {
//               position: absolute;
//               top: 0;
//               left: 0;
//               right: 0;
//               bottom: 0;
//               display: block;
//               z-index: 0;
//           }
//           #stars {
//               width: 2px;
//               height: 2px;
//               box-shadow: 1309px 228px #FFF, 51px 563px #FFF, 501px 457px #FFF, 285px 209px #FFF, 1385px 1116px #FFF, 178px 128px #FFF, 1953px 74px #FFF, 751px 487px #FFF, 1230px 358px #FFF, 223px 486px #FFF, 1832px 143px #FFF, 1555px 803px #FFF, 936px 1446px #FFF, 1217px 1233px #FFF, 218px 361px #FFF, 1698px 516px #FFF, 1668px 1055px #FFF, 908px 1200px #FFF, 418px 551px #FFF, 1308px 1105px #FFF, 1196px 405px #FFF, 714px 879px #FFF, 1438px 731px #FFF, 1674px 554px #FFF, 945px 1552px #FFF, 1754px 736px #FFF, 680px 302px #FFF, 1463px 1279px #FFF, 1903px 993px #FFF, 1723px 1518px #FFF, 164px 1359px #FFF, 68px 1318px #FFF, 1767px 1523px #FFF, 1768px 1175px #FFF, 1783px 1367px #FFF, 1251px 352px #FFF, 1596px 1417px #FFF, 1040px 38px #FFF, 354px 121px #FFF, 1862px 511px #FFF, 1701px 859px #FFF, 339px 1541px #FFF, 578px 865px #FFF, 757px 251px #FFF, 78px 908px #FFF, 1870px 658px #FFF, 1833px 1403px #FFF, 1420px 1200px #FFF, 1776px 421px #FFF, 1231px 804px #FFF, 391px 1079px #FFF, 1863px 485px #FFF, 1529px 1216px #FFF, 1289px 925px #FFF, 630px 309px #FFF, 652px 803px #FFF, 1322px 1167px #FFF, 1376px 393px #FFF, 1837px 1146px #FFF, 549px 1113px #FFF, 1098px 646px #FFF, 47px 106px #FFF, 1895px 513px #FFF, 1058px 958px #FFF, 1156px 1116px #FFF, 1339px 439px #FFF, 873px 294px #FFF, 1592px 461px #FFF, 944px 390px #FFF, 1308px 487px #FFF, 1734px 582px #FFF, 858px 935px #FFF, 240px 1292px #FFF, 1063px 1170px #FFF, 272px 341px #FFF, 1407px 721px #FFF, 490px 1410px #FFF, 1898px 256px #FFF, 1776px 518px #FFF, 1210px 274px #FFF, 66px 1222px #FFF, 78px 1403px #FFF, 679px 1425px #FFF, 1219px 1200px #FFF, 252px 83px #FFF, 178px 540px #FFF, 1852px 740px #FFF, 547px 336px #FFF, 343px 146px #FFF, 1243px 672px #FFF, 554px 146px #FFF, 785px 47px #FFF, 1423px 131px #FFF, 1885px 1440px #FFF, 629px 1406px #FFF, 641px 1483px #FFF, 1505px 295px #FFF, 36px 1344px #FFF, 693px 763px #FFF, 232px 985px #FFF, 519px 216px #FFF, 572px 331px #FFF, 1431px 902px #FFF, 345px 1148px #FFF, 954px 504px #FFF, 613px 1639px #FFF, 474px 1443px #FFF, 889px 591px #FFF, 335px 337px #FFF, 1272px 1298px #FFF, 665px 146px #FFF, 625px 144px #FFF, 169px 1008px #FFF, 338px 857px #FFF, 229px 823px #FFF, 163px 990px #FFF, 488px 1025px #FFF, 1191px 158px #FFF, 1133px 275px #FFF, 130px 1214px #FFF, 193px 1218px #FFF, 150px 340px #FFF, 278px 269px #FFF, 170px 857px #FFF, 47px 1380px #FFF, 14px 1186px #FFF, 53px 1493px #FFF, 48px 830px #FFF, 108px 595px #FFF, 135px 1568px #FFF, 175px 132px #FFF, 198px 1556px #FFF, 217px 1230px #FFF, 269px 73px #FFF, 264px 291px #FFF, 365px 1004px #FFF, 342px 708px #FFF, 341px 442px #FFF, 330px 614px #FFF, 319px 352px #FFF, 365px 144px #FFF, 355px 1581px #FFF, 350px 1140px #FFF, 388px 1172px #FFF, 395px 393px #FFF, 432px 131px #FFF, 467px 73px #FFF, 466px 673px #FFF, 475px 635px #FFF, 466px 430px #FFF, 493px 210px #FFF, 494px 552px #FFF, 513px 236px #FFF, 504px 398px #FFF, 536px 1138px #FFF, 553px 612px #FFF, 567px 264px #FFF, 583px 680px #FFF, 605px 1127px #FFF, 618px 154px #FFF, 619px 1024px #FFF, 652px 900px #FFF, 657px 977px #FFF, 653px 57px #FFF, 647px 273px #FFF, 642px 123px #FFF, 656px 342px #FFF, 690px 1129px #FFF, 699px 496px #FFF, 712px 633px #FFF, 716px 854px #FFF, 712px 120px #FFF, 711px 431px #FFF, 738px 90px #FFF, 769px 431px #FFF, 803px 334px #FFF, 819px 1014px #FFF, 833px 1132px #FFF, 854px 649px #FFF, 874px 182px #FFF, 881px 404px #FFF, 882px 1061px #FFF, 886px 162px #FFF, 900px 533px #FFF, 918px 839px #FFF, 916px 885px #FFF, 918px 1214px #FFF, 923px 574px #FFF, 945px 646px #FFF, 955px 106px #FFF, 961px 213px #FFF, 979px 957px #FFF, 976px 262px #FFF, 986px 176px #FFF, 989px 13px #FFF, 994px 704px #FFF, 1008px 700px #FFF, 1009px 552px #FFF, 1010px 813px #FFF, 1010px 182px #FFF, 1024px 89px #FFF, 1020px 757px #FFF, 1028px 1036px #FFF, 1032px 1348px #FFF, 1037px 1286px #FFF, 1040px 79px #FFF, 1046px 114px #FFF, 1049px 1110px #FFF, 1055px 78px #FFF, 1058px 152px #FFF, 1061px 1315px #FFF, 1060px 1466px #FFF, 1065px 505px #FFF, 1065px 899px #FFF, 1067px 1487px #FFF, 1067px 1413px #FFF, 1068px 1107px #FFF, 1069px 297px #FFF, 1071px 734px #FFF, 1075px 1098px #FFF, 1074px 1599px #FFF, 1078px 408px #FFF, 1077px 1421px #FFF, 1082px 734px #FFF, 1082px 548px #FFF, 1083px 1438px #FFF, 1086px 1043px #FFF, 1089px 140px #FFF, 1089px 299px #FFF, 1092px 839px #FFF, 1096px 113px #FFF, 1097px 41px #FFF, 1100px 164px #FFF, 1105px 1370px #FFF, 1106px 56px #FFF, 1112px 28px #FFF, 1116px 875px #FFF, 1116px 829px #FFF, 1116px 1215px #FFF, 1117px 576px #FFF, 1120px 1163px #FFF, 1123px 1129px #FFF, 1126px 1004px #FFF, 1128px 985px #FFF, 1130px 118px #FFF, 1131px 156px #FFF, 1131px 1608px #FFF, 1136px 400px #FFF, 1139px 1196px #FFF, 1137px 1025px #FFF, 1138px 261px #FFF, 1139px 178px #FFF, 1143px 465px #FFF, 1146px 194px #FFF, 1151px 1026px #FFF, 1152px 140px #FFF, 1155px 418px #FFF, 1156px 156px #FFF, 1155px 583px #FFF, 1154px 547px #FFF, 1153px 1314px #FFF, 1155px 1134px #FFF, 1154px 499px #FFF, 1152px 721px #FFF, 1153px 1169px #FFF, 1155px 108px #FFF, 1155px 117px #FFF, 1155px 437px #FFF, 1156px 1632px #FFF, 1159px 1058px #FFF, 1159px 80px #FFF, 1160px 153px #FFF, 1163px 93px #FFF, 1160px 1297px #FFF, 1163px 1589px #FFF, 1163px 556px #FFF, 1166px 30px #FFF, 1168px 270px #FFF, 1167px 1268px #FFF, 1171px 274px #FFF, 1174px 441px #FFF, 1175px 140px #FFF, 1175px 1452px #FFF, 1175px 1109px #FFF, 1174px 1632px #FFF, 1177px 187px #FFF, 1177px 1461px #FFF, 1179px 226px #FFF, 1179px 564px #FFF, 1178px 1252px #FFF, 1183px 186px #FFF, 1184px 164px #FFF, 1183px 867px #FFF, 1185px 1168px #FFF, 1186px 147px #FFF, 1187px 1004px #FFF, 1188px 455px #FFF, 1188px 1223px #FFF, 1188px 642px #FFF, 1189px 1193px #FFF, 1189px 938px #FFF, 1189px 1097px #FFF, 1189px 1329px #FFF, 1190px 832px #FFF, 1191px 1413px #FFF, 1193px 1468px #FFF, 1192px 1347px #FFF, 1192px 1000px #FFF, 1194px 1319px #FFF, 1194px 1235px #FFF, 1195px 918px #FFF, 1194px 1209px #FFF, 1195px 939px #FFF, 1196px 225px #FFF, 1198px 280px #FFF, 1196px 1388px #FFF, 1195px 1013px #FFF, 1195px 792px #FFF, 1196px 533px #FFF, 1196px 470px #FFF, 1197px 513px #FFF, 1198px 1159px #FFF, 1198px 315px #FFF, 1199px 581px #FFF, 1202px 168px #FFF, 1203px 1000px #FFF, 1203px 991px #FFF, 1204px 370px #FFF, 1202px 180px #FFF, 1204px 1041px #FFF, 1202px 154px #FFF, 1204px 636px #FFF, 1205px 895px #FFF, 1206px 90px #FFF, 1208px 327px #FFF, 1209px 1224px #FFF, 1210px 1130px #FFF, 1210px 253px #FFF, 1209px 752px #FFF, 1209px 407px #FFF, 1211px 735px #FFF, 1210px 14px #FFF, 1211px 39px #FFF, 1212px 119px #FFF, 1214px 461px #FFF, 1211px 931px #FFF, 1212px 948px #FFF, 1215px 1210px #FFF, 1216px 19px #FFF, 1215px 177px #FFF, 1215px 1583px #FFF, 1216px 681px #FFF, 1217px 1512px #FFF, 1217px 1021px #FFF, 1219px 280px #FFF, 1219px 469px #FFF, 1219px 388px #FFF, 1220px 1262px #FFF, 1221px 274px #FFF, 1219px 258px #FFF, 1219px 1472px #FFF, 1221px 624px #FFF, 1223px 573px #FFF, 1224px 512px #FFF, 1227px 109px #FFF, 1226px 651px #FFF, 1228px 420px #FFF, 1228px 158px #FFF, 1228px 28px #FFF, 1228px 1195px #FFF, 1230px 1359px #FFF, 1230px 1468px #FFF, 1231px 115px #FFF, 1231px 690px #FFF, 1231px 51px #FFF, 1232px 1277px #FFF, 1232px 1375px #FFF, 1234px 747px #FFF, 1234px 184px #FFF, 1234px 893px #FFF, 1235px 240px #FFF, 1236px 109px #FFF, 1237px 1376px #FFF, 1237px 116px #FFF, 1237px 672px #FFF, 1238px 107px #FFF, 1240px 1114px #FFF, 1242px 144px #FFF, 1243px 729px #FFF, 1243px 476px #FFF, 1243px 67px #FFF, 1245px 207px #FFF, 1244px 869px #FFF, 1245px 34px #FFF, 1245px 120px #FFF, 1246px 1022px #FFF, 1246px 252px #FFF, 1248px 1423px #FFF, 1248px 1415px #FFF, 1249px 28px #FFF, 1249px 981px #FFF, 1251px 395px #FFF, 1251px 77px #FFF, 1252px 523px #FFF, 1253px 198px #FFF, 1254px 441px #FFF, 1255px 1300px #FFF, 1255px 154px #FFF, 1256px 1122px #FFF, 1257px 1284px #FFF, 1257px 976px #FFF, 1257px 1137px #FFF, 1257px 707px #FFF, 1258px 701px #FFF, 1258px 142px #FFF, 1260px 124px #FFF, 1261px 203px #FFF, 1262px 1243px #FFF, 1260px 1550px #FFF, 1262px 1032px #FFF, 1264px 834px #FFF, 1264px 221px #FFF, 1264px 818px #FFF, 1265px 444px #FFF, 1265px 650px #FFF, 1267px 1011px #FFF, 1267px 134px #FFF, 1268px 28px #FFF, 1270px 598px #FFF, 1270px 673px #FFF, 1270px 759px #FFF, 1270px 479px #FFF, 1272px 552px #FFF, 1275px 190px #FFF, 1275px 474px #FFF, 1276px 201px #FFF, 1276px 1137px #FFF, 1276px 420px #FFF, 1275px 1198px #FFF, 1277px 488px #FFF, 1278px 107px #FFF, 1279px 464px #FFF, 1281px 1096px #FFF, 1281px 289px #FFF, 1281px 408px #FFF, 1281px 285px #FFF, 1282px 953px #FFF, 1282px 496px #FFF, 1283px 210px #FFF, 1284px 1563px #FFF, 1284px 735px #FFF, 1284px 264px #FFF, 1285px 1140px #FFF, 1285px 1601px #FFF, 1285px 1260px #FFF, 1285px 976px #FFF, 1286px 635px #FFF, 1286px 364px #FFF, 1286px 451px #FFF, 1287px 541px #FFF, 1288px 117px #FFF, 1288px 1343px #FFF, 1289px 1465px #FFF, 1290px 761px #FFF, 1290px 476px #FFF, 1290px 1552px #FFF, 1290px 403px #FFF, 1291px 1343px #FFF, 1291px 302px #FFF, 1292px 1268px #FFF, 1292px 788px #FFF, 1292px 442px #FFF, 1293px 1070px #FFF, 1294px 44px #FFF, 1294px 422px #FFF, 1295px 1015px #FFF, 1295px 135px #FFF, 1296px 977px #FFF, 1297px 1106px #FFF, 1297px 774px #FFF, 1298px 1183px #FFF, 1298px 140px #FFF, 1299px 16px #FFF, 1299px 1309px #FFF, 1299px 102px #FFF, 1302px 505px #FFF, 1302px 528px #FFF, 1303px 856px #FFF, 1303px 412px #FFF, 1303px 209px #FFF, 1304px 1274px #FFF, 1306px 118px #FFF, 1308px 1149px #FFF, 1311px 97px #FFF, 1312px 1047px #FFF, 1312px 1390px #FFF, 1312px 264px #FFF, 1313px 100px #FFF, 1313px 1539px #FFF, 1313px 113px #FFF, 1314px 490px #FFF, 1316px 721px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF, 1318px 569px #FFF, 1318px 668px #FFF, 1318px 709px #FFF, 1318px 853px #FFF, 1318px 1060px #FFF, 1319px 142px #FFF, 1319px 169px #FFF, 1319px 1083px #FFF, 1319px 386px #FFF, 1320px 141px #FFF, 1320px 1505px #FFF, 1320px 606px #FFF, 1320px 50px #FFF, 1321px 118px #FFF, 1321px 1010px #FFF, 1321px 129px #FFF, 1322px 1410px #FFF, 1323px 1142px #FFF, 1323px 35px #FFF, 1324px 121px #FFF, 1324px 197px #FFF, 1324px 1289px #FFF, 1324px 986px #FFF, 1324px 750px #FFF, 1325px 342px #FFF, 1327px 187px #FFF, 1327px 435px #FFF, 1327px 1577px #FFF, 1328px 101px #FFF, 1328px 650px #FFF, 1328px 1327px #FFF, 1328px 72px #FFF, 1329px 319px #FFF, 1330px 153px #FFF, 1331px 208px #FFF, 1332px 29px #FFF, 1333px 1470px #FFF, 1333px 652px #FFF, 1333px 72px #FFF, 1333px 1171px #FFF, 1334px 351px #FFF, 1335px 248px #FFF, 1335px 611px #FFF, 1335px 447px #FFF, 1336px 272px #FFF, 1336px 1319px #FFF, 1337px 149px #FFF, 1337px 1189px #FFF, 1337px 554px #FFF, 1337px 711px #FFF, 1338px 148px #FFF, 1338px 1403px #FFF, 1339px 445px #FFF, 1339px 407px #FFF, 1340px 468px #FFF, 1340px 735px #FFF, 1340px 854px #FFF, 1341px 1513px #FFF, 1342px 1198px #FFF, 1343px 248px #FFF, 1343px 1072px #FFF, 1343px 110px #FFF, 1343px 566px #FFF, 1343px 1158px #FFF, 1344px 736px #FFF, 1345px 487px #FFF, 1345px 167px #FFF, 1345px 158px #FFF, 1347px 1544px #FFF, 1349px 1213px #FFF, 1349px 60px #FFF, 1350px 439px #FFF, 1351px 278px #FFF, 1352px 903px #FFF, 1353px 375px #FFF, 1353px 167px #FFF, 1354px 78px #FFF, 1354px 1435px #FFF, 1355px 1393px #FFF, 1355px 875px #FFF, 1356px 1078px #FFF, 1357px 151px #FFF, 1357px 348px #FFF, 1357px 1193px #FFF, 1358px 56px #FFF, 1358px 611px #FFF, 1359px 1391px #FFF, 1360px 742px #FFF, 1361px 778px #FFF, 1361px 511px #FFF, 1361px 1050px #FFF, 1362px 1205px #FFF, 1362px 1389px #FFF, 1363px 1436px #FFF, 1363px 108px #FFF, 1363px 1047px #FFF, 1363px 752px #FFF, 1364px 147px #FFF, 1364px 615px #FFF, 1365px 997px #FFF, 1366px 170px #FFF, 1366px 56px #FFF, 1366px 505px #FFF, 1366px 707px #FFF, 1367px 42px #FFF, 1367px 583px #FFF, 1367px 634px #FFF, 1368px 706px #FFF, 1368px 1380px #FFF, 1369px 573px #FFF, 1369px 740px #FFF, 1370px 51px #FFF, 1370px 1465px #FFF, 1370px 1430px #FFF, 1370px 1200px #FFF, 1371px 78px #FFF, 1371px 782px #FFF, 1371px 1464px #FFF, 1372px 1194px #FFF, 1372px 79px #FFF, 1372px 133px #FFF, 1372px 1093px #FFF, 1373px 571px #FFF, 1373px 627px #FFF, 1374px 443px #FFF, 1374px 941px #FFF, 1374px 965px #FFF, 1374px 426px #FFF, 1374px 1151px #FFF, 1374px 1365px #FFF, 1375px 438px #FFF, 1375px 265px #FFF, 1375px 1120px #FFF, 1376px 95px #FFF, 1377px 694px #FFF, 1378px 742px #FFF, 1379px 77px #FFF, 1379px 64px #FFF, 1379px 932px #FFF, 1380px 29px #FFF, 1380px 761px #FFF, 1381px 103px #FFF, 1382px 1168px #FFF, 1382px 106px #FFF, 1382px 850px #FFF, 1384px 372px #FFF, 1385px 638px #FFF, 1386px 560px #FFF, 1386px 789px #FFF, 1388px 404px #FFF, 1388px 595px #FFF, 1388px 1483px #FFF, 1388px 1045px #FFF, 1389px 187px #FFF, 1390px 384px #FFF, 1391px 451px #FFF, 1391px 1364px #FFF, 1392px 1363px #FFF, 1392px 155px #FFF, 1392px 553px #FFF, 1393px 301px #FFF, 1393px 305px #FFF, 1393px 1061px #FFF, 1394px 1213px #FFF, 1394px 119px #FFF, 1394px 1568px #FFF, 1394px 1066px #FFF, 1395px 296px #FFF, 1395px 1180px #FFF, 1396px 895px #FFF, 1397px 416px #FFF, 1398px 607px #FFF, 1398px 579px #FFF, 1399px 429px #FFF, 1401px 969px #FFF, 1402px 319px #FFF, 1403px 579px #FFF, 1403px 878px #FFF, 1404px 717px #FFF, 1404px 70px #FFF, 1404px 668px #FFF, 1405px 820px #FFF, 1405px 1488px #FFF, 1406px 1280px #FFF, 1406px 241px #FFF, 1407px 171px #FFF, 1407px 1314px #FFF, 1407px 1089px #FFF, 1408px 1098px #FFF, 1409px 386px #FFF, 1409px 1160px #FFF, 1409px 306px #FFF, 1410px 1584px #FFF, 1410px 180px #FFF, 1410px 426px #FFF, 1411px 142px #FFF, 1412px 1077px #FFF, 1413px 1540px #FFF, 1413px 1128px #FFF, 1414px 1338px #FFF, 1415px 688px #FFF, 1416px 1458px #FFF, 1418px 29px #FFF, 1418px 1309px #FFF, 1419px 1101px #FFF, 1420px 449px #FFF, 1420px 1586px #FFF, 1420px 1349px #FFF, 1420px 547px #FFF, 1420px 664px #FFF, 1421px 23px #FFF, 1421px 80px #FFF, 1421px 950px #FFF, 1422px 385px #FFF, 1423px 21px #FFF, 1423px 213px #FFF, 1423px 299px #FFF, 1423px 1212px #FFF, 1423px 952px #FFF, 1424px 1269px #FFF, 1424px 1218px #FFF, 1424px 707px #FFF, 1425px 789px #FFF, 1425px 364px #FFF, 1426px 64px #FFF, 1426px 1182px #FFF, 1428px 345px #FFF, 1429px 1094px #FFF, 1430px 477px #FFF, 1430px 424px #FFF, 1430px 1067px #FFF, 1430px 1209px #FFF, 1431px 178px #FFF, 1431px 27px #FFF, 1431px 371px #FFF, 1431px 1133px #FFF, 1432px 712px #FFF, 1433px 1147px #FFF, 1433px 52px #FFF, 1434px 72px #FFF, 1434px 77px #FFF, 1434px 154px #FFF, 1434px 1434px #FFF, 1434px 1068px #FFF, 1435px 94px #FFF, 1436px 1203px #FFF, 1436px 1238px #FFF, 1437px 24px #FFF, 1437px 1190px #FFF, 1437px 594px #FFF, 1437px 1210px #FFF, 1438px 567px #FFF, 1438px 126px #FFF, 1438px 1112px #FFF, 1438px 302px #FFF, 1439px 469px #FFF, 1439px 1013px #FFF, 1439px 81px #FFF, 1439px 100px #FFF, 1440px 16px #FFF;
//               animation: animStar 50s linear infinite;
//           }
//           #stars:after {
//               content: '';
//               position: absolute;
//               top: 2000px;
//               width: 2px;
//               height: 2px;
//               box-shadow: 1309px 228px #FFF, 51px 563px #FFF, 501px 457px #FFF, 285px 209px #FFF, 1385px 1116px #FFF, 178px 128px #FFF, 1953px 74px #FFF, 751px 487px #FFF, 1230px 358px #FFF, 223px 486px #FFF, 1832px 143px #FFF, 1555px 803px #FFF, 936px 1446px #FFF, 1217px 1233px #FFF, 218px 361px #FFF, 1698px 516px #FFF, 1668px 1055px #FFF, 908px 1200px #FFF, 418px 551px #FFF, 1308px 1105px #FFF, 1196px 405px #FFF, 714px 879px #FFF, 1438px 731px #FFF, 1674px 554px #FFF, 945px 1552px #FFF, 1754px 736px #FFF, 680px 302px #FFF, 1463px 1279px #FFF, 1903px 993px #FFF, 1723px 1518px #FFF, 164px 1359px #FFF, 68px 1318px #FFF, 1767px 1523px #FFF, 1768px 1175px #FFF, 1783px 1367px #FFF, 1251px 352px #FFF, 1596px 1417px #FFF, 1040px 38px #FFF, 354px 121px #FFF, 1862px 511px #FFF, 1701px 859px #FFF, 339px 1541px #FFF, 578px 865px #FFF, 757px 251px #FFF, 78px 908px #FFF, 1870px 658px #FFF, 1833px 1403px #FFF, 1420px 1200px #FFF, 1776px 421px #FFF, 1231px 804px #FFF, 391px 1079px #FFF, 1863px 485px #FFF, 1529px 1216px #FFF, 1289px 925px #FFF, 630px 309px #FFF, 652px 803px #FFF, 1322px 1167px #FFF, 1376px 393px #FFF, 1837px 1146px #FFF, 549px 1113px #FFF, 1098px 646px #FFF, 47px 106px #FFF, 1895px 513px #FFF, 1058px 958px #FFF, 1156px 1116px #FFF, 1339px 439px #FFF, 873px 294px #FFF, 1592px 461px #FFF, 944px 390px #FFF, 1308px 487px #FFF, 1734px 582px #FFF, 858px 935px #FFF, 240px 1292px #FFF, 1063px 1170px #FFF, 272px 341px #FFF, 1407px 721px #FFF, 490px 1410px #FFF, 1898px 256px #FFF, 1776px 518px #FFF, 1210px 274px #FFF, 66px 1222px #FFF, 78px 1403px #FFF, 679px 1425px #FFF, 1219px 1200px #FFF, 252px 83px #FFF, 178px 540px #FFF, 1852px 740px #FFF, 547px 336px #FFF, 343px 146px #FFF, 1243px 672px #FFF, 554px 146px #FFF, 785px 47px #FFF, 1423px 131px #FFF, 1885px 1440px #FFF, 629px 1406px #FFF, 641px 1483px #FFF, 1505px 295px #FFF, 36px 1344px #FFF, 693px 763px #FFF, 232px 985px #FFF, 519px 216px #FFF, 572px 331px #FFF, 1431px 902px #FFF, 345px 1148px #FFF, 954px 504px #FFF, 613px 1639px #FFF, 474px 1443px #FFF, 889px 591px #FFF, 335px 337px #FFF, 1272px 1298px #FFF, 665px 146px #FFF, 625px 144px #FFF, 169px 1008px #FFF, 338px 857px #FFF, 229px 823px #FFF, 163px 990px #FFF, 488px 1025px #FFF, 1191px 158px #FFF, 1133px 275px #FFF, 130px 1214px #FFF, 193px 1218px #FFF, 150px 340px #FFF, 278px 269px #FFF, 170px 857px #FFF, 47px 1380px #FFF, 14px 1186px #FFF, 53px 1493px #FFF, 48px 830px #FFF, 108px 595px #FFF, 135px 1568px #FFF, 175px 132px #FFF, 198px 1556px #FFF, 217px 1230px #FFF, 269px 73px #FFF, 264px 291px #FFF, 365px 1004px #FFF, 342px 708px #FFF, 341px 442px #FFF, 330px 614px #FFF, 319px 352px #FFF, 365px 144px #FFF, 355px 1581px #FFF, 350px 1140px #FFF, 388px 1172px #FFF, 395px 393px #FFF, 432px 131px #FFF, 467px 73px #FFF, 466px 673px #FFF, 475px 635px #FFF, 466px 430px #FFF, 493px 210px #FFF, 494px 552px #FFF, 513px 236px #FFF, 504px 398px #FFF, 536px 1138px #FFF, 553px 612px #FFF, 567px 264px #FFF, 583px 680px #FFF, 605px 1127px #FFF, 618px 154px #FFF, 619px 1024px #FFF, 652px 900px #FFF, 657px 977px #FFF, 653px 57px #FFF, 647px 273px #FFF, 642px 123px #FFF, 656px 342px #FFF, 690px 1129px #FFF, 699px 496px #FFF, 712px 633px #FFF, 716px 854px #FFF, 712px 120px #FFF, 711px 431px #FFF, 738px 90px #FFF, 769px 431px #FFF, 803px 334px #FFF, 819px 1014px #FFF, 833px 1132px #FFF, 854px 649px #FFF, 874px 182px #FFF, 881px 404px #FFF, 882px 1061px #FFF, 886px 162px #FFF, 900px 533px #FFF, 918px 839px #FFF, 916px 885px #FFF, 918px 1214px #FFF, 923px 574px #FFF, 945px 646px #FFF, 955px 106px #FFF, 961px 213px #FFF, 979px 957px #FFF, 976px 262px #FFF, 986px 176px #FFF, 989px 13px #FFF, 994px 704px #FFF, 1008px 700px #FFF, 1009px 552px #FFF, 1010px 813px #FFF, 1010px 182px #FFF, 1024px 89px #FFF, 1020px 757px #FFF, 1028px 1036px #FFF, 1032px 1348px #FFF, 1037px 1286px #FFF, 1040px 79px #FFF, 1046px 114px #FFF, 1049px 1110px #FFF, 1055px 78px #FFF, 1058px 152px #FFF, 1061px 1315px #FFF, 1060px 1466px #FFF, 1065px 505px #FFF, 1065px 899px #FFF, 1067px 1487px #FFF, 1067px 1413px #FFF, 1068px 1107px #FFF, 1069px 297px #FFF, 1071px 734px #FFF, 1075px 1098px #FFF, 1074px 1599px #FFF, 1078px 408px #FFF, 1077px 1421px #FFF, 1082px 734px #FFF, 1082px 548px #FFF, 1083px 1438px #FFF, 1086px 1043px #FFF, 1089px 140px #FFF, 1089px 299px #FFF, 1092px 839px #FFF, 1096px 113px #FFF, 1097px 41px #FFF, 1100px 164px #FFF, 1105px 1370px #FFF, 1106px 56px #FFF, 1112px 28px #FFF, 1116px 875px #FFF, 1116px 829px #FFF, 1116px 1215px #FFF, 1117px 576px #FFF, 1120px 1163px #FFF, 1123px 1129px #FFF, 1126px 1004px #FFF, 1128px 985px #FFF, 1130px 118px #FFF, 1131px 156px #FFF, 1131px 1608px #FFF, 1136px 400px #FFF, 1139px 1196px #FFF, 1137px 1025px #FFF, 1138px 261px #FFF, 1139px 178px #FFF, 1143px 465px #FFF, 1146px 194px #FFF, 1151px 1026px #FFF, 1152px 140px #FFF, 1155px 418px #FFF, 1156px 156px #FFF, 1155px 583px #FFF, 1154px 547px #FFF, 1153px 1314px #FFF, 1155px 1134px #FFF, 1154px 499px #FFF, 1152px 721px #FFF, 1153px 1169px #FFF, 1155px 108px #FFF, 1155px 117px #FFF, 1155px 437px #FFF, 1156px 1632px #FFF, 1159px 1058px #FFF, 1159px 80px #FFF, 1160px 153px #FFF, 1163px 93px #FFF, 1160px 1297px #FFF, 1163px 1589px #FFF, 1163px 556px #FFF, 1166px 30px #FFF, 1168px 270px #FFF, 1167px 1268px #FFF, 1171px 274px #FFF, 1174px 441px #FFF, 1175px 140px #FFF, 1175px 1452px #FFF, 1175px 1109px #FFF, 1174px 1632px #FFF, 1177px 187px #FFF, 1177px 1461px #FFF, 1179px 226px #FFF, 1179px 564px #FFF, 1178px 1252px #FFF, 1183px 186px #FFF, 1184px 164px #FFF, 1183px 867px #FFF, 1185px 1168px #FFF, 1186px 147px #FFF, 1187px 1004px #FFF, 1188px 455px #FFF, 1188px 1223px #FFF, 1188px 642px #FFF, 1189px 1193px #FFF, 1189px 938px #FFF, 1189px 1097px #FFF, 1189px 1329px #FFF, 1190px 832px #FFF, 1191px 1413px #FFF, 1193px 1468px #FFF, 1192px 1347px #FFF, 1192px 1000px #FFF, 1194px 1319px #FFF, 1194px 1235px #FFF, 1195px 918px #FFF, 1194px 1209px #FFF, 1195px 939px #FFF, 1196px 225px #FFF, 1198px 280px #FFF, 1196px 1388px #FFF, 1195px 1013px #FFF, 1195px 792px #FFF, 1196px 533px #FFF, 1196px 470px #FFF, 1197px 513px #FFF, 1198px 1159px #FFF, 1198px 315px #FFF, 1199px 581px #FFF, 1202px 168px #FFF, 1203px 1000px #FFF, 1203px 991px #FFF, 1204px 370px #FFF, 1202px 180px #FFF, 1204px 1041px #FFF, 1202px 154px #FFF, 1204px 636px #FFF, 1205px 895px #FFF, 1206px 90px #FFF, 1208px 327px #FFF, 1209px 1224px #FFF, 1210px 1130px #FFF, 1210px 253px #FFF, 1209px 752px #FFF, 1209px 407px #FFF, 1211px 735px #FFF, 1210px 14px #FFF, 1211px 39px #FFF, 1212px 119px #FFF, 1214px 461px #FFF, 1211px 931px #FFF, 1212px 948px #FFF, 1215px 1210px #FFF, 1216px 19px #FFF, 1215px 177px #FFF, 1215px 1583px #FFF, 1216px 681px #FFF, 1217px 1512px #FFF, 1217px 1021px #FFF, 1219px 280px #FFF, 1219px 469px #FFF, 1219px 388px #FFF, 1220px 1262px #FFF, 1221px 274px #FFF, 1219px 258px #FFF, 1219px 1472px #FFF, 1221px 624px #FFF, 1223px 573px #FFF, 1224px 512px #FFF, 1227px 109px #FFF, 1226px 651px #FFF, 1228px 420px #FFF, 1228px 158px #FFF, 1228px 28px #FFF, 1228px 1195px #FFF, 1230px 1359px #FFF, 1230px 1468px #FFF, 1231px 115px #FFF, 1231px 690px #FFF, 1231px 51px #FFF, 1232px 1277px #FFF, 1232px 1375px #FFF, 1234px 747px #FFF, 1234px 184px #FFF, 1234px 893px #FFF, 1235px 240px #FFF, 1236px 109px #FFF, 1237px 1376px #FFF, 1237px 116px #FFF, 1237px 672px #FFF, 1238px 107px #FFF, 1240px 1114px #FFF, 1242px 144px #FFF, 1243px 729px #FFF, 1243px 476px #FFF, 1243px 67px #FFF, 1245px 207px #FFF, 1244px 869px #FFF, 1245px 34px #FFF, 1245px 120px #FFF, 1246px 1022px #FFF, 1246px 252px #FFF, 1248px 1423px #FFF, 1248px 1415px #FFF, 1249px 28px #FFF, 1249px 981px #FFF, 1251px 395px #FFF, 1251px 77px #FFF, 1252px 523px #FFF, 1253px 198px #FFF, 1254px 441px #FFF, 1255px 1300px #FFF, 1255px 154px #FFF, 1256px 1122px #FFF, 1257px 1284px #FFF, 1257px 976px #FFF, 1257px 1137px #FFF, 1257px 707px #FFF, 1258px 701px #FFF, 1258px 142px #FFF, 1260px 124px #FFF, 1261px 203px #FFF, 1262px 1243px #FFF, 1260px 1550px #FFF, 1262px 1032px #FFF, 1264px 834px #FFF, 1264px 221px #FFF, 1264px 818px #FFF, 1265px 444px #FFF, 1265px 650px #FFF, 1267px 1011px #FFF, 1267px 134px #FFF, 1268px 28px #FFF, 1270px 598px #FFF, 1270px 673px #FFF, 1270px 759px #FFF, 1270px 479px #FFF, 1272px 552px #FFF, 1275px 190px #FFF, 1275px 474px #FFF, 1276px 201px #FFF, 1276px 1137px #FFF, 1276px 420px #FFF, 1275px 1198px #FFF, 1277px 488px #FFF, 1278px 107px #FFF, 1279px 464px #FFF, 1281px 1096px #FFF, 1281px 289px #FFF, 1281px 408px #FFF, 1281px 285px #FFF, 1282px 953px #FFF, 1282px 496px #FFF, 1283px 210px #FFF, 1284px 1563px #FFF, 1284px 735px #FFF, 1284px 264px #FFF, 1285px 1140px #FFF, 1285px 1601px #FFF, 1285px 1260px #FFF, 1285px 976px #FFF, 1286px 635px #FFF, 1286px 364px #FFF, 1286px 451px #FFF, 1287px 541px #FFF, 1288px 117px #FFF, 1288px 1343px #FFF, 1289px 1465px #FFF, 1290px 761px #FFF, 1290px 476px #FFF, 1290px 1552px #FFF, 1290px 403px #FFF, 1291px 1343px #FFF, 1291px 302px #FFF, 1292px 1268px #FFF, 1292px 788px #FFF, 1292px 442px #FFF, 1293px 1070px #FFF, 1294px 44px #FFF, 1294px 422px #FFF, 1295px 1015px #FFF, 1295px 135px #FFF, 1296px 977px #FFF, 1297px 1106px #FFF, 1297px 774px #FFF, 1298px 1183px #FFF, 1298px 140px #FFF, 1299px 16px #FFF, 1299px 1309px #FFF, 1299px 102px #FFF, 1302px 505px #FFF, 1302px 528px #FFF, 1303px 856px #FFF, 1303px 412px #FFF, 1303px 209px #FFF, 1304px 1274px #FFF, 1306px 118px #FFF, 1308px 1149px #FFF, 1311px 97px #FFF, 1312px 1047px #FFF, 1312px 1390px #FFF, 1312px 264px #FFF, 1313px 100px #FFF, 1313px 1539px #FFF, 1313px 113px #FFF, 1314px 490px #FFF, 1316px 721px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF, 1318px 569px #FFF, 1318px 668px #FFF, 1318px 709px #FFF, 1318px 853px #FFF, 1318px 1060px #FFF, 1319px 142px #FFF, 1319px 169px #FFF, 1319px 1083px #FFF, 1319px 386px #FFF, 1320px 141px #FFF, 1320px 1505px #FFF, 1320px 606px #FFF, 1320px 50px #FFF, 1321px 118px #FFF, 1321px 1010px #FFF, 1321px 129px #FFF, 1322px 1410px #FFF, 1323px 1142px #FFF, 1323px 35px #FFF, 1324px 121px #FFF, 1324px 197px #FFF, 1324px 1289px #FFF, 1324px 986px #FFF, 1324px 750px #FFF, 1325px 342px #FFF, 1327px 187px #FFF, 1327px 435px #FFF, 1327px 1577px #FFF, 1328px 101px #FFF, 1328px 650px #FFF, 1328px 1327px #FFF, 1328px 72px #FFF, 1329px 319px #FFF, 1330px 153px #FFF, 1331px 208px #FFF, 1332px 29px #FFF, 1333px 1470px #FFF, 1333px 652px #FFF, 1333px 72px #FFF, 1333px 1171px #FFF, 1334px 351px #FFF, 1335px 248px #FFF, 1335px 611px #FFF, 1335px 447px #FFF, 1336px 272px #FFF, 1336px 1319px #FFF, 1337px 149px #FFF, 1337px 1189px #FFF, 1337px 554px #FFF, 1337px 711px #FFF, 1338px 148px #FFF, 1338px 1403px #FFF, 1339px 445px #FFF, 1339px 407px #FFF, 1340px 468px #FFF, 1340px 735px #FFF, 1340px 854px #FFF, 1341px 1513px #FFF, 1342px 1198px #FFF, 1343px 248px #FFF, 1343px 1072px #FFF, 1343px 110px #FFF, 1343px 566px #FFF, 1343px 1158px #FFF, 1344px 736px #FFF, 1345px 487px #FFF, 1345px 167px #FFF, 1345px 158px #FFF, 1347px 1544px #FFF, 1349px 1213px #FFF, 1349px 60px #FFF, 1350px 439px #FFF, 1351px 278px #FFF, 1352px 903px #FFF, 1353px 375px #FFF, 1353px 167px #FFF, 1354px 78px #FFF, 1354px 1435px #FFF, 1355px 1393px #FFF, 1355px 875px #FFF, 1356px 1078px #FFF, 1357px 151px #FFF, 1357px 348px #FFF, 1357px 1193px #FFF, 1358px 56px #FFF, 1358px 611px #FFF, 1359px 1391px #FFF, 1360px 742px #FFF, 1361px 778px #FFF, 1361px 511px #FFF, 1361px 1050px #FFF, 1362px 1205px #FFF, 1362px 1389px #FFF, 1363px 1436px #FFF, 1363px 108px #FFF, 1363px 1047px #FFF, 1363px 752px #FFF, 1364px 147px #FFF, 1364px 615px #FFF, 1365px 997px #FFF, 1366px 170px #FFF, 1366px 56px #FFF, 1366px 505px #FFF, 1366px 707px #FFF, 1367px 42px #FFF, 1367px 583px #FFF, 1367px 634px #FFF, 1368px 706px #FFF, 1368px 1380px #FFF, 1369px 573px #FFF, 1369px 740px #FFF, 1370px 51px #FFF, 1370px 1465px #FFF, 1370px 1430px #FFF, 1370px 1200px #FFF, 1371px 78px #FFF, 1371px 782px #FFF, 1371px 1464px #FFF, 1372px 1194px #FFF, 1372px 79px #FFF, 1372px 133px #FFF, 1372px 1093px #FFF, 1373px 571px #FFF, 1373px 627px #FFF, 1374px 443px #FFF, 1374px 941px #FFF, 1374px 965px #FFF, 1374px 426px #FFF, 1374px 1151px #FFF, 1374px 1365px #FFF, 1375px 438px #FFF, 1375px 265px #FFF, 1375px 1120px #FFF, 1376px 95px #FFF, 1377px 694px #FFF, 1378px 742px #FFF, 1379px 77px #FFF, 1379px 64px #FFF, 1379px 932px #FFF, 1380px 29px #FFF, 1380px 761px #FFF, 1381px 103px #FFF, 1382px 1168px #FFF, 1382px 106px #FFF, 1382px 850px #FFF, 1384px 372px #FFF, 1385px 638px #FFF, 1386px 560px #FFF, 1386px 789px #FFF, 1388px 404px #FFF, 1388px 595px #FFF, 1388px 1483px #FFF, 1388px 1045px #FFF, 1389px 187px #FFF, 1390px 384px #FFF, 1391px 451px #FFF, 1391px 1364px #FFF, 1392px 1363px #FFF, 1392px 155px #FFF, 1392px 553px #FFF, 1393px 301px #FFF, 1393px 305px #FFF, 1393px 1061px #FFF, 1394px 1213px #FFF, 1394px 119px #FFF, 1394px 1568px #FFF, 1394px 1066px #FFF, 1395px 296px #FFF, 1395px 1180px #FFF, 1396px 895px #FFF, 1397px 416px #FFF, 1398px 607px #FFF, 1398px 579px #FFF, 1399px 429px #FFF, 1401px 969px #FFF, 1402px 319px #FFF, 1403px 579px #FFF, 1403px 878px #FFF, 1404px 717px #FFF, 1404px 70px #FFF, 1404px 668px #FFF, 1405px 820px #FFF, 1405px 1488px #FFF, 1406px 1280px #FFF, 1406px 241px #FFF, 1407px 171px #FFF, 1407px 1314px #FFF, 1407px 1089px #FFF, 1408px 1098px #FFF, 1409px 386px #FFF, 1409px 1160px #FFF, 1409px 306px #FFF, 1410px 1584px #FFF, 1410px 180px #FFF, 1410px 426px #FFF, 1411px 142px #FFF, 1412px 1077px #FFF, 1413px 1540px #FFF, 1413px 1128px #FFF, 1414px 1338px #FFF, 1415px 688px #FFF, 1416px 1458px #FFF, 1418px 29px #FFF, 1418px 1309px #FFF, 1419px 1101px #FFF, 1420px 449px #FFF, 1420px 1586px #FFF, 1420px 1349px #FFF, 1420px 547px #FFF, 1420px 664px #FFF, 1421px 23px #FFF, 1421px 80px #FFF, 1421px 950px #FFF, 1422px 385px #FFF, 1423px 21px #FFF, 1423px 213px #FFF, 1423px 299px #FFF, 1423px 1212px #FFF, 1423px 952px #FFF, 1424px 1269px #FFF, 1424px 1218px #FFF, 1424px 707px #FFF, 1425px 789px #FFF, 1425px 364px #FFF, 1426px 64px #FFF, 1426px 1182px #FFF, 1428px 345px #FFF, 1429px 1094px #FFF, 1430px 477px #FFF, 1430px 424px #FFF, 1430px 1067px #FFF, 1430px 1209px #FFF, 1431px 178px #FFF, 1431px 27px #FFF, 1431px 371px #FFF, 1431px 1133px #FFF, 1432px 712px #FFF, 1433px 1147px #FFF, 1433px 52px #FFF, 1434px 72px #FFF, 1434px 77px #FFF, 1434px 154px #FFF, 1434px 1434px #FFF, 1434px 1068px #FFF, 1435px 94px #FFF, 1436px 1203px #FFF, 1436px 1238px #FFF, 1437px 24px #FFF, 1437px 1190px #FFF, 1437px 594px #FFF, 1437px 1210px #FFF, 1438px 567px #FFF, 1438px 126px #FFF, 1438px 1112px #FFF, 1438px 302px #FFF, 1439px 469px #FFF, 1439px 1013px #FFF, 1439px 81px #FFF, 1439px 100px #FFF, 1440px 16px #FFF;
//           }
//           #stars2 {
//               width: 2px;
//               height: 2px;
//               box-shadow: 651px 554px #FFF, 264px 445px #FFF, 127px 517px #FFF, 836px 475px #FFF, 1908px 155px #FFF, 479px 690px #FFF, 1052px 758px #FFF, 1466px 131px #FFF, 833px 477px #FFF, 887px 44px #FFF, 162px 61px #FFF, 1267px 335px #FFF, 1953px 801px #FFF, 935px 536px #FFF, 192px 868px #FFF, 169px 391px #FFF, 127px 632px #FFF, 1138px 194px #FFF, 307px 878px #FFF, 1752px 580px #FFF, 853px 727px #FFF, 1070px 715px #FFF, 1411px 483px #FFF, 860px 1202px #FFF, 1451px 322px #FFF, 1153px 19px #FFF, 802px 686px #FFF, 638px 651px #FFF, 1102px 177px #FFF, 747px 382px #FFF, 466px 1003px #FFF, 1352px 178px #FFF, 1142px 640px #FFF, 412px 20px #FFF, 618px 792px #FFF, 653px 1007px #FFF, 96px 595px #FFF, 930px 733px #FFF, 472px 277px #FFF, 1587px 355px #FFF, 125px 52px #FFF, 86px 87px #FFF, 159px 712px #FFF, 1066px 234px #FFF, 1116px 495px #FFF, 951px 1229px #FFF, 1051px 762px #FFF, 1100px 1245px #FFF, 1195px 755px #FFF, 416px 434px #FFF, 899px 1126px #FFF, 602px 241px #FFF, 723px 107px #FFF, 80px 909px #FFF, 457px 137px #FFF, 1186px 540px #FFF, 1334px 338px #FFF, 1839px 95px #FFF, 1529px 449px #FFF, 1254px 481px #FFF, 1543px 138px #FFF, 1881px 118px #FFF, 1424px 951px #FFF, 1954px 876px #FFF, 1885px 439px #FFF, 720px 104px #FFF, 242px 118px #FFF, 286px 396px #FFF, 1449px 560px #FFF, 1803px 192px #FFF, 1716px 121px #FFF, 1676px 56px #FFF, 1895px 226px #FFF, 1478px 601px #FFF, 675px 126px #FFF, 1610px 721px #FFF, 806px 236px #FFF, 27px 369px #FFF, 45px 183px #FFF, 471px 187px #FFF, 1849px 603px #FFF, 40px 825px #FFF, 124px 178px #FFF, 1233px 286px #FFF, 1259px 1096px #FFF, 1545px 1003px #FFF, 267px 197px #FFF, 1089px 134px #FFF, 146px 556px #FFF, 1580px 375px #FFF, 284px 364px #FFF, 347px 146px #FFF, 1456px 268px #FFF, 1576px 792px #FFF, 817px 67px #FFF, 48px 730px #FFF, 1046px 677px #FFF, 1009px 298px #FFF, 1291px 14px #FFF, 1578px 286px #FFF, 1128px 919px #FFF, 177px 675px #FFF, 1183px 699px #FFF, 343px 495px #FFF, 73px 734px #FFF, 411px 10px #FFF, 191px 416px #FFF;
//               animation: animStar 100s linear infinite;
//           }
//           #stars2:after {
//               content: '';
//               position: absolute;
//               top: 2000px;
//               width: 2px;
//               height: 2px;
//               box-shadow: 651px 554px #FFF, 264px 445px #FFF, 127px 517px #FFF, 836px 475px #FFF, 1908px 155px #FFF, 479px 690px #FFF, 1052px 758px #FFF, 1466px 131px #FFF, 833px 477px #FFF, 887px 44px #FFF, 162px 61px #FFF, 1267px 335px #FFF, 1953px 801px #FFF, 935px 536px #FFF, 192px 868px #FFF, 169px 391px #FFF, 127px 632px #FFF, 1138px 194px #FFF, 307px 878px #FFF, 1752px 580px #FFF, 853px 727px #FFF, 1070px 715px #FFF, 1411px 483px #FFF, 860px 1202px #FFF, 1451px 322px #FFF, 1153px 19px #FFF, 802px 686px #FFF, 638px 651px #FFF, 1102px 177px #FFF, 747px 382px #FFF, 466px 1003px #FFF, 1352px 178px #FFF, 1142px 640px #FFF, 412px 20px #FFF, 618px 792px #FFF, 653px 1007px #FFF, 96px 595px #FFF, 930px 733px #FFF, 472px 277px #FFF, 1587px 355px #FFF, 125px 52px #FFF, 86px 87px #FFF, 159px 712px #FFF, 1066px 234px #FFF, 1116px 495px #FFF, 951px 1229px #FFF, 1051px 762px #FFF, 1100px 1245px #FFF, 1195px 755px #FFF, 416px 434px #FFF, 899px 1126px #FFF, 602px 241px #FFF, 723px 107px #FFF, 80px 909px #FFF, 457px 137px #FFF, 1186px 540px #FFF, 1334px 338px #FFF, 1839px 95px #FFF, 1529px 449px #FFF, 1254px 481px #FFF, 1543px 138px #FFF, 1881px 118px #FFF, 1424px 951px #FFF, 1954px 876px #FFF, 1885px 439px #FFF, 720px 104px #FFF, 242px 118px #FFF, 286px 396px #FFF, 1449px 560px #FFF, 1803px 192px #FFF, 1716px 121px #FFF, 1676px 56px #FFF, 1895px 226px #FFF, 1478px 601px #FFF, 675px 126px #FFF, 1610px 721px #FFF, 806px 236px #FFF, 27px 369px #FFF, 45px 183px #FFF, 471px 187px #FFF, 1849px 603px #FFF, 40px 825px #FFF, 124px 178px #FFF, 1233px 286px #FFF, 1259px 1096px #FFF, 1545px 1003px #FFF, 267px 197px #FFF, 1089px 134px #FFF, 146px 556px #FFF, 1580px 375px #FFF, 284px 364px #FFF, 347px 146px #FFF, 1456px 268px #FFF, 1576px 792px #FFF, 817px 67px #FFF, 48px 730px #FFF, 1046px 677px #FFF, 1009px 298px #FFF, 1291px 14px #FFF, 1578px 286px #FFF, 1128px 919px #FFF, 177px 675px #FFF, 1183px 699px #FFF, 343px 495px #FFF, 73px 734px #FFF, 411px 10px #FFF, 191px 416px #FFF;
//           }
//           #stars3 {
//               width: 3px;
//               height: 3px;
//               box-shadow: 1128px 236px #FFF, 179px 69px #FFF, 1514px 510px #FFF, 745px 561px #FFF, 613px 965px #FFF, 608px 1540px #FFF, 1957px 1312px #FFF, 1914px 758px #FFF, 836px 1211px #FFF, 1762px 147px #FFF, 186px 1564px #FFF, 1010px 1466px #FFF, 1420px 442px #FFF, 1497px 1330px #FFF, 386px 1491px #FFF, 199px 163px #FFF, 237px 344px #FFF, 763px 558px #FFF, 935px 175px #FFF, 1751px 784px #FFF, 1395px 1582px #FFF, 111px 522px #FFF, 447px 362px #FFF, 23px 619px #FFF, 1589px 1426px #FFF, 531px 277px #FFF, 747px 191px #FFF, 195px 1088px #FFF, 1557px 432px #FFF, 1676px 879px #FFF, 1992px 541px #FFF, 1023px 606px #FFF, 1230px 307px #FFF, 277px 155px #FFF, 791px 995px #FFF, 505px 514px #FFF, 321px 679px #FFF, 788px 1079px #FFF, 1175px 361px #FFF, 1580px 214px #FFF, 1335px 140px #FFF, 423px 507px #FFF, 1857px 586px #FFF, 397px 220px #FFF, 419px 343px #FFF;
//               animation: animStar 150s linear infinite;
//           }
//           #stars3:after {
//               content: '';
//               position: absolute;
//               top: 2000px;
//               width: 3px;
//               height: 3px;
//               box-shadow: 1128px 236px #FFF, 179px 69px #FFF, 1514px 510px #FFF, 745px 561px #FFF, 613px 965px #FFF, 608px 1540px #FFF, 1957px 1312px #FFF, 1914px 758px #FFF, 836px 1211px #FFF, 1762px 147px #FFF, 186px 1564px #FFF, 1010px 1466px #FFF, 1420px 442px #FFF, 1497px 1330px #FFF, 386px 1491px #FFF, 199px 163px #FFF, 237px 344px #FFF, 763px 558px #FFF, 935px 175px #FFF, 1751px 784px #FFF, 1395px 1582px #FFF, 111px 522px #FFF, 447px 362px #FFF, 23px 619px #FFF, 1589px 1426px #FFF, 531px 277px #FFF, 747px 191px #FFF, 195px 1088px #FFF, 1557px 432px #FFF, 1676px 879px #FFF, 1992px 541px #FFF, 1023px 606px #FFF, 1230px 307px #FFF, 277px 155px #FFF, 791px 995px #FFF, 505px 514px #FFF, 321px 679px #FFF, 788px 1079px #FFF, 1175px 361px #FFF, 1580px 214px #FFF, 1335px 140px #FFF, 423px 507px #FFF, 1857px 586px #FFF, 397px 220px #FFF, 419px 343px #FFF;
//           }
//           @keyframes animStar {
//               from { transform: translateY(0); }
//               to { transform: translateY(-2000px); }
//           }
//           /* Header styling */
//           header {
//               position: relative;
//               padding: 20px;
//               background: rgba(10, 5, 30, 0.7);
//               backdrop-filter: blur(5px);
//               display: flex;
//               align-items: center;
//               justify-content: space-between;
//               z-index: 10;
//           }
//           .avatar {
//               width: 60px;
//               height: 60px;
//               border-radius: 50%;
//               background: #eee;
//               flex-shrink: 0;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               margin-right: 15px;
//           }
//           .avatar span {
//               font-size: 2em;
//               color: #555;
//           }
//           .username-input {
//               flex-grow: 1;
//           }
//           .username-input input {
//               width: 100%;
//               padding: 10px 15px;
//               font-size: 1.2em;
//               border: none;
//               border-radius: 8px;
//               background: rgba(255,255,255,0.1);
//               color: #fff;
//           }
//           .username-input input::placeholder {
//               color: #bbb;
//           }
//           /* Main content */
//           main {
//               position: relative;
//               padding: 40px 20px;
//               z-index: 5;
//           }
//           .cards {
//               display: flex;
//               justify-content: center;
//               flex-direction: column;
//               gap: 20px;
//               max-width: 1200px;
//               margin: 0 auto;
//           }
//           .card {
//               background: rgba(0,0,0,0.5);
//               border: 1px solid rgba(255,255,255,0.1);
//               border-radius: 15px;
//               padding: 20px;
//               min-height: 220px;
//               box-shadow: 0 4px 20px rgba(0,0,0,0.5);
//               opacity: 0;
//               transform: translateY(20px) scale(0.95);
//               animation: fadeInUp 0.8s forwards ease-out;
//           }
//           .card:nth-child(1) { animation-delay: 0.3s; }
//           .card:nth-child(2) { animation-delay: 0.6s; }
//           .card:nth-child(3) { animation-delay: 0.9s; }
//           .card:nth-child(4) { animation-delay: 1.2s; }
//           @keyframes fadeInUp {
//               to { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           .card h2 {
//               margin-top: 0;
//               font-family: 'Playfair Display', serif;
//               font-size: 1.5em;
//               margin-bottom: 10px;
//               position: relative;
//               padding-bottom: 5px;
//           }
//           .card h2::after {
//               content: '';
//               position: absolute;
//               left: 0;
//               bottom: 0;
//               height: 3px;
//               width: 50px;
//               background: #f9d423;
//               border-radius: 2px;
//           }
//           .card p {
//               line-height: 1.6;
//               color: #ddd;
//           }
//           /* Footer styling */
//           footer {
//               text-align: center;
//               font-size: 0.9em;
//               color: #ccc;
//               padding: 20px;
//               background: rgba(0, 0, 0, 0.5);
//           }
//           /* Responsive */
//           @media (max-width: 768px) {
//               .cards { flex-direction: column; align-items: center; }
//               .card { width: 90%; }
//               header {
//                   flex-direction: column;
//                   align-items: flex-start;
//               }
//               .avatar {
//                   margin-bottom: 10px;
//               }
//           }
//       </style>
//   </head>
//   <body>
//       <!-- Celestial background layers -->
//       <div id="stars"></div>
//       <div id="stars2"></div>
//       <div id="stars3"></div>
  
//       <!-- Header with avatar and name input -->
//       <!--<header>-->
//           <!--<div class="avatar"><!-- Avatar icon or placeholder; Next.js can replace with user avatar <span>👤</span></div>-->
//       <!--    <div class="username-input">-->
//               <!-- Placeholder: Next.js can populate user's name here -->
//       <!--        <input type="text" placeholder="Enter your name" />-->
//       <!--    </div>-->
//       <!--</header>-->
  
//       <main>
//           <!-- Example reading object (Next.js data) -->
//           <!-- const reading = { name: 'Alice', predictions: { love: '', career: '', health: '', spirituality: '' } }; -->
//           <div class="cards">
//               <div class="card">
//                   <h2>Love & Relationships</h2>
//                   <p>${report?.love}</p>
//               </div>
//               <div class="card">
//                   <h2>Career & Finances</h2>
//                   <p>${report?.career}</p>
//               </div>
//               <div class="card">
//                   <h2>Health & Wellness</h2>
//                   <p>${report?.health}</p>
//               </div>
//               <div class="card">
//                   <h2>Life Purpose</h2>
//                   <p>${report?.future}</p>
//               </div>
//           </div>
//       </main>
  
//       <footer>
//           Powered by Mystical AI
//       </footer>
//   </body>
//   </html>
//   `



//   const va1=`<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Palm Reading Report - Dynamic Pages</title>
// <!-- Google Fonts -->
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

// <style>
//   /* --- Basic Reset --- */
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }

//   body {
//     color: #fff;
//     font-family: 'Roboto', sans-serif;
//     padding: 20 0;
//     margin: 120 0;
//     /* Prevent default body scrolling if desired for cleaner preview */
//     /* overflow: hidden; */
//   }

//   /* --- Paged Media Setup --- */
//   @page {
//     size: A4;
//     margin: 0;
//   }

//   /* --- Page Container --- */
//   .page {
//     width: 210mm;
//     height: 297mm;
//     /* Ensure it starts a new page when printed */
//     page-break-after: always;
//     /* Ensure it starts a new page in print preview if needed */
//     break-after: page;
//     position: relative;
//     background: radial-gradient(circle at bottom, #FFFACD, #E47025);
//     overflow: hidden;
//     margin: 0 auto;
//     /* Optional: Add a subtle shadow for screen preview */
//     /* box-shadow: 0 0 10px rgba(0,0,0,0.5); */
//   }

//   /* --- Celestial star background layers (per page) --- */
//   /* Base layer */
//   .page::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     width: 2px;
//     height: 2px;
//     /* IMPORTANT: Replace the abbreviated list below with your FULL list from #stars */
//     box-shadow: 1128px 236px #FFF, 179px 69px #FFF, 1514px 510px #FFF, 745px 561px #FFF, 613px 965px #FFF, 608px 1540px #FFF, 1957px 1312px #FFF, 1914px 758px #FFF, 836px 1211px #FFF, 1762px 147px #FFF, 186px 1564px #FFF, 1010px 1466px #FFF, 1420px 442px #FFF, 1497px 1330px #FFF, 386px 1491px #FFF, 199px 163px #FFF, 237px 344px #FFF, 763px 558px #FFF, 935px 175px #FFF, 1751px 784px #FFF, 1395px 1582px #FFF, 111px 522px #FFF, 447px 362px #FFF, 23px 619px #FFF, 1589px 1426px #FFF, 531px 277px #FFF, 747px 191px #FFF, 195px 1088px #FFF, 1557px 432px #FFF, 1676px 879px #FFF, 1992px 541px #FFF, 1023px 606px #FFF, 1230px 307px #FFF, 277px 155px #FFF, 791px 995px #FFF, 505px 514px #FFF, 321px 679px #FFF, 788px 1079px #FFF, 1175px 361px #FFF, 1580px 214px #FFF, 1335px 140px #FFF, 423px 507px #FFF, 1857px 586px #FFF, 397px 220px #FFF, 419px 343px #FFF, 651px 554px #FFF, 264px 445px #FFF, 127px 517px #FFF, 836px 475px #FFF, 1908px 155px #FFF, 479px 690px #FFF, 1052px 758px #FFF, 1466px 131px #FFF, 833px 477px #FFF, 887px 44px #FFF, 162px 61px #FFF, 1267px 335px #FFF, 1953px 801px #FFF, 935px 536px #FFF, 192px 868px #FFF, 169px 391px #FFF, 127px 632px #FFF, 1138px 194px #FFF, 307px 878px #FFF, 1752px 580px #FFF, 853px 727px #FFF, 1070px 715px #FFF, 1411px 483px #FFF, 860px 1202px #FFF, 1451px 322px #FFF, 1153px 19px #FFF, 802px 686px #FFF, 638px 651px #FFF, 1102px 177px #FFF, 747px 382px #FFF, 466px 1003px #FFF, 1352px 178px #FFF, 40px 825px #FFF, 124px 178px #FFF, 1233px 286px #FFF, 1259px 1096px #FFF, 1545px 1003px #FFF, 267px 197px #FFF, 1089px 134px #FFF, 146px 556px #FFF, 1580px 375px #FFF, 284px 364px #FFF, 347px 146px #FFF, 1456px 268px #FFF, 1576px 792px #FFF, 817px 67px #FFF, 48px 730px #FFF, 1046px 677px #FFF, 1009px 298px #FFF, 1291px 14px #FFF, 1578px 286px #FFF, 1128px 919px #FFF, 177px 675px #FFF, 1183px 699px #FFF, 343px 495px #FFF, 73px 734px #FFF, 411px 10px #FFF, 191px 416px #FFF, 1309px 228px #FFF, 51px 563px #FFF, 501px 457px #FFF, 285px 209px #FFF, 1385px 1116px #FFF, 178px 128px #FFF, 1953px 74px #FFF, 751px 487px #FFF, 1230px 358px #FFF, 223px 486px #FFF, 1832px 143px #FFF, 1555px 803px #FFF, 936px 1446px #FFF, 1217px 1233px #FFF, 218px 361px #FFF, 1698px 516px #FFF, 1668px 1055px #FFF, 908px 1200px #FFF, 418px 551px #FFF, 1308px 1105px #FFF, 1196px 405px #FFF, 714px 879px #FFF, 1438px 731px #FFF, 1674px 554px #FFF, 945px 1552px #FFF, 1754px 736px #FFF, 680px 302px #FFF, 1463px 1279px #FFF, 1903px 993px #FFF, 1723px 1518px #FFF, 164px 1359px #FFF, 68px 1341px #FFF, 1295px 1015px #FFF, 1295px 135px #FFF, 1296px 977px #FFF, 1297px 1106px #FFF, 1297px 774px #FFF, 1298px 1183px #FFF, 1298px 140px #FFF, 1299px 16px #FFF, 1299px 1309px #FFF, 1299px 102px #FFF, 1302px 505px #FFF, 1302px 528px #FFF, 1303px 856px #FFF, 1303px 412px #FFF, 1303px 209px #FFF, 1304px 1274px #FFF, 1306px 118px #FFF, 1308px 1149px #FFF, 1311px 97px #FFF, 1312px 1047px #FFF, 1312px 1390px #FFF, 1312px 264px #FFF, 1313px 100px #FFF, 1313px 1539px #FFF, 1313px 113px #FFF, 1314px 490px #FFF, 1316px 721px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF, 1123px 1129px #FFF, 1126px 1004px #FFF, 1128px 985px #FFF, 1130px 118px #FFF, 1131px 156px #FFF, 1131px 1608px #FFF, 1136px 400px #FFF, 1139px 1196px #FFF, 1137px 1025px #FFF, 1138px 261px #FFF, 1139px 178px #FFF, 1143px 465px #FFF, 1146px 194px #FFF, 1151px 1026px #FFF, 1152px 140px #FFF, 1155px 418px #FFF, 1156px 156px #FFF, 1155px 583px #FFF, 1154px 547px #FFF, 1153px 1314px #FFF, 1155px 1134px #FFF, 1154px 499px #FFF, 1152px 721px #FFF, 1153px 1169px #FFF, 1155px 108px #FFF, 1155px 117px #FFF, 1155px 437px #FFF, 1156px 1632px #FFF, 1159px 1058px #FFF, 1159px 80px #FFF, 1160px 153px #FFF;
//     animation: animStar 50s linear infinite;
//     z-index: 1;
//   }

//   /* Additional Layer 2 */
//   .page .stars-layer-2 {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     width: 2px;
//     height: 2px;
//     /* IMPORTANT: Replace the abbreviated list below with your FULL list from #stars2 */
//     box-shadow: 651px 554px #FFF, 264px 445px #FFF, 127px 517px #FFF, 836px 475px #FFF, 1908px 155px #FFF, 479px 690px #FFF, 1052px 758px #FFF, 1466px 131px #FFF, 833px 477px #FFF, 887px 44px #FFF, 162px 61px #FFF, 1267px 335px #FFF, 1953px 801px #FFF, 935px 536px #FFF, 192px 868px #FFF, 169px 391px #FFF, 127px 632px #FFF, 1138px 194px #FFF, 307px 878px #FFF, 1752px 580px #FFF, 853px 727px #FFF, 1070px 715px #FFF, 1411px 483px #FFF, 860px 1202px #FFF, 1451px 322px #FFF, 1153px 19px #FFF, 802px 686px #FFF, 638px 651px #FFF, 1102px 177px #FFF, 747px 382px #FFF, 466px 1003px #FFF, 1352px 178px #FFF, 40px 825px #FFF, 124px 178px #FFF, 1233px 286px #FFF, 1259px 1096px #FFF, 1545px 1003px #FFF, 267px 197px #FFF, 1089px 134px #FFF, 146px 556px #FFF, 1580px 375px #FFF, 284px 364px #FFF, 347px 146px #FFF, 1456px 268px #FFF, 1576px 792px #FFF, 817px 67px #FFF, 48px 730px #FFF, 1046px 677px #FFF, 1009px 298px #FFF, 1291px 14px #FFF, 1578px 286px #FFF, 1128px 919px #FFF, 177px 675px #FFF, 1183px 699px #FFF, 343px 495px #FFF, 73px 734px #FFF, 411px 10px #FFF, 191px 416px #FFF, 1309px 228px #FFF, 51px 563px #FFF, 501px 457px #FFF, 285px 209px #FFF, 1385px 1116px #FFF, 178px 128px #FFF, 1953px 74px #FFF, 751px 487px #FFF, 1230px 358px #FFF, 223px 486px #FFF, 1832px 143px #FFF, 1555px 803px #FFF, 936px 1446px #FFF, 1217px 1233px #FFF, 218px 361px #FFF, 1698px 516px #FFF, 1668px 1055px #FFF, 908px 1200px #FFF, 418px 551px #FFF, 1308px 1105px #FFF, 1196px 405px #FFF, 714px 879px #FFF, 1438px 731px #FFF, 1674px 554px #FFF, 945px 1552px #FFF, 1754px 736px #FFF, 680px 302px #FFF, 1463px 1279px #FFF, 1903px 993px #FFF, 1723px 1518px #FFF, 164px 1359px #FFF, 68px 1341px #FFF, 1295px 1015px #FFF, 1295px 135px #FFF, 1296px 977px #FFF, 1297px 1106px #FFF, 1297px 774px #FFF, 1298px 1183px #FFF, 1298px 140px #FFF, 1299px 16px #FFF, 1299px 1309px #FFF, 1299px 102px #FFF, 1302px 505px #FFF, 1302px 528px #FFF, 1303px 856px #FFF, 1303px 412px #FFF, 1303px 209px #FFF, 1304px 1274px #FFF, 1306px 118px #FFF, 1308px 1149px #FFF, 1311px 97px #FFF, 1312px 1047px #FFF, 1312px 1390px #FFF, 1312px 264px #FFF, 1313px 100px #FFF, 1313px 1539px #FFF, 1313px 113px #FFF, 1314px 490px #FFF, 1316px 721px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF;
//     animation: animStar 100s linear infinite;
//     z-index: 2;
//   }

//   /* Additional Layer 3 */
//   .page .stars-layer-3 {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     width: 3px;
//     height: 3px;
//     /* IMPORTANT: Replace the abbreviated list below with your FULL list from #stars3 */
//     box-shadow: 1309px 228px #FFF, 51px 563px #FFF, 501px 457px #FFF, 285px 209px #FFF, 1385px 1116px #FFF, 178px 128px #FFF, 1953px 74px #FFF, 751px 487px #FFF, 1230px 358px #FFF, 223px 486px #FFF, 1832px 143px #FFF, 1555px 803px #FFF, 936px 1446px #FFF, 1217px 1233px #FFF, 218px 361px #FFF, 1698px 516px #FFF, 1668px 1055px #FFF, 908px 1200px #FFF, 418px 551px #FFF, 1308px 1105px #FFF, 1196px 405px #FFF, 714px 879px #FFF, 1438px 731px #FFF, 1674px 554px #FFF, 945px 1552px #FFF, 1754px 736px #FFF, 680px 302px #FFF, 1463px 1279px #FFF, 1903px 993px #FFF, 1723px 1518px #FFF, 164px 1359px #FFF, 68px 1341px #FFF, 1295px 1015px #FFF, 1295px 135px #FFF, 1296px 977px #FFF, 1297px 1106px #FFF, 1297px 774px #FFF, 1298px 1183px #FFF, 1298px 140px #FFF, 1299px 16px #FFF, 1299px 1309px #FFF, 1299px 102px #FFF, 1302px 505px #FFF, 1302px 528px #FFF, 1303px 856px #FFF, 1303px 412px #FFF, 1303px 209px #FFF, 1304px 1274px #FFF, 1306px 118px #FFF, 1308px 1149px #FFF, 1311px 97px #FFF, 1312px 1047px #FFF, 1312px 1390px #FFF, 1312px 264px #FFF, 1313px 100px #FFF, 1313px 1539px #FFF, 1313px 113px #FFF, 1314px 490px #FFF, 1316px 721px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF;
//     animation: animStar 150s linear infinite;
//     z-index: 3;
//   }

//   /* --- Star Animation Keyframes --- */
//   @keyframes animStar {
//     from { transform: translateY(0); }
//     to { transform: translateY(-2000px); }
//   }

//   /* --- Content Styling --- */
//   .page-content {
//     position: relative;
//     z-index: 5;
//     padding: 40px 20px;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//   }

//   /* Header */
//   .page-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 30px; /* This margin is included in fixed height calculation */
//     z-index: 10;
//     flex-shrink: 0; /* Prevent header from shrinking */
//   }

//   .avatar {
//     width: 60px;
//     height: 60px;
//     border-radius: 50%;
//     background: #eee;
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 15px;
//   }

//   .avatar span {
//     font-size: 2em;
//     color: #555;
//   }

//   .username-input {
//     flex-grow: 1;
//   }

//   .username-input input {
//     width: 100%;
//     padding: 10px 15px;
//     font-size: 1.2em;
//     border: none;
//     border-radius: 8px;
//     background: rgba(255, 255, 255, 0.1);
//     color: #fff;
//   }

//   .username-input input::placeholder {
//     color: #bbb;
//   }

//   /* Main Content Area */
//   .cards-container {
//     flex-grow: 1;
//     display: flex;
//     flex-direction: column;
//     gap: 20px; /* This gap is included in height calculation */
//     width: 100%;
//     /* overflow: hidden; */ /* Prevent internal scrolling */
//   }

//   .card {
//     /*background: rgba(0, 0, 0, 0.1);*/
//     border: 1px solid rgba(255, 255, 255, 0.5);
//     border-radius: 15px;
//     padding: 20px;
//     /*box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);*/
//     /* Allow cards to shrink/grow within flex container */
//     flex-shrink: 0;
//   }

//   .card h2 {
//     margin-top: 0;
//     font-family: 'Playfair Display', serif;
//     font-size: 1.5em;
//     margin-bottom: 10px;
//     position: relative;
//     padding-bottom: 5px;
//   }

//   .card h2::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     height: 3px;
//     width: 50px;
//     background: #f9d423;
//     border-radius: 2px;
//   }

//   .card p {
//     line-height: 1.6;
//     color: #2A2A2A;
//   }

//   /* --- Hidden Measurement Container --- */
//   #measurer {
//     position: absolute;
//     top: -9999px;
//     left: -9999px;
//     width: calc(210mm - 40px); /* Match page content width (page width - padding) */
//     visibility: hidden;
//     /* Ensure it uses the same styles as cards-container items for accurate measurement */
//     background: rgba(0, 0, 0, 0.5);
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     border-radius: 15px;
//     padding: 20px;
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
//   }

//   /* --- Responsive --- */
//   @media print {
//     body {
//       background: none;
//     }
//     .page {
//        page-break-after: always;
//        break-after: page;
//        margin: 0;
//        box-shadow: none;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     .page {
//         width: 100%;
//         height: auto;
//         min-height: 100vh;
//     }
//     .cards-container {
//         align-items: center;
//     }
//     .card {
//         width: 90%;
//     }
//     .page-header {
//         flex-direction: column;
//         align-items: flex-start;
//     }
//     .avatar {
//         margin-bottom: 10px;
//     }
//   }
// </style>
// </head>
// <body>

// <!-- Hidden element for measuring content height -->
// <div id="measurer"></div>

// <script>
//   // --- Configuration ---
//   const PAGE_WIDTH_MM = 210;
//   const PAGE_HEIGHT_MM = 280;
//   const PAGE_DPI = 96; // Standard screen DPI, often used for CSS pixels <-> mm conversion
//   const PX_PER_MM = PAGE_DPI / 25.4;
//   const PAGE_HEIGHT_PX = PAGE_HEIGHT_MM * PX_PER_MM; // Approx 1123px for 96dpi
//   const PAGE_WIDTH_PX = PAGE_WIDTH_MM * PX_PER_MM;   // Approx 794px for 96dpi

//   // --- Calculate Fixed Element Heights ---
//   // These heights are fixed and must be accounted for on every page.
//   // They include padding, margins, etc.
//   // Measured or calculated based on CSS.
//   const HEADER_HEIGHT_PX = 60 + 30; // Avatar height (60px) + Margin bottom (30px)
//   const FOOTER_HEIGHT_PX = 20 + 20 + 20; // Padding top (20px) + Padding bottom (20px) + Font height approx (20px)
//   const CARD_GAP_PX = 20; // Gap between cards in .cards-container

//   const availableContentHeight = PAGE_HEIGHT_PX - HEADER_HEIGHT_PX - FOOTER_HEIGHT_PX;

//   // --- Sample Dynamic Content ---
//   // This represents the data you would have, perhaps from an API or template engine.
//   // Each item will be placed in its own .card
//   const reportContent = [
//     { title: "Love & Relationships", text: ${report?.love} }
//     // Add more content blocks as needed
//   ];

//   // --- DOM Elements ---
//   const body = document.body;
//   const measurer = document.getElementById('measurer');

//   // --- State ---
//   let currentPage = null;
//   let currentCardsContainer = null;
//   let currentHeight = 0; // Tracks cumulative height of content on the current page
//   let pageNumber = 1;

//   // --- Functions ---
//   function createNewPage() {
//     const page = document.createElement('div');
//     page.className = 'page';

//     // Create star layers
//     const starsLayer2 = document.createElement('div');
//     starsLayer2.className = 'stars-layer-2';
//     const starsLayer3 = document.createElement('div');
//     starsLayer3.className = 'stars-layer-3';

//     // Create content structure
//     const pageContent = document.createElement('div');
//     pageContent.className = 'page-content';



//     const cardsContainer = document.createElement('main');
//     cardsContainer.className = 'cards-container';

   

//     // Assemble page
//     pageContent.appendChild(cardsContainer);
//     page.appendChild(starsLayer2);
//     page.appendChild(starsLayer3);
//     page.appendChild(pageContent);

//     body.appendChild(page);

//     // Update state
//     currentPage = page;
//     currentCardsContainer = cardsContainer;
//     currentHeight = 0; // Reset height counter for new page
//     pageNumber++;

//     return page;
//   }
//   function measureContentHeight(title, text) {
//     measurer.innerHTML = ''; 
//     const cardTitle = document.createElement('h2');
//     cardTitle.textContent = title;
//     const cardText = document.createElement('p');
//     cardText.textContent = text;

//     measurer.appendChild(cardTitle);
//     measurer.appendChild(cardText);

//     const rect = measurer.getBoundingClientRect();
//     const height = rect.height;

//     return height;
//   }

//   function addContentToPage(contentItem) {
//     const { title, text } = contentItem;
//     const contentHeight = measureContentHeight(title, text);
//     const heightNeeded = contentHeight + (currentCardsContainer.children.length > 0 ? CARD_GAP_PX : 0);
//     if (currentHeight + heightNeeded > availableContentHeight) {
//       console.log(" -> Content does not fit. Creating new page.");
//       createNewPage(); 
//     }
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = 
//       <h2>${title}</h2>
//       <p>${text}</p>
//     ;

//     currentCardsContainer.appendChild(card);
//     currentHeight += heightNeeded;
//   }
//   createNewPage();
//   reportContent.forEach(item => {
//     addContentToPage(item);
//   });

//   console.log("--- Pagination Complete ---");
// </script>

// </body>
// </html>`
//     return <p dangerouslySetInnerHTML={{ __html: va1 }}></p>
// }

// export default ReportPage

// import { useStore } from '@/store'; // Adjust your actual store import path accordingly

const FULL_STARS_1_BOX_SHADOW = "1128px 236px #FFF, 179px 69px #FFF, 1514px 510px #FFF, 1155px 117px #FFF, 1155px 437px #FFF, 1156px 1632px #FFF, 1159px 1058px #FFF, 1159px 80px #FFF, 1160px 153px #FFF";
const FULL_STARS_2_BOX_SHADOW = "651px 554px #FFF, 264px 445px #FFF, 127px 517px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF";
const FULL_STARS_3_BOX_SHADOW = "1309px 228px #FFF, 51px 563px #FFF, 501px 457px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF";

// const PAGE_WIDTH_MM = 210;
const PAGE_HEIGHT_MM = 297;
const PAGE_DPI = 96;
const PX_PER_MM = PAGE_DPI / 25.4;
const PAGE_HEIGHT_PX = PAGE_HEIGHT_MM * PX_PER_MM;
// const PAGE_WIDTH_PX = PAGE_WIDTH_MM * PX_PER_MM;

const HEADER_HEIGHT_PX = 90;
const FOOTER_HEIGHT_PX = 60;
const CARD_MARGIN_BOTTOM_PX = 20;
const PARAGRAPH_GAP_PX = 15;
const SAFETY_MARGIN_PX = 25;
const availableContentHeight = PAGE_HEIGHT_PX - HEADER_HEIGHT_PX - FOOTER_HEIGHT_PX - SAFETY_MARGIN_PX;

const sectionTitles: Record<string, string> = {
  love: "Love & Relationships",
  career: "Career & Finances",
  health: "Health & Wellness",
  life_purpose: "Life Purpose",
  additional_insights: "Additional Insights",
  lucky_numbers: "Lucky Numbers",
  compatibility: "Compatibility",
  travel: "Travel Forecast",
  past_influences: "Deep Dive: Past Influences",
  future_potential: "Deep Dive: Future Potential"
};
const landingPageHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Cosmic Palm Reading</title>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --primary-gradient-start: #ff8c00; /* Orange */
    --primary-gradient-end: #f9d423;   /* Yellow */
    --page-background: radial-gradient(circle at bottom, #FFFACD, #E47025);
    --card-background: rgba(0, 0, 0, 0.6);
    --text-primary: #ffffff;
    --text-secondary: #2a2a2a;
    --accent-color: #f9d423; /* Gold */
    --border-color: rgba(255, 255, 255, 0.1);
    --shadow-color: rgba(0, 0, 0, 0.6);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  /* --- Celestial star background (simplified for landing) --- */
  #stars-landing, #stars2-landing {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
  }

  #stars-landing {
    width: 1px;
    height: 1px;
    /* IMPORTANT: Replace with FULL #stars coordinates */
    box-shadow: 1128px 236px #FFF, 179px 69px #FFF, 1514px 510px #FFF, 745px 561px #FFF, 613px 965px #FFF, 608px 1540px #FFF, 1957px 1312px #FFF, 1914px 758px #FFF, 836px 1211px #FFF, 1762px 147px #FFF, 186px 1564px #FFF, 1010px 1466px #FFF, 1420px 442px #FFF, 1497px 1330px #FFF, 386px 1491px #FFF, 199px 163px #FFF, 237px 344px #FFF, 763px 558px #FFF, 935px 175px #FFF, 1751px 784px #FFF, 1395px 1582px #FFF, 111px 522px #FFF, 447px 362px #FFF, 23px 619px #FFF, 1589px 1426px #FFF, 531px 277px #FFF, 747px 191px #FFF, 195px 1088px #FFF, 1557px 432px #FFF, 1676px 879px #FFF, 1992px 541px #FFF, 1023px 606px #FFF, 1230px 307px #FFF, 277px 155px #FFF, 791px 995px #FFF, 505px 514px #FFF, 321px 679px #FFF, 788px 1079px #FFF, 1175px 361px #FFF, 1580px 214px #FFF, 1335px 140px #FFF, 423px 507px #FFF, 1857px 586px #FFF, 397px 220px #FFF, 419px 343px #FFF, 651px 554px #FFF, 264px 445px #FFF, 127px 517px #FFF, 836px 475px #FFF, 1908px 155px #FFF, 479px 690px #FFF, 1052px 758px #FFF, 1466px 131px #FFF, 833px 477px #FFF, 887px 44px #FFF, 162px 61px #FFF, 1267px 335px #FFF, 1953px 801px #FFF, 935px 536px #FFF, 192px 868px #FFF, 169px 391px #FFF, 127px 632px #FFF, 1138px 194px #FFF, 307px 878px #FFF, 1752px 580px #FFF, 853px 727px #FFF, 1070px 715px #FFF, 1411px 483px #FFF, 860px 1202px #FFF, 1451px 322px #FFF, 1153px 19px #FFF, 802px 686px #FFF, 638px 651px #FFF, 1102px 177px #FFF, 747px 382px #FFF, 466px 1003px #FFF, 1352px 178px #FFF, 40px 825px #FFF, 124px 178px #FFF, 1233px 286px #FFF, 1259px 1096px #FFF, 1545px 1003px #FFF, 267px 197px #FFF, 1089px 134px #FFF, 146px 556px #FFF, 1580px 375px #FFF, 284px 364px #FFF, 347px 146px #FFF, 1456px 268px #FFF, 1576px 792px #FFF, 817px 67px #FFF, 48px 730px #FFF, 1046px 677px #FFF, 1009px 298px #FFF, 1291px 14px #FFF, 1578px 286px #FFF, 1128px 919px #FFF, 177px 675px #FFF, 1183px 699px #FFF, 343px 495px #FFF, 73px 734px #FFF, 411px 10px #FFF, 191px 416px #FFF, 1309px 228px #FFF, 51px 563px #FFF, 501px 457px #FFF, 285px 209px #FFF, 1385px 1116px #FFF, 178px 128px #FFF, 1953px 74px #FFF, 751px 487px #FFF, 1230px 358px #FFF, 223px 486px #FFF, 1832px 143px #FFF, 1555px 803px #FFF, 936px 1446px #FFF, 1217px 1233px #FFF, 218px 361px #FFF, 1698px 516px #FFF, 1668px 1055px #FFF, 908px 1200px #FFF, 418px 551px #FFF, 1308px 1105px #FFF, 1196px 405px #FFF, 714px 879px #FFF, 1438px 731px #FFF, 1674px 554px #FFF, 945px 1552px #FFF, 1754px 736px #FFF, 680px 302px #FFF, 1463px 1279px #FFF, 1903px 993px #FFF, 1723px 1518px #FFF, 164px 1359px #FFF, 68px 1341px #FFF, 1295px 1015px #FFF, 1295px 135px #FFF, 1296px 977px #FFF, 1297px 1106px #FFF, 1297px 774px #FFF, 1298px 1183px #FFF, 1298px 140px #FFF, 1299px 16px #FFF, 1299px 1309px #FFF, 1299px 102px #FFF, 1302px 505px #FFF, 1302px 528px #FFF, 1303px 856px #FFF, 1303px 412px #FFF, 1303px 209px #FFF, 1304px 1274px #FFF, 1306px 118px #FFF, 1308px 1149px #FFF, 1311px 97px #FFF, 1312px 1047px #FFF, 1312px 1390px #FFF, 1312px 264px #FFF, 1313px 100px #FFF, 1313px 1539px #FFF, 1313px 113px #FFF, 1314px 490px #FFF, 1316px 721px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF, 1123px 1129px #FFF, 1126px 1004px #FFF, 1128px 985px #FFF, 1130px 118px #FFF, 1131px 156px #FFF, 1131px 1608px #FFF, 1136px 400px #FFF, 1139px 1196px #FFF, 1137px 1025px #FFF, 1138px 261px #FFF, 1139px 178px #FFF, 1143px 465px #FFF, 1146px 194px #FFF, 1151px 1026px #FFF, 1152px 140px #FFF, 1155px 418px #FFF, 1156px 156px #FFF, 1155px 583px #FFF, 1154px 547px #FFF, 1153px 1314px #FFF, 1155px 1134px #FFF, 1154px 499px #FFF, 1152px 721px #FFF, 1153px 1169px #FFF, 1155px 108px #FFF, 1155px 117px #FFF, 1155px 437px #FFF, 1156px 1632px #FFF, 1159px 1058px #FFF, 1159px 80px #FFF, 1160px 153px #FFF;
    animation: animStar 50s linear infinite;
    opacity: 0.8;
    z-index: 1;
  }

  #stars2-landing {
    width: 2px;
    height: 2px;
    /* IMPORTANT: Replace with FULL #stars2 coordinates */
    box-shadow: 651px 554px #FFF, 264px 445px #FFF, 127px 517px #FFF, 836px 475px #FFF, 1908px 155px #FFF, 479px 690px #FFF, 1052px 758px #FFF, 1466px 131px #FFF, 833px 477px #FFF, 887px 44px #FFF, 162px 61px #FFF, 1267px 335px #FFF, 1953px 801px #FFF, 935px 536px #FFF, 192px 868px #FFF, 169px 391px #FFF, 127px 632px #FFF, 1138px 194px #FFF, 307px 878px #FFF, 1752px 580px #FFF, 853px 727px #FFF, 1070px 715px #FFF, 1411px 483px #FFF, 860px 1202px #FFF, 1451px 322px #FFF, 1153px 19px #FFF, 802px 686px #FFF, 638px 651px #FFF, 1102px 177px #FFF, 747px 382px #FFF, 466px 1003px #FFF, 1352px 178px #FFF, 40px 825px #FFF, 124px 178px #FFF, 1233px 286px #FFF, 1259px 1096px #FFF, 1545px 1003px #FFF, 267px 197px #FFF, 1089px 134px #FFF, 146px 556px #FFF, 1580px 375px #FFF, 284px 364px #FFF, 347px 146px #FFF, 1456px 268px #FFF, 1576px 792px #FFF, 817px 67px #FFF, 48px 730px #FFF, 1046px 677px #FFF, 1009px 298px #FFF, 1291px 14px #FFF, 1578px 286px #FFF, 1128px 919px #FFF, 177px 675px #FFF, 1183px 699px #FFF, 343px 495px #FFF, 73px 734px #FFF, 411px 10px #FFF, 191px 416px #FFF, 1309px 228px #FFF, 51px 563px #FFF, 501px 457px #FFF, 285px 209px #FFF, 1385px 1116px #FFF, 178px 128px #FFF, 1953px 74px #FFF, 751px 487px #FFF, 1230px 358px #FFF, 223px 486px #FFF, 1832px 143px #FFF, 1555px 803px #FFF, 936px 1446px #FFF, 1217px 1233px #FFF, 218px 361px #FFF, 1698px 516px #FFF, 1668px 1055px #FFF, 908px 1200px #FFF, 418px 551px #FFF, 1308px 1105px #FFF, 1196px 405px #FFF, 714px 879px #FFF, 1438px 731px #FFF, 1674px 554px #FFF, 945px 1552px #FFF, 1754px 736px #FFF, 680px 302px #FFF, 1463px 1279px #FFF, 1903px 993px #FFF, 1723px 1518px #FFF, 164px 1359px #FFF, 68px 1341px #FFF, 1295px 1015px #FFF, 1295px 135px #FFF, 1296px 977px #FFF, 1297px 1106px #FFF, 1297px 774px #FFF, 1298px 1183px #FFF, 1298px 140px #FFF, 1299px 16px #FFF, 1299px 1309px #FFF, 1299px 102px #FFF, 1302px 505px #FFF, 1302px 528px #FFF, 1303px 856px #FFF, 1303px 412px #FFF, 1303px 209px #FFF, 1304px 1274px #FFF, 1306px 118px #FFF, 1308px 1149px #FFF, 1311px 97px #FFF, 1312px 1047px #FFF, 1312px 1390px #FFF, 1312px 264px #FFF, 1313px 100px #FFF, 1313px 1539px #FFF, 1313px 113px #FFF, 1314px 490px #FFF, 1316px 721px #FFF, 1316px 1521px #FFF, 1317px 1250px #FFF, 1317px 1455px #FFF, 1317px 773px #FFF;
    animation: animStar 100s linear infinite;
    opacity: 0.6;
    z-index: 2;
  }

  @keyframes animStar {
    from { transform: translateY(0); }
    to { transform: translateY(-2000px); }
  }
  /* --- End Stars --- */

  /* --- Container & Page Structure --- */
  .container {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 10;
  }

  .page {
    width: 100%;
    min-height: 100vh; /* Full viewport height for landing */
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    /* background is on body */
    /* overflow: hidden; */ /* Contain decorations if needed */
  }

  /* --- Landing Page Specific Styles --- */
  .landing-header {
    margin-bottom: 40px;
    text-align: center;
    z-index: 15;
  }

  .landing-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--accent-color);
    text-shadow: 0 0 8px rgba(249, 212, 35, 0.7);
  }

  .landing-logo-icon {
    font-size: 2.5rem;
    margin-right: 12px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }

  .landing-title-wrapper {
    position: relative;
  }

  .landing-title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    margin: 0 0 15px 0;
    color: var(--accent-color);
    text-shadow: 0 0 15px rgba(249, 212, 35, 0.5);
  }

  .landing-decoration {
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, transparent, var(--accent-color), transparent);
    margin: 0 auto 20px auto;
    border-radius: 2px;
  }

  .landing-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .landing-form-container {
    background: var(--card-background);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 40px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 8px 30px var(--shadow-color);
    backdrop-filter: blur(10px);
    z-index: 15;
    position: relative;
  }

  .loading-indicator {
    display: none;
    margin-top: 20px;
    color: var(--accent-color);
    z-index: 15;
  }

  .loading-spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid var(--accent-color);
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: 10px auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .landing-footer {
    margin-top: auto;
    padding: 20px;
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-secondary);
    width: 100%;
    z-index: 15;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .landing-title {
        font-size: 2.2rem;
    }
    .landing-subtitle {
        font-size: 1rem;
    }
    .landing-form-container {
        padding: 30px 20px;
        width: 95%;
    }
    .landing-logo {
        font-size: 1.5rem;
    }
    .landing-logo-icon {
        font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .landing-title {
        font-size: 1.8rem;
    }
    .landing-logo {
        flex-direction: column;
    }
    .landing-logo-icon {
        margin-right: 0;
        margin-bottom: 10px;
    }
  }
  .hand-container {
    width: 100px; /* Adjust size as needed */
    height: 100px; /* Adjust size as needed */
    /* Example: Center it on the page */
     /*position: absolute; */
     /*top: 50%; */
     /*left: 50%; */
     /*transform: translate(-50%, -50%); */
   
    /* Optional: Add some margin if placing inline */
    margin: 20px auto;
  }

  /* --- Keyframe animation for rotation --- */
  @keyframes rotateHand {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* --- Apply animation to the SVG element --- */
  .rotating-hand {
    width: 100%;
    height: 100%;
    /* Apply the animation: name, duration, timing, iteration */
    animation: rotateHand 8s linear infinite; /* 8s for a slow spin, linear for constant speed, infinite to loop */
    /* Optional: Set transform-origin if you want it to rotate around a specific point (default is center) */
    /* transform-origin: center center; */
    /* Or, to rotate around the wrist/palm base, you might adjust like: */
    /* transform-origin: 50% 85%; */ /* Example percentage, adjust as needed */
  }
</style>
</head>
<body>

  <!-- Starry background layers -->
  <div id="stars-landing"></div>
  <div id="stars2-landing"></div>

  <div class="container" id="landing-container">
    <div class="page">
   
      <main class="landing-header">
        <div class="landing-logo">
          <div class="landing-logo-icon">✦</div>
          <span>Mystical Insights</span>
        </div>
       
        <div class="landing-title-wrapper">
          <h1 class="landing-title">Your Cosmic Palm Reading</h1>
          <div class="landing-decoration"></div>
          <p class="landing-subtitle">Unlock the secrets written in your hands</p>
        </div>
        <div class="hand-container">
    <xml version="1.0" encoding="iso-8859-1"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 421.862 421.862" style="enable-background:new 0 0 421.862 421.862;" xml:space="preserve">
<path d="M317.59,190.935c-8.43,0-16.176,2.978-22.248,7.933V66.745c0-18.287-14.877-33.165-33.165-33.165
c-7.582,0-14.573,2.563-20.165,6.86v-7.276C242.013,14.878,227.136,0,208.849,0s-33.165,14.878-33.165,33.165V48.44
c-5.592-4.297-12.583-6.86-20.165-6.86c-18.287,0-33.165,14.878-33.165,33.165v27.695c-5.592-4.297-12.583-6.86-20.165-6.86
c-18.287,0-33.165,14.878-33.165,33.165v181.651c0,39.583,13.729,78.314,38.658,109.059c1.285,1.584,3.161,2.407,5.053,2.406
c1.438,0,2.886-0.475,4.09-1.451c2.789-2.261,3.216-6.354,0.955-9.143c-23.057-28.437-35.755-64.261-35.755-100.872V128.745
c0-11.119,9.046-20.165,20.165-20.165c11.119,0,20.165,9.046,20.165,20.165v116.706c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5
V74.745c0-11.119,9.046-20.165,20.165-20.165c11.119,0,20.165,9.046,20.165,20.165v159.544c0,3.59,2.91,6.5,6.5,6.5
s6.5-2.91,6.5-6.5V33.165c0-11.119,9.046-20.165,20.165-20.165c11.119,0,20.165,9.046,20.165,20.165V242.97c0,3.59,2.91,6.5,6.5,6.5
s6.5-2.91,6.5-6.5V66.745c0-11.119,9.046-20.165,20.165-20.165c11.119,0,20.165,9.046,20.165,20.165v233.359
c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5v-73.922c0-12.267,9.98-22.247,22.248-22.247s22.247,9.98,22.247,22.247v93.109
c0,20.893-7.246,41.338-20.402,57.568s-31.659,27.551-52.1,31.875c-3.512,0.743-5.757,4.192-5.014,7.705
c0.647,3.059,3.347,5.156,6.353,5.156c0.445,0,0.898-0.046,1.352-0.142c23.348-4.939,44.481-17.869,59.508-36.407
c15.027-18.539,23.303-41.891,23.303-65.754v-93.109C352.837,206.747,337.026,190.935,317.59,190.935z"/>
</svg>


</div>
      </main>

   
     
    </div> <!-- .page -->
  </div> <!-- .container -->

</body>
</html>`;

const endingHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Palm Reading Report - Ending Footer</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
<style>


  .footer-container {
    margin-top: auto;
    text-align: center;
    padding: 40px 20px;
    background: radial-gradient(circle at bottom, #FFFACD, #E47025);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
     height: 100vh;
  }

  /* Decorative stars */
  .star {
    position: absolute;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: twinkle 3s infinite ease-in-out;
  }
  .star:nth-child(1) { width: 3px; height: 3px; top: 10%; left: 20%; animation-delay: 0s; }
  .star:nth-child(2) { width: 2px; height: 2px; top: 40%; left: 70%; animation-delay: 1s; }
  .star:nth-child(3) { width: 4px; height: 4px; top: 80%; left: 50%; animation-delay: 2s; }

  @keyframes twinkle {
    0%, 100% { opacity: 0.8; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.8); }
  }

  .footer-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 10px;
    color: #f5e1ff;
  }

  .footer-text {
    max-width: 500px;
    margin: 0 auto 20px;
    font-size: 1rem;
    line-height: 1.6;
    color: #d0c3e8;
  }

  .footer-branding {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.9rem;
    color: #e5d0ff;
    opacity: 0.8;
  }

  .footer-branding img {
    width: 18px;
    height: 18px;
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.6));
  }
</style>
</head>
<body>

<!-- Ending Footer Section -->
<footer class="footer-container">
  <!-- Decorative stars -->
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>

  <h2 class="footer-title">Your Journey Awaits ✨</h2>
  <p class="footer-text">
    May the insights from your palms guide you to clarity, joy, and purpose.  
    Remember — the future is shaped by the choices you make today.
  </p>
</footer>

</body>
</html>`
function generatePaginatedHTML(content: Record<string, string>) {
  const sections = Object.entries(content || {}).map(([key, value]) => {
    const title = (sectionTitles as any)[key] || key;
    const paragraphs = (value || '')
      .split('\n')
      .map(p => p.trim())
      .filter(Boolean)
      .map(p => `<p class="section-paragraph">${p}</p>`)
      .join('');
    return `
      <section class="report-section">
        <h2 class="section-title">${title}</h2>
        <div class="section-body">
          ${paragraphs}
        </div>
      </section>
    `;
  }).join('');
  const path = "./path.jpg";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Palm Reading Report</title>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">
<style>
  :root{
    --accent-color:#f9d423;
    --card-bg: rgba(0,0,0,0.6);
    --border: rgba(255,255,255,0.1);
    --shadow: rgba(0,0,0,0.6);
    --text:#ffffff;
    --text-dark:#2a2a2a;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    color:var(--text);
    font-family:'Nunito',sans-serif;
    background: radial-gradient(circle at bottom, #FFFACD, #E47025);
    padding: 24px;
  }

  /* Landing front page */
  .landing-front{
    width:100%;
    max-width: 900px;
    margin: 0 auto 24px auto;
    background: var(--card-bg);
    border:1px solid var(--border);
    border-radius:20px;
    padding:40px;
    box-shadow:0 8px 30px var(--shadow);
    text-align:center;
  }
  .landing-logo{
    display:flex;align-items:center;justify-content:center;
    gap:12px;margin-bottom:10px;color:var(--accent-color);
    font-family:'Playfair Display',serif;font-size:1.8rem;
    text-shadow:0 0 8px rgba(249,212,35,.7);
  }
  .landing-logo-icon{font-size:2rem;animation:pulse 2s infinite}
  @keyframes pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.1);opacity:.8}100%{transform:scale(1);opacity:1}}
  .landing-title{font-family:'Playfair Display',serif;font-size:2.2rem;color:var(--accent-color);margin:0 0 10px}
  .landing-decoration{width:120px;height:3px;background:linear-gradient(to right,transparent,var(--accent-color),transparent);margin:0 auto 10px;border-radius:2px}
  .landing-subtitle{color:var(--text-dark)}
  .hand-container{width:110px;height:110px;margin:20px auto 0}

  /* Report pages */
  .report-page{
    width:210mm;height:297mm;
    margin: 0 auto 24px auto;
    background: radial-gradient(circle at bottom, #FFFACD, #E47025);
    border-radius: 12px;
    overflow:hidden;
    position:relative;
    page-break-after: always;
    border: 1px solid rgba(0,0,0,.05);
  }
  .page-content{
    position:relative;z-index:2;height:100%;padding:24px 20px;
    display:flex;flex-direction:column;
  }
  .page-body{
    flex:1 1 auto;display:block;overflow:hidden;
  }

  /* Sections */
  .report-section{margin-bottom:16px; break-inside: avoid; }
  .section-title{
    font:700 22px/1.3 'Playfair Display',serif;
    color:#5b2a00;margin:0 0 8px 0;
    text-shadow:0 0 6px rgba(249,212,35,.25);
  }
  .section-paragraph{
    color:#2a2a2a; line-height:1.6; margin:8px 0;
  }

  /* Ending footer (as its own page section) */
  .ending-footer{
    height:100%;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    text-align:center;padding:40px 20px;color:#2a2a2a;
  }
  .star{position:absolute;background:white;border-radius:50%;opacity:.8;animation:twinkle 3s infinite ease-in-out}
  .ending-footer .star:nth-child(1){ width:3px;height:3px; top:10%; left:20%; animation-delay:0s}
  .ending-footer .star:nth-child(2){ width:2px;height:2px; top:40%; left:70%; animation-delay:1s}
  .ending-footer .star:nth-child(3){ width:4px;height:4px; top:80%; left:50%; animation-delay:2s}
  @keyframes twinkle{0%,100%{opacity:.8;transform:scale(1)}50%{opacity:.3;transform:scale(.8)}}
  .footer-title{font-family:'Playfair Display',serif;font-size:2rem;margin-bottom:10px;color:#4b2a00}
  .footer-text{max-width:560px;margin:0 auto 16px}
  .footer-branding{display:flex;align-items:center;justify-content:center;gap:8px;color:#4b2a00;opacity:.9}
  .footer-branding img{width:18px;height:18px}

  /* Print */
  @media print{
    body{padding:0;background:#fff}
    .landing-front{page-break-after:always}
    .report-page{margin:0;border:none;border-radius:0;box-shadow:none}
  }
</style>
</head>
<body>
<div class="report-page">
  ${landingPageHTML}
  </div>

  <div id="pages-root"></div>

  <template id="sections-source">
    ${sections}

  </template>

  <script>
  (function(){
    const root = document.getElementById('pages-root');
    const tpl = document.getElementById('sections-source');
    if(!root || !tpl) return;

    function newPage(){
      const page = document.createElement('div');
      page.className = 'report-page';
      const content = document.createElement('div');
      content.className = 'page-content';
      const body = document.createElement('div');
      body.className = 'page-body';
      content.appendChild(body);
      page.appendChild(content);
      root.appendChild(page);
      return body; // paginate into .page-body
    }

    // Measure overflow against the page container (pageBody)
    function fits(pageBody, parent, node){
      parent.appendChild(node);
      const ok = pageBody.scrollHeight <= pageBody.clientHeight + 1;
      if(!ok) parent.removeChild(node);
      return ok;
    }

    // Flow a long paragraph by words across pages so nothing is lost
    function flowParagraphByWords(pageBody, sectionTemplate, titleNode, currentShell, text, tagName, className){
      const words = text.split(/\\s+/);
      let chunk = '';

      function appendShellOnNewPage(){
        const pb = newPage();
        const shell = sectionTemplate.cloneNode(false);
        if(titleNode) shell.appendChild(titleNode.cloneNode(true));
        pb.appendChild(shell);
        return { pageBody: pb, shell };
      }

      function makePara(t){
        const p = document.createElement(tagName.toLowerCase());
        p.className = className;
        p.textContent = t;
        return p;
      }

      for(let i=0;i<words.length;i++){
        const candidate = makePara(chunk ? chunk + ' ' + words[i] : words[i]);
        if(fits(pageBody, currentShell, candidate)){
          chunk = candidate.textContent || '';
        }else{
          if(chunk){
            currentShell.appendChild(makePara(chunk));
          }
          const next = appendShellOnNewPage();
          pageBody = next.pageBody;
          currentShell = next.shell;

          if(!fits(pageBody, currentShell, candidate)){
            // Extreme edge case: force append so nothing is lost
            currentShell.appendChild(candidate);
          }
          chunk = candidate.textContent || '';
        }
      }

      if(chunk){
        currentShell.appendChild(makePara(chunk));
      }
      return { pageBody, shell: currentShell };
    }

    function paginate(){
      let pageBody = newPage();
      const frag = (tpl instanceof HTMLTemplateElement) ? tpl.content.cloneNode(true) : document.createDocumentFragment();
      const sections = Array.from(frag.querySelectorAll('.report-section'));

      sections.forEach(section => {
        // Try to fit the whole section on current page
        if (fits(pageBody, pageBody, section)) return;

        // Create a shell with the title
        const shell = section.cloneNode(false);
        const title = section.querySelector('.section-title');
        const body = section.querySelector('.section-body');
        if (title) shell.appendChild(title.cloneNode(true));

        // If even the shell doesn't fit, start a new page
        if (!fits(pageBody, pageBody, shell)) {
          pageBody = newPage();
          pageBody.appendChild(shell);
        }
        let currentShell = shell;

        // Stream blocks (prefer paragraphs; fallback to body children)
        const paras = body ? Array.from(body.querySelectorAll('.section-paragraph')) : [];
        const blocks = paras.length ? paras : Array.from(body ? body.children : []);

        blocks.forEach(block => {
          const clone = block.cloneNode(true);

          // Try whole paragraph; if it doesn't fit, continue on a new page with same section box
          if (!fits(pageBody, currentShell, clone)) {
            pageBody = newPage();
            currentShell = section.cloneNode(false);
            if (title) currentShell.appendChild(title.cloneNode(true));
            pageBody.appendChild(currentShell);

            // If still too big for a fresh page, flow by words (no trimming)
            if (!fits(pageBody, currentShell, clone)) {
              const text = (block.textContent || '').trim();
              if (!text) return;
              const flowed = flowParagraphByWords(
                pageBody,
                section,
                title || null,
                currentShell,
                text,
                block.tagName,
                block.className || ''
              );
              pageBody = flowed.pageBody;
              currentShell = flowed.shell;
            }
          }
        });
      });
    }

    paginate();
  })();
  </script>
</body>
</html>
`;
}

export default function Home() {
//   const username = "Alice";
  const { report } = useStore();
  const fullHTML = generatePaginatedHTML(report);
  const handleDownloadPDF = async () => {
    try {
      const res = await fetch('/api/generatepdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: fullHTML }),
      });

      if (!res.ok) throw new Error('PDF generation failed');

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'palm-reading-report.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Failed to download PDF');
      console.error(err);
    }
  };

  return (
    <>
    <iframe
      title="Palm Reading Report"
      srcDoc={fullHTML}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      sandbox="allow-same-origin allow-scripts"
    />
    <button onClick={handleDownloadPDF}>I can Tell You Tails</button>
    </>
  );
}