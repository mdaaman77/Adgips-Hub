import React from 'react'

function CompanyTable({ companies }) {
  // Calculate total students placed
  const totalStudents = companies.reduce((sum, company) => sum + company.placed, 0);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left p-4">S.No</th>
            <th className="text-left p-4">Company Name</th>
            <th className="text-left p-4">Package (LPA)</th>
            <th className="text-left p-4">Students Placed</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={company.name}
              className="border-b border-gray-800 hover:bg-gray-900"
            >
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{company.name}</td>
              <td className="p-4">{company.package}</td>
              <td className="p-4">{company.placed}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-gray-700 font-bold bg-gray-800">
            <td className="p-4"></td>
            <td className="p-4">Total</td>
            <td className="p-4"></td>
            <td className="p-4">{totalStudents}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompanyTable

