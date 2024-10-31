/* eslint-disable react/prop-types */
import { Form } from 'react-bootstrap'

export const ColumnFilter = ({ column }) => {

    const { filterValue, setFilter } = column
    return (
        <span>
            {/* Search:{' '} */}
            <Form.Control
            placeholder='Search'
            size='sm'
            value={filterValue || ""} 
            onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}