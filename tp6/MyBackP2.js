
class MyBackP2 extends CGFobject
{
	constructor(scene,minS,maxS,minT,maxT) 
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;


	
		this.initBuffers();
	};

	

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
		1,0,0,
		1,0,0,
		1,0,0,
		1,0,0,
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