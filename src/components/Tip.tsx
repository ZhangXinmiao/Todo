/// <reference path="./interface.d.ts"/>
import * as React from "react";

export class Tip extends React.Component<TipProps, any> {
    changeState = (e: any) => {
        let _id = e.target.getAttribute("data-id");
        console.log(_id);
        this.props.changeState(_id);
    }
    render() {
        return (
            <div>
                {
                    this.props.completed
                    ?<span>
                        <input type="checkbox" data-id={this.props._id} onClick={this.changeState} checked/>
                        <span key={this.props._id}><s>{this.props.content}</s></span>
                    </span>
                    :<span>
                        <input type="checkbox" data-id={this.props._id} onClick={this.changeState}/>
                        <span key={this.props._id}>{this.props.content}</span>
                    </span>
                }
            </div>
        );
    }
}

