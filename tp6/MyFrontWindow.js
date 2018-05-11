
class MyFrontWindow extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		this.frontWindowAppearance = new CGFappearance(this.scene);
		this.frontWindowAppearance.setAmbient(0.3,0.3,0.3,1);
		this.frontWindowAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.frontWindowAppearance.setSpecular(0.1,0.1,0.1,1);	
		this.frontWindowAppearance.setShininess(4);
		//this.frontWindowAppearance.loadTexture("/CGRA_Final_Project/images/frontWindow.png");

		this.frontWindowAppearance.loadTexture("/images/frontWindow.png");

		this.initBuffers();
	};

	display()
	{
		this.scene.pushMatrix();
		this.frontWindowAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}



	initBuffers()
	{
		this.vertices = [
			0,0.7,0,
			0,0.7,1.8,
			0.5,1.2,0,
			0.5,1.2,1.8,
			
			
			];

		this.indices = [
			0,1,2,
			3,2,1,

		];
		
		

		this.normals = [
		-Math.sqrt(0.5),Math.sqrt(0.5),-1,
		-Math.sqrt(0.5),Math.sqrt(0.5),1,
		-Math.sqrt(0.5),Math.sqrt(0.5),-1,
		-Math.sqrt(0.5),Math.sqrt(0.5),1,
		];


		this.texCoords = [
			this.minS,this.maxT,
			this.maxS,this.maxT,
			this.minS,this.minT,
			this.maxS,this.minT
		];

			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};

	
};