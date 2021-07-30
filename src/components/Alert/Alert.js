import { Fragment, useState, useEffect } from "react";
import Map from "../Map/Map";
import Post from "../Post/Post";
import AddPost from "../Post/AddPost";
import PostCard from "../UI/Card/PostCard";
import logo192 from "../../photos/6.jpg";
import axios from "axios";
const DUMMY_DATA = [
  {
    id: 1,
    wasteType: "Municipal",
    lat: 0,
    long: 1,
    image: logo192,
  },
  {
    id: 6,
    wasteType: "Toxic",
    lat: 0,
    long: 1,
    image: logo192,
  },
  {
    id: 2,
    wasteType: "Liquid",
    lat: 0,
    long: 1,
    image: logo192,
  },
  {
    id: 3,
    wasteType: "Toxic",
    lat: 0,
    long: 1,
    image: logo192,
  },
  {
    id: 4,
    wasteType: "Municipal",
    lat: 0,
    long: 1,
    image: logo192,
  },
  {
    id: 5,
    wasteType: "Electronics",
    lat: 0,
    long: 1,
    image: logo192,
  },
];

const Alert = ({ token }) => {
  const [posts, setPosts] = useState(DUMMY_DATA);
  const [location, setLocation] = useState({ lat: 0, long: 0 });
  const [geoError, setGeoError] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => setGeoError(err.message)
    );
  }, []);

  const submitPostHandler = async (payload) => {
    console.log("sending...");
    for (var pair of payload.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
    try {
      const response = await fetch(
        "https://waste-eliminator-api.us-south.cf.appdomain.cloud/datas",
        {
          method: "POST",
          body: payload,
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  //  const submitPostHandler = async (payload) => {
  //   console.log("sending...");
  //   for (var pair of payload.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]); 
  // }
  // //   const headers = { 
  // //     'Authorization': `Bearer ${token}`
  // // };

  //   try {
  //     await axios.post("https://waste-alert-api.herokuapp.com/datas", payload, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         'Authorization': `Bearer ${token}`,
  //       }
  //     })
  //   }catch(err){
  //     console.log(err)
  //   }
  // };

  return (
    <Fragment>
      <Map style="post" height="100%" width="68%" />
      <PostCard>
        <AddPost
          onConfirm={submitPostHandler}
          location={location}
          geoError={geoError}
        />
      </PostCard>

      {posts.map((post) => (
        <PostCard>
          <ul key={post.id}>
            <Post
              id={post.id}
              key={post.id}
              lat={post.lat}
              long={post.long}
              wasteType={post.wasteType}
              image={post.image}
            />
          </ul>
        </PostCard>
      ))}
    </Fragment>
  );
};

export default Alert;
