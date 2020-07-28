var aFTN=[
{'c':'计算机/互联网/通信/电子','e':'Computer,Internet,Telecom,Electronics','nav':'0100','category':['0100','7700','7200','7300','7800','7400','2700','7900','7500','6600','8000','2600','6100','6700','2900','2800']},
{'c':'销售/客服/技术支持','e':'Sales,Customer Service,Technical Support','nav':'0200','category':['0200','3000','3100','3200']},
{'c':'会计/金融/银行/保险','e':'Accounting,Finance,Banking,Insurance','nav':'0400','category':['0400','3300','2200','3400']},
{'c':'生产/营运/采购/物流','e':'Manufacturing,Operation,Purchasing,Logistics','nav':'3500','category':['3500','3600','0500','6200','6300','7100','5400','5900','3700','3800','0800','3900','4000']},
{'c':'生物/制药/医疗/护理','e':'Biotechnology,Pharmaceuticals,Healthcare','nav':'4100','category':['4100','5500','1300']},
{'c':'广告/市场/媒体/艺术','e':'Advertising,Marketing,Media,Design','nav':'4200','category':['4200','4300','0300','4400','4500','0900']},
{'c':'建筑/房地产','e':'Construction,Real Estate','nav':'6900','category':['6900','2100','4600','6000','4700']},
{'c':'人事/行政/高级管理','e':'HR,Admin.,Senior Management','nav':'0600','category':['0600','2300','0700']},
{'c':'咨询/法律/教育/科研','e':'Consultant,Legal,Education','nav':'1400','category':['1400','1100','1200','5700','1000']},
{'c':'服务业','e':'Service','nav':'4800','category':['4800','4900','5000','5100','1800','5200','6400','6500']},
{'c':'公务员/翻译/其他','e':'Official,Translator,Others','nav':'1500','category':['1500','2000','5600','5800','1600','1700','5300','1900']}
];
var aITN=[
{'c':'计算机/互联网/通信/电子','e':'Computer, Internet, Telecom, Electronics','nav':'01','category':['01','37','38','31','39','32','40','02','35']},
{'c':'会计/金融/银行/保险','e':'Accounting, Finance, Banking, Insurance','nav':'41','category':['41','03','42','43','62']},
{'c':'贸易/消费/制造/营运','e':'Trade,Sales, Manufacturing, Operations','nav':'04','category':['04','22','05','06','44','60','45','14','33','65']},
{'c':'制药/医疗','e':'Pharmaceuticals, Healthcare','nav':'08','category':['08','46','47']},
{'c':'广告/媒体','e':'Advertising, Media Related','nav':'12','category':['12','48','49','13','15']},
{'c':'房地产/建筑','e':'Real Estates Related','nav':'26','category':['26','09','50','51','34','63']},
{'c':'专业服务/教育/培训','e':'Professional Services, Education, Training','nav':'07','category':['07','59','52','18','23','24']},
{'c':'服务业','e':'Customer Services','nav':'11','category':['11','53','17','54','27']},
{'c':'物流/运输','e':'Logistics, Transportation','nav':'21','category':['21','55']},
{'c':'能源/环保/化工','e':'Utilities, Environmental Protection, Chemical','nav':'19','category':['19','16','36','61','56','20']},
{'c':'政府/非营利组织/其他','e':'Government, Non Profit, Others','nav':'28','category':['28','57','29','58']}
];
var aCertN=[
{'c':'语言证书','e':'Language','nav':'0100','category':['0107','0108','0109','0129','0116','0117','0130','0131','0120','0121','0119','0122','0123','0124','0112','0125','0114','0126','0115','0127','0104','0128','0105','0110','0106','0111','0113','0118','0101','0132','0133','0102','0103','0134','0135','0136','0137','0138','0139','0140','0141','0142','0143','0144','0145','0146','0147','0148','0149','0150','0151','0152','0153','0154','0155']},
{'c':'职称证书','e':'Administrative Level','nav':'0400','category':['0401','0402','0403','0408','0404','0405','0406','0407']},
{'c':'微软证书','e':'Microsoft','nav':'0500','category':['0502','0509','0516','0501','0517','0506','0510','0507','0503','0505','0511','0514','0513','0518','0504','0520','0508','0519']},
{'c':'IBM证书','e':'IBM','nav':'0600','category':['0601','0602','0603','0604','0605','0606','0607','0608','0609']},
{'c':'思科职业证书','e':'CISCO','nav':'0700','category':['0706','0723','0707','0701','0702','0734','0709']},
{'c':'其它技术证书','e':'Technology Related','nav':'0200','category':['0201','0223','0202','0212','0203','0213','0230','0205','0224','0225','0226','0227','0209','0228','0229','0211','0233','0235','0234','0214','0236','0221','0222','0220','0231','0232','0219','0215','0216','0218','0217','0207','0208','0204','0206','0210']},
{'c':'财务/金融/银行/保险证书','e':'Finance/Banks/Insurance Certificate','nav':'0300','category':['0305','0304','0303','0302','0309','0310','0319','0301','0308','0321','0331','0322','0323','0324','0325','0326','0332','0306','0312','0316','0315','0317','0318','0327','0320','0328','0329','0330','0333','0307','0313','0314','0311','0334']},
{'c':'交通/运输/物流证书','e':'Transportation & Logistics','nav':'0800','category':['0801','0809','0810','0811','0812','0813','0814','0815','0816','0817','0808','0807','0802','0805','0804','0806','0803']},
{'c':'房地产/建筑证书','e':'Real Estate & Construction','nav':'0900','category':['0905','0908','0901','0903','0907','0906','0902','0904']},
{'c':'行政/人事证书','e':'Admin/Human Resources','nav':'1000','category':['1005','1009','1008','1007','1006','1002','1004']},
{'c':'其它证书','e':'Others','nav':'9900','category':['9916','9904','9925','9902','9926','9914','9913','9901','9906','9905','9910','9909','9908','9907','9911','9903','9912','9915','9917','9918','9919','9920','9921','9922','9923','9924']}
];
var aItskillN=[
{'c':'大数据类','e':'Big Data','nav':'0200','category':['0212','0202','0205','0206','0213','0207','0210','0209','0218','0220','0214','0211','0208','0219','0215','0216','0217']},
{'c':'开发编程类','e':'Program','nav':'0400','category':['0401','0402','0403','0404','0405','0406','0407','0408','0409','0410','0411','0412','0413','0414','0415','0416','0417','0418','0419','0420','0421','0422','0426','0423','0424']},
{'c':'多媒体设计类','e':'Multimedia Design','nav':'1300','category':['1318','1319','1341','1342','1302','1303','1316','1317','1304','1326','1327','1307','1329','1330','1332','1311','1301']},
{'c':'办公应用软件','e':'Office','nav':'2100','category':['2101','2109','2104','2106','2107','2103','2102']},
{'c':'语言类','e':'Language','nav':'2200','category':['2201','2202','2205','2208','2203','2204','2206','2211','2212','2207','2210','2213','2214','2215','2209']},
{'c':'财务管理类','e':'Financial Management','nav':'2300','category':['2303','2301','2302']}
];
var aMajorN=[
{'c':'哲学','e':'Philosophy','nav':'1100','category':['1100']},
{'c':'经济学','e':'Economics','nav':'1000','category':['1000']},
{'c':'管理学','e':'Management','nav':'0200','category':['0200','0300','0400','3500']},
{'c':'文学','e':'Literature','nav':'0700','category':['0700','3900','1200']},
{'c':'工学','e':'Engineering','nav':'3600','category':['3600','3700','0500','0600','1900','2100','2200','2300','2400','2500','2600','2700','2900','2800','3000','3200','4100','4200']},
{'c':'法学','e':'Law','nav':'0900','category':['0900']},
{'c':'历史学','e':'History','nav':'1300','category':['1300']},
{'c':'理学','e':'Science','nav':'1400','category':['1400','1500','1600','3100','1700','1800','0100','3800','2000']},
{'c':'教育学','e':'Education','nav':'0800','category':['0800']},
{'c':'医学','e':'Medicine','nav':'3400','category':['3400','4000']},
{'c':'农学','e':'Agriculture','nav':'3300','category':['3300']}
];
var aBaseArea=[
{'c':'热门城市','e':'Hot City','nav':'000000','category':['010000','020000','030200','040000','180200','200200','080200','070200','090200','060000','030800','230300','230200','070300','250200','190200','150200','080300','170200','050000','120300','120200','220200','240200','110200']},
{'c':'A B C','e':'A B C','nav':'092200','category':['092200','310600','310900','281500','311300','300800','230400','201000','150400','260500','170900','280900','311800','092000','241000','101800','240900','270800','141100','150600','280400','160400','251200','101700','200400','140500','010000','231000','260700','121500','311900','151800','160800','300600','311200','101900','190700','070700','070500','240200','190200','210600','231400','032000','190900','090200','101300','161000','151500','280300','141400','150900','251700','060000']},
{'c':'D E F G','e':'D E F G','nav':'091700','category':['091700','250500','230300','220500','210400','221400','230800','072100','251600','090600','121300','172000','252000','101100','271100','100900','121000','030800','100800','280800','181000','181800','140800','030600','110200','230600','131100','231500','150700','271500','092100','130800','290600','091300','091600','030200','140300','141000','260200','320800']},
{'c':'H I','e':'H I','nav':'220200','category':['220200','310700','320500','320300','100200','320700','081600','320400','160700','200900','080200','121400','311600','150200','141200','032100','171700','221000','141500','221200','161200','190500','251000','280200','281100','230900','080900','191100','071900','151700','151100','181100','320600','151000','180400','030300']},
{'c':'J K','e':'J K','nav':'220900','category':['220900','130900','240300','120200','120900','171900','080700','270400','220800','031500','170500','032200','270300','080600','230700','210700','211000','180800','180700','130400','072500','130300','270500','310400','170400','032700','310300','311700','250200','070600']},
{'c':'L M N','e': 'L M N','nav':'300200','category':['300200','141300','270200','160300','090400','250600','081000','071200','092300','121700','231100','240400','300400','251800','210500','101400','271400','120800','102100','140400','151200','260400','111000','271200','191200','211200','170300','090500','171500','150500','032300','032600','091200','090300','220700','300700','130200','091100','070200','140200','110800','070900','170600','090900','080300','110900','251900']},
{'c':'O P Q R','e': 'O P Q R','nav':'091000','category':['091000','231300','130500','171000','271000','110600','251100','171600','221300','220600','260900','261000','260800','181500','140900','160600','120300','031900','271300','100600','101600','250300','110400','081200','300300','121200']},
{'c':'S T U','e': 'S T U','nav':'171800','category':['171800','110700','101500','100300','300500','030400','032400','201100','171300','020000','131200','031400','191000','080500','040000','181700','230200','180600','310800','160200','290500','221100','210900','240600','240700','070300','072000','151600','181200','220400','091500','311500','080800','121100','072300','071800','071600','210200','160500','050000','181600','270600','231200','240500','280700','200500','150800','260600','311100','311400','101200']},
{'c':'V W X','e': 'V W X','nav':'100700','category':['100700','120600','120500','200700','080400','100500','251400','281000','281200','310200','070400','150300','140700','290300','180200','270700','311000','101000','200200','091900','320200','251500','281400','110300','181400','181300','200300','180500','190400','191500','180900','170700','130600','211100','171200','281300','161100','160100','071100','171100','151400']},
{'c':'Y Z','e': 'Y Z','nav':'102000','category':['102000','091800','120400','071300','200600','241100','240800','161300','201200','070800','100400','032800','210800','220300','310500','090700','180300','131000','081400','190800','290200','130700','230500','191300','200800','140600','320900','250400','190600','032900','210300','121600','031700','110500','071400','191400','160900','270900','251300','031800','071000','170200','030700','290400','081100','170800','030500','190300','171400','091400','120700','090800','260300']},
{'c':'所有省份(含港澳台)','e': 'All Provinces','nav':'030000','category':['030000','070000','080000','090000','100000','110000','120000','130000','140000','150000','160000','170000','180000','190000','200000','210000','220000','230000','240000','250000','260000','270000','280000','290000','300000','310000','320000','330000','340000','350000']}
];
var aAreaN=aBaseArea.slice(0);
aAreaN.push({'c':'国外','e':'Overseas','nav':'360000','category':['360000']});
var aCountryN=aBaseArea.slice(0);
aCountryN.push({'c':'国外','e':'Overseas','nav':'360000','category':['361000','362000','363000','364000','365000','366000']});