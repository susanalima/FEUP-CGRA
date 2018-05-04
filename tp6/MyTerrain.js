
/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
class MyTerrain extends Plane{

	constructor(scene, minS, maxS, minT, maxT, nrDivs, length,width) 
	{
		super(scene, minS, maxS, minT, maxT,nrDivs);
		this.scene = scene;
		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		this.nrDivs = nrDivs;
		this.length = length;
		this.width = width;



//temos de arranjar este chao que isto esta uma desgraca
		this.sandAppearence = new CGFappearance(this.scene);
		this.sandAppearence.setAmbient(0.3,0.5,0.4,1);
		this.sandAppearence.setDiffuse(1,1,0.6,1);
		//this.sandAppearence.setSpecular(1,1,0.6,1);	
		this.sandAppearence.setShininess(6);
		//this.sandAppearence.setTextureWrap('REPEAT','REPEAT');
		this.sandAppearence.loadTexture("/images/sand.jpg");
	};

	display()
	{
		this.scene.pushMatrix();
		this.scene.rotate(-90*Math.PI/180,1,0,0);
		this.scene.scale(this.length,this.width,1);
		this.sandAppearence.apply();
		super.display();
		this.scene.popMatrix();
	}

};