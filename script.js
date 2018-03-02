var app = new Vue({
	el: '#app',
	data: {
	    dayOfMeal: ' ',
	    nameOfFood: ' ',
	    timeOfMeal: ' ',
	    caloriesInFood: ' ',
	    descriptionOfMeal: ' ',
	    number: 0,
	    calenderSize: ' ',
	    calenderMonth: ' ',
 	    calenderInformation: {},
	},
	methods: {
	    setMonthDayCount: function(month) {
		if (month == 1 || month == 3 || month == 5 ||
		    month == 7 || month == 8 || month == 10 || month == 12) {
		    this.calenderSize = 31;
		}
		if (month == 4 || month == 6 || month == 9 ||
		    month == 10) {
		    this.calenderSize = 30;
		}
		if (month == 2) {
		    this.calenderSize = 28;
		    console.log("madeit");
		}
		console.log(this.calenderSize);
	    },
	    addEvent: function() {
		Vue.set(app.calenderInformation, this.number, new Array);
		this.calenderInformation[this.number].push({month: this.calenderMonth, day: this.dayOfMeal, food: this.nameOfFood,
			    time: this.timeOfMeal, calories: this.caloriesInFood, description: this.descriptionOfMeal});
		this.setMonthDayCount(this.calenderMonth);
		console.log("calenderMonth", this.calenderMonth);
		console.log("day", this.dayOfMeal);
		//this.calenderMonth = ' ';
		this.dayOfMeal = ' ';
		this.nameOfFood = ' ';
		this.timeOfMeal = ' ';
		this.caloriesInFood = ' ';
		this.descriptionOfMeal = ' ';
		++this.number;
	    },
	}
    });
