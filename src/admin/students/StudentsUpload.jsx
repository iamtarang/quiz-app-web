/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Button } from 'react-bootstrap';
import { PiStudentFill } from 'react-icons/pi'

const StudentsUpload = () => {

	const [file, setFile] = useState(null);
	const [jsonData, setJsonData] = useState(null);

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		setFile(selectedFile);
	};

	const handleFileUpload = async () => {
		if (file) {
			const reader = new FileReader();
			reader.onload = async (e) => {
				const data = new Uint8Array(e.target.result);
				const workbook = XLSX.read(data, { type: 'array' });

				//* Assuming the first sheet contains the data
				const sheetName = workbook.SheetNames[0];
				const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

				setJsonData(excelData);
			};

			reader.readAsArrayBuffer(file);
		}
	};

	const downloadJson = () => {
		const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
		saveAs(blob, 'data.json');
	};

	return (
		<>
			<div className="container-fluid px-4">
				<h2 className="mt-4">Upload New Students Batch</h2>
				<div className="card mb-4">
					<div className="card-header te">
						<PiStudentFill size={30} />
					</div>
					<div className="card-body">
						<div>
							<input type="file" accept=".xlsx, .csv, .xls" onChange={handleFileChange} />
							<Button onClick={handleFileUpload}>Upload</Button>
							{jsonData && (
								<div>
									{/* <button onClick={downloadJson}>Download JSON</button> */}
									<pre>{JSON.stringify(jsonData, null, 2)}</pre>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default StudentsUpload
