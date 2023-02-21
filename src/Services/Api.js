import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/?key=32973219-984fa4c20d425675f77d9e3ae&image_type=photo&orientation=horizontal"


const getImgByQuery = async (query, page) => {
    const response = await axios
        .get(`&q=${query},&page=${page}&per_page=12 `);
    return response.data;

};

export default getImgByQuery;