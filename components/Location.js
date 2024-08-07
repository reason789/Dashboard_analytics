"use client";
import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";

function Location() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const countries = Country.getAllCountries();

          // Find the closest country (this is a simplified approach)
          const country = countries.reduce((prev, curr) => {
            const prevDist =
              Math.abs(prev.latitude - latitude) +
              Math.abs(prev.longitude - longitude);
            const currDist =
              Math.abs(curr.latitude - latitude) +
              Math.abs(curr.longitude - longitude);
            return prevDist < currDist ? prev : curr;
          });

          const states = State.getStatesOfCountry(country.isoCode);

          // Find the closest state (if available)
          const state =
            states.length > 0
              ? states.reduce((prev, curr) => {
                  const prevDist =
                    Math.abs(prev.latitude - latitude) +
                    Math.abs(prev.longitude - longitude);
                  const currDist =
                    Math.abs(curr.latitude - latitude) +
                    Math.abs(curr.longitude - longitude);
                  return prevDist < currDist ? prev : curr;
                })
              : null;

          setLocation({
            country: country.name,
            state: state ? state.name : "N/A",
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUserInfo(data));
  }, []);

  return (
    <div className="bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm">
      {location ? (
        <div>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="font-semibold">Country:</strong>{" "}
              {location.country}
            </li>
            <li>
              <strong className="font-semibold">State:</strong> {location.state}
            </li>
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">Loading Location...</p>
      )}
    </div>
  );
}

export default Location;
