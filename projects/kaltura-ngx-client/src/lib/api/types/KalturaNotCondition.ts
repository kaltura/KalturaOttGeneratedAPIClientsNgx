
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaNotConditionArgs  extends KalturaConditionArgs {
    not? : boolean;
}


export class KalturaNotCondition extends KalturaCondition {

    not : boolean;

    constructor(data? : KalturaNotConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNotCondition' },
				not : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaNotCondition'] = KalturaNotCondition;