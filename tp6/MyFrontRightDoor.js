
class MyFrontRightDoor extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		//arranjar isto para ficar melhorzinho
		this.frontSideDoorAppearance = new CGFappearance(this.scene);
		this.frontSideDoorAppearance.setAmbient(0.5,0.5,0.5,1);
		this.frontSideDoorAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.frontSideDoorAppearance.setSpecular(1,1,1,1);	
		this.frontSideDoorAppearance.setShininess(50);
		//this.frontSideDoorAppearance.loadTexture("/CGRA_Final_Project/images/backWindow.png");
	
		//this.frontSideDoorAppearance.loadTexture("/images/frontSideDoor.png");
		this.frontSideDoorAppearance.loadTexture("/images/camoFrontDoor.png");

		this.initBuffers();
	};
	
	display()
	{
		this.scene.pushMatrix();
		this.frontSideDoorAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}


	initBuffers()
	{
		this.vertices = [
			0,-0.08,0,
			1.2,-0.08,0,
			0,0.7,0,
			0.5,1.2,0,
			1.2,1.2,0,
			];

		this.indices = [
			2, 1, 0, 
			2,3,4,
			1,2,4,

		];
		
		this.normals = [
		0,0,-1,
		0,0,-1,
		0,0,-1,
		0,0,-1,
		0,0,-1,
		];

		/*this.texCoords = [
			this.maxS-0.05,this.maxT,
			this.minS,this.maxT-0.02,
			this.maxS-0.05,0.4,
			this.maxS-0.4,this.minT+0.02,
			this.minS,this.minT+0.02,
		];*/

		this.texCoords = [
			this.maxS-0.05,this.maxT-0.01,
			this.minS,this.maxT-0.02-0.01,
			this.maxS-0.05,0.4,
			this.maxS-0.4,this.minT+0.02,
			this.minS,this.minT+0.02,
		];	

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};