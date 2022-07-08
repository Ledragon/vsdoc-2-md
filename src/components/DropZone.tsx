import * as React from 'react';
import { vsdocToMarkdown } from '../vsdocToMarkdown';

interface DropZoneProps {

}

class DropZone extends React.Component<DropZoneProps>{
    constructor(props: DropZoneProps) {
        super(props);
        this.dragEnter = this.dragEnter.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDropToDropzone = this.onDropToDropzone.bind(this);
        this.onClickDropzone = this.onClickDropzone.bind(this);
    }

    private dragEnter(event: React.DragEvent) {
        event.dataTransfer.dropEffect = 'copy';
        event.currentTarget.classList.add('hover');
    }

    private onDragOver(event: React.DragEvent) {
        event.preventDefault()
    }
    private onDragLeave(event: React.DragEvent) {
        event.currentTarget.classList.remove('hover');
    }

    private onDrop(event: React.DragEvent) {
        this.onDragLeave(event);
        this.onDropToDropzone(event);
    }

    private onDropToDropzone(event: React.DragEvent) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        this.loadFile(file);
    }

    private onClickDropzone(event: React.MouseEvent) {
        if (event.button === 1) {
            // Left click.
            // dropzoneDialog.click();
        }
    }

    private loadFile(file: File) {
        // loadingIndicator.classList.remove('transparent');
        const reader = new FileReader();
        const self = this;
        reader.onload = (ev) => {
            try {
                const parser = new DOMParser();
                const xml = parser.parseFromString(reader.result as any, 'text/xml');
                const value = vsdocToMarkdown(xml);
                console.log(value);
                // onChangeMarkdown();
                // dropzoneContainer.classList.remove('initial');
                // dropzone.classList.remove('initial');
                // dropzone.innerHTML = file.name;
                // markdownEditor.scrollTop = 0;
                // markdownPreview.scrollTop = 0;
            } catch (err) {
                self.handleError(err);
            }
            // loadingIndicator.classList.add('transparent');
        }
        try {
            reader.readAsText(file);
        } catch (err) {
            self.handleError(err);
        }
    }


    private handleError(err: any) {
        if (console && console.error) console.error(err);
        // errorCurtain.classList.remove('error-curtain--closed');
        // errorCurtainContent.value = err.stack;
    }

    render(): React.ReactNode {
        return (
            <section id="dropzone-container" className="dropzone-container initial">
                <section id="dropzone" className="dropzone initial"
                    onDragEnter={this.dragEnter}
                    onDragOver={this.onDragOver}
                    onDragLeave={this.onDragLeave}
                    onDrop={this.onDrop}
                    onClick={this.onClickDropzone}>
                    <img src="./img/loading.gif" alt="Loading" className="transparent" width="48" height="48"></img>
                    Drag &amp; drop Visual Studio XML documentation file here or click to browse.
                    <img id="loading-indicator" src="./img/loading.gif" alt="Loading" width="48" height="48" className="transparent"></img>
                </section>
                <input type="file" accept=".xml" id="dropzone-dialog" name="dropzone-dialog" className="hide" />
            </section>
        );
    }
}

export default DropZone;