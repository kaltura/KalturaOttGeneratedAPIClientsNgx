
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConditionArgs  extends KalturaObjectBaseArgs {
    description? : string;
}


export class KalturaCondition extends KalturaObjectBase {

    description : string;

    constructor(data? : KalturaConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCondition' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCondition'] = KalturaCondition;