
var a = 12;
const b = 30;
let c = 40;
var d = 50;

document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);
document.write(`<p>c = ${c}</p>`);
document.write(`<p>d = ${d}</p><hr>`);

document.write(`<p>Inside the block</p>`)

if(d > 20) {
    document.write(`<p>a = ${a}</p>`);
    document.write(`<p>b = ${b}</p>`);
    document.write(`<p>c = ${c}</p>`);
    document.write(`<p>d = ${d}</p><hr>`);

    var x = 100;
    let y = 200;
    const z = 300;

    document.write(`<p>x = ${x}</p>`);
    document.write(`<p>y = ${y}</p>`);
    document.write(`<p>z = ${z}</p><hr>`);
}

    document.write(`<p>x = ${x}</p><hr>`);
   // document.write(`<p>y = ${y}</p>`);
   // document.write(`<p>z = ${z}</p>`);

   var isAdmin = false;
   document.write(`<p>isAdmin = ${typeof(isAdmin)}</p>`);
   document.write(`<p>isAdmin = ${isAdmin}</p>`);

   var title = "welcome to JS" /* string */
   document.write(`<p>title = ${typeof(title)}</p>`);
   document.write(`<p>title = ${title}</p>`);

   var xx = 123;
   document.write(`<p>xx = ${typeof(xx)}</p>`);
   document.write(`<p>xx = ${xx}</p>`);

   var yy = 1234;
   document.write(`<p>yy = ${typeof(yy)}</p>`);
   document.write(`<p>yy = ${yy}</p><hr>`);

   document.write(`<p>Array</p>`)

   var colors = ["orange", "blue", "green", 100, true, 500.5]
   document.write(`<p>colors = ${typeof(colors)}</p>`);
   document.write(`<p>colors = ${colors}</p><hr>`);

   document.write(`<p>Object</p>`)

   var user = {
        name : "Faizii",
        email : "aarav@gmail.com"
   };
   document.write(`<p>user=${typeof(user)}</p>`)
   document.write(`<p>user=${user}</p>`)
//function behaiovor
   function defaultFun()
   {
    document.write(`<p>This is DEFAULT FUNTION`);
    
   }
   defaultFun();

   function paramterFun(name, email){
    document.write(`<p>This is PARAMITERIZED FUNCTION.</p>`);
    document.write(`<p>First PARAMITERIZED is : ${name}</p>`);
    document.write(`<p>Second PARAMITERIZED is : ${email}</p>`);
   }

   paramterFun("JavaScript", "java@gmail.com")