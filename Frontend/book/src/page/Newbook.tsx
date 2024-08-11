import { useRef } from "react";

export default function Newbook() {
  const formRef = useRef(null);

  function btnClicked() {
    const data = new FormData(formRef.current!);

    const obj = {
      "name": data.get("title"),
      "author": data.get("author"),
      "description": data.get("desc"),
      "imageurl" : data.get("imageurl"),
      "edition": data.get("edition"),
      "publisher": data.get("publisher"),
      "type": parseInt(data.get("type") as string),
  
    }

    console.log(obj);

    fetch("https://localhost:7137/api/LibraryBook/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(_ => console.log("Created"))
  }

  return (
    <>
      <div className="main-wrapper">
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Add new book</span>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                    <li className="list-inline-item"><span className="text-white">/</span></li>
                    <li className="list-inline-item"><a href="/add" className="text-white-50">Add new book</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-wrap section">
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <form ref={formRef} id="contact-form" className="contact__form" method="post">
                  <h3 className="text-md mb-4">Add new book</h3>

                  <div className="form-group">
                    <input name="title" type="text" className="form-control" placeholder="Book Title" />
                  </div>

                  <div className="form-group">
                    <input name="author" type="text" className="form-control" placeholder="Author Name" />
                  </div>
                  <p>Add Your book image to this Drive Folder and add Url of the image to this textbox - 
                  <a href="https://drive.google.com/drive/folders/1-iGmGShxt49gZvJjB4LyYPQKuC2jSv7E?usp=sharing" target="_blank"><u>Add Image</u></a></p>
                  <div className="form-group">
                    <input name="imageurl" type="text" className="form-control" placeholder="Image-url" />
                  </div>

                  <div className="form-group">
                    <input name="edition" type="number" className="form-control" placeholder="Edition Number" />
                  </div>

                  <div className="form-group">
                    <input name="publisher" type="text" className="form-control" placeholder="Publisher" />
                  </div>

                  <div className="form-group">
                    <select name="type" className="form-control">
                      <option value="">Select Book Type</option>
                      <option value="0">Scientific</option>
                      <option value="1">Historic</option>
                      <option value="2">Love Story</option>
                      <option value="3">Children</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <textarea className="form-control mb-3" name="desc" id="comment" placeholder="Book Details"></textarea>
                  </div>

                  <button onClick={btnClicked} className="btn btn-main" name="submit" type="button">Add</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
