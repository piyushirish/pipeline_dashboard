import React from 'react'

const trajectoryData = [
    {
        "MD": 0.0,
        "TVD": 0.0,
        "HD": 0.0,
        "Angle": 0.0
    },
    {
        "MD": 22.63,
        "TVD": 22.63,
        "HD": 0.0,
        "Angle": 0.0
    },
    {
        "MD": 50.93,
        "TVD": 50.93,
        "HD": 0.0,
        "Angle": 1.29363
    },
    {
        "MD": 129.4,
        "TVD": 129.38,
        "HD": 1.771553,
        "Angle": 2.138756
    },
    {
        "MD": 158.11,
        "TVD": 158.07,
        "HD": 2.843001,
        "Angle": 4.537119
    },
    {
        "MD": 186.83,
        "TVD": 186.7,
        "HD": 5.114894,
        "Angle": 6.594197
    },
    {
        "MD": 215.55,
        "TVD": 215.23,
        "HD": 8.413,
        "Angle": 9.218169
    },
    {
        "MD": 244.2,
        "TVD": 243.51,
        "HD": 13.00256,
        "Angle": 11.63573
    },
    {
        "MD": 272.91,
        "TVD": 271.63,
        "HD": 18.79305,
        "Angle": 14.55923
    },
    {
        "MD": 301.56,
        "TVD": 299.36,
        "HD": 25.9951,
        "Angle": 17.89237
    },
    {
        "MD": 330.3,
        "TVD": 326.71,
        "HD": 34.82489,
        "Angle": 20.84231
    },
    {
        "MD": 359.03,
        "TVD": 353.56,
        "HD": 45.04694,
        "Angle": 22.14683
    },
    {
        "MD": 396.71,
        "TVD": 388.46,
        "HD": 59.2516,
        "Angle": 23.99451
    },
    {
        "MD": 426.45,
        "TVD": 415.63,
        "HD": 71.34535,
        "Angle": 27.14953
    },
    {
        "MD": 455.13,
        "TVD": 441.15,
        "HD": 84.43244,
        "Angle": 30.15764
    },
    {
        "MD": 484.83,
        "TVD": 466.83,
        "HD": 99.35315,
        "Angle": 33.58227
    },
    {
        "MD": 512.51,
        "TVD": 489.89,
        "HD": 114.6639,
        "Angle": 36.92316
    },
    {
        "MD": 541.18,
        "TVD": 512.81,
        "HD": 131.8872,
        "Angle": 39.91652
    },
    {
        "MD": 569.89,
        "TVD": 534.83,
        "HD": 150.3096,
        "Angle": 42.79236
    },
    {
        "MD": 598.63,
        "TVD": 555.92,
        "HD": 169.8339,
        "Angle": 45.86033
    }
]
const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 110.4, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 384.4, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1785.4, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 2589.4, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 2447.4, toMD: 2729.4, ID: 6.184, OD: 7, roughness: 0.001 },
];

const tubingData = [
  { fromMD: 0, toMD: 2619.6, ID: 3.958, OD: 4.5, roughness: 0.001 },
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV', MD: 156.618 },
  { name: 'Packer', type: 'Pk', MD: 2607 },
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2665.9,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 223.9668,
  temperature: 107,
  c: 5.10E-06,
  n: 0.8,
  OGR: '138 sm3/mmsm3',
  WGR: '10 sm3/mmsm3',
};

function B12173() {
  return (
    <div className="p-6 font-sans text-sm">
      <h1 className="text-2xl font-bold mb-4">Wellbore Data Overview</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Trajectory Data</h2>
        <table className="w-full border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th className="border p-2">MD</th>
              <th className="border p-2">TVD</th>
              <th className="border p-2">Horizontal Distance</th>
              <th className="border p-2">Angle (°)</th>
            </tr>
          </thead>
          <tbody>
            {trajectoryData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.MD}</td>
                <td className="border p-2">{item.TVD}</td>
                <td className="border p-2">{item.HD}</td>
                <td className="border p-2">{item.Angle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Casing & Liner</h2>
        <table className="w-full border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th className="border p-2">Section</th>
              <th className="border p-2">Size</th>
              <th className="border p-2">From MD</th>
              <th className="border p-2">To MD</th>
              <th className="border p-2">ID</th>
              <th className="border p-2">OD</th>
              <th className="border p-2">Roughness</th>
            </tr>
          </thead>
          <tbody>
            {casingData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.section}</td>
                <td className="border p-2">{item.size}</td>
                <td className="border p-2">{item.fromMD}</td>
                <td className="border p-2">{item.toMD}</td>
                <td className="border p-2">{item.ID}</td>
                <td className="border p-2">{item.OD}</td>
                <td className="border p-2">{item.roughness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tubing</h2>
        <table className="w-full border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th className="border p-2">From MD</th>
              <th className="border p-2">To MD</th>
              <th className="border p-2">ID</th>
              <th className="border p-2">OD</th>
              <th className="border p-2">Roughness</th>
            </tr>
          </thead>
          <tbody>
            {tubingData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.fromMD}</td>
                <td className="border p-2">{item.toMD}</td>
                <td className="border p-2">{item.ID}</td>
                <td className="border p-2">{item.OD}</td>
                <td className="border p-2">{item.roughness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Equipment</h2>
        <table className="w-full border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">MD</th>
            </tr>
          </thead>
          <tbody>
            {equipmentData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.type}</td>
                <td className="border p-2">{item.MD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Reservoir Details</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(reservoirData).map(([key, value]) => (
            <div key={key}>
              <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default B12173
