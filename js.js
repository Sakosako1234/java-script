//1
function name(){
    var namelastname = {
        saxeli : "salome",
        gvari :"lolua"
    }
    console.log(namelastname.saxeli, namelastname.gvari);
}
name()
// 2
function City(LosAngeles, NewYork, Chicago, Houston, Philadelphia){
    let cities = {
    'Los Angeles': 3792621,
    'New York': 8175133,
    'Chicago': 2695598,
    'Houston': 2099451,
    'Philadelphia': 1526006
    }
    return cities
}
console.log(City(3792621, 8175133,2695598, 2099451, 1526006));
//3
function BirthYear(year){
    let now = 2023
    let shedegi = now - year
    return shedegi
}

function NameSurname(Name, LastName){
    let user = Name + LastName
    return user
}

console.log(BirthYear(2010), NameSurname("Mariam ", "Lolua"));

// 4
function sashualo(...nums) {
    let jami = 0;
    for (const num of nums) {
      jami += num;
    }
    return jami / nums.length;
  }
  
  const nums = [10, 3, 2];
  console.log(sashualo(...nums));
  

//5
function kids(kid1, kid2, kid3, kid4){
    var klasi = {
        kid1 : kid1,
        kid2 : kid2,
        kid3 : kid3,
        kid4 : kid4
    }
    return klasi 
}
console.log(kids(12,13,11,11));

//6
function emailPassword(email, password){
    var user = {
        EMAIL : email,
        PASSWORD : password
    }
    return user
}
console.log(emailPassword("email@gmail.com","password123"));

//7
//es kargad ver gavige

//write a message here ↓

        console.log("hi");
function bot(){
    var hi = "hello"
    function chat(){
        console.log(hi,"i am a bot");
    }
    return chat()
}
bot()

//8
//???

//9
function alarm(time){
    var time = 9
    return time
}
console.log(alarm(), "საათია");

//10
function kubi(x, y, z){
    function kubebisGamotvla(a){
        return a*a*a
    }
    console.log(kubebisGamotvla(x)+kubebisGamotvla(y)+kubebisGamotvla(z));
}
kubi(4,2,9)



