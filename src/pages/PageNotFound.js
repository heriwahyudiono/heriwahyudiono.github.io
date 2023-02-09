import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="font-bold text-5xl text-red-700">404</h2>
        <p className="text-2xl font-medium text-gray-600">Page Not Found</p>
        <hr className="w-10 my-8 border-t-2 border-red-700" />
        <p className="text-gray-500">
          Maaf, halaman yang Anda cari tidak ditemukan.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
