// writing a function here that we can use to create, delete, update... instead of having those three individual functions
const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Please reload the app');// this throw because iw ont be caught because this is not an error it is just a different reponse that we didnt need
        // and reload because the state of our application might have gone out of sync with the data in the database
    } catch (err) {
        errMsg = err.message;
    } finally {
        // it will return either null or something else
        return errMsg;
    }
}

export default apiRequest;