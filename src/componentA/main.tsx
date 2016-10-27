import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as requirejs from 'requirejs'
import * as ko from 'knockout'

class ExternalComponent extends React.Component<{}, {}>{

    componentDidMount() {
        const node = ReactDom.findDOMNode(this)
        const comp = requirejs(['authentication/authentication-component'], comp => {
            ko.cleanNode(node)
            ko.applyBindings({}, node)
        })
    }

    render() {
        //const kockoutBindingHtml = `        <tt-authenticate         params='callback: null, rememberAccount: false, accountNumber: 000)" '></tt-authenticate>`
        const kockoutBindingHtml = `<tt-authenticate></tt-authenticate>`
        return <div className="neo" dangerouslySetInnerHTML={{ __html: kockoutBindingHtml }} />
    }
}

function Root() {
    return <div id="login-window"><h3>Hello from FORM component </h3> <ExternalComponent /> </div>
}

export function run(host: HTMLElement) {
    ReactDom.render(<Root />, host)
}
