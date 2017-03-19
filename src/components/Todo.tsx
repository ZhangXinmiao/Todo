/// <reference path="./interface.d.ts"/>
import * as React from "react";
import { Tip } from "./Tip";
import { DealZone } from "./DealZone";

export class Todo extends React.Component<any, any> {
    render() {
        let tipDom = [];
        for(let i = 0; i < this.props.tips.length; i++) {
            tipDom.push(
                <Tip 
                    completed={this.props.tips[i].completed}
                    content={this.props.tips[i].content}
                    _id={i}
                    changeState={this.props.changeState}
                />
            );
        }
        return (
            <div>
                <DealZone 
                    addTip={this.props.addTip}
                    />
                {tipDom}
            </div>
        );
    }
}


