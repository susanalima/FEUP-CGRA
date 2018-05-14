class MyCrane extends CGFobject{

	constructor(scene) 
	{
		super(scene);

		this.base = new MyCylinder(this.scene,10,1, 0.6,0.6);

		this.arm1 = new MyCylinder(this.scene,10,1, 1,1);

		this.joint = new MyCylinder(this.scene,10,1, 0.6,0.6);

		this.arm2 = new MyCylinder(this.scene,10,1, 0.6,0.6);


		
	};
	
	
	display()
	{
		this.scene.pushMatrix();
		this.scene.rotate(-90*Math.PI/180,1,0,0);
		this.base.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.scene.rotate(-115*Math.PI/180,1,0,0);

		this.scene.scale(0.4,0.4,12);

		this.arm1.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(-0.3,11.8,-5.3);
		this.scene.rotate(-25*Math.PI/180,1,0,0);
		this.scene.rotate(90*Math.PI/180,0,1,0);
		this.joint.display();
		this.scene.popMatrix();

		/*this.scene.pushMatrix();
		this.arm2.display();
		this.scene.popMatrix();*/




	}




};