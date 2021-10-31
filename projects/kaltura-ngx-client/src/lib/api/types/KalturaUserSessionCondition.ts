
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition } from './KalturaCondition';
import { KalturaUserSessionProfileExpression, KalturaUserSessionProfileExpressionArgs } from './KalturaUserSessionProfileExpression';

export interface KalturaUserSessionConditionArgs  extends KalturaUserSessionProfileExpressionArgs {
    condition? : KalturaCondition;
}


export class KalturaUserSessionCondition extends KalturaUserSessionProfileExpression {

    condition : KalturaCondition;

    constructor(data? : KalturaUserSessionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSessionCondition' },
				condition : { type : 'o', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserSessionCondition'] = KalturaUserSessionCondition;