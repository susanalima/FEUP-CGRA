/**
 * MyFenderInt (regular)
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//Parte interior do para-lamas
class MyFenderInt extends CGFobject
{
	constructor(scene, slices, length, width)
	{
		super(scene);
		this.slices = slices;
		this.length = length;
		this.width = width;


		this.initBuffers();
	};


	initBuffers()
	{
		this.vertices = 
		[	
		];
		this.normals = 
		[
		];
		this.indices =
		[
		];
		
		this.deltaAngle = Math.PI/6;
		var angle = 0.0;
		var x;
		var y;

		for(var i = 0; i < this.slices; i++)
		{
			x = Math.cos(angle)
			y = Math.sin(angle);

			this.vertices.push(x);
			this.vertices.push(y);
			this.vertices.push(0);

			//Preciso fazer modificação de normais
			//this.normals.push(0);
			//this.normals.push(0);
			//this.normals.push(1);

			angle += this.deltaAngle;
		}

		

		for(var i = 0; i < this.slices -1; i++)
		{
			//Implementação dos Indices.
		}

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	}

};