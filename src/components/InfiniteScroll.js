import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";

const InfiniteScroll = () => {
    const [userList, setUserList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (!noData) {
                loadUserList(page);
            }
        }
    };

    useEffect(() => {
        loadUserList(page);
    }, []);

    const loadUserList = (page) => {
        setLoading(true);
        setTimeout(() => {
            UserService.getList(page)
                .then((res) => {
                    const newPage = page + 1;
                    const newList = userList.concat(res.results);
                    setUserList(newList);
                    setPage(newPage);
                    if (res.data.length === 0) {
                        setNoData(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 1500);
    };

    return (
        <div>
            <div className='section'>
                {userList.map((data, i) => (
                    <div className='box user' key={i}>
                        <img src={data.thumb} alt={data.key} />
                        <p>{data.title}</p>
                        <p>{data.portion}</p>
                    </div>
                ))}
                {loading ? (
                    <div className='text-center'>loading data ...</div>
                ) : (
                    ""
                )}
                {noData ? (
                    <div className='text-center'>no data anymore ...</div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default InfiniteScroll;
