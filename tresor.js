var tresorx=11
var tresory=11
var grandeurx=2
var grandeury=2
var pointDeDepartx=10
var pointDeDeparty=10
var trouve=0
for(y=pointDeDeparty;y<=(pointDeDeparty+grandeury);y++)
{
    for(x=pointDeDepartx;x<=(pointDeDepartx+grandeurx);x++)
    {
        console.log("("+x+";"+y+")")
        if(tresorx==x && tresory==y)
        {
        console.log("j'ai trouvé le trésor")
        trouve=1
        break
        }
   
    }
    if (trouve)
    break
}
if (trouve==0)
console.log("j'ai perdu, il n'y a pas de trésor")