// Sample user data
const users = [

    { name: 'John Doe', age: 25 },
    { name: 'Jane Smith', age: 30 },
    { name: 'Mike Johnson', age: 35 },
    { name: 'Kadji Danel', age: 18 },
    { name: 'Alan James', age: 41 },
    { name: 'Gaetan Vianey', age: 30 },
    { name: 'Charles Evans', age: 55 },
    { name: 'Bitz Boy', age: 50 },
    { name: 'Rash Junior', age: 56 },
    { name: 'Joshua Joshi', age: 47 },
    { name: 'Emmanual Atangana', age: 48 },
    { name: 'Alaric Kevin', age: 60 },
    { name: 'Christ Godden', age: 50 },
    { name: 'John Doe', age: 0 },
    { name: 'Nathaneal Mesmer', age: 24 },
    { name: 'Ange Joelle', age: 29 },
    { name: 'Nehal Gringo', age: 53 },
    { name: 'Nicole Mekongo', age: 43 },
    { name: 'Jessica Keyoma', age: 32 },
    { name: 'John Paul', age: 20 },
    { name: 'Jones Adam', age: 17 },
    { name: 'Johnny Alide', age: 34 },
    { name: 'Pryan Patrick', age: 26 },
    { name: 'Cathy Ntoulo', age: 59 },
    { name: 'Paul Bamock', age: 15 }
  ]
  
  
// Function to display filtered users
function displayUsers (filteredUsers) {
    const resultsContainer = document.getElementById('results-container')
    resultsContainer.innerHTML = ''
  
    if (filteredUsers.length === 0) {
      resultsContainer.innerHTML = "<p class='error'>No users found.</p>"
      return
    }
  
    function getInitial (name) {
      return name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('.')
    }
  
    filteredUsers.forEach((user) => {
      const userDiv = document.createElement('div')
      userDiv.classList.add('user')
  
      userDiv.innerHTML = ` 
      <h2>${getInitial(user.name)}</h2>
       <p>Name: ${user.name}</p>
          <p>Age: ${user.age}</p>
          <button class="delete-btn">Delete</button>`
  
      const deleteBtn = userDiv.querySelector('.delete-btn')
      deleteBtn.addEventListener('click', () => {
        deleteUser(user)
      })
  
      resultsContainer.appendChild(userDiv)
    })
  }
  
  displayUsers(users)
  

// Function to delete a user
function deleteUser (user) {
    const index = users.indexOf(user)
    if (index > -1) {
      users.splice(index, 1)
      displayUsers(filterUsers('', ''))
    }
  }
  
  // Function to handle search button click
  function handleSearch () {
    const nameInput = document.getElementById('name-input')
    const ageInput = document.getElementById('age-input')
  
    const name = nameInput.value.trim()
    const age = +ageInput.value.trim()
    console.log(nameInput.value, age.valueOf())
  
    const filteredUsers = filterUsers(name, age)
    displayUsers(filteredUsers)
  }