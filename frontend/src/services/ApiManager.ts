import axios, { type AxiosInstance } from "axios";
import authStore from "../stores/AuthStore";

interface Response {
    data: any;
    status: number;
}

class RESTApi {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "/api",
            timeout: 1000,
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.instance.interceptors.request.use(config => {
            config.headers.Authorization = authStore.token;
            return config;
        });
    }

    public async get(url: string): Promise<Response> {
        const response = await this.instance.get(url);

        return {
            data: response.data,
            status: response.status,
        };
    }

    public async post(url: string, data: unknown): Promise<Response> {
        const response = await this.instance.post(url, data);

        return {
            data: response.data,
            status: response.status,
        };
    }

    public async put(url: string, data: unknown): Promise<Response> {
        const response = await this.instance.put(url, data);

        return {
            data: response.data,
            status: response.status,
        };
    }

    public async delete(url: string): Promise<Response> {
        const response = await this.instance.delete(url);

        return {
            data: response.data,
            status: response.status,
        };
    }
}

const ApiManager = new RESTApi();
export default ApiManager;
// @ts-ignore
window.am = ApiManager;
