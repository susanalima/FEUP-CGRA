
class MyBackP2 extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;


		this.backP2Appearance = new CGFappearance(this.scene);
		this.backP2Appearance.setAmbient(0.6,0.6,0.6,1);
		this.backP2Appearance.setDiffuse(0.6,0.6,0.6,1);
		this.backP2Appearance.setSpecular(1,1,1,1);	
		this.backP2Appearance.setShininess(100);
		//this.backP2Appearance.loadTexture("/CGRA_Final_Project/images/ceiling.png");
		this.backP2Appearance.loadTexture("/images/ceiling.png");
		
		
		this.initBuffers();
	};

	display()
	{
		this.scene.pushMatrix();
		this.backP2Appearance.apply();
		super.display();
		this.scene.popMatrix();
	}

	initBuffers()
	{
		this.vertices = [
			3.4,0.35,0,
			3.4,0.35,1.8,
			3.4,0.7,0,
			3.4,0.7,1.8,
			];

		this.indices = [
			2,1,0,
			1,2,3,
		];
		
		this.normals = [
		1,-1,-1,
		1,-1,1,
		1,1,-1,
		1,1,1,
		
		
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