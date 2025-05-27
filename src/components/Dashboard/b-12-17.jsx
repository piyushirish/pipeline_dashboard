import React from 'react';

const trajectoryData = [
  {"MD": 0, "TVD": 0, "Horizontal_distance": 0, "Angle": 0},
  {"MD": 20.48, "TVD": 20.48, "Horizontal_distance": 0, "Angle": 0},
  {"MD": 48.78, "TVD": 48.78, "Horizontal_distance": 0, "Angle": 0.8832873},
  {"MD": 385.4, "TVD": 385.36, "Horizontal_distance": 5.18922, "Angle": 2.6775},
  {"MD": 394.56, "TVD": 394.51, "Horizontal_distance": 5.617121, "Angle": 3.687559},
  {"MD": 423.54, "TVD": 423.43, "Horizontal_distance": 7.480988, "Angle": 5.858416},
  {"MD": 452.26, "TVD": 452, "Horizontal_distance": 10.41246, "Angle": 7.570665},
  {"MD": 480.94, "TVD": 480.43, "Horizontal_distance": 14.19101, "Angle": 8.828071},
  {"MD": 509.64, "TVD": 508.79, "Horizontal_distance": 18.5956, "Angle": 10.16482},
  {"MD": 538.31, "TVD": 537.01, "Horizontal_distance": 23.6553, "Angle": 11.34298},
  {"MD": 566.98, "TVD": 565.12, "Horizontal_distance": 29.29416, "Angle": 12.93231},
  {"MD": 595.76, "TVD": 593.17, "Horizontal_distance": 35.73512, "Angle": 15.08754},
  {"MD": 624.48, "TVD": 620.9, "Horizontal_distance": 43.21078, "Angle": 17.31401},
  {"MD": 653.17, "TVD": 648.29, "Horizontal_distance": 51.74916, "Angle": 19.46638},
  {"MD": 681.86, "TVD": 675.34, "Horizontal_distance": 61.31021, "Angle": 22.02037},
  {"MD": 710.51, "TVD": 701.9, "Horizontal_distance": 72.05213, "Angle": 24.71998},
  {"MD": 739.21, "TVD": 727.97, "Horizontal_distance": 84.05401, "Angle": 27.49771},
  {"MD": 767.89, "TVD": 753.41, "Horizontal_distance": 97.29594, "Angle": 30.12843},
  {"MD": 796.61, "TVD": 778.25, "Horizontal_distance": 111.7117, "Angle": 31.44787},
  {"MD": 825.34, "TVD": 802.76, "Horizontal_distance": 126.7007, "Angle": 31.4591},
  {"MD": 854.05, "TVD": 827.25, "Horizontal_distance": 141.6842, "Angle": 31.37694},
  {"MD": 882.77, "TVD": 851.77, "Horizontal_distance": 156.6377, "Angle": 31.82435},
  {"MD": 911.44, "TVD": 876.13, "Horizontal_distance": 171.7559, "Angle": 32.26471},
  {"MD": 940.13, "TVD": 900.39, "Horizontal_distance": 187.0715, "Angle": 32.17829},
  {"MD": 968.84, "TVD": 924.69, "Horizontal_distance": 202.3612, "Angle": 31.78455},
  {"MD": 997.58, "TVD": 949.12, "Horizontal_distance": 217.4993, "Angle": 31.5355},
  {"MD": 1026.29, "TVD": 973.59, "Horizontal_distance": 232.5154, "Angle": 31.317},
  {"MD": 1054.98, "TVD": 998.1, "Horizontal_distance": 247.4277, "Angle": 31.2395},
  {"MD": 1083.74, "TVD": 1022.69, "Horizontal_distance": 262.3431, "Angle": 31.44332},
  {"MD": 1112.41, "TVD": 1047.15, "Horizontal_distance": 277.299, "Angle": 31.75416},
  {"MD": 1141.07, "TVD": 1071.52, "Horizontal_distance": 292.382, "Angle": 31.86794},
  {"MD": 1169.73, "TVD": 1095.86, "Horizontal_distance": 307.5134, "Angle": 31.63848},
  {"MD": 1198.46, "TVD": 1120.32, "Horizontal_distance": 322.584, "Angle": 31.3442},
  {"MD": 1227.17, "TVD": 1144.84, "Horizontal_distance": 337.5183, "Angle": 31.22891},
  {"MD": 1255.88, "TVD": 1169.39, "Horizontal_distance": 352.4032, "Angle": 31.39376},
  {"MD": 1284.57, "TVD": 1193.88, "Horizontal_distance": 367.3483, "Angle": 31.48607},
  {"MD": 1313.3, "TVD": 1218.38, "Horizontal_distance": 382.3538, "Angle": 31.46473},
  {"MD": 1342, "TVD": 1242.86, "Horizontal_distance": 397.3344, "Angle": 31.3114},
  {"MD": 1370.7, "TVD": 1267.38, "Horizontal_distance": 412.2495, "Angle": 31.56799},
  {"MD": 1399.42, "TVD": 1291.85, "Horizontal_distance": 427.2847, "Angle": 32.3021},
  {"MD": 1428.11, "TVD": 1316.1, "Horizontal_distance": 442.6162, "Angle": 32.77298},
  {"MD": 1456.82, "TVD": 1340.24, "Horizontal_distance": 458.1572, "Angle": 32.67976},
  {"MD": 1485.5, "TVD": 1364.38, "Horizontal_distance": 473.6428, "Angle": 32.90109},
  {"MD": 1514.18, "TVD": 1388.46, "Horizontal_distance": 489.2215, "Angle": 32.829},
  {"MD": 1542.92, "TVD": 1412.61, "Horizontal_distance": 504.8024, "Angle": 32.35684},
  {"MD": 1571.58, "TVD": 1436.82, "Horizontal_distance": 520.141, "Angle": 32.16104},
  {"MD": 1600.32, "TVD": 1461.15, "Horizontal_distance": 535.4393, "Angle": 32.09179},
  {"MD": 1629.05, "TVD": 1485.49, "Horizontal_distance": 550.7029, "Angle": 32.09179},
  {"MD": 1657.78, "TVD": 1509.83, "Horizontal_distance": 565.9665, "Angle": 31.95275},
  {"MD": 1686.49, "TVD": 1534.19, "Horizontal_distance": 581.1604, "Angle": 32.00761},
  {"MD": 1715.17, "TVD": 1558.51, "Horizontal_distance": 596.3617, "Angle": 31.64978},
  {"MD": 1743.88, "TVD": 1582.95, "Horizontal_distance": 611.4266, "Angle": 31.3554},
  {"MD": 1772.57, "TVD": 1607.45, "Horizontal_distance": 626.3553, "Angle": 31.56015},
  {"MD": 1801.98, "TVD": 1632.51, "Horizontal_distance": 641.7483, "Angle": 31.82806},
  {"MD": 1830.71, "TVD": 1656.92, "Horizontal_distance": 656.8997, "Angle": 31.95275},
  {"MD": 1859.42, "TVD": 1681.28, "Horizontal_distance": 672.0936, "Angle": 32.09179},
  {"MD": 1888.15, "TVD": 1705.62, "Horizontal_distance": 687.3572, "Angle": 32.5373},
  {"MD": 1916.82, "TVD": 1729.79, "Horizontal_distance": 702.7773, "Angle": 32.35939},
  {"MD": 1945.54, "TVD": 1754.05, "Horizontal_distance": 718.149, "Angle": 32.01092},
  {"MD": 1974.28, "TVD": 1778.42, "Horizontal_distance": 733.3836, "Angle": 31.81101},
  {"MD": 2003.04, "TVD": 1802.86, "Horizontal_distance": 748.5435, "Angle": 32.01092},
  {"MD": 2031.78, "TVD": 1827.23, "Horizontal_distance": 763.778, "Angle": 32.33945},
  {"MD": 2060.47, "TVD": 1851.47, "Horizontal_distance": 779.1253, "Angle": 32.28476},
  {"MD": 2089.19, "TVD": 1875.75, "Horizontal_distance": 794.4654, "Angle": 32.10901},
  {"MD": 2117.89, "TVD": 1900.06, "Horizontal_distance": 809.7204, "Angle": 32.09441},
  {"MD": 2146.55, "TVD": 1924.34, "Horizontal_distance": 824.9479, "Angle": 31.88295},
  {"MD": 2175.25, "TVD": 1948.71, "Horizontal_distance": 840.1068, "Angle": 31.5355},
  {"MD": 2203.96, "TVD": 1973.18, "Horizontal_distance": 855.1229, "Angle": 31.458},
  {"MD": 2232.74, "TVD": 1997.73, "Horizontal_distance": 870.1425, "Angle": 31.79022},
  {"MD": 2261.47, "TVD": 2022.15, "Horizontal_distance": 885.2777, "Angle": 32.12357},
  {"MD": 2290.21, "TVD": 2046.49, "Horizontal_distance": 900.5601, "Angle": 32.27049},
  {"MD": 2318.89, "TVD": 2070.74, "Horizontal_distance": 915.8729, "Angle": 32.5511},
  {"MD": 2347.6, "TVD": 2094.94, "Horizontal_distance": 931.3203, "Angle": 32.58234},
  {"MD": 2376.32, "TVD": 2119.14, "Horizontal_distance": 946.7864, "Angle": 32.15806},
  {"MD": 2405, "TVD": 2143.42, "Horizontal_distance": 962.0515, "Angle": 31.89791},
  {"MD": 2433.74, "TVD": 2167.82, "Horizontal_distance": 977.2379, "Angle": 31.75802},
  {"MD": 2462.46, "TVD": 2192.24, "Horizontal_distance": 992.3542, "Angle": 32.00761},
  {"MD": 2491.14, "TVD": 2216.56, "Horizontal_distance": 1007.556, "Angle": 31.94133},
  {"MD": 2519.87, "TVD": 2240.94, "Horizontal_distance": 1022.755, "Angle": 31.83743},
  {"MD": 2548.65, "TVD": 2265.39, "Horizontal_distance": 1037.937, "Angle": 31.62154},
  {"MD": 2577.41, "TVD": 2289.88, "Horizontal_distance": 1053.016, "Angle": 30.79838},
  {"MD": 2618.75, "TVD": 2325.39, "Horizontal_distance": 1074.183, "Angle": 30.44204},
  {"MD": 2647.04, "TVD": 2349.78, "Horizontal_distance": 1088.516, "Angle": 29.91569},
  {"MD": 2675.56, "TVD": 2374.5, "Horizontal_distance": 1102.74, "Angle": 29.16501},
  {"MD": 2704.35, "TVD": 2399.64, "Horizontal_distance": 1116.77, "Angle": 28.51231},
  {"MD": 2733.29, "TVD": 2425.07, "Horizontal_distance": 1130.585, "Angle": 28.15593},
  {"MD": 2751.29, "TVD": 2440.94, "Horizontal_distance": 1139.078, "Angle": 28.01997},
  {"MD": 2770.4, "TVD": 2457.81, "Horizontal_distance": 1148.056, "Angle": 0}
];


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

const WellboreDataPageb_12_17 = () => {
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
                <td className="border p-2">{item.Horizontal_distance}</td>
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
  );
};

export default WellboreDataPageb_12_17;
