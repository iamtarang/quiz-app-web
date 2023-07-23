/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef, useMemo } from 'react';
import { Col, Row, Card, Table, Button, Form, ButtonGroup, Dropdown, Container } from 'react-bootstrap';
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from 'react-table'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import "jspdf-autotable";
import { ThreeDots } from 'react-loader-spinner';
import GlobalFilter from '../Server/GlobalFilter';
import { useReactToPrint } from 'react-to-print'

const CustomTable = ({ TableData, tableHooks, COLUMN_DATA, TableTitle }) => {

	const columns = useMemo(() => COLUMN_DATA, [COLUMN_DATA]);
	const data = useMemo(() => TableData, [TableData]);
	const tableRef = useRef(null);
	const currentRef = useRef()


	// const [tableData, setTableData] = useState([])

	const tableToHtml = () => {
		return (
			<div ref={currentRef}>
				<Table {...getTableProps()}
					size='sm'
					className='mt-2'
					responsive
					ref={tableRef}
				>
					<thead>
						{
							headerGroups.map((headerGroups) => (
								<tr {...headerGroups.getHeaderGroupProps()}>
									{
										headerGroups.headers.map(column => (
											<th {...column.getHeaderProps(column.getSortByToggleProps)}>
												{column.render('Header')}
												<span>
													{column.isSorted ? (column.isSortedDesc ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown size={20} />) : " "}
												</span>
												<div>
													{column.canFilter ? column.render('Filter') : null}
												</div>
											</th>
										))
									}
								</tr>
							))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{
							page.map(row => {
								prepareRow(row)
								return (
									<tr {...row.getRowProps}>
										{row.cells.map((cell) => {
											return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
										})}
									</tr>)
							})
						}
					</tbody>
				</Table>
			</div>
		)
	}

	// tableToHtml()


	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canPreviousPage,
		canNextPage,
		pageOptions,
		state,
		gotoPage,
		pageCount,
		prepareRow,
		setPageSize,
		setGlobalFilter
	} = useTable({
		columns,
		data
	}, tableHooks, useFilters, useGlobalFilter, useSortBy, usePagination)

	const { pageIndex, pageSize, globalFilter } = state

	// const download = TableTitle?.props?.children === undefined ? "table.pdf" : TableTitle?.props?.children

	const exportPDF = useReactToPrint({
		content: () => currentRef.current,
		copyStyles: true
	})

	return (
		<>
			<Card.Header>
				{TableTitle}
			</Card.Header>
			<Card.Body>
				{data.length !== 0 ?
					<Row className='mb-3'>
						<Col>
							<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
						</Col>
						<Col>

							Go to page: {' '}
							<Form.Control type='number' size='sm' defaultValue={pageIndex + 1}
								onChange={e => {
									const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
									gotoPage(pageNumber)
								}} />
						</Col>
						<Col className='d-flex justify-content-end'>

							<Dropdown
							// drop='down-centered'
							>
								<Dropdown.Toggle variant="light">
									Download
								</Dropdown.Toggle>

								<Dropdown.Menu variant="light">
									<Dropdown.Item>
										<DownloadTableExcel
											filename={TableTitle?.props?.children === undefined ? "table" : TableTitle?.props?.children}
											sheet="users"
											currentTableRef={tableRef.current}
										>
											<Button
												variant='success'
											// className='mt-3'
											>
												Export as excel
											</Button>
										</DownloadTableExcel>
									</Dropdown.Item>
									{/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
									<Dropdown.Divider />
									<Dropdown.Item className='d-flex justify-content-center'>
										<Button onClick={() => exportPDF()}>
											Export as PDF
										</Button>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Col>
						{/* Table Here */}
						{tableToHtml()}
						<Row>
							<Col>
								Page{' '}
								<strong>
									{pageIndex + 1} of {pageOptions.length}
								</strong>
							</Col>
							{/* <Divider /> */}
							<Col>

								<Form.Select
									value={pageSize}
									onChange={(e) => setPageSize(Number(e.target.value))}
									size='sm'
								>
									{[10, 25, 50].map((pageSize) => (
										<option key={pageSize} value={pageSize}>
											Show {pageSize}
										</option>
									))}
								</Form.Select>
							</Col>
							{/* <Divider /> */}
							<Col>
								<ButtonGroup size='sm'>
									<Button variant='warning' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>
									<Button variant='warning' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
									<Button variant='warning' onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
									<Button variant='warning' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</Button>
								</ButtonGroup>
							</Col>
						</Row>
					</Row>
					:
					<Container>
						<div className='d-flex m-auto' style={{ width: "80px" }}>
							<ThreeDots
								className='ms-3'
								height="80"
								width="80"
								radius="9"
								color="#4fa94d"
								ariaLabel="three-dots-loading"
								wrapperStyle={{}}
								wrapperClassName=""
								visible={true}
							/>
						</div>
					</Container>
				}
			</Card.Body>
		</>
	)
}

export default CustomTable