
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPurchaseBaseArgs  extends KalturaObjectBaseArgs {
    productId? : number;
	contentId? : number;
	productType? : KalturaTransactionType;
	adapterData? : string;
}


export class KalturaPurchaseBase extends KalturaObjectBase {

    productId : number;
	contentId : number;
	productType : KalturaTransactionType;
	adapterData : string;

    constructor(data? : KalturaPurchaseBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPurchaseBase' },
				productId : { type : 'n' },
				contentId : { type : 'n' },
				productType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				adapterData : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPurchaseBase'] = KalturaPurchaseBase;