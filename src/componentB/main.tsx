import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as requirejs from 'requirejs'


class ExternalComponent extends React.Component<{},{}>{

    componentDidMount(){
        const node = ReactDom.findDOMNode(this)
        requirejs(['test-component-a/nested'], comp =>      comp.nested(node, "frob frob bob"))
    }

    render (){
        return <div/>
    }
}

function Root(){
    return <div><h2>Hello from component B </h2> <ExternalComponent/> </div>
}

export function run(host: HTMLElement) {
    ReactDom.render(<Root/>, host)
}