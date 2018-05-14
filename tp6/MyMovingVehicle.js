class MyMovingVehicle extends CGFobject{

	constructor(scene)
	{
		super(scene);
		this.vehicle = new MyVehicle(scene);
		this.isMoving = true;
		this.xdeltaMov = 20;
		this.x = -1.4;
		this.firstX = -10;

		this.ydeltaMov = 20;
		this.y = 0;
		this.z = -0.9;
		this.firstZ = -10;

		this.previousMov = 0;
		this.angle = Math.PI;
		this.velocity = 0;


		this.maxTurningAngle = 35;


		this.movSide = 0;

	
	};
	


	update(currTime)
	{
		this.x -= this.velocity*this.xdeltaMov*Math.cos(this.angle);
		this.z += this.velocity*this.xdeltaMov*Math.sin(this.angle);

		if(this.x < -0.0001  || this.x > 0.0001)
		{
			this.updateWheels(currTime);
		}

		else
		{
			this.setWheelsMov(false);
		}
	}



	updateWheels(currTime)
	{
		this.setWheelsVelocity();

		this.vehicle.backLeftWheel.update(currTime);

		this.vehicle.backRightWheel.update(currTime);

		this.vehicle.frontLeftWheel.update(currTime);

		this.vehicle.frontRightWheel.update(currTime);
	}


	setWheelsMov(mov)
	{
		this.vehicle.backLeftWheel.isMoving = mov;

		this.vehicle.backRightWheel.isMoving = mov;

		this.vehicle.frontLeftWheel.isMoving = mov;

		this.vehicle.frontRightWheel.isMoving = mov;
	}


	setWheelsVelocity()
	{
		this.vehicle.backLeftWheel.setVelocity(this.velocity);
				
		this.vehicle.backRightWheel.setVelocity(this.velocity);

		this.vehicle.frontLeftWheel.setVelocity(this.velocity);

		this.vehicle.frontRightWheel.setVelocity(this.velocity);

		this.setWheelsMov(true);
	}



	turnFrontWheelsToTheRight()
	{
		if (this.vehicle.frontRightWheel.movSide >  -this.maxTurningAngle)
		{
			this.vehicle.frontRightWheel.movSide -= 5;
			this.vehicle.frontLeftWheel.movSide -= 5;
		}
	}


	turnFrontWheelsToTheLeft()
	{
		if (this.vehicle.frontRightWheel.movSide < this.maxTurningAngle)
		{
			this.vehicle.frontRightWheel.movSide += 5;
			this.vehicle.frontLeftWheel.movSide += 5;
		}
	}


	display()
	{

		this.scene.translate(this.firstX,0,this.firstZ);
		this.scene.translate(this.x+1.4,0,this.z+0.9);
			
		this.scene.rotate(this.angle,0,1,0);
		
	
		this.scene.translate(-this.x-1.4,0,-this.z-0.9);
		
			

		if(this.x < -0.0001  || this.x > 0.0001)
			this.scene.translate(this.x,0,this.z);

		
		this.vehicle.display();
	}

};