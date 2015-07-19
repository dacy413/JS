var _ = require('lodash');

var users = [
    {'user':'dacy','age':26},
    {'user':'daisy','age':27},
    {'user':'daixi','age':29}];

var names = _.chain(users)
.map(function(user){
    return user.user;
})
.join(" , ")
.value();

console.log(names);
