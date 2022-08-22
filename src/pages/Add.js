import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().toString().slice(0,24),
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        'https://sheet.best/api/sheets/793fa86f-7a90-43fa-9dab-f3bdf05a3484',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form style={{ maxWidth: 500, margin: "auto" }} onSubmit={handleSubmit}>
      <h1 className="text-muted text-center">Add</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          name="message"
          cols="30"
          rows="3"
          className="form-control"
          value={data.message}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default Add;