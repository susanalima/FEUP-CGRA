class MyCrane extends CGFobject{

	constructor(scene) 
	{
		super(scene);

		this.base = new MyCylinder(this.scene,20,1, 0.6,0.6);

		this.baseTop = new MyTop (this.scene, 20,0,1,0,1,0.6);

		this.arm1 = new MyCylinder(this.scene,20,1, 0.4,10);

		this.arm1Top = new MyTop(this.scene, 20,0,1,0,1,0.4);

		this.joint = new MyCylinder(this.scene,20,1, 0.6,0.6);

		this.jointTop = new MyTop(this.scene,20,0,1,0,1,0.6);

		this.arm2 = new MyCylinder(this.scene,20,1, 0.2,6);

		this.arm2Top = new MyTop(this.scene, 20,0,1,0,1,0.2);

		this.rope = new MyCylinder(this.scene, 20,1,0.1,1.5);

		this.magnet = new MyCylinder(this.scene,20,1,1,1);

		this.magnetTop = new MyTop(this.scene, 20,0,1,0,1,1);
	};
	
	
	display()
	{
		//crane base
		this.scene.pushMatrix();
		this.scene.rotate(-90*Math.PI/180,1,0,0);
		this.base.display();
		this.scene.translate(0,0,this.base.length);
		this.baseTop.display();
		this.scene.translate(0,0,-this.base.length);
		this.scene.rotate(180*Math.PI/180,0,1,0);
		this.baseTop.display();
		this.scene.popMatrix();

		

		//crane first arm
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.scene.rotate(-115*Math.PI/180,1,0,0);
		//this.scene.scale(0.4,0.4,10);  //12
		this.arm1.display();
		this.scene.translate(0,0,this.arm1.length);
		this.arm1Top.display();
		this.scene.popMatrix()


		//crane joint
		this.scene.pushMatrix();
		this.scene.translate(-0.025,9.7,-4.4);
		this.scene.translate(0.3,0.3,0);
		this.scene.rotate(-25*Math.PI/180,1,0,0);
		//this.scene.rotate(45*Math.PI/180,0,1,0);
		this.scene.rotate(-115*Math.PI/180,0,1,0);
		this.joint.display();
		this.scene.translate(0,0,this.joint.length);
		this.jointTop.display();
		this.scene.translate(0,0,-this.base.length);
		this.scene.rotate(180*Math.PI/180,0,1,0);
		this.baseTop.display();
		this.scene.popMatrix();

		//crande second arm
		this.scene.pushMatrix();
		this.scene.translate(0,10,-4.6);
		this.scene.rotate(-205*Math.PI/180,0,1,0);
		//this.scene.scale(0.4,0.4,10);
		this.arm2.display();
		this.scene.translate(0,0,this.arm2.length);
		this.arm2Top.display();
		this.scene.popMatrix();


		//crane "rope"
		/*this.scene.pushMatrix();
		this.scene.translate(6,10,-10);
		this.scene.rotate(-90*Math.PI/180, 1,0,0);
		this.rope.display();
		this.scene.popMatrix();*/




	}




};