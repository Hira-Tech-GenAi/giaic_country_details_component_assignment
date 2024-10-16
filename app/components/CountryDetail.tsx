import React from "react";

interface CountryDetailProps {
  name: string;
  capital: string;
  population: string;
  major_rivers: string;
  small_city: string;
  big_city: string;
}

const CountryDetail: React.FC<CountryDetailProps> = ({
  name,
  capital,
  population,
  major_rivers,
  small_city,
  big_city,
}) => {
  return (
    <div className="max-w-md mx-auto bg-blue-300 shadow-lg rounded-lg overflow-hidden my-8 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{name}</h1>

      <div className="flex flex-col space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold"> Population:</span>
          {population}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Major_rivers: </span>
          {major_rivers}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Small_city:</span> {small_city}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Big_city:</span> {big_city}
        </p>
      </div>
    </div>
  );
};

export default CountryDetail;
