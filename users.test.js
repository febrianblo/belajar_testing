const axios = require('axios');
const Users = require('./Users');

jest.mock('axios'); //Fungsi mock memungkinkan Jest untuk menguji link antara file JS.

test ('should fetch users', () =>{
    const users = [{
        
            "id":1,
            "first_name": "Robert",
            "last_name": "schwartz",
            "email": "rob23@gmail.com"
        },
        {
            "id":2,
            "first_name": "Lucy",
            "last_name": "Blanner",
            "email": "Luvy23@gmail.com"
    }];
    const resp = {data : users};
    axios.get.mockImplementation(() => Promise.resolve(resp));
    Users.all().then(resp => expect(resp.data).toEqual(users));
});