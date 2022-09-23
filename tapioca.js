var multiplicateur=[3,5,7,13]
var message=["Fizz","Buzz","Tapioca","Formica"]
var ardoise=""
for(i=1;i<=100;i++)
{
    ardoise="";
    for (j=0;j<4;j++)
    {
        if (i%multiplicateur[j]==0)
            ardoise=ardoise+message[j]
    }
    if (ardoise=="")
        console.log(i)
    else
        console.log(ardoise)
}