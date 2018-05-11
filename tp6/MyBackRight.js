
class MyBackRight extends CGFobject
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
			2.9,-0.08,0,
			3.4,0.35,0,
			2.9,0.7,0,
			3.4,0.7,0,
			];

		this.indices = [
			2,1,0,
			1,2,3,
		];
		
		this.normals = [
		Math.sqrt(0.5),-1,-1,
		Math.sqrt(0.5),-1,-1,
		0,1,-1,
		1,1,-1,
		
		
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