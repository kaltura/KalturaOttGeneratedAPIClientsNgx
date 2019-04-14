
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleActionType } from './KalturaRuleActionType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetUserRuleFilterArgs  extends KalturaFilterArgs {
    attachedUserIdEqualCurrent? : boolean;
	actionsContainType? : KalturaRuleActionType;
}


export class KalturaAssetUserRuleFilter extends KalturaFilter {

    attachedUserIdEqualCurrent : boolean;
	actionsContainType : KalturaRuleActionType;

    constructor(data? : KalturaAssetUserRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetUserRuleFilter' },
				attachedUserIdEqualCurrent : { type : 'b' },
				actionsContainType : { type : 'es', subTypeConstructor : KalturaRuleActionType, subType : 'KalturaRuleActionType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetUserRuleFilter'] = KalturaAssetUserRuleFilter;