import axios from "axios";

// creating the axios instance 
const axiosInstance = axios.create({
          baseURL: import.meta.env.VITE_API_URL,
          timeout: 30000,
          timeoutErrorMessage: "Server timed out...",
          headers: {
                    "Content-Type": "application/json"
          }
})

// creating the interceptors()

axiosInstance.interceptors.response.use((response: any) => {
          return response.data;
}, (error: any) => {
          if(error.code === "ERR_BAD_REQUEST"){
                    return error.respose;
          }else{
                    // TODO: manipulate
          }
})


export default axiosInstance;