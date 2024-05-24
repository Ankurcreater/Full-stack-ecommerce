import React, { ChangeEvent, FormEvent, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const img = "https://cdn.sneakers123.com/release/3607205/puma-mb-02-little-honeycomb-391273-01.jpg";

const ProductManage = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(img);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };
  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate)
    setPrice(priceUpdate)
    setName(nameUpdate)
    setStock(stockUpdate)
    setPhoto(photoUpdate)
  }

  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSideBar />
      {/* Main */}
      <main className="product-management">
        <section>
          <strong>ID - customeridwillbehere</strong>
          <img src={photo} alt="Product Image" />
          <p>{name}</p>
          {
            stock > 0 ? (
              <span className="green">{stock} Available</span>
            ) : ( <span className="red">Not Available</span>)
          }
          <h3>${price}</h3>
        </section>
        <article>
          <form action="" onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label htmlFor="name">Name</label>
              {/* Changed to use `id` attribute for better accessibility and clarity */}
              <input
                required
                type="text"
                id="name"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              {/* Changed to use `id` attribute for better accessibility and clarity */}
              <input
                required
                type="number"
                id="price"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              {/* Changed to use `id` attribute for better accessibility and clarity */}
              <input
                required
                type="number"
                id="stock"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="photo">Photo</label>
              {/* Removed `value` attribute to prevent DOMException error */}
              {/* Changed to use `id` attribute for better accessibility and clarity */}
              <input
                required
                type="file"
                id="photo"
                onChange={changeImageHandler}
              />
            </div>
            {photoUpdate && <img src={photoUpdate} alt="New Image" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManage;
