import {AxiosInstance} from "axios";
import {Config, QueryParams, Router} from "ziggy-js";

declare global {
    interface Window {
        axios: AxiosInstance
    }

    function route(): Router;
    function route(name: string, params?: QueryParams, absolute?: boolean, customZiggy?: Config): string;
}
