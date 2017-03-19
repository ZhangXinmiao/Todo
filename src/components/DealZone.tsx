/// <reference path="./interface.d.ts"/>
import * as React from "react";

export class DealZone extends React.Component<any, any> {
    addTip = () => {
        const content = (document.getElementById("content") as HTMLInputElement).value;
        this.props.addTip(content);
    }

    render () {
        return (
            <div>
                <input type="text" id="content" ref="content"/>
                <a href="javascript:;" onClick={this.addTip}>添加+</a>
            </div>
        );
    }
}