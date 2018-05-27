class MyVehicle extends CGFobject{

	constructor(scene) 
	{
		super(scene);

		this.wheelRad = 0.4;

		this.wheelLength = 0.4;

		this.frontRightDoor = new MyFrontRightDoor(this.scene,0,1,0,1);

		this.frontLeftDoor = new MyFrontLeftDoor(this.scene,0,1,0,1);

		this.frontP1 = new MyFrontP1(this.scene,0,1,0,1);

		this.frontWindow = new MyFrontWindow(this.scene,0,1,0,1);

		this.frontP2 = new MyFrontP2(this.scene,0,1,0,1);

		this.top = new MyCeiling(this.scene,0,1,0,1);

		this.backWindow = new MyBackWindow (this.scene,0,1,0,1);

		this.backP1 = new MyBackP1(this.scene,0,1,0,1);

		this.backP2 = new MyBackP2(this.scene,0,1,0,1);

		this.frontLeftWheel = new MyMovingWheel(this.scene, 20, -1, 1, -1, 1, this.wheelRad, this.wheelLength );
		
		this.frontRightWheel = new MyMovingWheel(this.scene, 20, -1, 1, -1, 1, this.wheelRad, this.wheelLength );

		this.backLeftWheel = new MyMovingWheel(this.scene, 20, -1, 1, -1, 1, this.wheelRad, this.wheelLength );

		this.backRightWheel = new MyMovingWheel(this.scene, 20, -1, 1, -1, 1, this.wheelRad, this.wheelLength );

		this.fender1 = new MyFenderComplete(this.scene,8,1,2);

		this.fender2 = new MyFenderComplete(this.scene,8,1,2);

		this.fender3 = new MyFenderComplete(this.scene,8,1,2);

		this.fender4 = new MyFenderComplete(this.scene,8,1,2);

		this.backLeftDoor = new MyBackLeftDoor(this.scene,0,1,0,1);

		this.backRightDoor = new MyBackRightDoor(this.scene,0,1,0,1);

		this.backLeftWindow = new MyBackLeftWindow(this.scene,0,1,0,1);

		this.backRightWindow = new MyBackRightWindow(this.scene,0,1,0,1);

		this.backP3 = new MyBackP3(this.scene,0,1,0,1);

		this.backLeft = new MyBackLeft(this.scene,0,1,0,1);

		this.backRight = new MyBackRight(this.scene,0,1,0,1);

		this.floor = new MyFloor(this.scene,0,1,0,1);

		this.frontHeadLight = new MyLamp(this.scene, 20,20);

		this.backHeadLight = new MyUnitCubeQuad(this.scene);

		this.grid = new MyUnitCubeQuad(this.scene);

		this.mirror = new MyLamp(this.scene, 20,20);

		this.mirrorTop = new MyTop(this.scene, 20,0,1,0,1,1);
		

		this.vehicleAppearanceList = {};

		this.appearanceKey = "0";

/****************************************************/

		this.gridAppearance = new CGFappearance(this.scene);
		this.gridAppearance.setAmbient(0.3,0.3,0.3,1);
		this.gridAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.gridAppearance.setSpecular(0.8,0.8,0.8,1);	
		this.gridAppearance.setShininess(100);
		this.gridAppearance.loadTexture("/images/grid.png");

		this.backHeadLight1Appearance = new CGFappearance(this.scene);
		this.backHeadLight1Appearance.setAmbient(0.3,0.3,0.3,1);
		this.backHeadLight1Appearance.setDiffuse(0.6,0.6,0.6,1);
		this.backHeadLight1Appearance.setSpecular(0.8,0.8,0.8,1);	
		this.backHeadLight1Appearance.setShininess(100);
		this.backHeadLight1Appearance.loadTexture("/images/backHeadLight1.png");
		
		this.backHeadLight2Appearance = new CGFappearance(this.scene);
		this.backHeadLight2Appearance.setAmbient(0.3,0.3,0.3,1);
		this.backHeadLight2Appearance.setDiffuse(0.6,0.6,0.6,1);
		this.backHeadLight2Appearance.setSpecular(0.8,0.8,0.8,1);	
		this.backHeadLight2Appearance.setShininess(100);
		this.backHeadLight2Appearance.loadTexture("/images/backHeadLight2.png");

		this.frontHeadLightAppearance = new CGFappearance(this.scene);
		this.frontHeadLightAppearance.setAmbient(0.3,0.3,0.3,1);
		this.frontHeadLightAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.frontHeadLightAppearance.setSpecular(0.8,0.8,0.8,1);	
		this.frontHeadLightAppearance.setShininess(100);
		this.frontHeadLightAppearance.loadTexture("/images/headLight.jpg");

/****************************************************/

		this.CamoAppearence = new CGFappearance(this.scene);
		this.CamoAppearence.setAmbient(0.6,0.6,0.6,1);
		this.CamoAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.CamoAppearence.setSpecular(1,1,1,1);	
		this.CamoAppearence.setShininess(100);
		this.CamoAppearence.loadTexture("/images/flecktarn.jpg");
		this.vehicleAppearanceList["0"] = this.CamoAppearence; 
		this.vehicleAppearanceList["6"] = this.CamoAppearence;
		 
		this.ZebraAppearence = new CGFappearance(this.scene);
		this.ZebraAppearence.setAmbient(0.6,0.6,0.6,1);
		this.ZebraAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.ZebraAppearence.setSpecular(1,1,1,1);	
		this.ZebraAppearence.setShininess(100);
		this.ZebraAppearence.loadTexture("/images/zebra.jpg");
		this.vehicleAppearanceList["1"] = this.ZebraAppearence;
		this.vehicleAppearanceList["7"] = this.ZebraAppearence;

		this.NormalAppearence = new CGFappearance(this.scene);
		this.NormalAppearence.setAmbient(0.6,0.6,0.6,1);
		this.NormalAppearence.setDiffuse(0.6,0.6,0.6,1);
		this.NormalAppearence.setSpecular(1,1,1,1);	
		this.NormalAppearence.setShininess(100);
		this.NormalAppearence.loadTexture("/images/ceiling.png");
		this.vehicleAppearanceList["2"] = this.NormalAppearence;
		

/****************************************************/

		this.frontSideDoorCamoAppearance = new CGFappearance(this.scene);
		this.frontSideDoorCamoAppearance.setAmbient(0.5,0.5,0.5,1);
		this.frontSideDoorCamoAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.frontSideDoorCamoAppearance.setSpecular(1,1,1,1);	
		this.frontSideDoorCamoAppearance.setShininess(50);
		this.frontSideDoorCamoAppearance.loadTexture("/images/camoFrontDoor.png");
		this.vehicleAppearanceList["3"] = this.frontSideDoorCamoAppearance;

		this.frontSideDoorNaturalAppearance = new CGFappearance(this.scene);
		this.frontSideDoorNaturalAppearance.setAmbient(0.5,0.5,0.5,1);
		this.frontSideDoorNaturalAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.frontSideDoorNaturalAppearance.setSpecular(1,1,1,1);	
		this.frontSideDoorNaturalAppearance.setShininess(50);
		this.frontSideDoorNaturalAppearance.loadTexture("/images/frontSideDoor.png");
		this.vehicleAppearanceList["5"] = this.frontSideDoorNaturalAppearance;


		this.frontSideDoorZebraAppearance = new CGFappearance(this.scene);
		this.frontSideDoorZebraAppearance.setAmbient(0.5,0.5,0.5,1);
		this.frontSideDoorZebraAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.frontSideDoorZebraAppearance.setSpecular(1,1,1,1);	
		this.frontSideDoorZebraAppearance.setShininess(50);
		this.frontSideDoorZebraAppearance.loadTexture("/images/zebraDoor.png");
		this.vehicleAppearanceList["4"] = this.frontSideDoorZebraAppearance;

/****************************************************/

		this.backSideDoorAppearance = new CGFappearance(this.scene);
		this.backSideDoorAppearance.setAmbient(0.6,0.6,0.6,1);
		this.backSideDoorAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.backSideDoorAppearance.setSpecular(1,1,1,1);	
		this.backSideDoorAppearance.setShininess(100);
		this.backSideDoorAppearance.loadTexture("/images/backSideDoor.png");
		this.vehicleAppearanceList["8"] = this.backSideDoorAppearance;

/****************************************************/

		this.mirrorAppearance = new CGFappearance(this.scene);
		this.mirrorAppearance.setAmbient(0.6,0.6,0.6,1);
		this.mirrorAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.mirrorAppearance.setSpecular(1,1,1,1);	
		this.mirrorAppearance.setShininess(100);
		this.mirrorAppearance.loadTexture("/images/mirror.jpg");

/****************************************************/

	};
	
	
	display()
	{		
		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backLeftWindow.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backRightWindow.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.frontWindow.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backWindow.display();
		this.scene.popMatrix();

/****************************************************/

		this.scene.pushMatrix();
		this.vehicleAppearanceList[(Number(this.appearanceKey)+3).toString()].apply();
		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.frontRightDoor.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.frontLeftDoor.display();
		this.scene.popMatrix();
		this.scene.popMatrix();

/****************************************************/

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.vehicleAppearanceList[(Number(this.appearanceKey)+6).toString()].apply();
		this.backLeftDoor.display();
		this.backRightDoor.display();
		this.scene.popMatrix();

/****************************************************/

		this.scene.pushMatrix();
		this.scene.translate(-0.45,0,-0.1);
		this.scene.translate(0,this.wheelRad,this.wheelLength/2);
		this.scene.rotate(-180*Math.PI/180, 0,1,0);
		this.scene.translate(0,-this.wheelRad,-this.wheelLength/2 );
		this.frontLeftWheel.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.45,0,1.5);
		this.frontRightWheel.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2.4,0,-0.1);
		this.scene.translate(0,this.wheelRad,this.wheelLength/2);
		this.scene.rotate(-180*Math.PI/180, 0,1,0);
		this.scene.translate(0,-this.wheelRad,-this.wheelLength/2 );
		this.backLeftWheel.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2.4,0,1.5);
		this.backRightWheel.display();
		this.scene.popMatrix();

