
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConditionLevel } from './KalturaConditionLevel';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaCollectionPurchasedConditionArgs  extends KalturaBaseSegmentConditionArgs {
    level? : KalturaConditionLevel;
	collectionIdEquals? : number;
	days? : number;
}


export class KalturaCollectionPurchasedCondition extends KalturaBaseSegmentCondition {

    level : KalturaConditionLevel;
	collectionIdEquals : number;
	days : number;

    constructor(data? : KalturaCollectionPurchasedConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollectionPurchasedCondition' },
				level : { type : 'es', subTypeConstructor : KalturaConditionLevel, subType : 'KalturaConditionLevel' },
				collectionIdEquals : { type : 'n' },
				days : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCollectionPurchasedCondition'] = KalturaCollectionPurchasedCondition;