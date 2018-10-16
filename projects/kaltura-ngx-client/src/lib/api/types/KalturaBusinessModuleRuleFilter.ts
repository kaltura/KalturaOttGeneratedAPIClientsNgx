
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBusinessModuleRuleFilterArgs  extends KalturaFilterArgs {
    businessModuleTypeApplied? : KalturaTransactionType;
	businessModuleIdApplied? : number;
	segmentIdsApplied? : string;
}


export class KalturaBusinessModuleRuleFilter extends KalturaFilter {

    businessModuleTypeApplied : KalturaTransactionType;
	businessModuleIdApplied : number;
	segmentIdsApplied : string;

    constructor(data? : KalturaBusinessModuleRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessModuleRuleFilter' },
				businessModuleTypeApplied : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				businessModuleIdApplied : { type : 'n' },
				segmentIdsApplied : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBusinessModuleRuleFilter'] = KalturaBusinessModuleRuleFilter;