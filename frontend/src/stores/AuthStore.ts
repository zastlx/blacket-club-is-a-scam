import { action, observable } from "mobx";
import ApiManager from "../services/ApiManager";


class AuthStore {
    @observable public isLoggedIn = false;
    @observable private authToken = "";

    constructor() {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            this.authToken = storedToken;
            this.isLoggedIn = true;
        }
    }

    @action login = (token: string) => {
        if (this.isLoggedIn) return;
        this.authToken = token;
        localStorage.setItem("token", token);
        this.isLoggedIn = true;
    };

    @action logout = async () => {
        await ApiManager.delete("/auth/logout");
        this.authToken = "";
        localStorage.removeItem("token");
    };

    get token() {
        return this.authToken;
    }
}

const authStore = new AuthStore();
export default authStore;
// @ts-ignore
window.as = authStore;
