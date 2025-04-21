import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiServices from "../services/apiServices";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
 // Adjust the path as necessary

const ReportViewer = () => {
  const { reportId } = useParams();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReport = async () => {
      console.log("user.id:", user?.id, "reportId:", reportId);
      if (!user?.id || !reportId) {
        console.warn("Missing user ID or report ID");
        setLoading(false);
        return;
      }

      try {
        const response = await apiServices.getUserReportById(reportId, user.id);
        console.log("API response:", response);
        console.log("Report data:", response?.data);
        if (response?.data) {
          setReport(response.data);
        } else {
          console.warn("No data in response");
        }
      } catch (error) {
        console.error("Failed to fetch report:", error);
        toast.error("Unable to load report.");
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [user?.id, reportId]);

  const handleDownload = async () => {
    try {
      const response = await apiServices.downloadReport(reportId);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `EquinoxMind_Report_${reportId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error during report download:", error);
      toast.error("Download failed.");
    }
  };

  if (loading) return <div className="p-6 text-gray-600">Loading report...</div>;
  if (!report) return <div className="p-6 text-red-500">Report not found.</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">EquinoxMind Report</h2>
        <p className="text-sm text-center text-gray-500">
          Generated on: {new Date(report.created_at).toLocaleString()}
        </p>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p><strong>Diagnosis:</strong> {report.diagnosis}</p>
        <p><strong>Causes:</strong> {report.probable_causes}</p>
        <p><strong>Symptoms:</strong> {report.symptoms}</p>
        <p><strong>Effects:</strong> {report.effects}</p>
        <p><strong>Medication:</strong> {report.medication}</p>
        <p><strong>Lifestyle Changes:</strong> {report.lifestyle_advice}</p>
      </div>

      <div className="mt-6 flex flex-col items-center space-y-4">
        <button
          onClick={() => navigate("/dashboard")} // Change route as needed
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition-colors"
        >
          Return to Reports
        </button>

        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Download Report
        </button>
      </div>
    </div>
  );
};

export default ReportViewer;
