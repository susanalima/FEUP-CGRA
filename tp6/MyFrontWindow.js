
class MyFrontWindow extends CGFobject
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
			0,0.7,0,
			0,0.7,1.8,
			0.5,1.2,0,
			0.5,1.2,1.8,
			
			
			];

		this.indices = [
			0,1,2,
			3,2,1,

		];
		
		

		this.normals = [
		-Math.sqrt(0.5),Math.sqrt(0.5),0,
		-Math.sqrt(0.5),Math.sqrt(0.5),0,
		-Math.sqrt(0.5),Math.sqrt(0.5),0,
		-Math.sqrt(0.5),Math.sqrt(0.5),0,
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