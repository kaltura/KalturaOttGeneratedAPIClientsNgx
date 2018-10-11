
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUserAssetRuleFilterArgs  extends KalturaFilterArgs {
    assetIdEqual? : number;
	assetTypeEqual? : number;
}


export class KalturaUserAssetRuleFilter extends KalturaFilter {

    assetIdEqual : number;
	assetTypeEqual : number;

    constructor(data? : KalturaUserAssetRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAssetRuleFilter' },
				assetIdEqual : { type : 'n' },
				assetTypeEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserAssetRuleFilter'] = KalturaUserAssetRuleFilter;