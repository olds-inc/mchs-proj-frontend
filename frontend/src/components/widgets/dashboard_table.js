import React from 'react';
import { Table } from 'react-bootstrap';

function MyTable() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
                <th>Header 6</th>
                <th>Header 7</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Data 1.1</td>
                <td>Data 1.2</td>
                <td>Data 1.3</td>
                <td>Data 1.4</td>
                <td>Data 1.5</td>
                <td>Data 1.6</td>
                <td>Data 1.7</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Data 2.1</td>
                <td>Data 2.2</td>
                <td>Data 2.3</td>
                <td>Data 2.4</td>
                <td>Data 2.5</td>
                <td>Data 2.6</td>
                <td>Data 2.7</td>
            </tr>
            {/* add more rows here */}
            </tbody>
        </Table>
    );
}

export default MyTable;
