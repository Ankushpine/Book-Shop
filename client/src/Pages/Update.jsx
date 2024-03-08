import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Update() {
  const [books, setBooks] = useState({
    title: "",
    desc: "",
    cover: "",
    price: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_APP_URL;

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBooks((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.put(`${url}/api/update/${bookId}`, books);
      setLoading(false);
      toast.success("Book successfully updated!");
      navigate("/");
    } catch (error) {
      console.log(`Error in handleSubmit in Add.jsx :: ${error}`);
    }
  };

  return (
    <>
      {loading ? (
        <span className="loading loading-infinity loading-lg"></span>
      ) : (
        false
      )}

      <div className="flex justify-center mt-10  mb-16 ">
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
              Update <span className="text-blue-500"> Book</span>
            </h1>

            <form>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text text-white">Title</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter title....."
                  className="w-full input input-bordered  h-10"
                  name="title"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="label p-2 ">
                  <span className="text-base label-text text-white">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter description...."
                  className="w-full input input-bordered h-10"
                  name="desc"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text text-white">
                    Picture Url
                    <span className="badge badge-info ml-2">Optional</span>
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Enter url...."
                  className="w-full input input-bordered h-10"
                  name="cover"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text text-white">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price..."
                  className="w-full input input-bordered h-10"
                  required
                  name="price"
                  onChange={handleChange}
                />
                <p className="text-red-600">
                  *Please enter number or it will not update
                </p>
              </div>

              <div>
                <button
                  className="btn btn-block btn-sm mt-4 border border-slate-700"
                  onClick={handleSubmit}
                >
                  Update Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
