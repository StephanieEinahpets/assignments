
function sum(x, y){
    if (typeof x !== typeof y){
        throw new Error("data type is different")
    }
    return x + y;
}
  
try {
    const result = sum(1, 2);
    console.log(result);
    
// const invalidResult = sum(5, '7');

} catch (err) {
    console.log(err)
  }





var user = {username: "sam", password: "123abc"}

function login (username, password){
    if (username !== user.username && password !== user.password) {
        throw new Error("Username or password does not match")
      }
    
      console.log("Login successful")
    }

try {
    login("sam", "123abc")
    // login("wrong", "login")
    } catch (error) {
    console.log(error)
    }