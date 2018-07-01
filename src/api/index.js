class DataApi {  
    static getAllData() {
        return fetch('https://jsdemo.envdev.io/sse').then(response => {
        return response.body;
    }).catch(error => {
        return error;
    });
}}

export default DataApi;