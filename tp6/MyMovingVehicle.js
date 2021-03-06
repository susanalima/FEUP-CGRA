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

		this.movingAngle = this.angle;

	
	};
	


	update(currTime)
	{
		if (this.isMoving)
		{
			var deltaX;
			var deltaZ;
			deltaX = this.velocity*this.xdeltaMov*Math.cos(this.angle);
			deltaZ = this.velocity*this.xdeltaMov*Math.sin(this.angle);
			this.x -= deltaX;
			this.z += deltaZ;

			if (Math.abs(deltaX) < 0.00000000000001)
				this.velocity = 0;
			this.updateWheels(currTime);
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
		this.vehicle.backLeftWheel.setVelocity(-this.velocity);
				
		this.vehicle.backRightWheel.setVelocity(this.velocity);

		this.vehicle.frontLeftWheel.setVelocity(-this.velocity);

		this.vehicle.frontRightWheel.setVelocity(this.velocity);

		this.setWheelsMov(true);
	}



	turnFrontWheelsToTheRight()
	{
		if (this.vehicle.frontRightWheel.movSide >  -this.maxTurningAngle)
		{
			this.vehicle.frontRightWheel.movSide -= 5*this.velocity*100;
			this.vehicle.frontLeftWheel.movSide -= 5*this.velocity*100;
		}
	}


	turnFrontWheelsToTheLeft()
	{
		if (this.vehicle.frontRightWheel.movSide < this.maxTurningAngle)
		{
			this.vehicle.frontRightWheel.movSide += 5*this.velocity*100;
			this.vehicle.frontLeftWheel.movSide += 5*this.velocity*100;
		}
	}


	display()
	{
		if (this.isMoving)
			this.movingAngle = this.angle;

			this.scene.translate(this.x+1.4,0,this.z+0.9);	
			this.scene.rotate(this.movingAngle,0,1,0);
			this.scene.translate(-this.x-1.4,0,-this.z-0.9);

	

			this.scene.translate(this.x,0,this.z);

		
		this.vehicle.display();
	}

};