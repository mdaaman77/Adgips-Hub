import React from 'react'

function Statistics({stats}) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8 bg-gray-800 rounded-lg p-4">
      <div className="text-center">
        <p className="text-gray-400 text-sm">Total Placements</p>
        <p className="text-2xl font-bold text-blue-400">{stats.totalPlaced}</p>
      </div>
      <div className="text-center border-x border-gray-700">
        <p className="text-gray-400 text-sm">Average Package</p>
        <p className="text-2xl font-bold text-purple-400">{stats.avgPackage} LPA</p>
      </div>
      <div className="text-center">
        <p className="text-gray-400 text-sm">Highest Package</p>
        <p className="text-2xl font-bold text-green-400">{stats.highestPackage} LPA</p>
      </div>
    </div>
  )
}

export default Statistics