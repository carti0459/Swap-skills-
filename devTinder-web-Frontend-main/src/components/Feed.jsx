import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";



const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if(feed) return; // If feed is already present, do not fetch again
    try {
    const res = await axios.get(BASE_URL+"/feed",
    {withCredentials:true});
    dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if(!feed) return;

  if(feed.length <= 0) return <h1 className="justify-center my-10">No new users found!</h1>
  return (
    feed &&(
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]}/>
    </div>
    )
  )
}

export default Feed