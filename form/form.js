var Num = 1

function submitInfo() {

    var name = document.getElementById('name').value
    var number = document.getElementById('number').value
    var email = document.getElementById('email').value
    var dob = document.getElementById('dob').value
    var doj = document.getElementById('doj').value
    var exp = document.getElementById('exp').value

    var tbody = document.getElementById('tbody')

    alert('Full Name: ' + name + '\n\nPhone Number: ' + number + '\n\nEmail: ' + email + '\n\nDate of Birth: ' + dob + '\n\nDate of Joining: ' + doj + '\n\nExpertise: ' + exp)

    tbody.innerHTML += `
         <tr>
            <th scope="row">${Num}</th>
            <td>${name}</td>
            <td>${number}</td>
            <td>${email}</td>
            <td>${dob}</td>
            <td>${doj}</td>
            <td>${exp}</td>
         </tr>
        `

   Num++

}








