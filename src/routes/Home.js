import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dbService } from "../myBase";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapShot) => {
      const nweetArr = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: user.id,
    });
    setNweet("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            onChange={onChange}
            value={nweet}
          />
          <input type="submit" value="Nweet" />
        </form>
      </div>
      <div>
        {nweets.map((nweet) => (
          <h4 key={nweet.id}>{nweet.text}</h4>
        ))}
      </div>
    </>
  );
};
export default Home;
