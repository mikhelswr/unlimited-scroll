/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

export default {
    getList: async (page) => {
        try {
            let url;
            if ((page != null) & (page > 1)) {
                url = `https://thingproxy.freeboard.io/fetch/https://masak-apa-tomorisakura.vercel.app/api/recipes/${page}`;
            } else {
                url =
                    "https://thingproxy.freeboard.io/fetch/https://masak-apa-tomorisakura.vercel.app/api/recipes/";
            }
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};