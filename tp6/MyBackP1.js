
class MyBackP1 extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		
		this.backAppearance = new CGFappearance(this.scene);
		this.backAppearance.setAmbient(0.6,0.6,0.6,1);
		this.backAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.backAppearance.setSpecular(1,1,1,1);	
		this.backAppearance.setShininess(100);
		//this.backAppearance.loadTexture("/CGRA_Final_Project/images/capot.png");
		this.backAppearance.loadTexture("/images/capot.png");
		
		this.initBuffers();
	};
	
	display()
	{
		this.scene.pushMatrix();
		this.backAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}


	initBuffers()
	{
		this.vertices = [
			2.4,0.7,0,
			2.4,0.7,1.8,
			3.4,0.7,0,
			3.4,0.7,1.8,
			];

		this.indices = [
			0,1,2,
			3,2,1,

		];
		
		

		this.normals = [
		Math.sqrt(0.5),1,-1,
		Math.sqrt(0.5),1,1,
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