/****************************************************/

		this.scene.pushMatrix();
		this.vehicleAppearanceList[this.appearanceKey].apply();

		this.scene.pushMatrix();
		this.scene.scale(0.5,0.65,0.5);
		this.scene.translate(-1,0.498,3.6)
		this.fender1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(0.5,0.68,0.5);
		this.scene.translate(4.8,0.42,3.6)
		this.fender2.display();
		this.scene.popMatrix();
	
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.5,0.68,0.5);
		this.scene.translate(-4.8,0.42,0)
		this.fender3.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.5,0.65,0.5);
		this.scene.translate(1,0.498,0)
		this.fender4.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.2,1.1,-0.1);
		this.scene.rotate(-90*Math.PI/180, 0,1,0);
		this.scene.scale(0.15,0.1,0.1);
		this.mirror.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.2,1.1,1.9);
		this.scene.rotate(-90*Math.PI/180, 0,1,0);
		this.scene.scale(0.15,0.1,0.1);
		this.mirror.display();
		this.scene.popMatrix();

		this.scene.translate(0,0.4,0);
		this.frontP1.display();
		this.frontP2.display();
		this.top.display();
		this.backP1.display();
		this.backP2.display();
		this.backLeft.display();
		this.backRight.display();
		this.backP3.display();

		this.scene.popMatrix();
		
