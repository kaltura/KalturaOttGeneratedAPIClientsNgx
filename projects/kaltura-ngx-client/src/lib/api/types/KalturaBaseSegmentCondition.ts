
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConditionLevel } from './KalturaConditionLevel';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseSegmentConditionArgs  extends KalturaObjectBaseArgs {
    scope? : KalturaConditionLevel;
}


export class KalturaBaseSegmentCondition extends KalturaObjectBase {

    scope : KalturaConditionLevel;

    constructor(data? : KalturaBaseSegmentConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSegmentCondition' },
				scope : { type : 'es', subTypeConstructor : KalturaConditionLevel, subType : 'KalturaConditionLevel' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseSegmentCondition'] = KalturaBaseSegmentCondition;