import * as React from 'react'
import * as ReactDom from 'react-dom'



class ExternalComponent extends React.Component<{},{}>{

    componentDidMount(){
        const node = ReactDom.findDOMNode(this)
        const comp = require('test-component-b')


        comp.run(node)
    }

    render (){
        return <div/>
    }
}

function Root(){
    return <div><h1>Hello from component a </h1> <ExternalComponent/> </div>
}
function Nested({words}: {words: string}){
    return <h3>Nested words: {words}</h3>
}

export function run(host: HTMLElement) {
    ReactDom.render(<Root/>, host)
}

export function nested(host: HTMLElement, words: string){
    ReactDom.render(<Nested words={words}/>, host )
}