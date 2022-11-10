import React, { Component } from 'react'


class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return(
         <div>
            <footer className='navbar bg-dark nav-bark-dark navbar-exand-md'>
                <span className='text-muted' align ='center'>
                    All right reserverd ESD program Application 
                </span>
            </footer>
         </div>
         );
    }
}

export default FooterComponent;



/*
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class FooterComponent extends Component {
  static propTypes = {}

  render() {
    return (
      <div>FooterComponent</div>
    )
  }
}

export default FooterComponent
*/