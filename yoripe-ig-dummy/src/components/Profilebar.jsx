import { useState } from "react";

export default function Profilebar() {
  const [profile, setProfile] = useState({
    name: "Kevin Seabeard",
    userName: "kevin_seaberd_99",
    imgUrl: "https://media.istockphoto.com/id/1344781289/photo/profile-of-a-black-man-breathing-fresh-air-in-nature.jpg?b=1&s=170667a&w=0&k=20&c=6ABKQk6yQiGw5nYrC6K1MPQX8fNRPKnVts65tRXint4=",
  });

  const [suggestions, setSuggestions] = useState([
    {
      name: "Timothy Jason",
      userName: "timothyjason99",
      imgUrl: "https://asset.kompas.com/crops/lqgQSCpxF3aGfhBS7a0B-wstkrU=/27x0:1107x720/750x500/data/photo/2021/12/14/61b7ff50ced5a.jpeg",
    },
    {
      name: "Adam Sanders",
      userName: "adamsanders10",
      imgUrl: "https://i.scdn.co/image/ab6761610000e5eb2a5fc5deaa074299b2e4c55d",
    },
    {
      name: "Paul",
      userName: "paulalwayshereee",
      imgUrl: "https://media.npr.org/assets/img/2011/03/18/paulmovie_wide-9409500307a43ad249e6fa231dbdd0b49130c6c1-s1100-c50.jpg",
    },
    {
      name: "Dorothy Gale",
      userName: "dorotheoz",
      imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-57633039-1566554480.jpg",
    },
    {
      name: "Mason Greenwood",
      userName: "greenwood11",
      imgUrl: "https://gilabola.com/wp-content/uploads/2023/02/Mason-Greenwood-bisa-tamat-karirnya-696x406.jpg",
    },
    {
      name: "Mason Mount",
      userName: "mountaint9",
      imgUrl: "https://i.dailymail.co.uk/1s/2023/02/11/14/67577983-11739483-image-m-7_1676125759781.jpg",
    },
  ]);

  return (
    <div style={{ height: "500px" }} className="col-4">
      <div className="row mt-5">
        <div style={{ height: "80px", width: "80px" }} className="col-4 d-flex align-items-center justify-content-center">
          <img className="" style={{ width: "65px", height: "65px", borderRadius: "40px" }} src={profile.imgUrl} />
        </div>
        <div style={{ height: "80px" }} className="col-8">
          <a href="#" style={{ textDecoration: "none" }}>
            <p style={{ marginLeft: "-8px", marginTop: "20px", color: "black" }}>
              <strong>{profile.userName}</strong>
            </p>
            <p className="text-secondary" style={{ marginLeft: "-8px", marginTop: "-20px" }}>
              {profile.name}
            </p>
          </a>
        </div>
        <div style={{ height: "20px", marginTop: "20px" }} className="row">
          <div className="d-flex">
            <h6 className="text-secondary">Suggestions for you</h6>
            <a href="#" style={{ textDecoration: "none", color: "black", marginLeft: "166px" }}>
              <p style={{ fontSize: "13px" }}>See All</p>
            </a>
          </div>
          <div>
            {suggestions.map((el) => {
              return (
                <div className="row" style={{ marginTop: "-5px" }}>
                  <div style={{ height: "80px", width: "80px" }} className="col-4 d-flex align-items-center justify-content-center">
                    <img className="" style={{ width: "50px", height: "50px", borderRadius: "40px" }} src={el.imgUrl} />
                  </div>
                  <div style={{ height: "80px" }} className="d-flex col-8 row justify-content-between">
                    <div className="col-10">
                      <a href="#" style={{ textDecoration: "none" }}>
                        <p style={{ marginLeft: "-8px", marginTop: "20px", color: "black", fontSize: "13px" }}>
                          <strong>{el.userName}</strong>
                        </p>
                        <p className="text-secondary" style={{ marginLeft: "-8px", marginTop: "-20px", fontSize: "13px" }}>
                          {el.name}
                        </p>
                      </a>
                    </div>
                    <div className="col-2 d-flex align-items-center" style={{}}>
                      <a href="#" style={{ textDecoration: "none" }}>
                        <p style={{ fontSize: "13px" }}>Follow</p>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <p style={{ fontSize: "13px" }} className="text-secondary">
              About . Help . Press . API . Jobs . Privacy . Terms . Locations . Language
            </p>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              © 2023 INSTAGRAM FROM META
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
