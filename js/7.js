var x = parseInt(prompt("enter the value of x"));
var y = parseInt(prompt("enter the value of y"));
var z = parseInt(prompt("enter the value of z"));




if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x,y,z);
			console.log(z,y,x);
        }
        else
        {
            console.log(x,z,y);
			console.log(y,z,x);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y,x,z);
			 console.log(z,x,y);
        }
        else
        {
             console.log(y,z,x);
			 console.log(x,z,y);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z,x,y);
			console.log(y,x,z);
        }
        else
        {
            console.log(z,y,x);
			console.log(x,y,z);
        }
}