
class MyFrontRightDoor extends CGFobject
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
			0,-0.08,0,
			1.2,-0.08,0,
			0,0.7,0,
			0.5,1.2,0,
			1.2,1.2,0,
			];

		this.indices = [
			2, 1, 0, 
			2,3,4,
			1,2,4,

		];
		
		

		this.normals = [
		0,-1,-1,
		0,-1,-1,
		0,1,-1,
		0,1,-1,
		0,1,-1,
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