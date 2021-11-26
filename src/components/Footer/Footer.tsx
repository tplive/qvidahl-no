import * as React from 'react';

class Footer extends React.Component {
    render() {
      return (
        <footer>
          <div>
          ✨ © {new Date().getFullYear()} ✨ Thomas Qvidahl 🥳
          </div>
        </footer>
      )
    }
  }
  
  export default Footer;
