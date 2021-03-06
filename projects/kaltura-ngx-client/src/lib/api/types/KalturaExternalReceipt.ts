
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPurchaseBase, KalturaPurchaseBaseArgs } from './KalturaPurchaseBase';

export interface KalturaExternalReceiptArgs  extends KalturaPurchaseBaseArgs {
    receiptId? : string;
	paymentGatewayName? : string;
}


export class KalturaExternalReceipt extends KalturaPurchaseBase {

    receiptId : string;
	paymentGatewayName : string;

    constructor(data? : KalturaExternalReceiptArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalReceipt' },
				receiptId : { type : 's' },
				paymentGatewayName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExternalReceipt'] = KalturaExternalReceipt;