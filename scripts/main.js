function getAccessPermission() {
    let age = prompt("Enter Your Age");
    if(!age){
        getAccessPermission();
    }
    else if (getAge(age)) {
        return alert("Permission to Access Agreed");
    }
    else {
        return alert("Permission to Access Denied");
    }

}

function getAge(age) {
 if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have Permission from Parents");
    }
}

getAccessPermission();