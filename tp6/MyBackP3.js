
class MyBackP3 extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		
		this.backP3Appearance = new CGFappearance(this.scene);
		this.backP3Appearance.setAmbient(0.6,0.6,0.6,1);
		this.backP3Appearance.setDiffuse(0.6,0.6,0.6,1);
		this.backP3Appearance.setSpecular(1,1,1,1);	
		this.backP3Appearance.setShininess(100);
		//this.backP3Appearance.loadTexture("/CGRA_Final_Project/images/ceiling.png");
		this.backP3Appearance.loadTexture("/images/ceiling.png");
		
		this.initBuffers();
	};


	display()
	{
		this.scene.pushMatrix();
		this.backP3Appearance.apply();
		super.display();
		this.scene.popMatrix();
	}


	initBuffers()
	{
		this.vertices = [
			2.9,-0.08,1.8,
			2.9,-0.08,0,
			3.4,0.35,1.8,
			3.4,0.35,0,
			];

		this.indices = [
			0,1,2,
			3,2,1,
		];
		
		this.normals = [
		Math.sqrt(0.5),-Math.sqrt(0.5),1,
		Math.sqrt(0.5),-Math.sqrt(0.5),-1,
		Math.sqrt(0.5),-Math.sqrt(0.5),1,
		Math.sqrt(0.5),-Math.sqrt(0.5),-1,
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