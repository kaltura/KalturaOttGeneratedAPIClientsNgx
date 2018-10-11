
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaIpRangeConditionArgs  extends KalturaConditionArgs {
    fromIP? : string;
	toIP? : string;
}


export class KalturaIpRangeCondition extends KalturaCondition {

    fromIP : string;
	toIP : string;

    constructor(data? : KalturaIpRangeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIpRangeCondition' },
				fromIP : { type : 's' },
				toIP : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIpRangeCondition'] = KalturaIpRangeCondition;