import React, { useState, useEffect } from "react";

function Settingbox(props) {
  const [open, setOpen] = useState(false);
  const { dark } = props;

  const [colorsLists, setColorList] = useState([]);
  document.documentElement.style.setProperty("--manColor", intitialMode());
  useEffect(() => {
    var colorList = document.querySelectorAll(".option-box span");
    colorList.forEach((color, index) => {
      color.addEventListener("click", () => {
        var newColor = color.dataset.color;
        localStorage.setItem("newColor", newColor);
        setColorList(colorList);
        document.documentElement.style.setProperty(
          "--manColor",
          intitialMode()
        );
      });
    });
  }, []);

  function intitialMode() {
    const savedMode = localStorage.getItem("newColor");
    return savedMode || "#26293a";
  }

  useEffect(()=>{
    var settingIcon = document.querySelector(".setting-icon");
    var settingBox = document.querySelector(".setting-box");
    settingIcon.addEventListener("click", () => {
      if (!open) {
        settingBox.style.right = "0";
      } else {
        settingBox.style.right = "-150px";
      }
      setOpen(!open);
    });
  },[open])

  // const handelClick = () => {
    
  // };

  return (
    <div>
      <div className="setting-box">
        <div className="setting-icon">
          <i className="fas fa-cog fa-spin"></i>
        </div>
        {dark ? (
          <h6 class="no-avilble">Please remove dark mode and <span>refresh</span></h6>
        ):(
          <div className="option-box">
          <h6>Color</h6>
          <span className="span1 active" data-color="#26293a"></span>
          <span className="span2" data-color="#551743"></span>
          <span className="span3" data-color="#5E44D3"></span>
          <span className="span4" data-color="#592C8F"></span>
          <span className="span5" data-color="#B90568"></span>
        </div>
        )}
      </div>
    </div>
  );
}

export default Settingbox;
