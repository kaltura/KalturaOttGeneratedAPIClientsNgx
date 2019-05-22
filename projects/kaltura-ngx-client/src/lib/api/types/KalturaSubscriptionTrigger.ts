
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSubscriptionTriggerType } from './KalturaSubscriptionTriggerType';
import { KalturaTrigger, KalturaTriggerArgs } from './KalturaTrigger';

export interface KalturaSubscriptionTriggerArgs  extends KalturaTriggerArgs {
    type? : KalturaSubscriptionTriggerType;
	offset? : number;
}


export class KalturaSubscriptionTrigger extends KalturaTrigger {

    type : KalturaSubscriptionTriggerType;
	offset : number;

    constructor(data? : KalturaSubscriptionTriggerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionTrigger' },
				type : { type : 'es', subTypeConstructor : KalturaSubscriptionTriggerType, subType : 'KalturaSubscriptionTriggerType' },
				offset : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSubscriptionTrigger'] = KalturaSubscriptionTrigger;