import React, {useEffect, useState, useRef} from 'react'

// api
import {getdate} from '../api/Getdata';
import Footer from '../components/Footer';

// components
import Blog from '../components/Blog';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const[filterblogs, setfilterBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const inputFocus = useRef();
  useEffect(()=>{
    getdate()
    .then((data)=>{
      setBlogs(data.blogs);
      setfilterBlogs(data.blogs);
      // setBlogs(data.data.blogs);
    })
    inputFocus.current.focus();
  },[])
  const updateSearch=(e)=>{
    setSearch(e.target.value.substr(0,20));
  }
  const filterBlog = blogs.filter((blog)=>{
    return blog.field.toUpperCase().indexOf(search.toUpperCase()) !== -1;
  });

  const sortDataModfied=()=>{
    var newBlogs = [...blogs];
    newBlogs.sort((a, b)=>(
      a.date < b.date ? 1 : -1
    ));
    setBlogs(newBlogs);
  }

  const sortTitle=()=>{
    var newBlogs = [...blogs];
    newBlogs.sort((a, b)=>(
      a.title > b.title ? 1 : -1
    ));
    setBlogs(newBlogs);
  }

  const sortName=()=>{
    var newBlogs = [...blogs];
    newBlogs.sort((a, b)=>(
      a.field > b.field ? 1 : -1
    ));
    setBlogs(newBlogs);
  }


  const filterField=(name)=>{
    var value = name.target.innerHTML;
    var newBlogs = [...blogs];
    if(value === "all"){
      setBlogs(filterblogs);
    }else{
      newBlogs =[];
      filterblogs.map((blog, index)=>{
        if(blog.field === value){
          newBlogs.push(blog)
        }
      })
      setBlogs(newBlogs);
    }
  }

  const selectChange=(e)=>{
    var sortValue = e.target.value;
    console.log(sortValue);
    if(sortValue === "sortDataModfied"){
      sortDataModfied();
    }else if(sortValue === "sortTitle"){
      sortTitle();
    }else if(sortValue === "sortName"){
      sortName();
    }
  }

  return (
    <div className="blogs">
      <div className="container">
        <p className="mt-5 blogs-about">
          in this page <span role="img" aria-label="emoji-page">📜</span> i will mention kind of toutorail, blogs and courses you can stydy it or read it to
          imporove your skills and be proffesional in your field <span role="img" aria-label="emoji-boy">🕺</span><span role="img" aria-label="emoji-hand">👌</span>
        </p>
      <div className="row mt-1 mb-3">
        <div className="col-sm-12 col-md-12">
          <div className="input-group mb-1">
            <input type="text" ref={inputFocus} value={search} onChange={updateSearch} className="form-control" placeholder="search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 mt-3">
          <div className="form-group filtering">
            <select className="form-control" defaultValue={"DEFAULT"} id="sel1" onChange={selectChange}>
              <option disabled value={"DEFAULT"}>Sort by..</option>
              <option value="sortDataModfied">date</option>
              <option value="sortTitle">title</option>
              <option value="sortName">field</option>
            </select>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 mt-3">
          <h5 className="filter-by mt-3 text-capitalize">filter by</h5>
          <div className="filtering filtering-name">
            <button name="filterByfield" className="shadow mt-2 sort-by-field" onClick={(name)=>filterField(name)}>all</button>
            <button name="filterByfield" className="shadow mt-2 sort-by-field" onClick={(name)=>filterField(name)}>html</button>
            <button name="filterByfield" className="shadow mt-2 sort-by-field" onClick={(name)=>filterField(name)}>css</button>
            <button name="filterByfield" className="shadow mt-2 sort-by-field" onClick={(name)=>filterField(name)}>javascript</button>
            <button name="filterByfield" className="shadow mt-2 sort-by-field" onClick={(name)=>filterField(name)}>jquery</button>
            <button name="filterByfield" className="shadow mt-2 sort-by-field" onClick={(name)=>filterField(name)}>bootstrap</button>
            <button name="filterByfield" className="shadow mt-2 sort-by-field" onClick={(name)=>filterField(name)}>sass</button>
            <button name="filterByfield" className="shadow mt-2 sort-by-field" onClick={(name)=>filterField(name)}>react</button>
          </div>
        </div>
      </div>
      <div className="row">
        {filterBlog.map((blog, index)=>(
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mt-4">
            <Blog blog={blog} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
   </div>
  )
}

export default Blogs
