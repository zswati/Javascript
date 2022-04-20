const user = {
    name: 'Swati Zarekar',
    username: 'Swatiz',
    password: 'password123',
    login: (username, password) => {
        if (username === this.username && password === this.password) 
        {
            console.log('Login successful');
        } else {
            console.log('Authentication failed');
        }
    },
};
user.login('Swatiz', 'password123'),
user.login('Swatiz', 'password123')

