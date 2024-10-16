"use client";

import React from "react";
import { useParams } from "next/navigation";
import CountryDetail from "@/app/components/CountryDetail";
import { country_data } from "@/constant/data";

export default function Country() {
  const { country_name } = useParams();
  const country = country_data[country_name as keyof typeof country_data];
  return <CountryDetail {...country} />;
}
