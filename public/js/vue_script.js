/*const vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})


const b1 = new Vue({
  el: '#myID',
  data: {
   b1: info(HappyBurger),
   b2: info(bigHappyBurger),
   b3: info(bigSuperHappyBurger),
   b4: info(bigSuperHappyFunFunBurger),
   b5: info(bigSuperPlantBurger)
  }
})
*/

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

var menu = [HappyBurger, bigHappyBurger, bigSuperHappyBurger, bigSuperHappyFunFunBurger, bigSuperPlantBurger];


const box = new Vue({
	el:"#burgerBoxes",
	data:{
		menu: menu
	},
 });