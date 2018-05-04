class MyMovingWheel extends CGFobject{

	constructor(scene , slices, minS, maxS, minT, maxT, rad, length) 
	{
		super(scene);
		this.wheel = new MyWheel(scene , slices, minS, maxS, minT, maxT, rad, length);
		this.isMoving = true;
		this.deltaMov = 0;
		this.previousMov = -1;
		this.angle = 0;
		this.rad = rad;
		
		this.length = length;
		this.movSide = 0;

		
		this.perimeter = Math.PI*rad*2.0;
		this.velocity = 0;
	};
	

	//a cena das rodas nao funciona
	update(currTime)
	{
		var temp = this.deltaMov;
	
		this.deltaMov = this.velocity/this.perimeter;

		if (temp != this.deltaMov)
		    this.previousMov = temp;

		if (this.previousMov < this.deltaMov)
		{
			this.angle += this.deltaMov;
		}
		else
		{
			if(this.previousMov > this.deltaMov)
				this.angle -= this.deltaMov;
		}
		
		
	}

	

	display()
	{

		this.scene.translate(0,0,this.length/2);
		this.scene.rotate(this.movSide*Math.PI/180,0,1,0);
		this.scene.translate(0,0,-this.length/2);
		
		if (this.isMoving)
		{
			this.scene.translate(0,this.rad,0);
			this.scene.rotate(this.angle*Math.PI/180,0,0,1);
			this.scene.translate(0,-this.rad,0);

		}

		this.wheel.display();
	}

};