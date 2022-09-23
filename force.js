solution="7459"
unite=0
dizaine=0
centaine=0
millier=0
trouve= false
sol=0
for(millier=0;millier<=9;millier++)
{
    for(centaine=0;centaine<=9;centaine++)
    {
        for(dizaine=0;dizaine<=9;dizaine++)
        {
            for(unite=0;unite<=9;unite++)
            {
                calcul=((millier*1000)+(centaine*100)+(dizaine*10)+unite)
                console.log((millier*1000)+(centaine*100)+(dizaine*10)+unite)
                
                
                if (solution==calcul)
                {
                    console.log("trouvé")
                    trouve = true
                    break
                }
            }
            if(trouve)
                break
        }
        if(trouve)
         break
    }
    if(trouve)
        break
}
