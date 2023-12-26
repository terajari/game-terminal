import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "bbaaa940caa046c4a492b4fb7739c749"
    }
})