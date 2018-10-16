
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaBusinessModuleConditionArgs  extends KalturaConditionArgs {
    businessModuleType? : KalturaTransactionType;
	businessModuleId? : number;
}


export class KalturaBusinessModuleCondition extends KalturaCondition {

    businessModuleType : KalturaTransactionType;
	businessModuleId : number;

    constructor(data? : KalturaBusinessModuleConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessModuleCondition' },
				businessModuleType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				businessModuleId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBusinessModuleCondition'] = KalturaBusinessModuleCondition;