import React, { Component } from 'react'

import { Button } from 'primereact/button';

import './DownloadSubmissionsButton.css'

export default class DownloadSubmissionsButton extends Component {
    render() {
        return (
            <div className="download-button-container">
                <a className="download-link" href='https://www.jotform.com/csv/212442092420039' download>
                    <Button className="download-button" icon="pi pi-download" label="Download">
                    </Button>
                </a>

                
            </div>
        )
    }
}
