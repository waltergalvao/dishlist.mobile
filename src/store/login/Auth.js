export default class Auth {
    constructor(username, email, token) {
        this.username = username || null;
        this.email = email || null;
        this.token = token || null;
        this.isAuthenticated = function() {
            return this.token !== null;
        };
    }
}
