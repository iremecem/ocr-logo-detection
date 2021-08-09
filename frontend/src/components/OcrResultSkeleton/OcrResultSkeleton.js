import React, { Component } from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

export default class OcrResultSkeleton extends Component {
    render() {
        return (
            <div style={{marginLeft: '50px', marginTop: '50px'}}>
                <Skeleton width={200}></Skeleton>
                <br/>
                <Skeleton width={300}></Skeleton>
                <Skeleton width={300}></Skeleton>
                <Skeleton width={260}></Skeleton>
                <Skeleton width={300}></Skeleton>
                <Skeleton width={300}></Skeleton>
                <Skeleton width={260}></Skeleton>
                <Skeleton width={300}></Skeleton>
                <Skeleton width={300}></Skeleton>
                <Skeleton width={260}></Skeleton>
                <Skeleton width={300}></Skeleton>
                <Skeleton width={300}></Skeleton>
                <Skeleton width={240}></Skeleton>
                <br/>
                <Skeleton width={200}></Skeleton>
                <Skeleton width={160}></Skeleton>
            </div>
        )
    }
}
