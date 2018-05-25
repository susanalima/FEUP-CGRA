
class MyBackRightWindow extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		

		this.backSideWindowAppearance = new CGFappearance(this.scene);
		this.backSideWindowAppearance.setAmbient(0.3,0.3,0.3,1);
		this.backSideWindowAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.backSideWindowAppearance.setSpecular(0.1,0.1,0.1,1);	
		this.backSideWindowAppearance.setShininess(4);

		this.backSideWindowAppearance.loadTexture("/images/backSideWindow1.png");
		
		this.initBuffers();
	};

	display()
	{
		this.scene.pushMatrix();
		this.backSideWindowAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}

	initBuffers()
	{
		this.vertices = [
			1.2,0.7,0,
			2.4,0.7,0,
			1.2,1.2,0,
			1.9,1.2,0,
			];

		this.indices = [
			2,1,0,
			1,2,3,

		];
		
		

		this.normals = [
			0,0,-1,
		0,0,-1,
		0,0,-1,
		0,0,-1,
		];


		this.texCoords = [
			this.maxS,this.maxT,
			this.minS,this.maxT,
			this.maxS,this.minT,
			this.minS+0.2,this.minT,
			
		];

			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};