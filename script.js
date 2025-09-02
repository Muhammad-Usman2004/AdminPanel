const menuBtn = document.getElementById("menu")
const sideBar = document.getElementById("sideBar")
const rightPanel = document.getElementById("rightPanel")
const details = document.getElementById("details")

function isMobile() {
  return window.innerWidth <= 800;
}

details.addEventListener("click", () => {
  if (sideBar.style.display === "block") {
    sideBar.style.display = "none"
    rightPanel.style.filter = "blur(0px)";

  }
})

menuBtn.addEventListener("click", () => {
  if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
    if (isMobile() === true) {
      rightPanel.style.filter = "blur(0px)";
    }
  } else {
    sideBar.style.display = "block";
    if (isMobile() === false) {
      rightPanel.style.filter = "blur(0px)";
    }
    if (isMobile() === true) {
      rightPanel.style.filter = "blur(5px)";
    }

  }
})



async function getData() {
  try {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    const users = data.users;

    const tableBody = document.querySelector("#user-table");
    tableBody.innerHTML = ""; // clear previous rows

    users.forEach(user => {
      const row = document.createElement("tr");
      // const fullEmail = user.email;
      // const shortEmail = fullEmail.split('@')[0] + '@...';

      row.innerHTML = `
        <td><img src="${user.image}" alt="${user.firstName}" width="35%"></td>
        <td>${user.firstName} ${user.lastName}
        <br> ${user.email}
      
        </td>
        <td class="dot">.</td>
        <td>${user.birthDate}</td>
        <td><button onclick="handleReject(${user.id})">Reject</button></td>
        <td><button onclick="handleAccept(${user.id})">Accept</button></td>
      `;

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function handleReject(id) {
  alert(`Rejected user with ID: ${id}`);
}

function handleAccept(id) {
  alert(`Accepted user with ID: ${id}`);
}


getData()
