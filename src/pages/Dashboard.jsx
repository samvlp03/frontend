import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import apiServices from "../services/apiServices";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useAuth();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        // Pass user ID as query parameter
        const response = await apiServices.getReports({ params: { user_id: user.id } });
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
        toast.error("Failed to load your reports.");
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchReports();
    }
  }, [user]); // Added user to dependency array

  const handleDownload = async (reportId) => {
    try {
      const response = await apiServices.downloadReport(reportId);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `EquinoxMind_Report_${reportId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      // Revoke the object URL to avoid memory leaks
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading report:", error);
      toast.error("Failed to download the report.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Reports</h1>
      {(() => {
        if (loading) {
          return <p className="text-gray-600">Loading reports...</p>;
        }
        if (reports.length === 0) {
          return <p className="text-gray-600">No reports found.</p>;
        }
        return (
          <ul className="space-y-4">
            {reports.map((report) => (
              <li key={report.id} className="p-4 border rounded shadow-sm flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg">{report.diagnosis}</p>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(report.created_at).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDownload(report.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Download PDF"}
                </button>
              </li>
            ))}
          </ul>
        );
      })()}
    </div>
  );
};

export default Dashboard;