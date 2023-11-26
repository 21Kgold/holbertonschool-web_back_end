function createInt8TypedArray(length, position, value) {
  const binaryDataBuffer = new ArrayBuffer(length);
  const objectDataView = new DataView(binaryDataBuffer);

  if (position > length - 1) {
    throw new Error('Position exceeds range');
  }

  objectDataView.setInt8(position, value);
  return objectDataView;
}

export default createInt8TypedArray;
