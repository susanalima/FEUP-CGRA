class MyWheel extends CGFobject{

	constructor(scene , slices, minS, maxS, minT, maxT, rad, length) 
	{
		super(scene);
	
		this.slices = slices;
		this.rad = rad;
		this.length = length;



		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		this.cilindro = new MyCylinder(this.scene, this.slices, 1,this.rad,this.length);
		this.tampo = new MyTop(this.scene, this.slices, this.minS, this.maxS, this.minT, this.maxT, this.rad);
		


		this.wheelAppearance = new CGFappearance(this.scene);
		this.wheelAppearance.setAmbient(0.3,0.3,0.3,1);
		this.wheelAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.wheelAppearance.setSpecular(0.8,0.8,0.8,1);	
		this.wheelAppearance.setShininess(10);
		this.wheelAppearance.loadTexture("/images/wheel.png");


		//temos de arranjar esta textura
		this.tireAppearance = new CGFappearance(this.scene);
		this.tireAppearance.setAmbient(0.3,0.3,0.3,1);
		this.tireAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.tireAppearance.setSpecular(0.8,0.8,0.8,1);	
		this.tireAppearance.setShininess(10);
		this.tireAppearance.loadTexture("/images/tire.jpg");
	};
	
	display()
	{
		
		this.scene.translate(0,this.rad,0);

		this.scene.pushMatrix();
		this.tireAppearance.apply();
		this.cilindro.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		
		this.scene.translate(0,0,this.cilindro.length);
		this.wheelAppearance.apply();
		this.tampo.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(-1,1,1);
		this.wheelAppearance.apply();
		this.tampo.display();
		this.scene.popMatrix();
	}

};