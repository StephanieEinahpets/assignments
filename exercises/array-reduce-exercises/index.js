function total(arr) {
    return arr.reduce(function(final, num){
        final += num
        return final
    })
 }
 
 console.log(total([1,2,3]))



 function stringConcat(arr){
    return arr.reduce(function(final, num){
        final += num
        return final
    }, "")}
 console.log(stringConcat([1,2,3]))



 function totalVotes(arr) {
    return arr.reduce(function(final, voter){
        if(voter.voted){
            final++
        }
        return final
    }, 0)
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters))
 


 function shoppingSpree(arr) {
    return arr.reduce(function(final, item){
        final += item.price
        return final
    }, 0)
}
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist))



 function flatten(arr) {
    return arr.reduce(function(final, item){
        final += item
        return final
 }, [])
}
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays))
 


 function voterResults(arr) {
    return arr.reduce(function(final, voter){
        if(voter.age <= 25 && voter.voted){
            final.youngPeople++ 
            final.youngVotes++
        }
        if(voter.age <= 25 && !voter.voted){
            final.youngPeople++
        }
        if((voter.age > 25 && voter.age <= 35) && voter.voted){
            final.midPeople++ 
            final.midVotes++
        }
        if((voter.age > 25 && voter.age <= 35) && !voter.voted){
            final.midPeople++
        }
        if(voter.age >= 36 && voter.voted){
            final.oldPeople++
            final.oldVotes++
        }
        if(voter.age >=36 && !voter.voted){
            final.oldPeople++
        }
        return final
    }, { youngVotes: 0, youngPeople: 0, midVotes: 0, midPeople: 0, oldVotes: 0, oldPeople: 0 })
 }
 

 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1, (18-25)
  numYoungPeople: 4,
  numMidVotesPeople: 3, (26-35)
  numMidsPeople: 4, (36-55)
  numOldVotesPeople: 3, 
  numOldsPeople: 4
}
*/
