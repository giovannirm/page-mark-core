import { Decimal } from '@prisma/client/runtime/library';

const toNumber = (value: Decimal | null): number | null => {
    if (value === null) return null;
    return value.toNumber();
};

export default toNumber;
