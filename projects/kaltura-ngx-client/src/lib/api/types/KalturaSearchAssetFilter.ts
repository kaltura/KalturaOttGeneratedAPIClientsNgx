
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSearchAssetFilter, KalturaBaseSearchAssetFilterArgs } from './KalturaBaseSearchAssetFilter';

export interface KalturaSearchAssetFilterArgs  extends KalturaBaseSearchAssetFilterArgs {
    typeIn? : string;
}


export class KalturaSearchAssetFilter extends KalturaBaseSearchAssetFilter {

    typeIn : string;

    constructor(data? : KalturaSearchAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchAssetFilter' },
				typeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchAssetFilter'] = KalturaSearchAssetFilter;