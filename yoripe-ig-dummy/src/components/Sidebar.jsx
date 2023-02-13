import logoIg from "../assets/png-clipart-letter-instagram-font-instagram-text-logo-removebg-preview.png";

export default function Sidebar() {
  return (
    <div style={{ height: "600px", overflow: "hidden" }} className="col-2 border-end">
      <div className="my-4 mx-4">
        <ul style={{ listStyleType: "none" }}>
          <a href="#">
            <li>
              <img src={logoIg} style={{ width: "100px" }} />
            </li>
          </a>
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <li className="d-flex mt-4 align-items-center">
              <i className="fa-solid fa-house me-3"></i>
              <p style={{ marginTop: "16px" }}>
                <strong>Home</strong>
              </p>
            </li>
          </a>
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <li className="d-flex mt-1 align-items-center">
              <i class="fa-brands fa-facebook-messenger me-3"></i>
              <p style={{ marginTop: "16px" }}>Messages</p>
            </li>
          </a>
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <li className="d-flex mt-1 align-items-center">
              <i class="fa-solid fa-magnifying-glass me-3"></i>
              <p style={{ marginTop: "16px" }}>Search</p>
            </li>
          </a>
          <a style={{ textDecoration: "none", color: "black" }} href="#">
            <li className="d-flex mt-1 align-items-center">
              <i class="fa-solid fa-heart me-3"></i>
              <p style={{ marginTop: "16px" }}>Notification</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
