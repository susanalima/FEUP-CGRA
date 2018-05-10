class MyVehicle extends CGFobject{

	constructor(scene) 
	{
		super(scene);

		this.frontRightDoor = new MyFrontRightDoor(this.scene,0,1,0,1);

		this.frontLeftDoor = new MyFrontLeftDoor(this.scene,0,1,0,1);

		this.frontP1 = new MyFrontP1(this.scene,0,1,0,1);

		this.frontWindow = new MyFrontWindow(this.scene,0,1,0,1);

		this.frontP2 = new MyFrontP2(this.scene,0,1,0,1);

		this.top = new MyCeiling(this.scene,0,1,0,1);

		this.backWindow = new MyBackWindow (this.scene,0,1,0,1);

		this.backP1 = new MyBackP1(this.scene,0,1,0,1);

		this.backP2 = new MyBackP2(this.scene,0,1,0,1);

		this.frontLeftWheel = new MyMovingWheel(this.scene, 20, -1, 1, -1, 1, 0.4, 0.4);
		
		this.frontRightWheel = new MyMovingWheel(this.scene, 20, -1, 1, -1, 1, 0.4, 0.4);

		this.backLeftWheel = new MyMovingWheel(this.scene, 20, -1, 1, -1, 1, 0.4, 0.4);

		this.backRightWheel = new MyMovingWheel(this.scene, 20, -1, 1, -1, 1, 0.4, 0.4);

		this.fender1 = new MyFenderComplete(this.scene,8,1,2);

		this.fender2 = new MyFenderComplete(this.scene,8,1,2);

		this.fender3 = new MyFenderComplete(this.scene,8,1,2);

		this.fender4 = new MyFenderComplete(this.scene,8,1,2);

		this.backLeftDoor = new MyBackLeftDoor(this.scene,0,1,0,1);

		this.backRightDoor = new MyBackRightDoor(this.scene,0,1,0,1);

		this.backLeftWindow = new MyBackLeftWindow(this.scene,0,1,0,1);

		this.backRightWindow = new MyBackRightWindow(this.scene,0,1,0,1);

	};
	
	display()
	{
		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.frontRightDoor.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.frontLeftDoor.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();	
		this.scene.translate(0,0.4,0);
		this.frontP1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.frontWindow.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.frontP2.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.top.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backWindow.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backP1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backP2.display();
		this.scene.popMatrix();



		this.scene.pushMatrix();
		this.scene.translate(-0.45,0,-0.1);
		this.frontLeftWheel.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(-0.45,0,1.5);
		this.frontRightWheel.display();
		this.scene.popMatrix();



		this.scene.pushMatrix();
		this.scene.translate(2.4,0,-0.1);
		this.backLeftWheel.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(2.4,0,1.5);
		this.backRightWheel.display();
		this.scene.popMatrix();

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
		this.scene.translate(0,0.4,0);
		this.backLeftDoor.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backRightDoor.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backLeftWindow.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.4,0);
		this.backRightWindow.display();
		this.scene.popMatrix();


	}




};