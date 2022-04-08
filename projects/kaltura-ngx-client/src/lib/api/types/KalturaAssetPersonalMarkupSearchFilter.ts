
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSlimAsset } from './KalturaSlimAsset';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetPersonalMarkupSearchFilterArgs  extends KalturaFilterArgs {
    assetsIn? : KalturaSlimAsset[];
}


export class KalturaAssetPersonalMarkupSearchFilter extends KalturaFilter {

    assetsIn : KalturaSlimAsset[];

    constructor(data? : KalturaAssetPersonalMarkupSearchFilterArgs)
    {
        super(data);
        if (typeof this.assetsIn === 'undefined') this.assetsIn = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetPersonalMarkupSearchFilter' },
				assetsIn : { type : 'a', subTypeConstructor : KalturaSlimAsset, subType : 'KalturaSlimAsset' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetPersonalMarkupSearchFilter'] = KalturaAssetPersonalMarkupSearchFilter;