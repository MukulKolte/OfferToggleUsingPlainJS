function handleClick(id){
    if(id === 3){
        document.getElementById("offer3").style.display = "none"
        document.getElementById("offer2").style.display = "flex"
        document.getElementById("offer1").style.display = "flex"
        document.getElementById("offer2").style.marginTop = "0px"
        document.getElementById("offer3-afterclick").style.display = "flex"
        document.getElementById("offer2-afterclick").style.display = "none"
        document.getElementById("offer1-afterclick").style.display = "none"
        document.getElementById("total").innerText = "Total : $36.00 USD"
    }
    else if(id === 2){
        document.getElementById("offer3").style.display = "flex"
        document.getElementById("offer2").style.display = "none"
        document.getElementById("offer1").style.display = "flex"
        document.getElementById("offer3").style.marginTop = "100px"
        document.getElementById("offer3-afterclick").style.display = "none"
        document.getElementById("offer2-afterclick").style.display = "flex"
        document.getElementById("offer1-afterclick").style.display = "none"
        document.getElementById("total").innerText = "Total : $24.00 USD"
    }
    else if(id === 1){
        document.getElementById("offer3").style.display = "flex"
        document.getElementById("offer2").style.display = "flex"
        document.getElementById("offer1").style.display = "none"
        document.getElementById("offer2").style.marginTop = "100px"
        document.getElementById("offer3").style.marginTop = "100px"
        document.getElementById("offer3-afterclick").style.display = "none"
        document.getElementById("offer2-afterclick").style.display = "none"
        document.getElementById("offer1-afterclick").style.display = "flex"
        document.getElementById("total").innerText = "Total : $18.00 USD"
    }
}