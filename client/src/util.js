const BASE_URL = ""

class Util{
    static async postdata(url, data){
        const response = await fetch(BASE_URL + url,{
            method: 'POST',
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers:{
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify(data)
        }); 

        if(response.ok){
            return response.json(); 
        }
        else{
            throw "failed";
        }
    }
}   


