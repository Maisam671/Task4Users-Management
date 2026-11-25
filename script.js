function getUserInfo() {

    let name = document.getElementById("name").value;

    let age = Number(document.getElementById("age").value);

    let email = document.getElementById("email").value;

    let country = "Lebanon";
    let user2 = {
    name: "Sara",
    age: 25,
    email: "sara@gmail.com",
    country: "France",
    skills: ["Python", "React"]
};

let user3 = {
    name: "Ali",
    age: 20,
    email: "ali@gmail.com",
    country: "Lebanon",
    skills: ["Java", "HTML"]
};

let user4 = {
    name: "Maya",
    age: 28,
    email: "maya@gmail.com",
    country: "Canada",
    skills: ["CSS", "JavaScript"]
};

let user5 = {
    name: "Omar",
    age: 24,
    email: "omar@gmail.com",
    country: "France",
    skills: ["Python", "Java"]
};
let user1 = {
    name: "Ahmad",
    age: 22,
    email: "ahmad@gmail.com",
    country: "Lebanon",
    skills: ["HTML", "CSS", "JavaScript"]
};
    
    let user = {
        name: name,
        age: age,
        email: email,
        country: country,
        skills: []
    };
console.log(user);
console.log(users[0]); // Ahmad
console.log(users[1]); // Sara
console.log(users[2]); // Ali
console.log(users[3]); // Maya
console.log(users[4]); // Omar
console.log(users[0].name);
console.log(users[1].name);

let foundUser = users.find(function(user){
    return user.name==='Sara';
});
console.log(foundUser);
let founderUser=users.filter(function(user){
    return user.country==="Lebanon";
});
console.log(lebaneseUsers);
let sortedUsers = [...users].sort(function(a, b) {
    return a.age - b.age;
});

console.log(sortedUsers);

let userNames = users.map(function(user) {
    return user.name;
});

console.log(userNames);
let totalAge = users.reduce(function(total, user) {
    return total + user.age;
}, 0);

let numberOfUsers = users.length;

let averageAge = totalAge / numberOfUsers;

console.log("Average age:", averageAge);

}