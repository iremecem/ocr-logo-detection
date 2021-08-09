import React, { Component } from 'react'
import './ScanMailPage.css'
import upload_logo from '../../assets/images/add_file_v2.svg';
import UploadImage from '../../components/UploadImage/UploadImage';
import OcrResultSkeleton from '../../components/OcrResultSkeleton/OcrResultSkeleton'

export default class ScanMailPage extends Component {
    render() {
        return (
            <div className="container">
                <UploadImage/>
                <OcrResultSkeleton/>
            </div>
        )
    }
}
