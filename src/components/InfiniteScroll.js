import React, { useState } from "react";

const InfiniteScroll = () => {
    const [userList, setUserList] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [noData, setNoData] = useState(false)

    return (
        <div>
            <div className="section">
                { usetList.map((user, i) => (
                    <div className="box user" key={i}>
                        <img src={user.avatar} alt={user.first_name} />
                        <div className="user-details">
                            <strong>Email</strong>: {user.email}<br />
                            <strong>First Name</strong>: {user.first_name}<br />
                            <strong>Last Name</strong>: {user.last_name}<br />
                        </div>
                    </div>)
                )}
                { loading ? <div className="text-center">loading data ...</div> : "" }
                { nodata ? <div className="text-center">no data anymore ...</div> : "" }
            </div>
        </div>
    )
}