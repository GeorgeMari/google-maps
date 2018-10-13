function AboutAssistant(argFromPusher) {
}

AboutAssistant.prototype = {
	setup: function() {

//setup localized text and variables
$("AppTitleText").innerHTML = $L(Mojo.Controller.appInfo.title);
$("AppVersionText").innerHTML = Mojo.Controller.appInfo.version + ", " + $L("by") + " George Mari - (API v" + google.maps.version + ")";
$("AppDescription").innerHTML = $L("This application is trying to be a replacement of unsupported Google Maps application for WebOS devices.");
$("ChangelogText").innerHTML = $L("Changelog");
$("DescriptionText").innerHTML = $L("Description");
$("ContributorsText").innerHTML = $L("Contributors");

if(this.isTouchPad()){

		var menuModel = {
  visible: true,
  items: [
      {
          items: [
              { icon: "back", command: "goBack"},
          ]
      }
  ]
};
this.controller.setupWidget(Mojo.Menu.commandMenu,
         this.attributes = {
             spacerHeight: 0,
             menuClass: 'no-fade'
         },
         menuModel
	);

}; // konec if Touchpad
		
},
	
handleCommand: function(event) {
                if (event.type === Mojo.Event.command) {
                        if (event.command == 'goBack') {
                        this.controller.stageController.popScene();
                        }
                }
                

  },
  
	isTouchPad: function(){

    if(Mojo.Environment.DeviceInfo.modelNameAscii.indexOf("ouch")>-1) {

        return true;

		}

		if(Mojo.Environment.DeviceInfo.screenWidth==1024){ return true; }

		if(Mojo.Environment.DeviceInfo.screenHeight==1024){ return true; }

 

		return false;

},
	cleanup: function() {
	}
};
