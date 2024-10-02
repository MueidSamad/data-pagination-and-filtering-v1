/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions


function showPage(list, page) {
   const itemsPerPage = 9;

   // Calculate the start and end index of the students to display
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   // Select the student-list element and clear its current contents
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   // Loop over the list of students
   for (let i = 0; i < list.length; i++) {
      // Check if the student index is within the range of students to be displayed
      if (i >= startIndex && i < endIndex) {
         // Create the HTML for the student's details using a template literal
         const studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;

         // Insert the studentItem into the studentList
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}



function addPagination(list) {
   const itemsPerPage = 9;

   // Calculate the total number of pages needed
   const numOfPages = Math.ceil(list.length / itemsPerPage);

   // Select the UL element where pagination buttons will be added
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   // Loop to create pagination buttons for each page
   for (let i = 1; i <= numOfPages; i++) {
      // Create the HTML for the button
      const button = `
       <li>
         <button type="button">${i}</button>
       </li>
     `;

      // Insert the button into the DOM
      linkList.insertAdjacentHTML('beforeend', button);
   }

   // Give the first pagination button an active class
   const firstButton = linkList.querySelector('button');
   if (firstButton) {
      firstButton.className = 'active';
   }

   // Add an event listener to the linkList 
   linkList.addEventListener('click', (e) => {
      // Check if a button was clicked
      if (e.target.tagName === 'BUTTON') {
         // Remove the active class from the currently active button
         const activeButton = linkList.querySelector('.active');
         if (activeButton) {
            activeButton.className = '';
         }

         // Add the active class to the clicked button
         e.target.className = 'active';

         // Call showPage to display the corresponding students
         const page = parseInt(e.target.textContent);
         showPage(list, page);
      }
   });
}