/****************************************************/

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.floor.display();
		this.scene.popMatrix();

/****************************************************/

		this.scene.pushMatrix();
		this.gridAppearance.apply();
		this.scene.translate(-1.05,0.9,0.9);
		this.scene.scale(0.1,0.4,1.2);
		this.grid.display();
		this.scene.popMatrix();

/****************************************************/

		this.scene.pushMatrix();
		this.frontHeadLightAppearance.apply();
		this.scene.translate(-1,0.9,1.65);
		this.scene.scale(0.1,0.15,0.15);
		this.scene.rotate(90*Math.PI/180,0,-1,0);
		this.frontHeadLight.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.frontHeadLightAppearance.apply();
		this.scene.translate(-1,0.9,0.15);
		this.scene.scale(0.1,0.15,0.15);
		this.scene.rotate(90*Math.PI/180,0,-1,0);
		this.frontHeadLight.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(3.4,0.92,1.5);
		this.scene.scale(0.05,0.29,0.35);
		this.backHeadLight1Appearance.apply();
		this.backHeadLight.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(3.4,0.92,0.3);
		this.scene.scale(0.05,0.29,0.35);
		this.backHeadLight2Appearance.apply();
		this.backHeadLight.display();
		this.scene.popMatrix();

/****************************************************/
		
		this.scene.pushMatrix();
		this.mirrorAppearance.apply();

		this.scene.pushMatrix();
		this.scene.translate(0.2,1.1,-0.1);
		this.scene.rotate(90*Math.PI/180, 0,1,0);
		this.scene.scale(0.15,0.1,0.1);
		this.mirrorTop.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.2,1.1,1.9);
		this.scene.rotate(90*Math.PI/180, 0,1,0);
		this.scene.scale(0.15,0.1,0.1);
		this.mirrorTop.display();
		this.scene.popMatrix();

		this.scene.popMatrix();

	}


};