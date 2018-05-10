/**
 * MyFenderComplete (regular)
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

//Parte Exterior do para-lamas
class MyFenderComplete extends CGFobject
{
	constructor(scene, slices, length, width)
	{
		super(scene);

		this.exterior = new MyFenderExt(scene, slices, length);
		this.interior = new MyFenderInt(scene, slices, length, width);
	
	};

	display()
	{
		this.exterior.display();
		this.interior.display();
	}
	

};