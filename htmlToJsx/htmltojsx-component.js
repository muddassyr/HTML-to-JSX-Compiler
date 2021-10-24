"use strict";

;(function () {

  var HELLO_COMPONENT = "\
<!-- Mr Khan -->\n\
<div class=\"signup\" style=\"border: 1px solid black\">\n\
  <label for=\"name\">Enter your name: </label>\n\
  <input type=\"text\" id=\"name\" />\n\
  <label for=\"email\">Enter your email: </label>\n\
  <input type=\"email\" id=\"email\" />\n\
  <label for=\"password\">Enter your password: </label>\n\
  <input type=\"password\" id=\"password\" />\n\
  <button type=\"submit\">Submit</button>\n\
</div>\n\
<p>Enter your HTML here</p>\
";

  // var HTMLtoJSXComponent = React.createClass({
  const HTMLtoJSXComponent = React.createClass({
  // const HTMLtoJSXComponent = () => {
    displayName: "HTMLtoJSXComponent",

    getInitialState: function getInitialState() {
      return {
        outputClassName: 'Component',
        createClass: true
      };
    },
    onReactClassNameChange: function onReactClassNameChange(evt) {
      this.setState({ outputClassName: evt.target.value });
    },
    onCreateClassChange: function onCreateClassChange(evt) {
      this.setState({ createClass: evt.target.checked });
    },
    setInput: function setInput(input) {
      this.setState({ input: input });
      this.convertToJsx();
    },
    convertToJSX: function convertToJSX(input) {
      var converter = new HTMLtoJSX({
        outputClassName: this.state.outputClassName,
        createClass: this.state.createClass
      });
      return converter.convert(input);
    },
    render: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "options" },
          React.createElement(
            "label",
            null,
            React.createElement("input", {
              type: "checkbox",
              checked: this.state.createClass,
              onChange: this.onCreateClassChange }),
            "Create class"
          ),
          React.createElement(
            "label",
            { style: { display: this.state.createClass ? '' : 'none' } },
            "\xB7 Class name:",
            React.createElement("input", {
              type: "text",
              value: this.state.outputClassName,
              onChange: this.onReactClassNameChange })
          )
        ),
        React.createElement(ReactPlayground, {
          codeText: HELLO_COMPONENT,
          renderCode: true,
          transformer: this.convertToJSX,
          showCompiledJSTab: false,
          editorTabTitle: "Live HTML Editor"
        })
      );
    }
  });
  // };

  ReactDOM.render(React.createElement(HTMLtoJSXComponent, null), document.getElementById('jsxCompiler'));
  // ReactDOM.render(React.createElement(<HTMLtoJSXComponent />, null),document.getElementById('jsxCompiler'));
})();