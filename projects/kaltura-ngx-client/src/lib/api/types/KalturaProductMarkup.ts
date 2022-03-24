
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaProductMarkupArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaProductMarkup extends KalturaObjectBase {

    readonly productId : number;
	readonly productType : KalturaTransactionType;
	readonly isEntitled : boolean;

    constructor(data? : KalturaProductMarkupArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProductMarkup' },
				productId : { type : 'n', readOnly : true },
				productType : { type : 'es', readOnly : true, subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				isEntitled : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaProductMarkup'] = KalturaProductMarkup;