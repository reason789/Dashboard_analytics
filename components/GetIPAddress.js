"use client";
import { useEffect, useState } from "react";

const GetIpAddress = () => {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIpAddress = async () => {
      const response = await fetch("/api/geoip");
      const data = await response.json();
      setIp(data.ip);
      setLoading(false);
    };

    fetchIpAddress();
  }, []);

  return (
    <div className="bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm">
      {loading ? (
        <p className="text-gray-600">Loading IP address...</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="font-semibold">IP Address:</strong> {ip}
          </li>
        </ul>
      )}
    </div>
  );
};

export default GetIpAddress;
