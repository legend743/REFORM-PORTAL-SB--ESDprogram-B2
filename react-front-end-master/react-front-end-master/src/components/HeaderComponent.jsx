import React ,{ Component } from "react";


class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return(
         <div>
            <header>
                <nav className="navbar bg-dark nav-bark-dark navbar-exand-md">
                   <div>
                      <a href="https://www.github.com">Angel GIT Code  </a>
                   </div> 
                </nav>
            </header>
         </div>
        );
    }
}

export default HeaderComponent;