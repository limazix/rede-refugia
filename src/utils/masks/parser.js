import { mask } from "react-native-mask-text";

import masks from "./masks";

const parsePhoneNumber = (text) => mask(text, masks.CELLPHONE);
const parseLandLine = (text) => mask(text, masks.LAND_LINE);
const parseZipCode = (text) => mask(text, masks.ZIP_CODE);
const parseCNPJ = (text) => mask(text, masks.CNPJ);

export default { parsePhoneNumber, parseLandLine, parseZipCode, parseCNPJ };
