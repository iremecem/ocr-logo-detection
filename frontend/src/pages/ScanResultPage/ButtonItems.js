export const ButtonItems = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        type: 'text/plain',
        command: () => {
            const data = new Blob([this.state.result], {type: 'text/plain'})
            URL.revokeObjectURL(this.state.downloadLink)
            this.setState({downloadLink: URL.createObjectURL(data)})
            console.log(this.state.downloadLink)
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            this.toast.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'React Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://facebook.github.io/react/'
        }
    },
    {   label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            window.location.hash = "/fileupload"
        }
    }
];