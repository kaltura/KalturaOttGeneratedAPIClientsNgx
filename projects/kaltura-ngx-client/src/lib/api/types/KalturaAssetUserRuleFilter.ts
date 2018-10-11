
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetUserRuleFilterArgs  extends KalturaFilterArgs {
    attachedUserIdEqualCurrent? : boolean;
}


export class KalturaAssetUserRuleFilter extends KalturaFilter {

    attachedUserIdEqualCurrent : boolean;

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
				attachedUserIdEqualCurrent : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetUserRuleFilter'] = KalturaAssetUserRuleFilter;