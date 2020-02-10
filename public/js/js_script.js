/*
function menuItem(name, description, kCal, allergies, burgerPic, id) {
    this.name = name; // The this keyword refers to the object itself
    this.kCal = kCal;
	this.description = description;
    this.allergies = allergies;
	this.burgerPic = burgerPic; 
	this.id = id;
	
}

function info(item) {
	return item.name + ': ' + item.kCal + 'kCal';
	
}

let HappyBurger = new menuItem("Happy Burger", "It'	s a burger for the kids", 10, "Lactose, gluten, beef", "https://bk-emea-prd.s3.amazonaws.com/sites/burgerking.co.uk/files/18492_BK_Web_KIDSHAMBURGER_300x270px.png", "HB"); 
let bigHappyBurger = new menuItem("Big Happy Burger", "It's a juicy burger", 20, "Lactose, gluten, beef", "https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__13696__product_detail/Produktbilder%20Hemsida_unbelievable%20whopper..png", "BHB");
let bigSuperHappyBurger = new menuItem("Big Super Happy Burger", "It's a juicy burger with bacon", 30, "lactose, gluten, beef, and pork", "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=895%2C895", "BSHB");
let bigSuperHappyFunFunBurger = new menuItem("Big Super Happy Fun Fun Burger", "A giant juicy burger with everything", 50000, "lactose, gluten, beef, pork and almost everything else", "https://cdn130.picsart.com/265297481027211.png?r1024x1024", "BSHFFB");  
let bigSuperPlantBurger = new menuItem("Big Super Plant Burger", "It's a juice burger, but also vegan!", 30, "Gluten and beans", "https://i.ya-webdesign.com/images/chips-transparent-burger-5.png", "BSPB"); 



var burgers = [HappyBurger, bigHappyBurger, bigSuperHappyBurger, bigSuperHappyFunFunBurger, bigSuperPlantBurger];
var currentBurgers;
//let myElement = document.getElementById("myID");
for (var i = 0; i < burgers.length; i++)
{
	currentBurger = burgers[i];
	let id = document.getElementById(currentBurger.id);
	let btn = document.createElement("h3"); 
	btn.align = "center";
	let htext = document.createTextNode(currentBurger.name); 
	btn.appendChild(htext);
	id.appendChild(btn);
	
	let img = document.createElement("img"); 
	img.src = currentBurger.burgerPic;
	img.width = 200;
	img.height = 200;
	id.appendChild(img);
	
	let ul = document.createElement("ul");
	let description = document.createElement("li"); 
	let descText = document.createTextNode(currentBurger.description);
	description.appendChild(descText); 
	let kCal = document.createElement("li");
	let kCalText = document.createTextNode(currentBurger.kCal); 
	kCal.appendChild(kCalText);
	let allergies = document.createElement("li");
	let allrgsText = document.createTextNode(currentBurger.allergies); 
	allergies.appendChild(allrgsText);
	ul.appendChild(description); 
	ul.appendChild(kCal); 
	ul.appendChild(allergies);
	id.appendChild(ul);	
}


function getInfo()
{
	let name = document.getElementById("fullname").value
	let email = document.getElementById("email").value
	let street = document.getElementById("street").value
	let house = document.getElementById("house").value
	
	var gender;
	var radios = document.getElementsByName("gender");
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
				gender = radios[i].value;
				break;
			}
		}
	let pay = document.getElementById("payment_method").value;  
	
	let info = [name, email, street, house, gender, pay]; 
	return info; 

}


function myFunction()
{
	console.log(getInfo());
}

let myButton = document.getElementById("send");
// In JavaScript you can either trigger an event directly on an object
myButton.addEventListener("click", myFunction);


*/






