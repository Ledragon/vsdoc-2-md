import * as React from 'react';
import DropZone from './DropZone';
import MardownPreview from './MardownPreview';
import MardownEditor from './MarkdownEditor';

interface AppProps {

}
interface AppState {
    markdown: string;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            markdown: ''
        };
    }
    
    render(): React.ReactNode {
        return (
            <div className="viewport">
                <DropZone onXmlConverted={markdown => this.setState({ markdown })} />
                <section className="content-section-container">
                    <MardownEditor mardown={this.state.markdown}></MardownEditor>
                    <MardownPreview></MardownPreview>
                </section>
            </div>
        );
    }
}
export default App;