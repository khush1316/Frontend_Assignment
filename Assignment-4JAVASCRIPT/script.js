function cal(){
let n1=document.getElementById('first').value;
let n2=document.getElementById('second').value;
let opr=document.getElementById('o').value;

    if(n1>0 && n2>0)
    {if(opr == '+'){
        var v=parseInt(n1)+parseInt(n2);
    }
    else if(opr == '-'){
        var v=parseInt(n1)-parseInt(n2);
    }
    if(opr == '*'){
        var v=parseInt(n1)*parseInt(n2);
    }
    else if(opr == '/'){
        var v=parseInt(n1)/parseInt(n2);
    }
    document.getElementById('ans').value = v;}
    else{
        alert("Enter positive number")
    }
}
