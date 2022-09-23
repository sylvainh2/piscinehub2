iteration=0;
while(iteration<=100)
{
    message=""
    if(iteration%3==0)
    message=message+"Fizz";

    if(iteration%5==0)
    message=message+"Buzz";

    if(message=="")
    message=iteration;

    console.log(message)
    iteration=iteration+1
}