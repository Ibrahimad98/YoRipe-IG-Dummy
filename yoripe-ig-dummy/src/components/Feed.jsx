import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [feeds, setFeeds] = useState([]);

  const [feedz, setFeedz] = useState([1, 2, 3]);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/63bd23fe15ab31599e3290c1")
      .then((response) => setFeeds(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {feeds.record?.data?.map((el) => {
        return (
          <div style={{ width: "80%" }}>
            <div className="row d-flex justify-content-center" style={{ height: "800px" }}>
              <div style={{ height: "80px" }} className="d-flex justify-content-center align-items-center row">
                <div className="col-2" style={{ height: "100%" }}>
                  <div style={{ height: "80px", width: "80px" }} className="col-4 d-flex align-items-center justify-content-center">
                    <a href="#">
                      <img className="" style={{ width: "65px", height: "65px", borderRadius: "40px" }} src={el?.user?.profile_picture} />
                    </a>
                  </div>
                </div>
                <div className="col-9 d-flex align-items-center" style={{ height: "100%" }}>
                  <a style={{ textDecoration: "none", color: "black" }} href="#">
                    <p>
                      <strong>{el.user.username}</strong>
                    </p>
                  </a>
                </div>
                <div className="col-1 d-flex align-items-center" style={{ height: "100%" }}>
                  <a style={{ textDecoration: "none", color: "black" }} href="#">
                    <p style={{ fontSize: "20px" }}>
                      <strong>...</strong>
                    </p>
                  </a>
                </div>
                <div style={{ height: "600px" }} className="bg-dark"></div>
                <div style={{ height: "50px" }} className="row">
                  <div style={{ height: "100%", marginLeft: "-30px" }} className="col-3 d-flex justify-content-evenly align-items-center">
                    <a style={{ textDecoration: "none", color: "black" }} href="#">
                      <i style={{ fontSize: "30px" }} class="fa-regular fa-heart"></i>
                    </a>
                    <a style={{ textDecoration: "none", color: "black" }} href="#">
                      <i style={{ fontSize: "30px" }} class="fa-sharp fa-regular fa-comment"></i>
                    </a>
                    <a style={{ textDecoration: "none", color: "black" }} href="#">
                      <i style={{ fontSize: "30px" }} class="fa-sharp fa-regular fa-paper-plane"></i>
                    </a>
                  </div>
                  <div style={{ height: "100%" }} className="col-8"></div>
                  <div style={{ height: "100%" }} className="col-1 d-flex justify-content-center align-items-center">
                    <a style={{ textDecoration: "none", color: "black" }} href="#">
                      <i style={{ fontSize: "30px" }} class="fa-regular fa-bookmark"></i>
                    </a>
                  </div>
                </div>
                <div style={{ height: "100px" }} className="">
                  <p>
                    <a style={{ textDecoration: "none", color: "black" }} href="#">
                      <strong className="me-1">{el.user.username}</strong>
                    </a>
                    {el?.caption?.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
