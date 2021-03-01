let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}


for(const key in contact){
    // Code goes here
    console.log(`${key} : ${contact[key]}`);
}
