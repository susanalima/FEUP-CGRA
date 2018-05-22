
class MyFrontP1 extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		this.frontAppearance = new CGFappearance(this.scene);
		this.frontAppearance.setAmbient(0.6,0.6,0.6,1);
		this.frontAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.frontAppearance.setSpecular(1,1,1,1);	
		this.frontAppearance.setShininess(100);
		//this.frontAppearance.loadTexture("/CGRA_Final_Project/images/capot.png");
		//this.frontAppearance.loadTexture("/images/capot.png");
		

		this.frontAppearance.loadTexture("/images/flecktarn.jpg");

		this.initBuffers();
	};

	display()
	{
		this.scene.pushMatrix();
		this.frontAppearance.apply();
		super.display();
		this.scene.popMatrix();
	}

	initBuffers()
	{
		this.vertices = [
			0,0.7,0,
			0,0.7,1.8,
			-1,0.7,0,
			-1,0.7,1.8,


			];

		this.indices = [
			2,1,0,
			1,2,3,

		];
		
		

		this.normals = [
			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0,
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