export const jsonToFileConverter = ({
  jsonText,
  fileName,
}: {
  jsonText: string;
  fileName: string;
}) => {
  let jsonFile;
  try {
    // Parse the text input to JSON (Optional if input is already JSON)
    const jsonObject = JSON.parse(jsonText);

    // Convert the JSON object to a Blob
    const blob = new Blob([JSON.stringify(jsonObject, null, 2)], {
      type: "application/json",
    });

    // Create a File from the Blob
    jsonFile = new File([blob], `${fileName}.json`, {
      type: "application/json",
    });
  } catch (error) {
    console.error(error);
    return;
  }

  return jsonFile;
};
