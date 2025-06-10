

//dictionary of application semantic resources
var APP_VOC = {
	"Ontos" : {
		PRJ : "??APP_ONTOS_PROJECT_URI",
		WDS : "??APP_ONTOS_WDS_URI",
		WDS_NS : "??APP_ONTOS_WDS_URI/"
	},
	"Type" : {
		PRJ : "??APP_TYPE_PROJECT_URI",
		WDS : "??APP_TYPE_WDS_URI",
		WDS_NS : "??APP_TYPE_WDS_URI/"
	},
	"TypeNQ" : {
		PRJ : "??APP_TYPE_PROJECT_URI_namedQueries",
		WDS : "??APP_TYPE_WDS_URI_namedQueries",
		WDS_NS : "??APP_TYPE_WDS_URI_namedQueries/"
	},
	"TasorApplication": {
		"MENU_APP_STATE_CONF" : "http://dev.virtuona.rs/virtdev_scas/resources/TasorApplication/MenuAppStateConfiguration",
		"GENERIC_APP_STATE_CONF": "http://dev.virtuona.rs/virtdev_scas/resources/TasorApplication/RID-C67EAEE5-6A93-47BB-9BD2-E593C7A05AB4"
	},
	init : function(){
		for(var vocab in APP_VOC){
			for(var name in APP_VOC[vocab]){
				if(name!="PRJ" && name!="WDS" && name!="WDS_NS"){
					if(isset(APP_VOC[vocab].WDS_NS)){
						var vocabNS = APP_VOC[vocab].WDS_NS;
						APP_VOC[vocab][name] = vocabNS + APP_VOC[vocab][name];
					}
				}
			}
		}
	}
}