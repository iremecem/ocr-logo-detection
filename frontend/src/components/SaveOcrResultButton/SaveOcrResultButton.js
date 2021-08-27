import React, { Component } from 'react'

import { Dropdown } from 'primereact/dropdown';
import FileSaver from 'file-saver';

import './SaveOcrResultButton.css'



export default class SaveOcrResultButton extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Plain Text (txt)',
                extension: '.txt',
                type: 'text/plain',
            },
            {
                label: 'Portable Document (pdf)',
                extension: '.pdf',
                type: 'application/pdf'
            },
            {
                label: 'Microsoft Word (docx)',
                extension: '.docx',
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            },
            {
                label: 'OpenOffice (odf)',
                extension: '.odf',
                type: 'application/vnd.oasis.opendocument.text'
            },
        ];

        this.state = {
            downloadLink: "",
        }
    }

    onSelectionChange = (e) => {
        this.createFile(e.value.type, e.value.extension)
        // this.downloadFile(e.value.extension)
    }

    createFile = (fileType, fileExtension) => {
        // const data = new Blob(["fghhkjg"], {type: fileType})
        // URL.revokeObjectURL(this.state.downloadLink)
        // this.setState({downloadLink: URL.createObjectURL(data)})

        
        var data = new Blob(["fghhkjg gdgfd gsg gfd ggfgzs f gfd"], {type: fileType})
        FileSaver.saveAs(data, "filename" + fileExtension);
        // console.log(data)
        // var downloadURL = (window.URL || window.webkitURL).createObjectURL(data)
        // var name = "ocrresult" + fileExtension

        // var element = document.createElement("a");
        // element.download = name
        // element.href = downloadURL
        
        // document.body.appendChild(element); // Required for this to work in FireFox
        // element.click()
        // document.body.removeChild(element)
    }

    downloadFile = (fileExtension) => {
        const a = document.createElement('a');
        

        a.href = this.state.downloadLink;
        a.download = "ocrresult".concat(fileExtension);

        document.body.appendChild(a);
        a.click();

    }


    render() {
        return (
            <div>
                <Dropdown placeholder="Download" options={this.items} optionlabel="label" onChange={this.onSelectionChange} />
            </div>
        )
    }
}
