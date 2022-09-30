# Poke Mart E-Commerce
Poke Mart is an E-commerce website that allow users to purchase Pokemon, TMs, and items. Users can create an account, add items to their cart, and process the payment through Stripe 

**Link to project:** https://poke-mart-center.herokuapp.com/

![image](https://user-images.githubusercontent.com/99767112/193191556-68dedde5-8af9-4baf-b64c-0eee7b7bb708.png)

![image](https://user-images.githubusercontent.com/99767112/193191693-4e3bf65e-1c27-444a-8ec3-d73f07fea170.png)

## How It's Made:

**Tech used:** MongoDB, Express, React, Node, Stripe, Bootstrap, Redux

The Poke Mart allows users to create and log in to your account to purchase Pokemon. The home page is where the user is allowed to browse through the newest added products and as well as a set amount of product. Under the register tab, users can create a new account. Unique accounts are made through jsonwebtoken which assigns each new user a unique id. Eventually, this will be used for authentication as well. Once users register and login, they could add items to the cart. The API's created on the app focused on CRUD. For example, we could read from the database to gather products stored and display on the shop front allowing the users to add items. Lastly, users can process their prder through Stripe. 

## Lessons Learned:

In terms of the overall scope for all the personal projects I have done, this app was the biggest since it encompassed the fullstack. With creating the website,it taught me how to develop both the front and the back end. Issues that I encountered during the process is redux. I never worked with redux before and trying to understand how to use it was a challenge for me. In addition, another struggle I had was implementing the stripe payment to tailor to my needs was also another difficulty I had as well. 
