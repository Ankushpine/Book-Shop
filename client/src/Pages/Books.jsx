import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bookImage from "../assets/Book_Picture.jpg";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${url}/api/get`);
        setBooks(res.data);
        setLoading(false);
      } catch (error) {
        console.log(`Error in fetchbook method :: ${error}`);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${url}/api/delete/` + id);

    window.location.reload();
  };

  return (
    <>
      <h1 className="text-6xl text-center m-4 text-white ">
        Pine <span className="text-blue-500">Book Shop</span>
      </h1>

      {loading ? (
        <>
        <div className="flex items-center justify-center">
        <span className="loading loading-infinity size-28 -mb-12 -mt-8  loading-lg"></span>
        </div>
        </>
      ) : (
        false
      )}

      <div class=" flex flex-wrap gap-3 items-center justify-center">
        {books.map((value) => (
          <div
            className="card w-80 bg-stone-200 shadow-xl z-10  "
            key={value.id}
          >
            {value.cover ? (
              <figure>
                <img src={value.cover} alt={value.title} />
              </figure>
            ) : (
              <figure>
                <img src={bookImage} alt={value.title} />
              </figure>
            )}

            <div className="card-body">
              <h2 className="card-title text-black">
                {value.title}
                <div className="badge ">{value.price} ₹</div>
              </h2>
              <p className="text-black">{value.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn  btn-sm text-black bg-sky-500 hover:bg-sky-400  ">
                  <Link to={`/update/${value.id}`}>Update</Link>
                </button>
                <button
                  className="btn btn-error btn-sm text-black "
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button className="btn btn-secondary my-5 text-black ">
          <Link to={"/add"}>Add New Book</Link>
        </button>
      </div>
    </>
  );
}
