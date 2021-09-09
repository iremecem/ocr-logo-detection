import React, { Component } from 'react'

import { Skeleton } from 'primereact/skeleton';

import './OcrResultSkeleton.css'

export default class OcrResultSkeleton extends Component {
    render() {
        return (
            <div>
                <Skeleton className="skeleton" width="45%" borderRadius="16px"></Skeleton>
                <br/>
                <Skeleton className="skeleton" width="60%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="60%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="52%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="60%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="60%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="52%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="60%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="60%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="52%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton"width="60%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="60%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="50%" borderRadius="16px"></Skeleton>
                <br/>
                <Skeleton className="skeleton" width="45%" borderRadius="16px"></Skeleton>
                <Skeleton className="skeleton" width="40%" borderRadius="16px"></Skeleton>
            </div>
        )
    }
}
