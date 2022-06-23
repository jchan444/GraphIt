import React, {Component} from 'react';
import { render } from 'react-dom';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            data: "",
            datasetLabel1: "",
            dataset1: "",
            datasetLabel2: "",
            dataset2: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.dataLabel1Change = this.dataLabel1Change.bind(this);
        this.dataLabel2Change = this.dataLabel2Change.bind(this);
        this.dataset1Change = this.dataset1Change.bind(this);
        this.dataset2Change = this.dataset2Change.bind(this);
    }

    render() {
        

      return(
        <div className = "container">
            <form onSubmit = {this.handleSubmit}>
              <label> Graph Type: &nbsp; </label>
              <select id = "graphType">
              <option value="bar">Bar</option>
              <option value="line">Line</option>
              <option value="scatter">Scatter</option>
              <option value="pie">Pie</option>
              </select>
            <div className = 'option'>
                <label>Data Labels: &nbsp;</label>
                <input className = "dataField" id = "dataField" type = "text" value = {this.state.data} onChange = {this.handleDataChange} placeholder = "E.g. - Dogs, Cats"/>
            </div>

        <div className = 'option'>
            <label>Dataset legend name1: &nbsp;</label>
            <input className = "dataField" id = "datasetLabel1" type = "text" value = {this.state.datasetLabel1} onChange = {this.dataLabel1Change} placeholder = "E.g. - Los Angeles pet owners"/>
            <input className = "dataField" id = "dataset1" type = "text" value = {this.state.dataset1} onChange = {this.dataset1Change} placeholder = "E.g. - 10, 2"/>
        </div>

        <div className = 'option'>
            <label>Dataset legend name2: &nbsp;</label>
            <input className = "dataField" id = "datasetLabel2" type = "text" value = {this.state.datasetLabel2} onChange = {this.dataLabel2Change} placeholder = "E.g. - New York pet owners"/>
            <input className = "dataField" id = "dataset2" type = "text" value = {this.state.dataset2} onChange = {this.dataset2Change} placeholder = "E.g. - 4, 7"/>
        </div>

        <div className = 'option'>
              <label> Background Color: &nbsp; </label>
              <select id = "menuType">
              <option value="bar">White</option>
              <option value="AliceBlue">Light Blue</option>
              <option value="DarkCyan">Dark Cyan</option>
              <option value="SeaShell">Sea Shell</option>
              </select>
        </div>
            </form>
            <div>
          <button type = "submit" onClick = {this.handleSubmit}>Submit!</button>
            </div>    
        </div>
      )
    }

  

    handleSubmit() {
        //got graph type string
        const graphType = document.querySelector('#graphType').value;

        //got data string, and split into array.
        const dataField = document.querySelector('#dataField').value.split(",");
        //got datasetField string, and split into array.
        const datasetLabel1 = document.querySelector('#datasetLabel1').value;
        const dataset1 = document.querySelector('#dataset1').value.split(",")
        const datasetLabel2 = document.querySelector('#datasetLabel2').value;
        const dataset2 = document.querySelector('#dataset2').value.split(",")

        this.setState({
            type: graphType,
            data: [dataField],
            datasetLabel1: datasetLabel1,
            dataset1: [dataset1],
            datasetLabel2: datasetLabel2,
            dataset2: [dataset2],
        }, () => {
            fetch('http://localhost:3000/bar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state),
            })
            .then (response => window.location.replace(response))
            .catch(console.log("Error in fetch"))
        });
    //redirect to /bar url?

    //send post request to server carrying attributes in with response.

    }

    handleDataChange(event) {
        this.setState({data: event.target.value})
    }
    dataLabel1Change(event) {
        this.setState({datasetLabel1: event.target.value})
    }
    dataLabel2Change(event) {
        this.setState({datasetLabel2: event.target.value})
    }
    dataset1Change(event) {
        this.setState({dataset1: event.target.value})
    }
    dataset2Change(event) {
        this.setState({dataset2: event.target.value})
    }


}





// const Container = props => (
//     <div className = "container">
//         <form onSubmit = {}>
//         <button>Submit</button>
//     </div>
// );

export default Container;