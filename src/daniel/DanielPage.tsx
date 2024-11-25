import React, { useEffect, useState } from "react";

interface DonationData {
  total_amount: number;
  goal_amount: number;
}

const DanielPage: React.FC = () => {
  const [donationData, setDonationData] = useState<DonationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const API_URL = "https://api.riddersporre.se/api/donations";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: DonationData[] = await response.json();

        setDonationData(data[0]);

        setError(null); // Rensa eventuella tidigare fel
      } catch (err) {
        setError("Kunde inte hämta data.");
        console.error(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval); // Rensa intervallet när komponenten avmonteras
  }, []);

  const percentage = donationData
    ? Math.min((donationData.total_amount / donationData.goal_amount) * 100, 100)
    : 0;

  return (
    <div
      style={{
        backgroundColor: "#180d1b",
        width: "100%",
        height: "30px",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {error && (
        <div style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}>
          {error}
        </div>
      )}
      {donationData && (
        <>
          <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            {donationData.total_amount} kr / {donationData.goal_amount} kr
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#ddd",
              borderRadius: "5px",
              overflow: "hidden",
              height: "20px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: `${percentage}%`,
                backgroundColor: "#01ad91",
                height: "100%",
                transition: "width 0.5s ease",
              }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default DanielPage;
