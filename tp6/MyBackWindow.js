
class MyBackWindow extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		this.backWindowAppearance = new CGFappearance(this.scene);
		this.backWindowAppearance.setAmbient(0.3,0.3,0.3,1);
		this.backWindowAppearance.setDiffuse(0.8,0.8,0.8,1);
		this.backWindowAppearance.setSpecular(0.1,0.1,0.1,1);	
		this.backWindowAppearance.setShininess(4);
		//this.backWindowAppearance.loadTexture("/CGRA_Final_Project/images/backWindow.png");

		this.backWindowAppearance.loadTexture("/images/backWindow.png");
		this.initBuffers();
	};


	display()
	{
		this.scene.pushMatrix();
		this.backWindowAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}

	initBuffers()
	{
		this.vertices = [
			2.4,0.7,0,
			2.4,0.7,1.8,
			1.9,1.2,0,
			1.9,1.2,1.8,
			
			
			];

		this.indices = [
			2,1,0,
			1,2,3,

		];
		
		

		this.normals = [
		Math.sqrt(0.5),Math.sqrt(0.5),0,
		Math.sqrt(0.5),Math.sqrt(0.5),0,
		Math.sqrt(0.5),Math.sqrt(0.5),0,
		Math.sqrt(0.5),Math.sqrt(0.5),0,
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