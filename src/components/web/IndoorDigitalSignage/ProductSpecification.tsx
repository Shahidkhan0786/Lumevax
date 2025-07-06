"use client";

export default function ProductSpecifications() {
  const models = [
    {
      name: "LM-LG325N",
      screenSize: '32"',
      resolution: "1920 x 1080",
      brightness: "350 cd/m²",
      contrastRatio: "1200:1",
      viewingAngle: "178°",
      backlight: "LED",
      touchTechnology: "IR Touch",
      os: "Android 9.0",
      ramRom: "2G + 32G",
      speaker: "2 x 15W",
      powerConsumption: "≤ 300W",
      hdmiInput: "3",
      usbPort: "3",
      wifi: "Yes",
      installationMode: "Wall-Mounting / Floor-Mounting",
    },
    {
      name: "LM-LG435N",
      screenSize: '43"',
      resolution: "1920 x 1080",
      brightness: "350 cd/m²",
      contrastRatio: "1200:1",
      viewingAngle: "178°",
      backlight: "LED",
      touchTechnology: "IR Touch",
      os: "Android 9.0",
      ramRom: "2G + 32G",
      speaker: "2 x 15W",
      powerConsumption: "≤ 300W",
      hdmiInput: "3",
      usbPort: "3",
      wifi: "Yes",
      installationMode: "Wall-Mounting / Floor-Mounting",
    },
    {
      name: "LM-LG505N",
      screenSize: '50"',
      resolution: "3840 x 2160",
      brightness: "400 cd/m²",
      contrastRatio: "1300:1",
      viewingAngle: "178°",
      backlight: "LED",
      touchTechnology: "IR Touch",
      os: "Android 9.0",
      ramRom: "3G + 32G",
      speaker: "2 x 15W",
      powerConsumption: "≤ 350W",
      hdmiInput: "3",
      usbPort: "3",
      wifi: "Yes",
      installationMode: "Wall-Mounting / Floor-Mounting",
    },
    {
      name: "LM-LG555N",
      screenSize: '55"',
      resolution: "3840 x 2160",
      brightness: "400 cd/m²",
      contrastRatio: "1300:1",
      viewingAngle: "178°",
      backlight: "LED",
      touchTechnology: "IR Touch",
      os: "Android 9.0",
      ramRom: "3G + 32G",
      speaker: "2 x 15W",
      powerConsumption: "≤ 350W",
      hdmiInput: "3",
      usbPort: "3",
      wifi: "Yes",
      installationMode: "Wall-Mounting / Floor-Mounting",
    },
    // Add remaining models similarly...
  ];
  return (
    <section id="specifications" className="min-h-screen p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        Product Specifications
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Feature</th>
              {models.map((model, index) => (
                <th key={index} className="border border-gray-300 p-2">
                  {model.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(models[0])
              .slice(1)
              .map((key, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border border-gray-300 p-2 font-semibold">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </td>
                  {models.map((model, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {model[key]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
