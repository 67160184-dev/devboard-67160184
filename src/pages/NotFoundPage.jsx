// task4 challenge 1//
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "5rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ marginBottom: "1.5rem" }}>ไม่พบหน้าที่คุณต้องการ</p>

      <Link
        to="/"
        style={{
          color: "white",
          background: "#1e40af",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        ← กลับหน้าหลัก
      </Link>
    </div>
  );
}

export default NotFoundPage;
