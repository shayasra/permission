function access() {
    let age = prompt("Enter Your Age");
    if (!age) {
        access();
    }
    else if (age >= 18) {
        alert("Access Granted");
    } else {
        let permit = confirm("Do you have Permission from Parents");
        if (permit) {
            alert("Access Granted");
        }
        else {
            alert("Access Denied");
        }
    }
}

access();