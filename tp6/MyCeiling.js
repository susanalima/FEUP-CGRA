
class MyCeiling extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		
		this.ceilingAppearance = new CGFappearance(this.scene);
		this.ceilingAppearance.setAmbient(0.6,0.6,0.6,1);
		this.ceilingAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.ceilingAppearance.setSpecular(1,1,1,1);	
		this.ceilingAppearance.setShininess(100);
		//this.ceilingAppearance.loadTexture("/CGRA_Final_Project/images/ceiling.png");
		//this.ceilingAppearance.loadTexture("/images/ceiling.png");
		
	

	
		this.ceilingAppearance.loadTexture("/images/flecktarn.jpg");
		
		this.initBuffers();
	};

	
	display()
	{
		this.scene.pushMatrix();
		this.ceilingAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}


	initBuffers()
	{
		this.vertices = [
			0.5,1.2,0,
			0.5,1.2,1.8,
			1.9,1.2,0,
			1.9,1.2,1.8,
				
			];

		this.indices = [
			0,1,2,
			3,2,1,
			

		];
		
		this.normals = [
			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0,
		];


		this.texCoords = [
			this.minS,this.minT,
			this.minS,this.maxT,
			this.maxS,this.minT,
			this.maxS,this.maxT
		];

			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};