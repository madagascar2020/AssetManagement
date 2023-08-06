import { environment } from "../../../environments/environment";

export const UrlsConfiguration = {
    EndPoints: {
      AssetsApi: environment.webapi,  
    },
    urls:{
        Asset:{
            GetAssets:'Asset/GetAssets'
        }
    }
}