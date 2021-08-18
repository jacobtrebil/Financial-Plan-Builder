
export default function setAssetValueToNumber(assetValue) {
    const numberAssetValue = Number(assetValue.replace(/[^0-9.-]+/g,""));
    return numberAssetValue;
}