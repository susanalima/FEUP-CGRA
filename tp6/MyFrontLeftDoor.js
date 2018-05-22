
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
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1,
		0,0,1,
		];

		this.texCoords = [
			this.maxS-0.05,this.maxT-0.01,
			this.minS,this.maxT-0.02-0.01,
			this.maxS-0.05,0.4,
			this.maxS-0.4,this.minT+0.02,
			this.minS,this.minT+0.02,
		];		

			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};