export const formatName = (fileName) => {
  let trimmed = fileName.replace(".enc", "");
  let clean = trimmed.replace(/ *\([^)]*\) */g, "");
  return clean;
};
