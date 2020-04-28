import React from 'react'
import DarkTheme from './DarkTheme';
import DateClock from './DateClock';

function Header(props) {
  const {changeMode, dark} = props;
  return (
    <div>
      <div className="jumbotron text-center">
        <DateClock />
        <DarkTheme changeMode={changeMode} dark={dark} />
        <div className="content">
          <div className="image-div"></div>
          <h5 className="mt-2">omar ali soliman</h5>
          <p>front end developer</p>
          <div className="social-account mt-2">
            <span><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/omar-ali-089aa9186/"><i className="fab fa-linkedin"></i></a></span>
            <span><a target="_blank" rel="noopener noreferrer" href="https://github.com/OmarAliSoliman"><i className="fab fa-github"></i></a></span>
            <span><a target="_blank" rel="noopener noreferrer" href="mailto:omar.ali.alasmar@gmail.com"><i className="fas fa-envelope"></i></a></span>
            <span><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100003115112489"><i className="fab fa-facebook"></i></a></span>
            <span><a target="_blank" rel="noopener noreferrer" href="tel:00201098586783"><i className="fab fa-whatsapp"></i></a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
