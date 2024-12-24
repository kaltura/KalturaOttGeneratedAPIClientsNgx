
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssociatedShopEntitiesArgs  extends KalturaObjectBaseArgs {
    assetUserRuleIdIn? : string;
	includeNullAssetUserRuleId? : boolean;
}


export class KalturaAssociatedShopEntities extends KalturaObjectBase {

    assetUserRuleIdIn : string;
	includeNullAssetUserRuleId : boolean;

    constructor(data? : KalturaAssociatedShopEntitiesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssociatedShopEntities' },
				assetUserRuleIdIn : { type : 's' },
				includeNullAssetUserRuleId : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssociatedShopEntities'] = KalturaAssociatedShopEntities;