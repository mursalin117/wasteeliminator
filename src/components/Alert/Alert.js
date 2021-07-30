import { Fragment, useState, useEffect } from "react";
import Map from "../Map/Map";
import Post from "../Post/Post";
import AddPost from "../Post/AddPost";
import PostCard from "../UI/Card/PostCard";
import logo192 from "../../photos/6.jpg";


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

const flag = true;

const Alert = ({ token }) => {
  const [posts, setPosts] = useState();
  const [updatedData, setUpdatedData] = useState(flag);
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

  useEffect(() => {
    const url = "https://waste-eliminator-api.us-south.cf.appdomain.cloud/datas"

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data.datas);
      });
  }, [updatedData]);

  const submitPostHandler = async (payload) => {
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
      setUpdatedData(!flag);
    } catch (err) {
      console.log(err);
    }
  };

 
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

      {posts && posts.slice(0).reverse().map((post) => (
        <PostCard>
          <ul key={post._id}>
            <Post
              id={post._id}
              key={post._id}
              lat={post.location.lat}
              long={post.location.long}
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
