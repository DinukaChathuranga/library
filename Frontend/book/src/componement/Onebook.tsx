export default function Onebook({ title, author, imageUrl, desc }: { title: string, author: string, imageUrl: string, desc:string}) {
    return (
        <div className="col-lg-4 col-md-4 mb-5">
            <div className="blog-item">
                <img src={imageUrl} alt={title} className="img-fluid rounded" />

                <div className="blog-item-content bg-white p-4">
                    <h3 className="mt-3 mb-3"><a href="/details">{title}</a></h3>
                    <p className="author-name">by {author}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
