// Recipe addRec


//Runs on button click
function phpLogin() {
    //Get data from page
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //POST to PHP LOGIN
    $.ajax({url:"login.php",
            type: 'post',
            data: { "username": username, 
                "password": password},
     success:function(result){
        const returnArr = result.split("|");
        if (returnArr[0] === "true"){
            localStorage.setItem("userLogged", true);
            localStorage.setItem("logTime", Date.now());
            localStorage.setItem("UID", returnArr[1]);
            window.location.href = "../index/index.html";
            alert("Login Successful!");
        }
        else if (returnArr[0] === "false")
        {
            alert("Login Failed!");
        }
        else
        {
            console.log(result);
        }
    }
    })
}

function phpSignup() {
    //Get data from page
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("rePassword").value;
    var etaken = false;
    var utaken = false;


    //POST PHP user exists to check if user or email is taken
    $.ajax({url:"userExists.php",
            async: false,
            type: 'post',
            data: { "username": username, 
                "email": email},
     success:function(result){
        const returnArr = result.split("|");
        if (returnArr[0] === "true")
        {
            utaken = true;
        }

        if (returnArr[1] === "true")
        {
            etaken = true;
        }

        if (returnArr[0] !== "true"  && returnArr[0] !== 'false')
        {
            console.log(result);
        }
    }
    })

    if (utaken === true)
    {
        alert ("Username Taken!");
        return;
    }

    if (etaken === true)
    {
        alert ("Email Taken!");
        return;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        alert ("Invalid Email!");
        return;
    }

    if (!username.match(/^(?=[a-zA-Z0-9._]{4,14}$)(?!.*[_.]{2})[^_.].*[^_.]$/))
    {
        alert ("Invalid Username!");
        return;
    }

    if (email === "" || name === "" || username === "" || password === "" || repassword === ""){
        alert ("Empty Fields!");
        return;
    }
    if (password !== repassword) 
    {
        alert ("Passwords do not match!");
        return;
    }

    //POST to Signup PHP
    $.ajax({url:"signup.php",
            type: 'post',
            data: { "email": email, 
                "name": name, 
                "username": username, 
                "password": password},
     success:function(result){
        alert(result);
        }
    })
}