var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

class LightingScene extends CGFscene 
{
	constructor()
	{
		super();

	};

	init(application) 
	{
		super.init(application);

		this.enableTextures(true);

		this.initCameras();

		this.initLights();
		
		this.gl.clearColor(0.53, 0.81, 0.98, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		this.light1=true; 
		this.light2=true; 
		this.speed=3;

		this.axisDisplay = false;
	
		this.setUpdatePeriod(20);


		//terreno
		this.terrain = new MyTerrain(this,0,1,0,1,50,50,50);

		
		//roda
		this.wheel = new MyMovingWheel(this, 20, -1, 1, -1, 1, 0.5, 0.4);

		//para-lamas
		
		this.fender1 = new MyFenderComplete(this,8,1,2);

		this.fender2 = new MyFenderComplete(this,8,1,2);

		this.fender3 = new MyFenderComplete(this,8,1,2);

		this.fender4 = new MyFenderComplete(this,8,1,2);

		//vehicle
		this.vehicle = new MyMovingVehicle(this);



		
	};

	initCameras() 
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights() 
	{
		this.setGlobalAmbientLight(0,0,0, 1.0);
		
		this.lights[0].setPosition(2, 3, 1, 1);
        this.lights[0].setDiffuse(1.0,1.0,1.0,1.0);
       	this.lights[0].enable();  
        this.lights[0].setVisible(true);
      
		
		this.lights[1].setPosition(-3, 3, 1, 1);
        this.lights[1].setDiffuse(1.0,1.0,1.0,1.0);
        this.lights[1].enable();
        this.lights[1].setVisible(true);
       


	};

	updateLights() 
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}

	checkKeys()
	{
		var text="Keys pressed: ";
		var keysPressed=false;
		if (this.gui.isKeyPressed("KeyW"))
		{
			text+=" W ";
			this.vehicle.velocity  = this.vehicle.velocity + 0.0001;
			keysPressed=true;
			
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
			text+=" S ";
			this.vehicle.velocity = this.vehicle.velocity - 0.0001;
				
			keysPressed=true;
			
		}
		if (this.gui.isKeyPressed("KeyA"))
		{
			text+=" A ";
			this.vehicle.turnFrontWheelsToTheLeft();


			this.vehicle.angle += 0.05;

			keysPressed=true;
			
		}
		if (this.gui.isKeyPressed("KeyD"))
		{
			text+=" D ";
			this.vehicle.turnFrontWheelsToTheRight();

			this.vehicle.angle -= 0.05;
		
			keysPressed=true;
			
		}
		if (keysPressed)
		console.log(text);
	}


	update(currTime)
	{
		this.checkKeys();
		this.vehicle.update(currTime);

	}



	displayAxis()
	{
		this.axisDisplay = !this.axisDisplay;
	};



	display() 
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
	
	//	if (this.axisDisplay)
			this.axis.display();
	


		//terreno
		this.pushMatrix();
		this.terrain.display();
		this.popMatrix();


		//veiculo
		this.pushMatrix();
		//this.translate(2,0,0);
		this.vehicle.display();
		this.popMatrix();

			
	



		//cena de ligar e desligar as luzes

		if(this.light1 == false)
			this.lights[0].disable();
		else
			this.lights[0].enable();



		if(this.light2 == false)
			this.lights[1].disable();
		else
			this.lights[1].enable();


	};








};
