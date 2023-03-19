import React from 'react';
import {Row, Container, Col, Nav} from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Bar from './components/Bar'
// import SupportedModels from "./components/SupportedModels";
import axios from "axios";
import MyTable from "./components/widgets/dashboard_table";
import WeatherWidget from "./components/widgets/weather";
import Widget from "./components/widgets/dashboard_stat";


axios.interceptors.response.use((response) => response, (error) => {
  let content = error.config.method.toUpperCase() + " " + error.config.url + ":"
  if (error.response) {
    // client received an error response (5xx, 4xx)
    content += error.response.status + " " + JSON.stringify(error.response.data)
  }
  // network error
  else {
    content += error.toString()
  }
  toast.warn(content, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    style: {
      background: "#f55555",
      color: "black"
    }
  });

  return Promise.reject(error)
});


class App extends React.Component {
  state = {
    selected: 'reaction',
  }

  onChangeSelect = (selected) => this.setState({selected})

  render() {
    let clickedBar = null
    if (this.state.selected === 'reaction') {
      toast.warn('reaction', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        style: {
          background: "#f55555",
          color: "black"
        }
      });
      clickedBar = <MyTable/>

    } else if (this.state.selected === 'mps') {
      toast.warn('mps', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        style: {
          background: "#f55555",
          color: "black"
        }
      });
      // clickedBar = <MediaProcessors/>
    } else if (this.state.selected === 'supported') {
      toast.warn('supported', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        style: {
          background: "#f55555",
          color: "black"
        }
      });
      // clickedBar = <SupportedModels/>
    }
    return (
        <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
          <Row>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable={false}
                pauseOnHover
            />

            <Col sm={9}>
              <Bar onChangeSelect={this.onChangeSelect.bind(this)}/>
              {clickedBar}
            </Col>
            <Col sm={3}>
              <div
                  style={{ display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center',

                  }}>
                <p style={{ display: 'flex', flexDirection: 'row'}} >
                  <a className="nav-link" href="#">Link</a>
                  <a className="nav-link" href="#">Link</a>
                </p>
                <WeatherWidget style={{marginTop: '100px'}}/>
                <Widget style={{marginTop: '100px'}}/>
              </div>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default App;
