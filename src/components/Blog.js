import React from "react";
// import "animate.css/animate.min.css";

function Blog(props) {
  const { blog } = props;
  return (
    <div className="blog">
      <div className="card text-white shadow">
        <div className="card-img-overlay">
          <div className="card-image-parent shadow-lg rounded">
            <img className="card-img" src={blog.icon} alt="Card img" />
          </div>
          <p className="card-text">
            {" "}
            <a target="_blank" rel="noopener noreferrer" href={blog.link}>
              {blog.title}
            </a>{" "}
          </p>
          <span className="auther"> {blog.auther} </span>
          <span className="info">
            {" "}
            <span role="img" aria-label="emoji-watch">
              🕐
            </span>{" "}
            {blog.info}{" "}
          </span>
          <p className="date">{blog.date} </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;

// <div className="col-sm-12 col-md-6 col-lg-4 car" style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${blog.background})`}}>
// omar
// </div>
