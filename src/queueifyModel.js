/**
 ********************************************************************************
 * @file Data Model class for Queueify.
 * @author Ella Soderberg, Alpha Fofana, Marta Hansbo, Laila Arman
 * @version 1.0
 ********************************************************************************
 */

import { useAuth } from "./contexts/AuthContext";


class QueueifyModel {

	constructor() {
        const { currentUser } = useAuth();
		this.currentUser = currentUser;
		this.currentSession = "";
    }

    createSession(user) {
        /*
        A host can create a session.
        A session ID is created
        A new playlist is created 
        the following data is set: 
        {
            "host-token":,
            "host-uid":,
            "name":,
            "pin":,
            "playlist-id":,
        }
        */
    }

    getCurrentSession() {
        /*
        checking this.currentsession and if there is a session ongoing
        Retrieving data about currentsession from firebase
        returning session name and pin
        */ 
    }
    
    setCurrentSession(user, session, pin) {
        /*
        Check that the user has typed in the 
        Add the user to a session connected to the host and the password
        */
    };
    

    
	/**
	 * set the number of guests.
	 * @param {number} numberOfGuests
	 */
	setNumberOfGuests(numberOfGuests) {
		if (numberOfGuests <= 0)
			throw "Number of dinner guests cannot be zero or negative";
		this.numberOfGuests = numberOfGuests;
		this.notifyObservers();
	}
	/**
	 * get the number of guests.
	 * @return {number} - numberOfGuests
	 */
	getNumberOfGuests() {
		return this.numberOfGuests;
	}
	/**
	 * add observer/subscriber to the model
	 * @param  {callback} obs - callback function
	 */
	addObserver(obs) {
		this.subscribers = this.subscribers.concat(obs);
		return () => this.removeObserver(obs);
	}
	/**
	 * remove observer/subscriber from the model
	 * @param  {callback} obs - callback function
	 */
	removeObserver(obs) {
		this.subscribers = this.subscribers.filter((o) => o != obs);
	}

	/**
	 * notify the models observers/subscribes
	 */
	notifyObservers() {
		if (this.subscribers)
			this.subscribers.forEach((callback) => {
				try {
					callback();
				} catch (err) {
					console.error("Error ", err, callback);
				}
			});
		this.saveToLocalStorage();
	}

	/**
	 * Add a dish to stored dishes
	 */
	addToMenu(dish) {
		if (!dish) throw "Dish already exists";
		if (this.dishes.find((Existingdish) => Existingdish.id === dish.id))
			throw "Dish already exists";
		this.dishes = [dish, ...this.dishes];
		this.notifyObservers();
	}
	/**
	 * Get all stored dishes
	 */
	getMenu() {
		return [...this.dishes];
	}

	/**
	 * Remove a dish from the stored dishes
	 */
	removeFromMenu(dish) {
		this.dishes = this.dishes.filter(
			(Existingdish) => Existingdish.id != dish.id
		);
		this.notifyObservers();
	}

	/**
	 * Store the id for the "Current Dish"
	 */
	setCurrentDish(id) {
		//if (!id) throw "Missing dish id";
		this.currentDish = id;
		this.notifyObservers();
	}

	//TODO: Confirm, Should these reside in the model?
	/**
	 * Calculate the total price of stored dishes
	 */
	calculateTotalPrice() {
		let totalPrice = 0;
		this.dishes.forEach(
			(dish) => (totalPrice += dish.pricePerServing * this.numberOfGuests)
		);
		return Number.parseFloat(totalPrice).toFixed(2);
	}

	/* 	sortIngredients() {
		let ing = [];
		this.dishes.forEach(
			(dish) => (ing = ing.concat(dish.extendedIngredients))
		); // Adding all the ingredients to an array

		let ingDict = {};
		ing.forEach(
			// For each ingredient...
			(ing) =>
				(ingDict[ing.name] = {
					// Add it to a dictionary
					name: ing.name,
					aisle: ing.aisle,
					unit: ing.unit,
					amount:
						ingDict[ing.name] && ingDict[ing.name].unit == ing.unit // And if the ingredient is already in the dictionary...
							? (ingDict[ing.name].amount +=
									ing.amount * this.numberOfGuests) // Add the amount to the previous amount
							: ing.amount * this.numberOfGuests, // If not, just add the amount
				})
		);
		return ingDict;
	} */

	/**
	 * Get destinct ingredients together with their amount, aisle and unit
	 */
	getIngredients() {
		const ingredients = {}; // empty object used as mapping
		this.dishes.forEach((dish) =>
			dish.extendedIngredients.forEach((ingredient) => {
				if (!ingredients[ingredient.name])
					// ingredient not taken into account yet
					// associate the ingredient with the name
					// {...i } is a *copy* of the ingredient (spread syntax)
					// we copy just in case, as we’ll change the object below
					ingredients[ingredient.name] = { ...ingredient };
				else ingredients[ingredient.name].amount += ingredient.amount;
			})
		);
		//console.log(Object.values(ingredients));
		return Object.values(ingredients);
	}

	/**
	 * Determine a dish Type
	 */
	dishType(dish) {
		const types = ["starter", "main course", "dessert"]; // TODO: Keep this constant in one place, exists in SearchFormView
		const tp = dish.dishTypes.filter((value) => types.includes(value));
		if (tp.length) return tp[0];
		return "";
	}

	/**
	 * Compare Dishes to order with types as sorting criterion:
	 * 1. Aisle
	 * 2. Ingredient name
	 */
	compareDishes(a, b) {
		const types = ["starter", "main course", "dessert"]; // TODO: Keep this constant in one place, exists in SearchFormView
		let ai = types.indexOf(this.dishType(a));
		let bi = types.indexOf(this.dishType(b));
		let val = 0;
		if (ai < bi) val = -1;
		else if (ai > bi) val = 1;
		return val;
	}

	/**
	 * Compare ingredients to order in alphabetical order with sorting criterions:
	 * 1. Aisle
	 * 2. Ingredient name
	 */
	compareIngredients(a, b) {
		if (a.aisle < b.aisle) return -1;
		else if (a.aisle > b.aisle) return 1; // TODO return 1 if a.aisle > b.aisle. Note: not >= !!!

		// At this point, we know that a.aisle===b.aisle
		if (a.name < b.name) return -1; // TODO compare a.name with b.name, return 1 or -1 based on that
		if (a.name > b.name) return 1; // TODO compare a.name with b.name, return 1 or -1 based on that
		/* if a.name===b.name throw an error because 
       ingredient names are not unique as specified, so 
	   there’s a bug */
		if (a.name === b.name) throw "Equal ingredient can't be compared!";
	}

	/**
	 * Save the Model to localStorage
	 */
	saveToLocalStorage() {
		localStorage.setItem(
			"dinnerModel",
			JSON.stringify({
				//Conversion from object to String (serialization)
				numberOfGuests: this.numberOfGuests,
				dishes: this.dishes,
				currentDish: this.currentDish,
			})
		);

		//Option 2 (Save to local storage by observing data model)
		// this.addObserver(() => {
		// 	localStorage.setItem(
		// 		"dinnerModel",
		// 		JSON.stringify({
		// 			//Conversion from object to String (serialization)
		// 			numberOfGuests: this.numberOfGuests,
		// 			dishes: this.dishes,
		// 			currentDish: this.currentDish,
		// 		})
		// 	);
		// });
	}

	/**
	 * Load the Model from localStorage
	 */
	//loadFromLocalStorage() { //TODO: Complete this method
	//}
}
