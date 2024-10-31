/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 500)

    return (
        <span>
            Search:{' '}
            <Form.Control value={value || ''} size='sm' onChange={(e) => {
                setValue(e.target.value)
                onChange(e.target.value)
            }} />
        </span>
    )
}

export default GlobalFilter