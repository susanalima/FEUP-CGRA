
class MyFrontLeftDoor extends CGFobject
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
			0,-0.08,1.8,
			1.2,-0.08,1.8,
			0,0.7,1.8,
			0.5,1.2,1.8,
			1.2,1.2,1.8,
			];

		this.indices = [
			0, 1, 2, 
			4,3,2,
			4,2,1,

		];
		
		

		this.normals = [
		0,-1,1,
		0,-1,1,
		0,1,1,
		0,1,1,
		0,1,1,
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