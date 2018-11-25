
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAggregationType } from './KalturaAggregationType';
import { KalturaPropertySkipCondition, KalturaPropertySkipConditionArgs } from './KalturaPropertySkipCondition';

export interface KalturaAggregatedPropertySkipConditionArgs  extends KalturaPropertySkipConditionArgs {
    aggregationType? : KalturaAggregationType;
}


export class KalturaAggregatedPropertySkipCondition extends KalturaPropertySkipCondition {

    aggregationType : KalturaAggregationType;

    constructor(data? : KalturaAggregatedPropertySkipConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAggregatedPropertySkipCondition' },
				aggregationType : { type : 'es', subTypeConstructor : KalturaAggregationType, subType : 'KalturaAggregationType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAggregatedPropertySkipCondition'] = KalturaAggregatedPropertySkipCondition;