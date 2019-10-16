export default class Request {

    connect(url) {        
        this.url = url;
        this.xhr = new XMLHttpRequest();
        this.xhr.open('GET', this.url, true);
        const self = this;    

        return new Promise(function(resolve, reject) {

            self.xhr.onload = function() {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    let error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };
      
            self.xhr.onerror = function() {
                reject(new Error("Network Error"));
            };
      
            self.xhr.send();
        });
    }
 
}