//method - это function хранящимися как свойства
//и принадлежащая object {}
methodName: function() {
}

objectName.methodName()


function person(name, age){
	//this. - текущий объект
	this.name = name;
	this.age = age;
	this.cnahgeName = function(name){
		this.name = name
	}
};

var p = new person("Daved", 21);
p.cnahgeName("John");


function person(name, age){
	//this. - текущий объект
	this.name = name;
	this.age = age;
	//Присваиваем св-во yearOfBirth = функции bornYear
	this.yearOfBirth = bornYear;
	}
		function bornYear() {
		return 2016 - this.age;
			//function bornYear(year){
			//return 2016 - this.age;
	};
var p = new person("D", 22);
document.write(p.yearOfBirth);
			document.write(p.year);
//output

