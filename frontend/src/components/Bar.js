import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import Basic from "./widgets/weather";
import Widget from "./widgets/dashboard_stat";
import WeatherWidget from "./widgets/weather";
import MyTable from "./widgets/dashboard_table";


class Bar extends React.Component {

    render() {
        return (
            <div>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link onClick={() => this.props.onChangeSelect('hps')}>Реагирование</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => this.props.onChangeSelect('mps')}>Статистика</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Служба
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Техника
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Документы
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Планирование
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Карта
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default Bar;