const outputS = document.getElementById("outputResult");

    function display(number){
        outputS.value += number;
    }

    function calculate(){
        try{
            outputS.value = eval(outputS.value);
        }
        catch(err){
            alert("Invalid argument !!!")
        }
    }

    function Clear(){
        outputS.value = "";
    }

    function Del(){
        outputS.value = outputS.value.slice(0,-1);
    }