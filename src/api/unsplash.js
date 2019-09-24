import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 0b0eb3a17e6595a09be2971b9d969eac40ce74308959b0493ee3183bdab68e49"
    }
});
