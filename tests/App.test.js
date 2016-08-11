
import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {describe, it} from 'mocha'

import {App} from '../src/containers/App'


describe('<App>', function () {
    it('should render with a class `.grid-frame`', function () {
        expect(shallow(<App />).hasClass('grid-frame')).to.equal(true)
    })
})
