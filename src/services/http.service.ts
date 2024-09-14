import axiosInstance from "../Config/axios.config";

abstract class HttpService{
          postRequest = async (url:string, data:any = {}) =>{
                    try{
                              const response = await axiosInstance.post(url, data);
                              return response;
                            }
                            catch(exception){
                              return exception;
                            }
          }

          getRequest = async (url:string) =>{
                    try{
                              const response = await axiosInstance.get(url)
                              return response; 
                    }
                    catch(exception){
                              return exception;
                            }
          }
}

export default HttpService;