import axios, { AxiosInstance } from "axios";
import { PackOpenResponse, Packs } from "./opener.d";

class PackOpener {
    private token: string;
    private axiosInstance: AxiosInstance;

    constructor(token: string, rateLimit: number) {
        this.token = token;

        this.axiosInstance = axios.create({
            "headers": {
                "Cookie": `token=${this.token}`
            }
        });
        // bun doesnt have implementation for brotli :(
        this.axiosInstance.defaults.headers.common["Accept-Encoding"] = "gzip";
    }

    public async openPack(pack: Packs): Promise<PackOpenResponse> {
        const response = await this.axiosInstance.post("https://blacket.org/worker3/open", {
            pack
        });
        return response.data;
    }

    public async getAxiosInstance() {
        return this.axiosInstance;
    }
}

export default PackOpener;
