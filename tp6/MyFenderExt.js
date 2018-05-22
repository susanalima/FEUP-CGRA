/**
 * MyFender (regular)
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//Parte Exterior do para-lamas
class MyFenderExt extends CGFobject
{
	constructor(scene, slices, length)
	{
		super(scene);
		this.slices = slices;
		this.length = length;


		this.initBuffers();
	};
	


	initBuffers()
	{
		this.vertices = 
		[
			1,1.2,0,
		];
		this.normals = 
		[
			0,0,1,
		];
		this.indices =
		[
		];
		
		this.texCoords = [];

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

			this.normals.push(0);
			this.normals.push(0);
			this.normals.push(1);

			angle += this.deltaAngle;
		}

		
			this.vertices.push(-1);
			this.vertices.push(1.2);
			this.vertices.push(0);

			this.normals.push(0);
			this.normals.push(0);
			this.normals.push(1);


		for(var i = 0; i < this.slices -1; i++)
		{
			if(i < 3)
			{
				this.indices.push(0);
				this.indices.push(i+2);
				this.indices.push(i+1);
			}
			else if(i == 3)
			{
				this.indices.push(0);
				this.indices.push(this.slices +1);
				this.indices.push(4);
			}
			else
			{
				this.indices.push(i);
				this.indices.push(this.slices +1);
				this.indices.push(i+1);
			}
		}
		
		this.texCoords.push(1);
		this.texCoords.push(0)
		angle = 0;
		for(var i = 0; i < this.slices; i++)
		{
			x = 0.5 + 0.5*Math.cos(angle)
			y =1 - 0.83*Math.sin(angle);

			this.texCoords.push(x);
			this.texCoords.push(y);
			
			angle += this.deltaAngle;
		}
		this.texCoords.push(0);
		this.texCoords.push(0)

		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	}

};