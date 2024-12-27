import { FaBrain } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container-fluid bg-gray-700 text-white position-fixed bottom-0  shadow-lg">
      <footer className="d-flex flex-wrap justify-around align-items-center py-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0  text-decoration-none lh-1"
          >
            <FaBrain size={24} />
          </a>
          <span className="mb-3 mb-md-0 text-center text-white ">
            © 2024, Big Five Personality Test
          </span>
        </div>

      
      </footer>
    </div>
  );
}
