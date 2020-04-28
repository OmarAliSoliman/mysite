import React from 'react'

function DarkTheme(props) {
  const {changeMode, dark} = props;
  return (
    <div>
      <div className="change-dark-mode">
        <span className="emoji-sun" style={{color: dark ? "grey":"yellow"}} role="img" aria-label="emoji-sun">☀️</span>
        <div className="toggle-switch">
          <input type="checkbox" onChange={changeMode} checked={dark ? true:false} className="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
          <label className="toggle-switch-label" htmlFor="toggleSwitch">
            <span className="toggle-switch-inner"></span>
            <span className="toggle-switch-switch"></span>
          </label>
        </div>
        <span className="emoji-moon" style={{color: dark ? "#3458AC":"grey"}} role="img" aria-label="emoji-moon">🌙</span>
      </div>
    </div>
  )
}

export default DarkTheme;
