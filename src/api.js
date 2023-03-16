import axios from 'axios';

const ImageSearch = async(term)=> {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 9jUFqe5amegLO16gniQNMoIGQS8cEE1nnS1Cv__SoEs',
        },
        params: {
            query: term,
        },
        

    });
    return response.data.results;
}
export default ImageSearch;