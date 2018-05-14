
class MyBackLeftWindow extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		//arranjar isto para ficar melhorzinho
		this.backSideWindowAppearance = new CGFappearance(this.scene);
		this.backSideWindowAppearance.setAmbient(0.3,0.3,0.3,1);
		this.backSideWindowAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.backSideWindowAppearance.setSpecular(0.1,0.1,0.1,1);	
		this.backSideWindowAppearance.setShininess(4);
		//this.backSideWindowAppearance.loadTexture("/CGRA_Final_Project/images/backWindow.png");
	
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
			1.2,0.7,1.8,
			2.4,0.7,1.8,
			1.2,1.2,1.8,
			1.9,1.2,1.8,
			];

		this.indices = [
			0,1,2,
			3,2,1,

		];
		
		

		this.normals = [
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1,
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