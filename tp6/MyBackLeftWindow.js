
class MyBackLeftWindow extends CGFobject
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

/*
		this.texCoords = [
			this.minS,this.maxT,
			this.maxS,this.maxT,
			this.minS,this.minT,
			this.maxS,this.minT
		];
*/
			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};