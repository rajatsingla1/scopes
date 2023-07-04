const convertArrayToCSV = (objectArray: any) => {
  const csvRows = [];
  const headers = Object.keys(objectArray[0]);

  csvRows.push(headers.join(','));

  for (const item of objectArray) {
    const values = headers.map(header => {
      if (header === 'stats') {
        // Extract the required properties from the stats object
        const { scope1, scope2, scope3 } = item[header][0];
        return `${scope1},${scope2},${scope3}`;
      } else {
        return item[header];
      }
    });

    csvRows.push(values.join(','));
  }

  return csvRows.join('\n');
}

export const downloadAsCsv = (selectedCorporateList: any) => {
  const csvContent = convertArrayToCSV(selectedCorporateList);

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const downloadLink = document.createElement('a');
  const url = URL.createObjectURL(blob);

  downloadLink.setAttribute('href', url);
  downloadLink.setAttribute('download', 'corporate_emissions.csv');
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

