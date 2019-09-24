import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3005'
    //axios url is set and exported to that files so that the url needs to be changed only once
})

export default axios
