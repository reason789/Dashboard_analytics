import GetIpAddress from "@/components/GetIPAddress";
import Location from "../components/Location";
import DeviceInfo from "../components/DeviceInfo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Google Analysis Dashboard
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          IP Address
        </h3>
        <GetIpAddress />
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Location</h3>
        <Location />
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Device Information
        </h3>
        <DeviceInfo />
      </div>
    </div>
  );
}
