import React, { Component } from 'react'

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import './SubmissionDetailDialog.css';

import SaveOcrResultButton from '../../components/SaveOcrResultButton/SaveOcrResultButton.js'


export default class SubmissionDetailDialog extends Component {

    constructor(props) {
        super(props); 
    }

    render() {

        var logoImage = 'data:image/jpeg;base64,' + this.props.data.image

        return (
            <div>
                <Dialog visible={this.props.visible} onHide={this.props.onHide}>
                <div className="dialog-content">
                    <div className="mail-image">
                        <img className="image"
                            alt="image"
                            src={logoImage}
                        />
                    </div>
                    <div className="results-column">
                        <div className="logo-result-container">
                            <div className="ocr-header">Company Name</div>
                            <hr className="header-divider-2"></hr>
                            {this.props.data.companyName}
                        </div>
                        <div className="ocr-result-container">
                            <div className="ocr-header">Mail Content</div>
                            <hr className="header-divider-2"></hr>
                            <div className="ocr-result-text">
                                {this.props.data.content}
                            </div>
                            <div className="save-button-2"> 
                                <SaveOcrResultButton ocrResult={this.props.data.content} fileName={"scan"}/>
                            </div>
                        </div>
                    </div>
                </div>
                </Dialog>
            </div>
        )
    }
}
