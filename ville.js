hauteur=20
largeur=40
message=""
var model=new Array()
caractere="M"
// ciel de la ville
for(i=1;i<hauteur*4/10;i++)
    console.log("");
// ville
for(j=1;j<=hauteur*6/10;j++)
{
    for(i=1;i<=largeur;i++)
    {
        motif=Math.floor(Math.random()*12);
        if(motif==3 || model[i]==1)
        {
            model[i]=1;
            message=message+caractere;
        }
        else
        {
            model[i]=0;
            message=message+" ";
        }
    }
    console.log(message);
    message="";
}