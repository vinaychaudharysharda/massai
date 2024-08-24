class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }
  

  function addItem(inventory, item) {
    inventory.push(item);
  }
  

  function updateItem(inventory, id, newDetails) {
    let itemToUpdate = inventory.find(item => item.id === id);
    if (itemToUpdate) {
      Object.assign(itemToUpdate, newDetails);
    }
  }
  

  function deleteItem(inventory, id) {
    let indexToDelete = inventory.findIndex(item => item.id === id);
    if (indexToDelete !== -1) {
      inventory.splice(indexToDelete, 1);
    }
  }
  

  function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
  }
  
  function printInventory(inventory) {
    console.log('Inventory:');
    console.log(JSON.stringify(inventory, null, 2));
  }
  
 
  let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
  ];
  
  printInventory(inventory);
  
  let newItem = new Item(3, 'Orange', 15, 0.7);
  addItem(inventory, newItem);
  console.log('\nAdding item:');
  printInventory(inventory);
  
  updateItem(inventory, 2, { quantity: 30 });
  console.log('\nUpdating item:');
  printInventory(inventory);
  
  deleteItem(inventory, 2);
  console.log('\nDeleting item:');
  printInventory(inventory);
  