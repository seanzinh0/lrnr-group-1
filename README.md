
#  LRNR APP (group 1)

Our team has developed an application called LRNR, which leverages the Anthropic Claude API to generate customized quizzes based on user input. Originally built by Red Ventures AI engineers using jQuery and Go, our team has rewritten it using Node.js, React, and Vite. The LRNR app consists of multiple pages but remains intuitive and easy to navigate.

 ## Frontend technologies:
 <img width="242" src="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png"/>  <img width="242" alt="Screenshot 2025-02-25 at 10 47 25 PM" src="https://github.com/user-attachments/assets/f0818e40-c706-4194-95f5-c5ca06019f3b" /><img width="242" src="https://github.com/user-attachments/assets/a93a5c7d-ee55-4ae8-acf1-c58c1d119294"/>


## Backend technologies:
<img width="242" alt="Screenshot 2025-02-25 at 10 48 48 PM" src="https://github.com/user-attachments/assets/23e2b62f-cbac-4f13-9a37-6657936e8432" />  <img  width="242" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZINvM67GmgTbwpiAUlD33goWl2vf4GDppg&s"/>

## API:
![download (1)](https://github.com/user-attachments/assets/c790f46c-a3a5-4956-9cbf-ba008411fefc)


 ## Features:
* Generates quizzes with Claude Sonnet 3.5.
* Provides evaluations based on user input.

## Setup
1. Install node.js
2. Run `git clone git@github.com:seanzinh0/lrnr-group-1.git` (or clone your own fork of the repository)
3. Go into the cloned folder with cd lrnr-group-1
4. Run `npm install` (only has to be done before first start or when you change the source code)
5. Run `npm run dev` & `node src/backend/app.js` if a developer or `npm run build && node src/backend/app.js` for users
6. Browse to the locally hosted link provided by Vite (http://localhost:5173/)
7. You can also access this application using our hosted link provided in the About section of the repository.

## .ENV configuration:
 * This project uses a `.env` file to store sensitive configuration details, including the API key, port information, and other environment-specific settings.
 * Keeping these values in a `.env` file ensures security by preventing sensitive data from being hardcoded in the source code.
 * To run this project locally, create a `.env` file in the root directory and populate it with the necessary environment variables. 
 


 ## Usage:
1. The lrnr application starts at the **Homepage**, where users can get an understanding of the lrnr application and what it provides.
<img width="645" alt="Screenshot 2025-02-25 at 10 01 41 PM" src="https://github.com/user-attachments/assets/6e6a7cd7-b434-4146-b27d-0d41bab52284" />  


2. A static **Account page** is included, where users are able to “view” their user data, but there is currently no logic implemented to make the features on this page functional.

<img width="645" alt="Screenshot 2025-02-25 at 10 02 22 PM" src="https://github.com/user-attachments/assets/20140fb2-a6ad-4c5f-bb53-f0c1b2d9f5c0" />  

3. The **Quiz Generation page** is where users are allowed to select specific categories provided by lrnr, in order to generate a personalized quiz based on the criteria they provide. Users have the option to generate a quiz based on programming languages including Golang, AWS, and  JavaScript; programming essentials like  CI/CD; and miscellaneous information such as Home Gardens, Coffee, and finger foods.

Users can also select an expertise level, ranging from novice, intermediate, and expert. This allows for further customization and progression throughout the learning process. 

The last selection provided on the quiz generator page includes the number of questions, ranging from 5,10, and 15 questions.  

<img width="645" alt="Screenshot 2025-02-25 at 10 02 41 PM" src="https://github.com/user-attachments/assets/6cef4598-9039-4da4-b31c-9569c09a563e" />



4. Upon The completion of the quiz-generated criteria, the application redirects to the generated **Quiz page**. This is where users take the quiz provided with the hopes  of gaining proficiency in the specific concept selected. Answers are scored based on accuracy (out of 100%). Whenever a user's input is incorrect, the application provides an error message, as well as a detailed explanation of the correct answer and the definition or logic behind it.   

<img width="645" alt="Screenshot 2025-02-25 at 10 03 26 PM" src="https://github.com/user-attachments/assets/5bb58ab4-d234-4742-b5fc-3a9c51b44ea4" />


5. Lastly, there is the **Results page**. The quiz results page is intended to provide a summary of correctly answered questions, quantify quiz results, and provide the option to try another quiz. Because this page has no logic implemented to make it functional, the page was programmed statically using React components.  
<img width="645" alt="Screenshot 2025-02-25 at 10 03 35 PM" src="https://github.com/user-attachments/assets/8d516a45-aca9-4435-af4c-84a41f22624b" />



 

## Contributors:
 1. **Sean Pichay**
 2. **Carmani Harris-Jackson**
 3. **Sky Patterson-Baker**
 4. **Ismael Martinez**
 5. **Kevin Castro-Guzman**


