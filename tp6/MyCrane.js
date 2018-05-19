class MyCrane extends CGFobject{

	constructor(scene) 
	{
		super(scene);

		this.base = new MyCylinder(this.scene,20,1, 0.8,0.6);

		this.baseTop = new MyTop (this.scene, 20,0,1,0,1,0.8);

		this.arm1 = new MyCylinder(this.scene,20,1, 0.4,9);

		this.arm1Top = new MyTop(this.scene, 20,0,1,0,1,0.4);

		this.joint = new MyCylinder(this.scene,20,1, 0.6,0.6);

		this.jointTop = new MyTop(this.scene,20,0,1,0,1,0.6);

		this.arm2 = new MyCylinder(this.scene,20,1, 0.2,6);

		this.arm2Top = new MyTop(this.scene, 20,0,1,0,1,0.2);

		this.rope = new MyCylinder(this.scene, 20,1,0.1,2.5);

		this.magnet = new MyCylinder(this.scene,20,1,1,0.6);

		this.magnetTop = new MyTop(this.scene, 20,0,1,0,1,1);


		this.moveArm1 = false;

		this.moveArm2 = true;

		this.baseAngle = 40;

		this.maxBaseAngle = 180;

		this.minBaseAngle = 0;

		this.jointAngle = 25;

		this.maxJointAngle = 25;

		this.minJointAngle = -30;

		this.ropeTranslate = 0;

		this.state = 0;

		this.deltaBase = 1;

		this.deltaJoint = 1;

		this.deltaRopeTranslate = 0.1;

		this.down = false;


		this.tranportedVehicle = new MyMovingVehicle(this.scene);

		this.displayTV = false;


		
		this.carTranslate = 0;

	};


	//reescrever esta porra
	update(currTime)
	{
	
		switch(this.state){
		case 0:
		
	
		if (this.moveArm1 == true)
		{
			if (this.baseAngle < this.maxBaseAngle)
			this.baseAngle += this.deltaBase;	
			else
			{
				this.moveArm2 = true;
				this.moveArm1 = false;
				this.state = 1;

			}
		}

		if (this.moveArm2 == true )
		{
			if (this.jointAngle > this.minJointAngle&& this.down == false)
			{
				this.jointAngle -= this.deltaJoint;
				this.ropeTranslate -= this.deltaRopeTranslate;
	
			}
			else
			{
				this.down = true;
			if (this.jointAngle < 25 && this.down == true)
			{
				this.jointAngle += this.deltaJoint;
				this.ropeTranslate += this.deltaRopeTranslate;
				this.carTranslate += this.deltaRopeTranslate;

			}
			else
			{
				this.carTranslate = 5;
				this.down = false;
				this.moveArm2 = false;
				this.moveArm1 = true;
			}
			}
			
		}

			break;
		case 1:
		

		if (this.moveArm2 == true )
		{
			if (this.jointAngle > this.minJointAngle&& this.down == false)
			{
				this.jointAngle -= this.deltaJoint;
				this.ropeTranslate -= this.deltaRopeTranslate;
				this.carTranslate -= this.deltaRopeTranslate;

			}
			else
			{
			this.down = true;
			if (this.jointAngle < 25 && this.down == true)
			{
				this.jointAngle += this.deltaJoint;
				this.ropeTranslate += this.deltaRopeTranslate;

			}
			else
			{
				this.down = false;
				this.moveArm2 = false;
				this.moveArm1 = true;
			}
			}
			
		}
		
		if (this.moveArm1 == true)
		{
			if (this.baseAngle > 0)
			this.baseAngle -= this.deltaBase;	
			else
			this.state = 2;
		}
		
			break;

			case 2:

			break;
		

		}

	

			
	}
	
	
	display()
	{

		this.scene.rotate(-this.baseAngle*Math.PI/180,0,1,0);
		//crane base
		this.scene.pushMatrix();
		this.scene.rotate(-90*Math.PI/180,1,0,0);
		this.scene.translate(0.2,0,0);
		this.base.display();
		this.scene.translate(0,0,this.base.length);
		this.baseTop.display();
		this.scene.translate(0,0,-this.base.length);
		this.scene.rotate(180*Math.PI/180,0,1,0);
		this.baseTop.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();

		this.scene.rotate(-25*Math.PI/180,0,0,1);
		


		//crane first arm
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.scene.rotate(-90*Math.PI/180,1,0,0);
		//this.scene.rotate(25*Math.PI/180,0,1,0);
		//this.scene.rotate(-115*Math.PI/180,1,0,0);
		//this.scene.scale(0.4,0.4,10);  //12
		this.arm1.display();
		this.scene.translate(0,0,this.arm1.length);
		this.arm1Top.display();
		this.scene.popMatrix()




	
	//crane joint
		this.scene.pushMatrix();
		this.scene.translate(0,10,-0.3);

		//this.scene.translate(-0.025,9.7,-4.4);
		//this.scene.translate(0.3,0.3,0);
		//this.scene.rotate(25*Math.PI/180,0,1,0);
		//this.scene.rotate(-25*Math.PI/180,0,1,0);
		//this.scene.rotate(45*Math.PI/180,0,1,0);
		//this.scene.rotate(-115*Math.PI/180,0,1,0);
		this.joint.display();
		this.scene.translate(0,0,this.joint.length);
		this.jointTop.display();
		this.scene.translate(0,0,-this.base.length);
		this.scene.rotate(180*Math.PI/180,0,1,0);
		this.jointTop.display();
		this.scene.popMatrix();



		

		//crande second arm
		this.scene.pushMatrix();
		this.scene.translate(0,10,0);
		this.scene.rotate(this.jointAngle*Math.PI/180,0,0,1);
		this.scene.rotate(90*Math.PI/180,0,1,0);
		//this.scene.scale(0.4,0.4,10);
		this.arm2.display();
		this.scene.translate(0,0,this.arm2.length);
		this.arm2Top.display();
		this.scene.popMatrix();


		
		//crane "rope"
		this.scene.pushMatrix();
		this.scene.translate(6.2,10.2+this.ropeTranslate,0);
		this.scene.rotate(25*Math.PI/180,0,0,1);
		this.scene.rotate(-90*Math.PI/180, 1,0,0);
		this.rope.display();
		this.scene.popMatrix();


		//crane magnet
			this.scene.pushMatrix();
		this.scene.translate(6.2,10.2 + this.ropeTranslate,0);
		this.scene.rotate(25*Math.PI/180,0,0,1);
		this.scene.rotate(-90*Math.PI/180, 1,0,0);
		this.magnet.display();
		this.scene.translate(0,0,this.magnet.length);
		this.magnetTop.display();
		this.scene.translate(0,0,-this.magnet.length);
		this.scene.rotate(180*Math.PI/180,0,1,0);
		this.magnetTop.display();
		this.scene.popMatrix();

		
		this.scene.popMatrix();

		if (this.displayTV == true)
		{
	
			this.scene.pushMatrix();
		this.scene.rotate(-90*Math.PI/180,0,1,0);
		this.scene.translate(9,this.carTranslate,0);
		this.tranportedVehicle.display();
		this.scene.popMatrix();

		}
		
	
		

	


	}




};