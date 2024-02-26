import React from "react";
import NewsfeedItem from "./newsfeedItem";

const Newsfeed = () => {
    const messages = [
        {
            username: "mittensTheCat",
            reposts: 342,
            text: "Mittens is the best cat in the world. I love her so much. She is so fluffy and cute.",
        },
        {
            username: "miniTiger",
            reposts: 100,
            text: "Funny how Mittens thinks she's the best cat in the world. I'm the best cat in the world. #catfight",
        },
        {
            username: "dustPawTom",
            reposts: 640,
            text: "The new catnip is amazing. I can't get enough of it. #catnip #high #meow",
        },
    ];

    return (
        <div className="newsfeed">
            {messages.map((msg) => (
                <NewsfeedItem key={msg.text} message={msg}></NewsfeedItem>
            ))}
        </div>
    );
};

export default Newsfeed;
