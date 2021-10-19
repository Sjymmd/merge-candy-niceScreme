import React, { Component } from "react";
import ReactGA from "react-ga";
// import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Apps from "./Appbak";
// import { Props } from "particles-bg";

class App extends Component <any,any>{
    constructor(props:any) {
        super(props);
        this.state = {
            foo: "bar",
            resumeData: {}
        };

        ReactGA.initialize("UA-110570651-1");
        ReactGA.pageview(window.location.pathname);
    }

    getResumeData() {
        const that = this;
        jQuery.ajax({
            url: "./resumeData.json",
            dataType: "json",
            cache: false,
            success : (data:any) =>{
                that.setState({ resumeData: data })
            },
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
        <div className="App">
            <Apps/>
            <Header data={this.state.resumeData.main} />
            <About data={this.state.resumeData.main} />
            <Resume data={this.state.resumeData.resume} />
            <Portfolio data={this.state.resumeData.portfolio} />
            <Contact data={this.state.resumeData.main} />
            <Footer data={this.state.resumeData.main} />
        </div>
        );
    }
}

export default App;