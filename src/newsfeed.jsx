import React from "react";
import NewsfeedItem from "./newsfeedItem";

const Newsfeed = () => {
    const msg = {
        username: "mittensTheCat",
        reposts: 342,
        text: "Mittens is the best cat in the world. I love her so much. She is so fluffy and cute.",
    };

    return (
        <div className="newsfeed">
            <NewsfeedItem message={msg}></NewsfeedItem>
        </div>
    );
};

export default Newsfeed;
