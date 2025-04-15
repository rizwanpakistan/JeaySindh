import "./footer.css";
function Footer() {
  return (
    <footer className=" footer text-white p-4 text-center">
      <div className="container">
        <h5 className="mb-3">Connect with Me</h5>
        <div className="d-flex justify-content-center gap-4 fs-4">
          <a
            href="https://www.facebook.com/share/154Fyh7qgz/"
            className="text-white"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a href="mailto:rizmahar088@gmail.com" className="text-white">
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rizwan-ali-mahar-347457315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            className="text-white"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/rizwanpakistan"
            className="text-white"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
        <p className="mt-3 mb-0">
          © 2025 Rizwan Ali Mahar | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
