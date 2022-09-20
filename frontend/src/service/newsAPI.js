import axios from 'axios'


 const url = 'http://localhost:4000/' //port backend


/**
 * Get liste of news
 * @returns 
 */
 export async function getNews() {
    try {
        const response = await axios.get(url+"news/", {
            IsEssential: true
        });
        return response;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            return (error.response);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
        return error;
    }
}

export async function addNews(news){
    try {
        const response = await axios.post(url+"news/",news, {
            IsEssential: true
        });
        return response;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            return (error.response);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
        return error;
    }

}

export async function getNewsById(id){
    try {
        const response = await axios.post(url+"news/"+id, {
            IsEssential: true
        });
        return response;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            return (error.response);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
        return error;
    }

}