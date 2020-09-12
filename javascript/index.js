var clic = 1
function h(){
   if(clic ==1){
    document.getElementById('art1').style.display="none"
    document.getElementById('art2').style.display="flex"
    console.log(clic)
    clic=clic +1 
}
else if(clic >1){
    document.getElementById('art2').style.display="none"
    document.getElementById('art1').style.display="flex"
  clic=1
  console.log(clic)
}
}
    
function m(){
    if(clic ==1){
        document.getElementById('art1').style.display="none"
        document.getElementById('art2').style.display="flex"
        console.log(clic)
        clic=clic +1 
    }
    else if(clic >1){
        document.getElementById('art2').style.display="none"
        document.getElementById('art1').style.display="flex"
      clic=1
      console.log(clic)
    }
   
}
