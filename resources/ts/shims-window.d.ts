import {AxiosInstance} from "axios";
import {Config, RouteParam, RouteParamsWithQueryOverloadRouter, Router} from "ziggy-js";

declare global {
    interface Window {
        axios: AxiosInstance
    }

    function route(): Router;
    function route(name: string, params?: RouteParamsWithQueryOverloadRouter | RouteParam, absolute?: boolean, customZiggy?: Config): string;
}
