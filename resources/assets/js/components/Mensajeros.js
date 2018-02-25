import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Mensajeros extends Component {

    constructor() {
        super();
        //Initialize the state in the constructor
        this.state = {
            products: []
        }
    }
    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        /* fetch API in action */
        fetch('https://barberscloud.com.co:1998/api/get-cities')
            .then(response => {
                return response.json();
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ products: products.Cities });
            });
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li key={product._id} >
                    {product.Name}
                </li>
            );
        })
    }

    /*render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card card-default">
                            <div className="card-header">Example Component</div>
                            <div className="card-body">
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }*/

    render() {
        /* Some css code has been removed for brevity */
        return (
            <div className="content">
             <div className="title m-b-md">
                    Mensajeros
             </div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card card-default">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">
                            I'm an example component!
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

if (document.getElementById('menssager')) {
    ReactDOM.render(<Mensajeros />, document.getElementById('menssager'));
}
