
class MyFrontP2 extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		
		this.frontP2Appearance = new CGFappearance(this.scene);
		this.frontP2Appearance.setAmbient(0.6,0.6,0.6,1);
		this.frontP2Appearance.setDiffuse(0.6,0.6,0.6,1);
		this.frontP2Appearance.setSpecular(1,1,1,1);	
		this.frontP2Appearance.setShininess(100);
		//this.frontP2Appearance.loadTexture("/CGRA_Final_Project/images/ceiling.png");
		this.frontP2Appearance.loadTexture("/images/ceiling.png");

		this.initBuffers();
	};

	display()
	{
		this.scene.pushMatrix();
		this.frontP2Appearance.apply();
		super.display();
		this.scene.popMatrix();
	}


	initBuffers()
	{
		this.vertices = [
			-1,-0.08,0,
			-1,-0.08,1.8,
			-1,0.7,0,
			-1,0.7,1.8,
			];

		this.indices = [
			0,1,2,
			3,2,1,
			

		];
		
		this.normals = [
		-1,0,0,
		-1,0,0,
		-1,0,0,
		-1,0,0,
	
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