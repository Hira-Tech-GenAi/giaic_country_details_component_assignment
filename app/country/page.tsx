import React from "react";
import Link from "next/link";

const Country = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline text-blue-500 mb-4">
        This is Countries Page:
      </h1>
      <ul className="list-disc list-inside space-y-4 ml-5 text-pink-600">
        {["pakistan", "india", "china", "japan", "bangladesh"].map(
          (country) => (
            <li key={country} className="text-2xl font-bold">
              <Link href={`/country/${country}`}>
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Country;
