# Ben Lacy's Bamazon
## Customer Mode
* Asks you what item you want to buy and how many you want.
* Updates the inventory of the item
* Calculates total cost of the purchase.
* Asks if they want to keep shopping. If not, it ends the connection.

### Customer Mode In Action
![Customer Mode](/images/customerView.png)

## Manager Mode
* Asks you what action you want to perform.
* View Products for Sale:
    * Displays the products in the MySQL table
* View Low Inventory
    * Displays the products with less than 5 in stock
* Add to Inventory
    * Asks which product to add to and how many to add
* Add New Product
    * Asks which product to add to and how many to add

### Manager Mode In Action
![Manager Mode 1](/images/managerView-productsandlowinventory.png)
![Manager Mode 2](/images/managerView-addinventoryanditems.png)
