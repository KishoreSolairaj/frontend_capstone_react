import React, {useEffect} from 'react';
import './Report.css';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        }
    }, []);
  // Sample report data
    const reportData = [
        {
        serialNumber: 1,
        doctorName: 'Dr. John Doe',
        doctorSpeciality: 'Cardiology',
        charges: '100',
        reportUrl: 'https://drive.google.com/file/d/1O6y2aMWxA48GAZqJL-9Rh9LNM-YXhL-T/view',
        },
        {
        serialNumber: 2,
        doctorName: 'Dr. Jane Smith',
        doctorSpeciality: 'Dermatology',
        charges: '80',
        reportUrl: 'https://drive.google.com/file/d/1O6y2aMWxA48GAZqJL-9Rh9LNM-YXhL-T/view',
        },
        // Add more report data objects as needed
    ];

    return (
        <div className="reports-container">
        <h1>Reports</h1>
        <table className="report-table">
            <thead>
            <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>Charges</th>
                <th>View Report</th>
                <th>Download Report</th>
            </tr>
            </thead>
            <tbody>
            {reportData.map((report, index) => (
                <tr key={index}>
                <td>{report.serialNumber}</td>
                <td>{report.doctorName}</td>
                <td>{report.doctorSpeciality}</td>
                <td>{report.charges}</td>
                <td>
                <a target='_blank' href='Patient_Information.pdf' className="report-link" rel="noreferrer">

                    {/* <a target='_blank' href={report.reportUrl} className="report-link" rel="noreferrer"> */}
                        View Report
                    </a>
                </td>
                <td>
                <a target='_blank' href='Patient_Information.pdf' download className="report-link" rel="noreferrer">

                    {/* <a target='_blank' href={report.reportUrl} download className="report-link" rel="noreferrer"> */}
                        Download Report
                    </a>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default Reports;
