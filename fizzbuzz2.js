
for(i =1;i <=100;i++)
{
    message=""
    if(i%3==0)
    message=message+"Fizz";

    if(i%5==0)
    message=message+"Buzz";

    if(message=="")
    message=i;

    console.log(message)
}