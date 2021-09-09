import React, { Component } from 'react'

import { Skeleton } from 'primereact/skeleton';

import './LogoResultSkeleton.css'

export default class LogoResultSkeleton extends Component {
    render() {
        return (
            <div>
                <Skeleton className="skeleton" width="30%" borderRadius="16px"></Skeleton>
            </div>
        )
    }
}
