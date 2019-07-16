import React, { Component } from "react";
import templatesData from "../templateData";
import generateMarkup from "../template-engine";

export default class IndexPage extends Component {
    render() {
        return (
            <div
                dangerouslySetInnerHTML={{
                    __html: generateMarkup(templatesData.payment)
                }}
            />
        );
    }
}
