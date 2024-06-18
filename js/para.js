var i = 1;


for(i; i<=10; i++){
    //variável local
    var j = 1;
    console.log("Tabuada", i)
        for(j; j <= 10; j++){
        var res = i * j;
        console.log(i, "x", j, " = ",res);
        }

        console.log("");
}