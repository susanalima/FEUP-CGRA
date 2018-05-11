
class MyBackLeftDoor extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		this.backSideDoorAppearance = new CGFappearance(this.scene);
		this.backSideDoorAppearance.setAmbient(0.6,0.6,0.6,1);
		this.backSideDoorAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.backSideDoorAppearance.setSpecular(1,1,1,1);	
		this.backSideDoorAppearance.setShininess(100);
		//this.backSideDoorAppearance.loadTexture("/CGRA_Final_Project/images/backSideDoor.png");
		this.backSideDoorAppearance.loadTexture("/images/backSideDoor.png");
		
		this.initBuffers();
	};

	display()
	{
		this.scene.pushMatrix();
		this.backSideDoorAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}

	initBuffers()
	{
		this.vertices = [
			1.2,-0.08,1.8,
			1.9,-0.08,1.8,
			1.2,0.7,1.8,
			1.9,0.7,1.8,
			];

		this.indices = [
			0,1,2,
			3,2,1,

		];
		
		/*0,-1,1,
		0,-1,1,
		-Math.sqrt(0.5),1,1,
		-Math.sqrt(0.5),1,1,
		0,1,1,*/

		this.normals = [
		0,-1,1,
		0,-1,1,
		0,1,1,
		0,1,1,
		];

		this.texCoords = [
			
			this.maxS,this.maxT,
			this.minS,this.maxT-0.02,
			this.maxS,this.minT,
			this.minS,this.minT,
		];		
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};