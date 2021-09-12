
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValueArray } from './KalturaStringValueArray';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaDynamicKeysConditionArgs  extends KalturaConditionArgs {
    keyValues? : { [key : string] : KalturaStringValueArray};
}


export class KalturaDynamicKeysCondition extends KalturaCondition {

    keyValues : { [key : string] : KalturaStringValueArray};

    constructor(data? : KalturaDynamicKeysConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicKeysCondition' },
				keyValues : { type : 'm', subTypeConstructor : KalturaStringValueArray, subType : 'KalturaStringValueArray' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDynamicKeysCondition'] = KalturaDynamicKeysCondition;