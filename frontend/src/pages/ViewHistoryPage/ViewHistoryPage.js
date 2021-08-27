import React, { Component } from 'react'

import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import axios from 'axios';

export default class ViewHistoryPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [],
        }
    }

    componentDidMount() {
        axios.get("https://api.jotform.com/form/212221991729054/submissions?apikey=589e0c84d66ed72d07f81a78e3153916").then((response) => {
            console.log(response);
            let data = [];
            response.data.content.forEach((submission) => {

                data.push({
                    date: submission.created_at,
                    companyName: submission.answers["4"].answer,
                    content: submission.answers["3"].answer,
                    image: "insert image here",
                })
            })

            this.setState({results: data});

        }).catch((error) => {
            console.error(error);
        })
    }

    render() {

        console.log(this.state.results)
        return (
            <div style={{padding: '40px'}}>
                <div className="card">
                    <DataTable value={this.state.results}>
                        <Column field="date" header="Submission Date"></Column>
                        <Column field="companyName" header="Company Name"></Column>
                        <Column field="content" header="Content"></Column>
                        <Column field="image" header="Original Image"></Column>
                    </DataTable>
                </div>
            </div>
        )
    }
}
