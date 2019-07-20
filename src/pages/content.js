import React, { Component } from "react";
import templatesData from "../templateData";
import generateMarkup from "../template-engine";

export default class ContentPage extends Component {
    render() {
        return (
            <div
                dangerouslySetInnerHTML={{
                    __html: generateMarkup(templatesData.content)
                }}
            />
        );
    }
}
