# Node.js & MySQL
## Overview
* The app will take in orders from customers and deplete stock from the store's inventory.
* Require the MySQL and Inquirer npm packages.
* Bonus: Program it to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.
* **HINT**: There may be an NPM package that can log the table to the console.

## Submission Guide
* Use GitHub. Also:
  * Include screenshots of typical user flows through the app (for the customer AND manager). This includes views of the prompts and the responses after their selection. Put the screenshots into a README.md - The screenshots and README.md will be part of your grade.

[Click here for markdown file instructions](https://guides.github.com/features/mastering-markdown/)

## Instructions
### Step #1: Customer View
1. Create a database called `bamazon` then create a table called `products`.

2. The products table should have:
  * item_id (unique id for each product)
  * product_name (Name of product)
  * department_name
  * price (cost to customer)
  * stock_quantity (how much of the product is available in stores)

3. Populate this database with 10 products.

4. Create a Node application called `bamazonCustomer.js`. It should first display all of the items available for sale. Include the ids, names, and prices of products for sale.

5. Prompt users with two messages:
  * Ask for the ID of the product they want.
  * Ask how many units of the product they want.

6. Check if there is enough product to fulfill the request.
  * If not, the app should log an error then start over.
  * If there is, fulfill the order.
    * Update the SQL database quantity for the product.
    * Show the customer the total cost of their purchase.

### Step 2: Manager View
* Create a new Node application called `bamazonManager.js`. Running this application will:
  * List a set of menu options:
    * View Products for Sale (Lists every available item: the item IDs, names, prices, and quantities.)
    * View Low Inventory (Lists all items with an inventory count lower than five.)
    * Add to Inventory (Displays a prompt that will let you "add more" of an existing item.)
    * Add New Product (Allows you to add a completely new product to the store.)