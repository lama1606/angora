// function calcSum(){
//     var n1=10
//     var n2=40
//     var sum=n1+n2
//     console.log(sum)
// }
// calcSum()

/* function avg()
{
    var N1=20
    var n2=40
    var sum=N1+n2
    var final=sum/2
    console.log(final)

}
avg() */
/* 
function avg(x, y) {
  sum = x + y;
  f = sum / 2;
  console.log(f);
}
avg(20,40) */

/* function login(email , password)
{
    if(email=='lamaabdelaziz544@gmail.com' && password==0000)
    {window.alert('you can register')}
    else{
        window.alert('you cannot register')
    }
}
login('lamaabdelaziz544@gmail.com',0000) */

/* function calcSum(n1,n2)
{
    var r=n1+n2
    return r
}
function calcAvg(x,y)
{
    var sum=calcSum(20,30)
    var avg=sum/2
    
    console.log(avg)

}
calcAvg() */

/* var friends=['x','y','z','a','b']
for(var i=0;i<friends.length;i++){
    console.log(friends[i])
} */

/* var products = [
  { name: "lama", age: 20, status: "single", student: true },
  { name: "x", age: 30, status: "single", student: true },
  { name: "y", age: 22, status: "single", student: false },
  { name: "z", age: 21, status: "single", student: false },
  { name: "a", age: 18, status: "single", student: true },
  { name: "b", age: 19, status: "single", student: true },
  { name: "c", age: 16, status: "single", student: true },
];
var cartona=''
for (var i = 0; i < products.length; i++) {
    if(products[i].student ==true)
    {
        cartona+=` <div class="col-md-4 ">
                <div class="card text-center bg-info">
                    <h1>${products[i].name}</h1>
                <p>${products[i].age}</p>
                <p>${products[i].status}</p>
                <p>${products[i].student}</p>

                </div>
                
            </div>`
    }
    else
    {
        cartona+=` <div class="col-md-4 ">
                <div class="card text-center bg-danger">
                    <h1>${products[i].name}</h1>
                <p>${products[i].age}</p>
                <p>${products[i].status}</p>
                <p>${products[i].student}</p>

                </div>
                
            </div>`
    }
  
  
}
document.getElementById('data').innerHTML=cartona */


