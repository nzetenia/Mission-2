const itemSelectEl = document.getElementById("wines");
const quantityInputEl= document.getElementById("quantity")
const shoppingListDisplayEl =document.getElementById("shopping-list-display");
const shoppingList=[];

function addItem(event){
    event.preventDefault();
    
    console.log(itemSelectEl.value);
    console.log(quantityInputEl.value);
    shoppingList.push({
      item:itemSelectEl.value, 
      quantity:quantityInputEl.value,
    });
    console.log(shoppingList)
    listDisplayEl();

}
function listDisplayEl(){
  shoppingListDisplayEl.innerHTML="";
  // shoppingListDisplayEl.textContent=shoppingList[0].item + " x " + shoppingList[0].quantity; 
  for (const itemEl of shoppingList){
    shoppingListDisplayEl.innerHTML = shoppingListDisplayEl.innerHTML +
      `${itemEl.item} x ${itemEl.quantity} Qty <span onclick="deleteItem(${shoppingList.indexOf(
              itemEl
            )})"> &#10060</span><br/>`;
  }
  
  console.log(shoppingList[0].item, shoppingList[0].quantity);
}
function deleteItem(itemToDelete){
  shoppingList.splice (itemToDelete,1)
  console.log(shoppingList)
  listDisplayEl()
}