function loadContactPage() {
    const content = document.getElementById('content');
  
    // Clear the content to be safe
    content.innerHTML = '';
  
    // Create main container
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
  
    // Add a contact message
    const contactMessage = document.createElement('h1');
    contactMessage.textContent = 'Contact Us!';
    contactContainer.appendChild(contactMessage);
    
    const employeeContainer = document.createElement('div');
    employeeContainer.classList.add('employeeDetails');

    // EMPLOYEE 1
    const employeeDetails1 = document.createElement('div');
    employeeDetails1.classList.add('employeeDetailsBox');
    const employeeName1 = document.createElement('h3');
    employeeName1.textContent = 'Bob';
    const employeePosition1 = document.createElement('p');
    employeePosition1.textContent = 'Owner';
    const employeeNumber1 = document.createElement('p');
    employeeNumber1.textContent = '452-234-2342';
    const employeeEmail1 = document.createElement('p');
    employeeEmail1.textContent = 'realEmail@fake.com';
    
    employeeDetails1.appendChild(employeeName1);
    employeeDetails1.appendChild(employeePosition1);
    employeeDetails1.appendChild(employeeNumber1);
    employeeDetails1.appendChild(employeeEmail1);
    employeeContainer.appendChild(employeeDetails1);

    // EMPLOYEE 2
    const employeeDetails2 = document.createElement('div');
    employeeDetails2.classList.add('employeeDetailsBox');
    const employeeName2 = document.createElement('h3');
    employeeName2.textContent = 'Jo';
    const employeePosition2 = document.createElement('p');
    employeePosition2.textContent = 'Chef';
    const employeeNumber2 = document.createElement('p');
    employeeNumber2.textContent = '452-234-2342';
    const employeeEmail2 = document.createElement('p');
    employeeEmail2.textContent = 'realEmail@fake.com';
    
    employeeDetails2.appendChild(employeeName2);
    employeeDetails2.appendChild(employeePosition2);
    employeeDetails2.appendChild(employeeNumber2);
    employeeDetails2.appendChild(employeeEmail2);
    employeeContainer.appendChild(employeeDetails2);

    // EMPLOYEE 3
    const employeeDetails3 = document.createElement('div');
    employeeDetails3.classList.add('employeeDetailsBox');
    const employeeName3 = document.createElement('h3');
    employeeName3.textContent = 'May';
    const employeePosition3 = document.createElement('p');
    employeePosition3.textContent = 'Server';
    const employeeNumber3 = document.createElement('p');
    employeeNumber3.textContent = '452-234-2342';
    const employeeEmail3 = document.createElement('p');
    employeeEmail3.textContent = 'realEmail@fake.com';
    
    employeeDetails3.appendChild(employeeName3);
    employeeDetails3.appendChild(employeePosition3);
    employeeDetails3.appendChild(employeeNumber3);
    employeeDetails3.appendChild(employeeEmail3);
    employeeContainer.appendChild(employeeDetails3);

    // append all employees to contact div
    contactContainer.appendChild(employeeContainer);

    // append the created content to the content div
    content.appendChild(contactContainer);
  }
  
  export { loadContactPage };
  