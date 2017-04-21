var Xbim;
(function (Xbim) {
    var Viewer;
    (function (Viewer) {
        /**
        * Enumeration of product types.
        * @readonly
        * @enum {number}
        */
        var ProductType;
        (function (ProductType) {
            ProductType[ProductType["IFCDISTRIBUTIONELEMENT"] = 44] = "IFCDISTRIBUTIONELEMENT";
            ProductType[ProductType["IFCDISTRIBUTIONFLOWELEMENT"] = 45] = "IFCDISTRIBUTIONFLOWELEMENT";
            ProductType[ProductType["IFCDISTRIBUTIONCHAMBERELEMENT"] = 180] = "IFCDISTRIBUTIONCHAMBERELEMENT";
            ProductType[ProductType["IFCENERGYCONVERSIONDEVICE"] = 175] = "IFCENERGYCONVERSIONDEVICE";
            ProductType[ProductType["IFCAIRTOAIRHEATRECOVERY"] = 1097] = "IFCAIRTOAIRHEATRECOVERY";
            ProductType[ProductType["IFCBOILER"] = 1105] = "IFCBOILER";
            ProductType[ProductType["IFCBURNER"] = 1109] = "IFCBURNER";
            ProductType[ProductType["IFCCHILLER"] = 1119] = "IFCCHILLER";
            ProductType[ProductType["IFCCOIL"] = 1124] = "IFCCOIL";
            ProductType[ProductType["IFCCONDENSER"] = 1132] = "IFCCONDENSER";
            ProductType[ProductType["IFCCOOLEDBEAM"] = 1141] = "IFCCOOLEDBEAM";
            ProductType[ProductType["IFCCOOLINGTOWER"] = 1142] = "IFCCOOLINGTOWER";
            ProductType[ProductType["IFCENGINE"] = 1164] = "IFCENGINE";
            ProductType[ProductType["IFCEVAPORATIVECOOLER"] = 1166] = "IFCEVAPORATIVECOOLER";
            ProductType[ProductType["IFCEVAPORATOR"] = 1167] = "IFCEVAPORATOR";
            ProductType[ProductType["IFCHEATEXCHANGER"] = 1187] = "IFCHEATEXCHANGER";
            ProductType[ProductType["IFCHUMIDIFIER"] = 1188] = "IFCHUMIDIFIER";
            ProductType[ProductType["IFCTUBEBUNDLE"] = 1305] = "IFCTUBEBUNDLE";
            ProductType[ProductType["IFCUNITARYEQUIPMENT"] = 1310] = "IFCUNITARYEQUIPMENT";
            ProductType[ProductType["IFCELECTRICGENERATOR"] = 1160] = "IFCELECTRICGENERATOR";
            ProductType[ProductType["IFCELECTRICMOTOR"] = 1161] = "IFCELECTRICMOTOR";
            ProductType[ProductType["IFCMOTORCONNECTION"] = 1216] = "IFCMOTORCONNECTION";
            ProductType[ProductType["IFCSOLARDEVICE"] = 1270] = "IFCSOLARDEVICE";
            ProductType[ProductType["IFCTRANSFORMER"] = 1303] = "IFCTRANSFORMER";
            ProductType[ProductType["IFCFLOWCONTROLLER"] = 121] = "IFCFLOWCONTROLLER";
            ProductType[ProductType["IFCELECTRICDISTRIBUTIONPOINT"] = 242] = "IFCELECTRICDISTRIBUTIONPOINT";
            ProductType[ProductType["IFCAIRTERMINALBOX"] = 1096] = "IFCAIRTERMINALBOX";
            ProductType[ProductType["IFCDAMPER"] = 1148] = "IFCDAMPER";
            ProductType[ProductType["IFCFLOWMETER"] = 1182] = "IFCFLOWMETER";
            ProductType[ProductType["IFCVALVE"] = 1311] = "IFCVALVE";
            ProductType[ProductType["IFCELECTRICDISTRIBUTIONBOARD"] = 1157] = "IFCELECTRICDISTRIBUTIONBOARD";
            ProductType[ProductType["IFCELECTRICTIMECONTROL"] = 1162] = "IFCELECTRICTIMECONTROL";
            ProductType[ProductType["IFCPROTECTIVEDEVICE"] = 1235] = "IFCPROTECTIVEDEVICE";
            ProductType[ProductType["IFCSWITCHINGDEVICE"] = 1290] = "IFCSWITCHINGDEVICE";
            ProductType[ProductType["IFCFLOWFITTING"] = 467] = "IFCFLOWFITTING";
            ProductType[ProductType["IFCDUCTFITTING"] = 1153] = "IFCDUCTFITTING";
            ProductType[ProductType["IFCPIPEFITTING"] = 1222] = "IFCPIPEFITTING";
            ProductType[ProductType["IFCCABLECARRIERFITTING"] = 1111] = "IFCCABLECARRIERFITTING";
            ProductType[ProductType["IFCCABLEFITTING"] = 1113] = "IFCCABLEFITTING";
            ProductType[ProductType["IFCJUNCTIONBOX"] = 1195] = "IFCJUNCTIONBOX";
            ProductType[ProductType["IFCFLOWMOVINGDEVICE"] = 502] = "IFCFLOWMOVINGDEVICE";
            ProductType[ProductType["IFCCOMPRESSOR"] = 1131] = "IFCCOMPRESSOR";
            ProductType[ProductType["IFCFAN"] = 1177] = "IFCFAN";
            ProductType[ProductType["IFCPUMP"] = 1238] = "IFCPUMP";
            ProductType[ProductType["IFCFLOWSEGMENT"] = 574] = "IFCFLOWSEGMENT";
            ProductType[ProductType["IFCDUCTSEGMENT"] = 1154] = "IFCDUCTSEGMENT";
            ProductType[ProductType["IFCPIPESEGMENT"] = 1223] = "IFCPIPESEGMENT";
            ProductType[ProductType["IFCCABLECARRIERSEGMENT"] = 1112] = "IFCCABLECARRIERSEGMENT";
            ProductType[ProductType["IFCCABLESEGMENT"] = 1115] = "IFCCABLESEGMENT";
            ProductType[ProductType["IFCFLOWSTORAGEDEVICE"] = 371] = "IFCFLOWSTORAGEDEVICE";
            ProductType[ProductType["IFCTANK"] = 1293] = "IFCTANK";
            ProductType[ProductType["IFCELECTRICFLOWSTORAGEDEVICE"] = 1159] = "IFCELECTRICFLOWSTORAGEDEVICE";
            ProductType[ProductType["IFCFLOWTERMINAL"] = 46] = "IFCFLOWTERMINAL";
            ProductType[ProductType["IFCFIRESUPPRESSIONTERMINAL"] = 1179] = "IFCFIRESUPPRESSIONTERMINAL";
            ProductType[ProductType["IFCSANITARYTERMINAL"] = 1262] = "IFCSANITARYTERMINAL";
            ProductType[ProductType["IFCSTACKTERMINAL"] = 1277] = "IFCSTACKTERMINAL";
            ProductType[ProductType["IFCWASTETERMINAL"] = 1315] = "IFCWASTETERMINAL";
            ProductType[ProductType["IFCAIRTERMINAL"] = 1095] = "IFCAIRTERMINAL";
            ProductType[ProductType["IFCMEDICALDEVICE"] = 1212] = "IFCMEDICALDEVICE";
            ProductType[ProductType["IFCSPACEHEATER"] = 1272] = "IFCSPACEHEATER";
            ProductType[ProductType["IFCAUDIOVISUALAPPLIANCE"] = 1099] = "IFCAUDIOVISUALAPPLIANCE";
            ProductType[ProductType["IFCCOMMUNICATIONSAPPLIANCE"] = 1127] = "IFCCOMMUNICATIONSAPPLIANCE";
            ProductType[ProductType["IFCELECTRICAPPLIANCE"] = 1156] = "IFCELECTRICAPPLIANCE";
            ProductType[ProductType["IFCLAMP"] = 1198] = "IFCLAMP";
            ProductType[ProductType["IFCLIGHTFIXTURE"] = 1199] = "IFCLIGHTFIXTURE";
            ProductType[ProductType["IFCOUTLET"] = 1219] = "IFCOUTLET";
            ProductType[ProductType["IFCFLOWTREATMENTDEVICE"] = 425] = "IFCFLOWTREATMENTDEVICE";
            ProductType[ProductType["IFCINTERCEPTOR"] = 1193] = "IFCINTERCEPTOR";
            ProductType[ProductType["IFCDUCTSILENCER"] = 1155] = "IFCDUCTSILENCER";
            ProductType[ProductType["IFCFILTER"] = 1178] = "IFCFILTER";
            ProductType[ProductType["IFCDISTRIBUTIONCONTROLELEMENT"] = 468] = "IFCDISTRIBUTIONCONTROLELEMENT";
            ProductType[ProductType["IFCPROTECTIVEDEVICETRIPPINGUNIT"] = 1236] = "IFCPROTECTIVEDEVICETRIPPINGUNIT";
            ProductType[ProductType["IFCACTUATOR"] = 1091] = "IFCACTUATOR";
            ProductType[ProductType["IFCALARM"] = 1098] = "IFCALARM";
            ProductType[ProductType["IFCCONTROLLER"] = 1139] = "IFCCONTROLLER";
            ProductType[ProductType["IFCFLOWINSTRUMENT"] = 1181] = "IFCFLOWINSTRUMENT";
            ProductType[ProductType["IFCSENSOR"] = 1264] = "IFCSENSOR";
            ProductType[ProductType["IFCUNITARYCONTROLELEMENT"] = 1308] = "IFCUNITARYCONTROLELEMENT";
            ProductType[ProductType["IFCDISCRETEACCESSORY"] = 423] = "IFCDISCRETEACCESSORY";
            ProductType[ProductType["IFCFASTENER"] = 535] = "IFCFASTENER";
            ProductType[ProductType["IFCMECHANICALFASTENER"] = 536] = "IFCMECHANICALFASTENER";
            ProductType[ProductType["IFCREINFORCINGBAR"] = 571] = "IFCREINFORCINGBAR";
            ProductType[ProductType["IFCREINFORCINGMESH"] = 531] = "IFCREINFORCINGMESH";
            ProductType[ProductType["IFCTENDON"] = 261] = "IFCTENDON";
            ProductType[ProductType["IFCTENDONANCHOR"] = 675] = "IFCTENDONANCHOR";
            ProductType[ProductType["IFCBUILDINGELEMENTPART"] = 220] = "IFCBUILDINGELEMENTPART";
            ProductType[ProductType["IFCVIBRATIONISOLATOR"] = 1312] = "IFCVIBRATIONISOLATOR";
            ProductType[ProductType["IFCCHAMFEREDGEFEATURE"] = 765] = "IFCCHAMFEREDGEFEATURE";
            ProductType[ProductType["IFCROUNDEDEDGEFEATURE"] = 766] = "IFCROUNDEDEDGEFEATURE";
            ProductType[ProductType["IFCOPENINGELEMENT"] = 498] = "IFCOPENINGELEMENT";
            ProductType[ProductType["IFCOPENINGSTANDARDCASE"] = 1217] = "IFCOPENINGSTANDARDCASE";
            ProductType[ProductType["IFCVOIDINGFEATURE"] = 1313] = "IFCVOIDINGFEATURE";
            ProductType[ProductType["IFCPROJECTIONELEMENT"] = 384] = "IFCPROJECTIONELEMENT";
            ProductType[ProductType["IFCSURFACEFEATURE"] = 1287] = "IFCSURFACEFEATURE";
            ProductType[ProductType["IFCFOOTING"] = 120] = "IFCFOOTING";
            ProductType[ProductType["IFCPILE"] = 572] = "IFCPILE";
            ProductType[ProductType["IFCBEAM"] = 171] = "IFCBEAM";
            ProductType[ProductType["IFCBEAMSTANDARDCASE"] = 1104] = "IFCBEAMSTANDARDCASE";
            ProductType[ProductType["IFCCOLUMN"] = 383] = "IFCCOLUMN";
            ProductType[ProductType["IFCCOLUMNSTANDARDCASE"] = 1126] = "IFCCOLUMNSTANDARDCASE";
            ProductType[ProductType["IFCCURTAINWALL"] = 456] = "IFCCURTAINWALL";
            ProductType[ProductType["IFCDOOR"] = 213] = "IFCDOOR";
            ProductType[ProductType["IFCDOORSTANDARDCASE"] = 1151] = "IFCDOORSTANDARDCASE";
            ProductType[ProductType["IFCMEMBER"] = 310] = "IFCMEMBER";
            ProductType[ProductType["IFCMEMBERSTANDARDCASE"] = 1214] = "IFCMEMBERSTANDARDCASE";
            ProductType[ProductType["IFCPLATE"] = 351] = "IFCPLATE";
            ProductType[ProductType["IFCPLATESTANDARDCASE"] = 1224] = "IFCPLATESTANDARDCASE";
            ProductType[ProductType["IFCRAILING"] = 350] = "IFCRAILING";
            ProductType[ProductType["IFCRAMP"] = 414] = "IFCRAMP";
            ProductType[ProductType["IFCRAMPFLIGHT"] = 348] = "IFCRAMPFLIGHT";
            ProductType[ProductType["IFCROOF"] = 347] = "IFCROOF";
            ProductType[ProductType["IFCSLAB"] = 99] = "IFCSLAB";
            ProductType[ProductType["IFCSLABELEMENTEDCASE"] = 1268] = "IFCSLABELEMENTEDCASE";
            ProductType[ProductType["IFCSLABSTANDARDCASE"] = 1269] = "IFCSLABSTANDARDCASE";
            ProductType[ProductType["IFCSTAIR"] = 346] = "IFCSTAIR";
            ProductType[ProductType["IFCSTAIRFLIGHT"] = 25] = "IFCSTAIRFLIGHT";
            ProductType[ProductType["IFCWALL"] = 452] = "IFCWALL";
            ProductType[ProductType["IFCWALLSTANDARDCASE"] = 453] = "IFCWALLSTANDARDCASE";
            ProductType[ProductType["IFCWALLELEMENTEDCASE"] = 1314] = "IFCWALLELEMENTEDCASE";
            ProductType[ProductType["IFCWINDOW"] = 667] = "IFCWINDOW";
            ProductType[ProductType["IFCWINDOWSTANDARDCASE"] = 1316] = "IFCWINDOWSTANDARDCASE";
            ProductType[ProductType["IFCBUILDINGELEMENTPROXY"] = 560] = "IFCBUILDINGELEMENTPROXY";
            ProductType[ProductType["IFCCOVERING"] = 382] = "IFCCOVERING";
            ProductType[ProductType["IFCCHIMNEY"] = 1120] = "IFCCHIMNEY";
            ProductType[ProductType["IFCSHADINGDEVICE"] = 1265] = "IFCSHADINGDEVICE";
            ProductType[ProductType["IFCELEMENTASSEMBLY"] = 18] = "IFCELEMENTASSEMBLY";
            ProductType[ProductType["IFCFURNISHINGELEMENT"] = 253] = "IFCFURNISHINGELEMENT";
            ProductType[ProductType["IFCFURNITURE"] = 1184] = "IFCFURNITURE";
            ProductType[ProductType["IFCSYSTEMFURNITUREELEMENT"] = 1291] = "IFCSYSTEMFURNITUREELEMENT";
            ProductType[ProductType["IFCTRANSPORTELEMENT"] = 416] = "IFCTRANSPORTELEMENT";
            ProductType[ProductType["IFCVIRTUALELEMENT"] = 168] = "IFCVIRTUALELEMENT";
            ProductType[ProductType["IFCELECTRICALELEMENT"] = 23] = "IFCELECTRICALELEMENT";
            ProductType[ProductType["IFCEQUIPMENTELEMENT"] = 212] = "IFCEQUIPMENTELEMENT";
            ProductType[ProductType["IFCCIVILELEMENT"] = 1122] = "IFCCIVILELEMENT";
            ProductType[ProductType["IFCGEOGRAPHICELEMENT"] = 1185] = "IFCGEOGRAPHICELEMENT";
            ProductType[ProductType["IFCDISTRIBUTIONPORT"] = 178] = "IFCDISTRIBUTIONPORT";
            ProductType[ProductType["IFCPROXY"] = 447] = "IFCPROXY";
            ProductType[ProductType["IFCSTRUCTURALLINEARACTION"] = 463] = "IFCSTRUCTURALLINEARACTION";
            ProductType[ProductType["IFCSTRUCTURALLINEARACTIONVARYING"] = 464] = "IFCSTRUCTURALLINEARACTIONVARYING";
            ProductType[ProductType["IFCSTRUCTURALPLANARACTION"] = 39] = "IFCSTRUCTURALPLANARACTION";
            ProductType[ProductType["IFCSTRUCTURALPLANARACTIONVARYING"] = 357] = "IFCSTRUCTURALPLANARACTIONVARYING";
            ProductType[ProductType["IFCSTRUCTURALPOINTACTION"] = 356] = "IFCSTRUCTURALPOINTACTION";
            ProductType[ProductType["IFCSTRUCTURALCURVEACTION"] = 1279] = "IFCSTRUCTURALCURVEACTION";
            ProductType[ProductType["IFCSTRUCTURALSURFACEACTION"] = 1284] = "IFCSTRUCTURALSURFACEACTION";
            ProductType[ProductType["IFCSTRUCTURALPOINTREACTION"] = 354] = "IFCSTRUCTURALPOINTREACTION";
            ProductType[ProductType["IFCSTRUCTURALCURVEREACTION"] = 1280] = "IFCSTRUCTURALCURVEREACTION";
            ProductType[ProductType["IFCSTRUCTURALSURFACEREACTION"] = 1285] = "IFCSTRUCTURALSURFACEREACTION";
            ProductType[ProductType["IFCSTRUCTURALCURVECONNECTION"] = 534] = "IFCSTRUCTURALCURVECONNECTION";
            ProductType[ProductType["IFCSTRUCTURALPOINTCONNECTION"] = 533] = "IFCSTRUCTURALPOINTCONNECTION";
            ProductType[ProductType["IFCSTRUCTURALSURFACECONNECTION"] = 264] = "IFCSTRUCTURALSURFACECONNECTION";
            ProductType[ProductType["IFCSTRUCTURALCURVEMEMBER"] = 224] = "IFCSTRUCTURALCURVEMEMBER";
            ProductType[ProductType["IFCSTRUCTURALCURVEMEMBERVARYING"] = 227] = "IFCSTRUCTURALCURVEMEMBERVARYING";
            ProductType[ProductType["IFCSTRUCTURALSURFACEMEMBER"] = 420] = "IFCSTRUCTURALSURFACEMEMBER";
            ProductType[ProductType["IFCSTRUCTURALSURFACEMEMBERVARYING"] = 421] = "IFCSTRUCTURALSURFACEMEMBERVARYING";
            ProductType[ProductType["IFCANNOTATION"] = 634] = "IFCANNOTATION";
            ProductType[ProductType["IFCBUILDING"] = 169] = "IFCBUILDING";
            ProductType[ProductType["IFCBUILDINGSTOREY"] = 459] = "IFCBUILDINGSTOREY";
            ProductType[ProductType["IFCSITE"] = 349] = "IFCSITE";
            ProductType[ProductType["IFCSPACE"] = 454] = "IFCSPACE";
            ProductType[ProductType["IFCGRID"] = 564] = "IFCGRID";
            ProductType[ProductType["IFCEXTERNALSPATIALELEMENT"] = 1174] = "IFCEXTERNALSPATIALELEMENT";
            ProductType[ProductType["IFCSPATIALZONE"] = 1275] = "IFCSPATIALZONE";
        })(ProductType = Viewer.ProductType || (Viewer.ProductType = {}));
    })(Viewer = Xbim.Viewer || (Xbim.Viewer = {}));
})(Xbim || (Xbim = {}));
//# sourceMappingURL=xbim-product-type.js.map