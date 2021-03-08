import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Jumbo() {
    return (
        <Jumbotron>
            <h1>Batch 101 - Hello World!</h1>
            <p>Ex aute dolor ut occaecat magna sed ea occaecat ullamco cillum veniam dolor sit labore in laborum sed elit aute laborum fugiat voluptate sit sunt non labore occaecat sit nostrud occaecat dolore excepteur sed.</p>
            <Button variant="primary">Go To Blog</Button>
        </Jumbotron>
    )
}