"use client";
import React, { useEffect, useState } from "react";

const DeviceInfo = () => {
  const [deviceType, setDeviceType] = useState("");
  const [os, setOs] = useState("");
  const [isp, setIsp] = useState("");
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Determine device type
    const userAgent = navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) {
      setDeviceType("Mobile");
    } else if (/Tablet/i.test(userAgent)) {
      setDeviceType("Tablet");
    } else {
      setDeviceType("Computer");
    }

    // Determine OS
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      setOs("iOS");
    } else if (/Android/i.test(userAgent)) {
      setOs("Android");
    } else if (/Windows/i.test(userAgent)) {
      setOs("Windows");
    } else if (/Macintosh/i.test(userAgent)) {
      setOs("Mac OS");
    } else if (/Linux/i.test(userAgent)) {
      setOs("Linux");
    } else {
      setOs("Unknown");
    }

    setIsp("...");

    setLoading(false);
  }, []);

  return (
    <div className="bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm">
      {loading ? (
        <p className="text-gray-600">Loading device information...</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="font-semibold">Device Type:</strong> {deviceType}
          </li>
          <li>
            <strong className="font-semibold">OS:</strong> {os}
          </li>
          <li>
            <strong className="font-semibold">ISP:</strong> {isp}
          </li>
        </ul>
      )}
    </div>
  );
};

export default DeviceInfo;
