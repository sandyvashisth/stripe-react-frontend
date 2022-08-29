import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-center py-8">{year} &#169; sandeep vashisth</p>
    </div>
  );
};
