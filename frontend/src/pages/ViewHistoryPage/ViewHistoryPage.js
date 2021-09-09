import React, { Component } from 'react'

import { Dialog } from 'primereact/dialog';

import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import axios from 'axios';
import DownloadSubmissionsButton from '../../components/DownloadSubmissionsButton/DownloadSubmissionsButton';

import './ViewHistoryPage.css'
import SubmissionDetailDialog from '../../components/SubmissionDetailDialog/SubmissionDetailDialog';

export default class ViewHistoryPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [],
            selection: "",
            dialogVisible: false,
        }
    }

    componentDidMount() {
        axios.get("https://api.jotform.com/form/212441982728057/submissions?apikey=589e0c84d66ed72d07f81a78e3153916").then((response) => {
            console.log(response);
            let data = [];
            response.data.content.forEach((submission) => {

                console.log(submission.answers["5"].answer)
                data.push({
                    date: submission.created_at.split(" ")[0],
                    companyName: submission.answers["3"].answer,
                    content: submission.answers["4"].answer,
                    image: submission.answers["5"].answer,
                })
            })

            this.setState({results: data});

        }).catch((error) => {
            console.error(error);
        })
    }

    handleSelectionChange = (e) => {
        this.setState({selection: e.value, dialogVisible: true})
    }

    mailContentTemplate = (rowData) => {
        return (
            <div className="mail-content">
                {rowData.content}
            </div>
        )
    }

    mailImageTemplate = (rowData) => {
        var logoImage = 'data:image/jpeg;base64,' + rowData.image
        return (
            <div className="image-preview">
                <img className="image"
                    alt="image"
                    src={logoImage}
                />
            </div>
        )
    }

    onHide = () => {
        this.setState({
           dialogVisible: false
        });
    }

    render() {

        return (
            <div className="history-page">
                <SubmissionDetailDialog visible={this.state.dialogVisible} data={this.state.selection} onHide={this.onHide}></SubmissionDetailDialog>
                <DownloadSubmissionsButton/>
                <div className="submissions-table">
                    <DataTable value={this.state.results} selectionMode="single" onSelectionChange={this.handleSelectionChange} removableSort>
                        <Column field="date" header="Submission Date" sortable></Column>
                        <Column field="companyName" header="Company Name" sortable></Column>
                        <Column body={this.mailContentTemplate} header="Content"></Column>
                        <Column body={this.mailImageTemplate} header="Image"></Column>
                    </DataTable>
                </div>
                
            </div>
        )
    }
}
