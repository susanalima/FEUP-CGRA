
/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class Plane extends CGFobject{

	constructor(scene, minS, maxS, minT, maxT, nrDivs, altimetry) 
	{
		super(scene);

		// nrDivs = 1 if not provided
		nrDivs = typeof nrDivs !== 'undefined' ? nrDivs : 1;

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		this.altimetry = altimetry;
		
		this.nrDivs = nrDivs;
		this.patchLength = 1.0 / nrDivs;

		this.initBuffers();
	};

	getNormals(altimetry, posX, posY)
	{
		var vecs = [1, altimetry[posX][posY] - altimetry[posX][posY - 1], 1, altimetry[posX][posY] - altimetry[posX-1][posY], -1, altimetry[posX][posY] - altimetry[posX][posY+1], -1, altimetry[posX][posY]-altimetry[posX+1][posY] ];
		
		var normals1 = [-vecs[1], vecs[0]];
		var normals2 = [-vecs[3], vecs[2]];

		var normals3 = [vecs[5], -vecs[4]];
		var normals4 = [vecs[7], -vecs[6]];

		this.normals.push((normals2[0] - normals4[0]), (normals1[1] + normals2[1] + normals3[1] + normals4[1])/4, (normals1[0] + normals3[0]));
	};


	getNormalsGeneral(altimetry, posX, posY)
	{
		if(posX > 0 && posX < this.nrDivs && posY > 0 && posY < this.nrDivs)
		{
			this.getNormals(altimetry, posX, posY);
		}
		else if(posX == 0)
		{
			if(posY == 0)
			{
				var vecs = [-1, altimetry[posX][posY] - altimetry[posX][posY+1], -1, altimetry[posX][posY] - altimetry[posX+1][posY]];
				var normals1 = [vecs[1], -vecs[0]];
				var normals2 = [vecs[3], -vecs[2]];
				this.normals.push(normals2[0], Math.abs(normals1[1] + normals2[1]), normals1[0]);
			}
			else if( posY == this.nrDivs)
			{
				var vecs = [1, altimetry[posX][posY] - altimetry[posX][posY-1], -1, altimetry[posX][posY] - altimetry[posX+1][posY]];
				var normals1 = [-vecs[1], vecs[0]];
				var normals2 = [vecs[3], -vecs[2]];
				this.normals.push(normals2[0], Math.abs(normals1[1] + normals2[1]), normals1[0]);
			}
			else
			{
				var vecs = [1, altimetry[posX][posY] - altimetry[posX][posY-1], -1, altimetry[posX][posY] - altimetry[posX+1][posY], -1, altimetry[posX][posY] - altimetry[posX][posY+1]];
				var normals1 = [-vecs[1], vecs[0]];
				var normals2 = [vecs[3], -vecs[2]];
				var normals3 = [vecs[5], -vecs[4]];
				this.normals.push(normals2[0], Math.abs(normals1[1] + normals2[1] + normals3[1]), normals1[0] + normals3[0]);
			}
		}
		else if(posX == this.nrDivs)
		{
			if(posY == 0)
			{
				var vecs = [-1, altimetry[posX][posY] - altimetry[posX][posY+1], 1, altimetry[posX][posY] - altimetry[posX-1][posY]];
				var normals1 = [vecs[1], -vecs[0]];
				var normals2 = [-vecs[3], vecs[2]];
				this.normals.push(normals2[0], Math.abs(normals1[1] + normals2[1]), normals1[0]);
			}
			else if(posY == this.nrDivs)
			{
				var vecs = [1, altimetry[posX][posY] - altimetry[posX][posY-1], 1, altimetry[posX][posY] - altimetry[posX-1][posY]];
				var normals1 = [-vecs[1], vecs[0]];
				var normals2 = [-vecs[3], vecs[2]];
				this.normals.push(normals2[0], Math.abs(normals1[1] + normals2[1]), normals1[0]);
			}
			else
			{
				var vecs = [1, altimetry[posX][posY] - altimetry[posX][posY-1], 1, altimetry[posX][posY] - altimetry[posX-1][posY], -1, altimetry[posX][posY] - altimetry[posX][posY+1]];
				var normals1 = [-vecs[1], vecs[0]];
				var normals2 = [-vecs[3], vecs[2]];
				var normals3 = [vecs[5], -vecs[4]];
				this.normals.push(normals2[0], Math.abs(normals1[1] + normals2[1] + normals3[1]), normals1[0] + normals3[0]);
			}
		}
		else if(posY == 0)
		{
			var vecs = [1, altimetry[posX][posY] - altimetry[posX-1][posY], -1, altimetry[posX][posY] - altimetry[posX][posY+1], -1, altimetry[posX][posY] - altimetry[posX+1][posY]];
				var normals1 = [-vecs[1], vecs[0]];
				var normals2 = [vecs[3], -vecs[2]];
				var normals3 = [vecs[5], -vecs[4]];
				this.normals.push(normals1[0] + normals3[0], Math.abs(normals1[1] + normals2[1] + normals3[1]), normals2[0]);
		}
		else if(posY == this.nrDivs)
		{
			var vecs = [1, altimetry[posX][posY] - altimetry[posX-1][posY], 1, altimetry[posX][posY] - altimetry[posX][posY-1], 1, altimetry[posX][posY] - altimetry[posX+1][posY]];
				var normals1 = [-vecs[1], vecs[0]];
				var normals2 = [-vecs[3], vecs[2]];
				var normals3 = [vecs[5], -vecs[4]];
				this.normals.push(normals1[0] + normals3[0], Math.abs(normals1[1] + normals2[1] + normals3[1]), normals2[0]);
		}

	};

	
	initBuffers()
	{
		/* example for nrDivs = 3 :
		(numbers represent index of point in vertices array)

				y
				^
				|
		0    1  |  2    3
				|
		4	 5	|  6    7
		--------|--------------> x
		8    9  |  10  11
				|
		12  13  |  14  15    

		*/

		// Generate vertices and normals 
		this.vertices = [];
		this.normals = [];
		
		// Uncomment below to init texCoords
		this.texCoords = [];

		var yCoord = 0.5;

		var s = this.minS;
		var t = this.minT;

		var deltaS = this.maxS/this.nrDivs;
		var deltaT = this.maxT/this.nrDivs;
		
		for (var j = 0; j <= this.nrDivs; j++) 
		{
			var xCoord = -0.5;
			for (var i = 0; i <= this.nrDivs; i++) 
			{
				this.vertices.push(xCoord, yCoord, this.altimetry[j][i]);
				this.getNormalsGeneral(this.altimetry, j,i);
				//this.normals.push(0,0,1);
				
				// As this plane is being drawn on the xy plane, the normal to the plane will be along the positive z axis.
				// So all the vertices will have the same normal, (0, 0, 1).
				this.texCoords.push(s);
				this.texCoords.push(t);
				s+=deltaS;

				

				// texCoords should be computed here; uncomment and fill the blanks
				// this.texCoords.push(..., ...);

				xCoord += this.patchLength;
			}
			s= this.minS;
			t+=deltaT;
			yCoord -= this.patchLength;
		}
		console.log("Normals: ", this.normals);
		
		// Generating indices
		/* for nrDivs = 3 output will be 
			[
				 0,  4, 1,  5,  2,  6,  3,  7, 
					7,  4,
				 4,  8, 5,  9,  6, 10,  7, 11,
				   11,  8,
				 8, 12, 9, 13, 10, 14, 11, 15,
			]
		Interpreting this index list as a TRIANGLE_STRIP will draw rows of the plane (with degenerate triangles in between. */

		this.indices = [];
		var ind=0;


		for (var j = 0; j < this.nrDivs; j++) 
		{
			for (var i = 0; i <= this.nrDivs; i++) 
			{
				this.indices.push(ind);
				this.indices.push(ind+this.nrDivs+1);

				ind++;
			}
			if (j+1 < this.nrDivs)
			{
				// Extra vertices to create degenerate triangles so that the strip can wrap on the next row
				// degenerate triangles will not generate fragments
				this.indices.push(ind+this.nrDivs);
				this.indices.push(ind);
			}
		}
		
		this.primitiveType = this.scene.gl.TRIANGLE_STRIP;

	/* Alternative with TRIANGLES instead of TRIANGLE_STRIP. More indices, but no degenerate triangles */
	/*
		for (var j = 0; j < this.nrDivs; j++) 
		{
			for (var i = 0; i < this.nrDivs; i++) 
			{
				this.indices.push(ind, ind+this.nrDivs+1, ind+1);
				this.indices.push(ind+1, ind+this.nrDivs+1, ind+this.nrDivs+2 );

				ind++;
			}
			ind++;
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
	*/

		this.initGLBuffers();
	};

};