function handleDragStart (e)  {       
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer.setData("elementID",e.target.id);
}

function handleDragDrop (e) {
  const data = e.dataTransfer.getData("elementID");
  if(e.target.id==="drag-dropItems" || e.target.id==="drag-dragItems"){
    e.target.appendChild(document.getElementById(data));
  }
  else{
    e.target.parentNode.insertBefore(document.getElementById(data), e.target.parentNode.querySelector(`#${e.target.id}`))
  }
}
    
const handleDragOver = (e:DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}
