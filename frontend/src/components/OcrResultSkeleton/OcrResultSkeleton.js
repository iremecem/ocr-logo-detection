import React, { Component } from 'react'

import { Skeleton } from 'primereact/skeleton';

import './OcrResultSkeleton.css'

export default class OcrResultSkeleton extends Component {
    render() {
        return (
            <div style={{marginLeft: '50px', marginTop: '50px'}}>
                <Skeleton className="skeleton" width="200px" borderRadius="16px"></Skeleton>
                <br/>
                <Skeleton className="skeleton" width="300px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="300px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="260px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="300px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="300px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="260px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="300px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="300px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="260px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton"width="300px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="300px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="240px" borderRadius="16px"></Skeleton>
                <br/>
                <Skeleton className="skeleton" width="200px" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="160px" borderRadius="16px"></Skeleton>
            </div>
        )
    }
}
