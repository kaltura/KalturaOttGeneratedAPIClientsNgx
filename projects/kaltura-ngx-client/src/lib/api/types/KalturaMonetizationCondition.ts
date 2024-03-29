
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMonetizationType } from './KalturaMonetizationType';
import { KalturaMathemticalOperatorType } from './KalturaMathemticalOperatorType';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaMonetizationConditionArgs  extends KalturaBaseSegmentConditionArgs {
    minValue? : number;
	maxValue? : number;
	days? : number;
	type? : KalturaMonetizationType;
	operator? : KalturaMathemticalOperatorType;
	businessModuleIdIn? : string;
	currencyCode? : string;
}


export class KalturaMonetizationCondition extends KalturaBaseSegmentCondition {

    minValue : number;
	maxValue : number;
	days : number;
	type : KalturaMonetizationType;
	operator : KalturaMathemticalOperatorType;
	businessModuleIdIn : string;
	currencyCode : string;

    constructor(data? : KalturaMonetizationConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMonetizationCondition' },
				minValue : { type : 'n' },
				maxValue : { type : 'n' },
				days : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaMonetizationType, subType : 'KalturaMonetizationType' },
				operator : { type : 'es', subTypeConstructor : KalturaMathemticalOperatorType, subType : 'KalturaMathemticalOperatorType' },
				businessModuleIdIn : { type : 's' },
				currencyCode : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMonetizationCondition'] = KalturaMonetizationCondition;