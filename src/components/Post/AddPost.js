import Button from "../UI/Button/Button";
import classes from "./AddPost.module.css";

import { useRef, useState } from "react";

const AddPost = (props) => {
  const wasteTypeRef = useRef();
  const latRef = useRef();
  const longRef = useRef();

  const [file, setFile] = useState(null);

  console.log('Testing');

  
  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredWasteType = wasteTypeRef.current.value;
    const enteredLat = parseFloat(latRef.current.value);
    const enteredLong = parseFloat(longRef.current.value);

    const metaData = {
      "wasteType": enteredWasteType,
      "location": {
        "lat": enteredLat,
        "long": enteredLong,
      }
    };
    const data = new FormData();
    data.append("image", file);
    data.append("data", JSON.stringify(metaData));


    
    props.onConfirm(data);
  };

  const fileHandler = (event) => {
    console.log('sldfjsldkfj');
    console.log(event.target.files);
    setFile(event.target.files[0]);
  };

  return (
    <form onSubmit={SubmitHandler} className={classes.form}>
      <div>
        <label htmlFor="wastes">Choose Waste Type</label>
        <select type="text" id="wastes" name="wastes" ref={wasteTypeRef}>
          <option value="Toxic">Toxic</option>
          <option value="Municipal">Municipal</option>
          <option value="Liquid">Liquid</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
      <div>
        <label>Location</label>
        <div>
          <input
            placeholder="Latitude"
            type="number"
            value={props.location.lat}
            disabled={true}
            ref={latRef}
          />
          <input
            placeholder="Longitude"
            type="number"
            value={props.location.long}
            disabled={true}
            ref={longRef}
          />
        </div>
      </div>

      <div>
        <label>Add Image</label>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={fileHandler}
        />
      </div>
      <div className={classes.btn}>
        <Button type="submit">Add Alert</Button>
      </div>
    </form>
  );
};

export default AddPost;
