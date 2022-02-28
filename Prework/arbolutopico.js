function alturaArbolUtopico(periodos){
    let altura=1
    for(i=0;i<=periodos;i++){
        if(i%2!==0){altura=altura*2} else if (i!=0){altura=altura+1}
    }
    return altura
} 