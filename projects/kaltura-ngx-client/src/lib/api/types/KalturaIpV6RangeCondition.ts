
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaIpV6RangeConditionArgs  extends KalturaConditionArgs {
    fromIP? : string;
	toIP? : string;
}


export class KalturaIpV6RangeCondition extends KalturaCondition {

    fromIP : string;
	toIP : string;

    constructor(data? : KalturaIpV6RangeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIpV6RangeCondition' },
				fromIP : { type : 's' },
				toIP : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIpV6RangeCondition'] = KalturaIpV6RangeCondition;