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

	}




};