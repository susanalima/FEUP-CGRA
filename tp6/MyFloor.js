
class MyFloor extends CGFobject
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
			1.9,-0.08,1.8,
			1.9,-0.08,0,
			0,-0.08,1.8,
			0,-0.08,0,

			0,-0.08,1.4,
			0,-0.08,0.4,
			-1,-0.08,1.4,
			-1,-0.08,0.4,

			2.9,-0.08,1.4,
			2.9,-0.08,0.4,
			1.9,-0.08,1.4,
			1.9,-0.08,0.4,
			
			
			];

		this.indices = [
			2,1,0,
			1,2,3,
			
			6,5,4,
			5,6,7,

			10,9,8,
			9,10,11,

			

		];
		
		this.normals = [
			0,-1,0,
			0,-1,0,				
			0,-1,0,	
			0,-1,0,
			0,-1,0,
			0,-1,0,				
			0,-1,0,	
			0,-1,0,
			0,-1,0,
			0,-1,0,				
			0,-1,0,	
			0,-1,0,
		];
		
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};