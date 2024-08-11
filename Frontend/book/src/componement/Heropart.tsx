export default function Heropart() {
    return (
        <>
            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-10">
                            <div className="block">
                                <span className="d-block mb-3 text-white text-capitalize">Manage Your Library Effortlessly</span>
                                <h1 className="animated fadeInUp mb-5">Efficiently <br />Manage and Explore <br />Your Book Collection.</h1>
                                <a href="/add" className="btn btn-main animated fadeInUp btn-round-full">Add a New Book<i className="btn-icon fa fa-angle-right ml-2"></i></a>
                                <a href="/edit" className="btn btn-main animated fadeInUp btn-round-full ml-3">Edit Books<i className="btn-icon fa fa-angle-right ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
