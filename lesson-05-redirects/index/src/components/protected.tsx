import * as React from "react";

export class Protected extends React.Component<{}, {}> {
    render() {
            return (
                <div className='page' >
                    Super geheimer privat Inhalt.
                </div>
            );
    }
}