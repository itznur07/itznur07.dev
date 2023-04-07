import axios from "axios";
import React from "react";

const DownloadButton = ({ filePath }) => {
  const handleDownload = () => {
    // Make a GET request to the download route with the file path as a query parameter
    axios
      .get(`/download?filePath=${filePath}`, { responseType: "blob" })
      .then((res) => {
        // Create a URL object from the blob response
        const url = window.URL.createObjectURL(new Blob([res.data]));

        // Create a link element and click it to trigger the file download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filePath);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return <button onClick={handleDownload}>Download File</button>;
};

export default DownloadButton;
