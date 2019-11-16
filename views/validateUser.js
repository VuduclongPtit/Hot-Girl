document.getElementById("btnlogin").addEventListener("click", () => {
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;
   fetch("api/auth/signin",
      {
         method : 'POST',
         headers : {
            'Content-Type': 'application/json'
         },
         body : JSON.stringify({
            username: username,
            password: password
         })
      }
   )
   .then(res => res.json())
   .then(data => {
      const response = JSON.parse(data)
      if(response.success) {
         document.getElementById("main").innerHTML = `<h1> Welcome ${response.data.name} </h1>`;  
      }
      else {
         console.log("something was wrong!")
      }
   })
   .catch(error => {
      console.log(error)
   })
}) 