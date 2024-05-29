"use strict";
// Q2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, "Hello 
// Eric, would you like to learn some python today?". 
// let personName: string = "Eric";
// console.log(`"Hello ${personName}, would you like to learn some python today?"`);
// Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName: string = "Syed Usman";
// console.log("Lowercase:", personName.toLowerCase());
// console.log("Uppercase:", personName.toUpperCase());
// console.log("Titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
//Q4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look 
// something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);
//Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your 
// message and store it in a new variable called message. Print your message. 
// let quote: string = "A person who never made a mistake never tried anything new.";
// let famous_person: string = "Albert Einstein";
// let message: string = (`${famous_person} once said, "${quote}"`);
// console.log(message);
//Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you
// use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then 
// print the name after striping the white spaces.
// let personName: string = `\n\t Usman \t\n`;
// console.log(personName);
// let stripping: string = personName.trim();
// console.log(stripping);
//Q7,Q8: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your 
// operations in print statements to see the results.
// Q8 :You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5+3);
// console.log(16-8);
// console.log(2*4);
// console.log(16/2);
//Q9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. 
// Print that message.
// let favoriteNumber: number = 5;
// console.log(`My Favorite Number is ${favoriteNumber}`);
//Q10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific 
// to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then 
// write one sentence describing what the program does.
// Date: 08-05-2024
// My Name is Syed Usman
// let personName: string = `\n\t Syed Usman \t\n`;  // \n is used for new line and \t is used for whitespace
// console.log(personName);
// let stripping: string = personName.trim();
// console.log(stripping);
//Q11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, 
// one at a time.
// let friends: string[] = ["Taimoor","Taha","Farhan","Zain","Saad"];
// for(let i=0; i<friends.length; i++){
//     console.log(friends[i]);
// }
// Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text 
// of each message should be the same, but each message should be personalized with the person’s name.
// let friends: string[] = ["Taimoor","Taha","Farhan","Zain","Saad"];
// for(let i=0; i<friends.length; i++){
//    console.log(`"Hello ${friends[i]} Have a Good Day!"`);
// }
// Q13: our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let favoriteTransportation: string[] = ["Civic","Bike","Bus","Train","Aeroplan"];
// for(let i=0; i<favoriteTransportation.length; i++){
//     console.log(`I would like to own a ${favoriteTransportation[i]}`);
// }
// Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let GuestList: string[] = ["Arham","Waqas","Shahid","Faraz","Nadeem"];
// for(let i=0; i<GuestList.length; i++){
//     console.log(` Dear ${GuestList[i]} \n You are cordially invited to join me for dinner. It would be an honor to have your company.`);
// }
// Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll 
// have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// let new_Guest: string[] = ["Taimoor","Talha","Taha"];
// console.log(`Unfortunately ${new_Guest[2]}, could not make it. He can't come`);
// new_Guest[2]="farhan";
// for(let i=0; i<new_Guest.length; i++){
//     console.log(`Mr ${new_Guest[i]} ,\n You are cordially invited to join me for dinner. It would be an honor to have your company.`);
// } 
// Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let new_Guest: string[] = ["Taimoor","Talha","Taha"];
// new_Guest[2]="farhan";
// new_Guest.unshift("Babar Azam");
// new_Guest.splice(3,0,"Amir");
// new_Guest.push("Naseem");
// for(let i=0; i<new_Guest.length; i++){
//    console.log(`Dear ${new_Guest[i]}, \nYou are cordially invited to join me for dinner. It would be an honor to have your company. `);
// }
// Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let new_Guest: string[] = ["Taimoor","Talha","Taha"];
// new_Guest[2] = "Farhan";
// new_Guest.unshift("Babar Azam");
// new_Guest.splice(3,0,"Amir");
// new_Guest.push("Naseem");
// console.log("Unfortunately! We Can't arrage a bigger dinner table only two guest invited.");
// while(new_Guest.length >2 ){
//     let removeGuest = new_Guest.pop()
//     console.log(`Dear ${removeGuest} , \n "Sorry you are not invited to dinner."` );
// }
// for(let i=0; i<new_Guest.length; i++){
//     console.log(`Dear ${new_Guest[i]},\n "You are still invited to dinner." `);
// }
// new_Guest.splice(0,2);
// console.log(new_Guest);
// Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
// let places: string[] = ["Canda","Australia","New Zealand","Paris","London"];
//• Print your array in its original order.
// console.log("Original Oder:" , places);
//• Print your array in alphabetical order without modifying the actual list.
// console.log("Aplhabetical Order:" , [...places].sort());
//• Show that your array is still in its original order by printing it.
// console.log("Original Order:" , places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("Reverse Alphabetical Order:" , [...places].sort().reverse());
//• Show that your array is still in its original order by printing it again.
// console.log("Original Order:" , places);
//• Reverse the order of your list. Print the array to show that its order has changed.
// console.log("Reverse Order:" , places.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log("Original Order:" , places.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log("Aplhabetical Order:" , places.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log("Reverse Alphabetical Order:" , places.sort().reverse());
//Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are
// inviting to dinner.
// let new_Guest: string[] = ["Taimoor","Talha","Taha"];
// new_Guest[2] = "Farhan";
// new_Guest.unshift("Babar Azam");
// new_Guest.splice(3,0,"Amir");
// new_Guest.push("Naseem");
// while(new_Guest.length >2 ){
//    let removeGuest = new_Guest.pop()
//    console.log(`Dear ${removeGuest} , \n "Sorry you are not invited to dinner."` );
// }
// new_Guest.splice(0,2);
// console.log(new_Guest);
// console.log(`I am inviting ${new_Guest.length} in dinner.`);
//Q20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or 
// anything else you’d like. Write a program that creates a list containing these items.
// let programingLanguages: string[] = ["Python","Java","C++","Ruby","Swift","Typescript","Javascript"];
// programingLanguages.forEach(programingLanguages => { console.log(programingLanguages);
// });
//Q21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// interface personData {
//     Name: String;
//     Age: number;
//     Education: string;
//     Student: boolean;
// };
// let personData = {
//     Name: "Usman",
//     Age: 23,
//     Education: "Intermedicate",
//     Student: true,
// };
// console.log(personData);
// interface car_modify{
//     Colour: string;
//     Model: number;
//     Car_Name: string;
//     Metal_Body: boolean; 
// };
// let car_modify = {
//     Colour: "Black",
//     Model: 123456,
//     Car_Name: "Civic",
//     Metal_Body: true,
// };
// console.log(car_modify);
//Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one 
// of your programs to produce an index error. Make sure you correct the error before closing the program.
// Array of Subjects.
// let subjects: string[] = ["English","Urdu","Chemistry","physics","Sindhi","Islamiat"];
// Intentional error: Accessing an index that is out of bounds
// Let's try to access an index that doesn't exist
// console.log(subjects[7]);
// Correcting the error: Let's access a valid index
// console.log(subjects[3]);
//Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Test 1:
// let bike = 'honda';
// console.log("Is bike == 'honda'? I predit True.");
// console.log(bike == 'honda');
//Test 2:
// console.log("Is bike !== 'car'? I predit True.");
// console.log(bike !== 'car');
//Test 3:
// console.log("Is bike !== 'toyota'? I predit True.");
// console.log(bike !== 'toyota');
//Test 4:
// console.log("Is bike !== 'civic'? I predit True.");
// console.log(bike !== 'civic');
//Test 5:
// console.log("Is bike !== 'fruits'? I predit True.");
// console.log(bike !== 'fruits');
//Testb 6:
// console.log("Is bike !== 'honda'? I predit false.");
// console.log(bike !== 'honda');
//Test 7:
// console.log("Is bike == 'car'? I predit false.");
// console.log(bike == 'car');
//Test 8:
// console.log("Is bike == 'bike'? I predit false.");
// console.log(bike == 'bike');
//Test 9:
// console.log("Is bike == 'orange'? I predit false.");
// console.log(bike == 'orange');
//Test 10:
// console.log("Is bike == 'aeroplan'? I predit false.");
// console.log(bike == 'aeroplan');
//Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
// console.log("Equality Tes:t", ("Syed Usman" as string) === "Syed Usman");
// console.log("Inequality Test:", ("Syed Usman" as string) !== "Imran Khan");
// • Tests using the lower case function
// console.log("Lowercase:", "SYED USMAN".toLowerCase() === "syed usman");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// console.log("Equality Test:", 1000 === 1000);   //Equality
// console.log("Inequality Test:", (10 as number) !== 9);   //Inequality
// console.log("Greater Than Test:", 1000 > 100);   //Greater Than
// console.log("Less Than Test:", 10 < 100);   //Less Than
// console.log("Greater Than and Equal to Test:", 10 >= 10);
// console.log("Less Than and Equal to Test:", 5 <= 10);
// • Tests using "and" and "or" operators
// console.log("And Operator Test:", true && true);
// console.log("Or Operator Test:", true || false);
// • Test whether an item is in a array
// const car: number[] = [1,2,3];
// console.log("Test Number:", car.includes(2));
// • Test whether an item is not in a array
// const car_1: number[] = [1,2,3,4,5];
// console.log("Test Number 1:", !car_1.includes(6));
// Q25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', 
// or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// let alien_color: string = "green";
// if (alien_color === "green"){
//     console.log("The Player just earned 5 points.");
// }
// alien_color = "yellow";
// if (alien_color === "green"){
//     console.log("The Player just earned 5 points.");
// }
// Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// let alienColor: string = "green";
// if (alienColor === "green"){
//     console.log("The Player just earned 5 points.");
// }
// else {
//     console.log("The Player just earned 10 points.");
// }
// alienColor = "pink";
// if (alienColor === "green"){
//     console.log("The Player just earned 5 points.");
// }
// else {
//     console.log("The Player just earned 10 points.");
// }
// Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alien_color2: string = "green";
// if (alien_color2 === "green"){
//     console.log("The Player just earned 5 points.");
// }
// else if (alien_color2 === "yellow"){
//     console.log("The Player earned 10 points.");
// }
// else if (alien_color2 === "red"){
//     console.log("The Player earned 15 points.");
// }
// else {
//     console.log("Unknown Colour");
// }
// alien_color2 = "yellow";
// if (alien_color2 === "green"){
//     console.log("The Player just earned 5 points.");
// }
// else if (alien_color2 === "yellow"){
//     console.log("The Player earned 10 points.");
// }
// else if (alien_color2 === "red"){
//     console.log("The Player earned 15 points.");
// }
// else {
//     console.log("Unknown Colour");
// }
// alien_color2 = "red";
// if (alien_color2 === "green"){
//     console.log("The Player just earned 5 points.");
// }
// else if (alien_color2 === "yellow"){
//     console.log("The Player earned 10 points.");
// }
// else if (alien_color2 === "red"){
//     console.log("The Player earned 15 points.");
// }
// else {
//     console.log("Unknown Colour");
// }
// Q28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// let age = 60;
// • If the person is less than 2 years old, print a message that the person is a baby.
// if (age < 2){
//     console.log("the person is a baby.");
// }
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// else if (age >= 2 && age < 4){
//     console.log("the person is a toddler.");
// }
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// else if (age >= 4 && age < 13){
//     console.log("the person is a kid.");
// }
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// else if (age >= 13 && age < 20){
//     console.log("the person is a teenager.");
// }
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// else if (age >= 20 && age < 65){
//     console.log("the person is a adualt.");
// }
// • If the person is age 65 or older, print a message that the person is an elder.
// else if (age >= 65 && age < 65){
// console.log("the person is a elder.");
// }
// Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits: string[] = ["Mango","Banana","Apple"];
// if (favorite_fruits.includes("Mango")){
//     console.log("You really like Mango!");
// }
// if (favorite_fruits.includes("Apple")){
//     console.log("You really like Apple!");
// }
// if (favorite_fruits.includes("Banana")){
//     console.log("You really like Banana!");
// }
// if (favorite_fruits.includes("Strawberry")){
//     console.log("You really like Strawberry!");
// }
// if (favorite_fruits.includes("Orange")){
//     console.log("You really like Orange!");
// }
//Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting
// to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let username: string[] = ["admin","usman","zain","saad","hussain"];
// for (let i = 0; i< username.length; i++){
//     if(username[i] === "admin"){
//         console.log("Hello admin, would you like to see a status report?");
//     }else {console.log(`Hello ${username[i]}, thank you for logging in again. \n`);
//     }
// }
// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let username_1: string[] = ["admin","usman","zain","saad","hussain"];
// while(username_1.length >0){
//     username_1.pop();
// }
// if (username_1.length === 0){
//     console.log("We need to find some user!");
// }
// Q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users: string[] = ["Usman","Zain","saad","hussain","taimoor"];
// let new_users: string[] = ["usman","zain","taha","farhan","sajid"];
// let lowercase = [];
// for (let i = 0; i < current_users.length; i++){
//     lowercase.push(current_users[i].toLowerCase())
// }
// for (let i = 0; i < new_users.length; i++){
//     if(lowercase.includes(new_users[i])){
//         console.log(`${new_users[i]} is not available.`);
//     }else {console.log(`${new_users[i]} is available`);
//     }
// }
// Q33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let ordinal_array: number[] = [1,2,3,4,5,6,7,8,9];
// for (let i=0; i<ordinal_array.length; i++){
//     if (ordinal_array[i] === 1){
//         console.log(`${ordinal_array[i]}st`);
//     }else if (ordinal_array[i] === 2){
//         console.log(`${ordinal_array[i]}nd`);
//     }else if (ordinal_array[i] === 3){
//         console.log(`${ordinal_array[i]}rd`);
//     }else if (ordinal_array[i] === 4){
//         console.log(`${ordinal_array[i]}th`);
//     }else if (ordinal_array[i] === 5){
//         console.log(`${ordinal_array[i]}th`);
//     }else if (ordinal_array[i] === 6){
//         console.log(`${ordinal_array[i]}th`);
//     }else if (ordinal_array[i] === 7){
//         console.log(`${ordinal_array[i]}th`);
//     }else if (ordinal_array[i] === 8){
//         console.log(`${ordinal_array[i]}th`);
//     }else if (ordinal_array[i] === 9){
//         console.log(`${ordinal_array[i]}th`);
//     }
// }
// Q34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let pizza_array: string[] = ["B.B.Q","Fajita","Maxican"];
// for (let i=0; i<pizza_array.length; i++){
//     console.log(`I Like ${pizza_array[i]} Pizza`);
// }
// console.log("I Really Like Pizza");
// Q35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animal_array: string[] = ["Cat","Dog","Cow"];
// for (let i=0; i<animal_array.length; i++){
//     console.log(`A ${animal_array[i]} would make a great pet.`);
// }
// console.log("\n Any of these animals would make a great pet!");
// Q36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function
// should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size:string , text:string){
//     console.log(`on ${size} size of shirt. ${text} is printed.`);
// }
// make_shirt("small", "Have a nice day");
// make_shirt("medium", "Have a nice day");
// make_shirt("large", "Have a nice day");
// make_shirt("extra large", "Have a nice day");
// Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large
// shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size:string = "large" , text:string = "I love Typescript"){
//     console.log(`on ${size} size of shirt. ${text} is printed.`);
// }
// make_shirt();
// make_shirt("medium");
// make_shirt("small","I love Next.js");
// Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence,
// such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of
// which is not in the default country.
// function describe_city(city:string , country:string = "country"){
//     console.log(`${city} is in ${country}`);
// }
// describe_city("Karachi","pakistan");
// describe_city("lahore")
// describe_city("london","england");
// Q39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city:string , country:string){
//     return`${city},${country}`
// }
// console.log(city_country("Karachi","Pakistan"));
// console.log(city_country("Tokyo","Japan"));
// console.log(city_country("Paris","France"));
// Q40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and
// an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries
// representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional
// parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of
// tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist:string , title:string , tracks?:number){
//     const album: {artist:string , title:string , tracks?:number}={
//         artist:artist,
//         title:title,
//     }
//     if(tracks !== undefined){
//         album.tracks=tracks
//     }
//     return album;
// }
// const album1 = make_album("Artist 1","Album Title 1")
// console.log(album1);
// const album2 = make_album("Artist 2","Album Title 2")
// console.log(album2);
// const album3 = make_album("Artist 3","Album Title 3",12)
// console.log(album3);
// Q41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let magician: string[] = ["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];
// function  show_magicians(magicians:string[]){
//     magicians.forEach(element => {
//         console.log(element);
//     });
// }
// show_magicians(magician);
// Q42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
// magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let magician: string[] = ["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];
// function make_great(magicianArray:string[]){
// for (let i=0; i<magicianArray.length; i++){
//     magician[i] = "The Great " + magicianArray[i]
// }
// }
// function show_magicians(magicians:string[]){
//     magicians.forEach(element => {
//         console.log(element);
//     });
// }
// make_great(magician);
// show_magicians(magician);
// Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to
// show that you have one array of the original names and one array with the Great added to each magician’s name.
// let magician: string[] = ["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];
// function copyArray(arr:string[]){
//     return [...arr]
// }
// function make_great(magicianArray:string[]){
// for (let i=0; i<magicianArray.length; i++){
//     magicianArray[i] = "The Great " + magicianArray[i]
// }
// }
// function show_magicians(magicians:string[]){
//     magicians.forEach(element => {
//         console.log(element);
//     });
// }
// const copyMagicianArray = copyArray(magician);
// make_great(copyMagicianArray);
// console.log("\n This is my original array");
// show_magicians(magician);
// console.log("\n This is my modfied copy of the array");
// show_magicians(copyMagicianArray);
// Q44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that
// collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function
// three times, using a different number of arguments each time.
// function makeSandwich(item:string[]){
//     console.log("\nMaking your sandwich with:");
//     item.forEach(element => console.log("-"+element));
//     console.log("Enjoy your sandwich !\n");
// }
// makeSandwich(["Ham","Cheese","Lettuce"]);
// makeSandwich(["Turkey","Becan"]);
// makeSandwich(["Peanut butter","Jelly"]);
// Q45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model
// name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other
// name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, modelName, ...extraoption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraoption));
    return carInfo;
}
;
let ans = storeCarInfo("Honda", "Civic", { color: "Black" }, { features: ["Navigation", "Power window"] });
console.log(ans);
