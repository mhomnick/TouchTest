#pragma strict

var speed : float;
var maxSpeed : float;
var minSpeed : float;
var accel : float;
var decel : float;
var slowDownSpeed : float;

var planes : GameObject;

function Start () {
	speed = 0;
	maxSpeed = 20;
	minSpeed = -20;
	accel = .8;
	decel = 1.6;
}

function Update () {
	//transform.Translate(0,0,speed * Time.deltaTime);
	//if (planes.transform.localScale.z > .1){
	//	planes.transform.localScale.z = speed * .1;
	//}
		if ((Input.GetKey("d")) || Input.touchCount	> 0 || Input.GetMouseButton(0)){
			if ((speed < maxSpeed) && (speed < 0)){
				speed += decel * Time.deltaTime;
					if (planes.transform.localScale.z > .1){
						planes.transform.localScale.z -= decel * Time.deltaTime;
					}
			}
			if ((speed < maxSpeed) && (speed >= 0)){
				speed += accel * Time.deltaTime;
					if (planes.transform.localScale.z > .1){
						planes.transform.localScale.z -= accel * Time.deltaTime;
					}
			}
		}
		
		else if (Input.GetKey("a")){
			if ((speed > minSpeed) && (speed > 0)){
				speed -= decel * Time.deltaTime;	
				if (planes.transform.localScale.z > .1){
						planes.transform.localScale.z -= decel * Time.deltaTime;
					}
			}
			if ((speed > minSpeed) && (speed <= 0)){
				speed -= accel * Time.deltaTime;
				if (planes.transform.localScale.z > .1){
						planes.transform.localScale.z -= accel * Time.deltaTime;
					}
			}
		}
		
		else  if ((!Input.GetKey("d")) && (!Input.GetKey("a")) && Input.touchCount == 0 && !Input.GetMouseButton(0)){
			speed = Mathf.Lerp(speed,0,Time.deltaTime*slowDownSpeed);
			planes.transform.localScale.z = Mathf.Lerp(planes.transform.localScale.z,1,Time.deltaTime*slowDownSpeed/3);
		}
	
}